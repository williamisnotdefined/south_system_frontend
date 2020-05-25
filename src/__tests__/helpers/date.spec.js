import toLocaleString from '@helpers/date'

describe('Helper date', () => {
    it('it should normalize date', () => {
        expect(toLocaleString('2019-07-13T06:49:44.427Z')).toBe('7/13/2019 3:49:44 AM')
    })
})
