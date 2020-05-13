import { setItem, getItem, removeItem } from './localStorage'

const token = 'dragon_token'
const user = 'user'

export const removeUser = () => {
    removeItem(token)
    removeItem(user)
}

export const isAuthenticated = () => {
    const tokenStorage = getItem(token)

    if (tokenStorage) {
        if (tokenStorage === '123456') {
            return tokenStorage
        }

        removeUser()
    }

    return null
}

export const getUser = () => getItem(user)

export const setUserSession = (tokenValue, userValue) => {
    setItem(token, tokenValue)
    setItem(user, userValue)
}
