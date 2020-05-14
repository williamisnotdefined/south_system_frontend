import React, { createContext, useReducer, useCallback } from 'react'
import PropTypes from 'prop-types'

import * as AuthRequest from './api'

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

function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { user, password } = state

    const authenticateUser = useCallback(
        () => AuthRequest.authenticateUser(dispatch, user, password),
        [user, password]
    )

    return (
        <AuthContext.Provider value={{ state, dispatch, authenticateUser }}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node
}
export { Creators, AuthContext, AuthProvider }
