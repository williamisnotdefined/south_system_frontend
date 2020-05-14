export const Actions = {
    SET_USER: '@Auth/SET_USER',
    SET_PASSWORD: '@Auth/SET_PASSWORD',

    HANDLE_AUTH: '@Auth/HANDLE_AUTH',
    HANDLE_AUTH_SUCCESS: '@Auth/HANDLE_AUTH_SUCCESS',
    HANDLE_AUTH_FAILURE: '@Auth/HANDLE_AUTH_FAILURE'
}

export const Creators = {
    setUser: user => ({ type: Actions.SET_USER, payload: user }),
    setPassword: pwd => ({ type: Actions.SET_PASSWORD, payload: pwd }),

    handleAuth: () => ({ type: Actions.HANDLE_AUTH }),
    handleAuthSuccess: () => ({ type: Actions.HANDLE_AUTH_SUCCESS }),
    handleAuthFailure: () => ({ type: Actions.HANDLE_AUTH_FAILURE })
}
