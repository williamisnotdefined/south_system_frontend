import { setItem, getItem, removeItem } from '../../helpers/localStorage'

describe('Helper storage', () => {
    it('should be able set item in local storage', () => {
        const setItemMock = jest.fn()

        global.localStorage.__proto__.setItem = setItemMock

        setItem('item_key', 'item_value')

        expect(setItemMock).toHaveBeenLastCalledWith('item_key', JSON.stringify('item_value'))
    })

    it('should be able get item in local storage', () => {
        const mockValue = JSON.stringify('item_value')
        const getItemMock = jest.fn().mockReturnValue(mockValue)

        global.localStorage.__proto__.getItem = getItemMock

        getItem('item_key')

        expect(getItemMock.mock.results[0].value).toBe(mockValue)
    })

    it('should be able remove item in local storage', () => {
        const removeItemMock = jest.fn()

        global.localStorage.__proto__.removeItem = removeItemMock

        removeItem('token')

        expect(removeItemMock).toHaveBeenLastCalledWith('token')
        expect(removeItemMock.mock.calls.length).toBe(1)
    })
})
