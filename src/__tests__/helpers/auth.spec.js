import {
    isAuthenticated,
    getUser,
    setUserSession,
    removeUser,
    USER_FAKE,
    PASSWORD_FAKE,
    USER_TOKEN
} from '@helpers/auth'

describe('Helper auth', () => {
    it('should be able to getUser', () => {
        const getItemMock = jest.fn().mockReturnValue(JSON.stringify(USER_FAKE))

        global.localStorage.__proto__.getItem = getItemMock

        const username = getUser(USER_FAKE)

        expect(username).toBe(USER_FAKE)
        expect(getItemMock).toHaveBeenLastCalledWith(USER_FAKE)
    })

    it('should be able to verify if is authenticated', () => {
        const getItemMock = jest.fn().mockReturnValue(JSON.stringify(PASSWORD_FAKE))

        global.localStorage.__proto__.getItem = getItemMock

        const tokenStored = isAuthenticated()

        expect(tokenStored).toBe(PASSWORD_FAKE)
    })

    it('should be able to verify if is not authenticated', () => {
        const getItemMock = jest.fn().mockReturnValue(JSON.stringify('WRONG'))

        global.localStorage.__proto__.getItem = getItemMock

        const authenticated = isAuthenticated()

        expect(authenticated).toBe(false)
    })

    it('should be able to remove user', () => {
        const removeItemMock = jest.fn()

        global.localStorage.__proto__.removeItem = removeItemMock

        removeUser()

        expect(removeItemMock.mock.calls.length).toBe(2)
        expect(removeItemMock).toHaveBeenCalledWith(USER_TOKEN)
        expect(removeItemMock).toHaveBeenCalledWith(USER_FAKE)
    })

    it('should be able to set user session', () => {
        const setItemMock = jest.fn()

        global.localStorage.__proto__.setItem = setItemMock

        setUserSession(USER_TOKEN, USER_FAKE)

        expect(setItemMock.mock.calls.length).toBe(2)
        expect(setItemMock).toHaveBeenCalledWith('dragon_token', JSON.stringify(USER_TOKEN))
        expect(setItemMock).toHaveBeenCalledWith('user', JSON.stringify(USER_FAKE))
    })
})
