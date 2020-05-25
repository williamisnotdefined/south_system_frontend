import React, { createContext, useReducer, useCallback } from 'react'
import PropTypes from 'prop-types'

import * as AuthRequest from './api'
import { Actions } from './actionsCreators'

const initialState = {
    user: '',
    password: '',
    loading: false
}

const AuthContext = createContext(initialState)

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
export { AuthContext, AuthProvider, reducer, initialState }
