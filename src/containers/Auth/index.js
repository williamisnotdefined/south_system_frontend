import React, { createContext, useReducer } from 'react'

import history from '@services/history'
import * as toastify from '@services/toastify'
import { setUserSession } from '@helpers/auth'

import fakeAsyncLogin from './fakeAsyncLogin'

const initialState = {
    user: '',
    password: '',
    loading: false
}

const AuthContext = createContext(initialState)

const Actions = {
    SET_USER: '@Auth/SET_USER',
    SET_PASSWORD: '@Auth/SET_PASSWORD',

    HANDLE_AUTH: '@Auth/HANDLE_AUTH',
    HANDLE_AUTH_SUCCESS: '@Auth/HANDLE_AUTH_SUCCESS',
    HANDLE_AUTH_FAILURE: '@Auth/HANDLE_AUTH_FAILURE'
}

const Creators = {
    setUser: user => ({ type: Actions.SET_USER, payload: user }),
    setPassword: pwd => ({ type: Actions.SET_PASSWORD, payload: pwd }),

    handleAuth: () => ({ type: Actions.HANDLE_AUTH }),
    handleAuthSuccess: () => ({ type: Actions.HANDLE_AUTH_SUCCESS }),
    handleAuthFailure: () => ({ type: Actions.HANDLE_AUTH_FAILURE })
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case Actions.SET_USER:
            return { ...state, user: payload }
        case Actions.SET_PASSWORD:
            return { ...state, password: payload }

        case Actions.HANDLE_AUTH:
            return { ...state, loading: true }
        case Actions.HANDLE_AUTH_SUCCESS:
            return { ...state, loading: false }
        case Actions.HANDLE_AUTH_FAILURE:
            return { ...initialState }

        default:
            return { ...state }
    }
}

function AuthProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { user, password } = state

    const authenticateUser = async () => {
        dispatch(Creators.handleAuth())

        try {
            const loggedIn = await fakeAsyncLogin(user, password)
            // there is no else to this conditions, failure will fall in catch (fake async)
            if (loggedIn) {
                setUserSession('123456', user)
                dispatch(Creators.handleAuthSuccess())
                toastify.success('Welcome!')
                history.push('/')
            }
        } catch (err) {
            dispatch(Creators.handleAuthFailure())
            toastify.error('Wrong credentials.', 3000)
        }
    }

    return (
        <AuthContext.Provider value={{ state, dispatch, authenticateUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export { Creators, AuthContext, AuthProvider }
