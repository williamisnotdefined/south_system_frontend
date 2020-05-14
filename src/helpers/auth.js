import { setItem, getItem, removeItem } from './localStorage'

export const USER_TOKEN = 'dragon_token'
export const USER_FAKE = 'user'
export const PASSWORD_FAKE = '123456'

export const removeUser = () => {
    removeItem(USER_TOKEN)
    removeItem(USER_FAKE)
}

export const isAuthenticated = () => {
    const tokenStorage = getItem(USER_TOKEN)

    if (tokenStorage) {
        if (tokenStorage === '123456') {
            return tokenStorage
        }
        // if token is not valid
        removeUser()
        return false
    }

    return false
}

export const getUser = () => getItem(USER_FAKE)

export const setUserSession = (tokenValue, userValue) => {
    setItem(USER_TOKEN, tokenValue)
    setItem(USER_FAKE, userValue)
}
