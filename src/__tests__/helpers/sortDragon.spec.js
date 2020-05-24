import sortDragons from '../../helpers/sortDragon'

describe('Helper dragons', () => {
    it('should be sort dragons', () => {
        const initialDragons = [
            {
                id: '0',
                name: 'Red Dragon'
            },
            {
                id: '1',
                name: 'Green Dragon'
            }
        ]

        const afterSortDragons = [
            {
                id: '1',
                name: 'Green Dragon'
            },
            {
                id: '0',
                name: 'Red Dragon'
            }
        ]

        const sortedDragons = sortDragons(initialDragons)

        expect(sortedDragons[0].name).toBe(afterSortDragons[0].name)
        expect(sortedDragons[0].id).toBe(afterSortDragons[0].id)
        expect(sortedDragons[1].name).toBe(afterSortDragons[1].name)
        expect(sortedDragons[0].id).toBe(afterSortDragons[0].id)
    })
})
