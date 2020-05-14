import history from '@services/history'
import * as toastify from '@services/toastify'

import { setUserSession } from '@helpers/auth'
import { USER_FAKE, PASSWORD_FAKE } from '@helpers/auth'

import { Creators } from './actionsCreators'

function fakeAsyncLogin(user, password) {
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            if (user === USER_FAKE && password === PASSWORD_FAKE) {
                resolve(true)
            }
            reject(false)
        }, 1000)
    )
}

export async function authenticateUser(dispatch, user, password) {
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
