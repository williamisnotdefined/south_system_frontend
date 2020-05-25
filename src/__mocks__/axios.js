const mockAxios = jest.genMockFromModule('axios')
mockAxios.create = jest.fn(() => mockAxios)

mockAxios.get = async param => {
    if (param) {
        return Promise.resolve({
            id: 0,
            name: 'Green Dragon',
            type: 'Green',
            createdAt: '2020-05-24T09:45:33.595Z'
        })
    }

    return Promise.resolve([
        {
            id: 0,
            name: 'Green Dragon',
            type: 'Green',
            createdAt: '2020-05-24T09:45:33.595Z'
        },
        {
            id: 1,
            name: 'Dragon Lord',
            type: 'Red',
            createdAt: '2020-05-24T09:45:33.595Z'
        }
    ])
}

mockAxios.post = async (q, { name, type }) =>
    Promise.resolve({
        id: 2,
        name,
        type,
        createdAt: '2020-05-24T09:45:33.595Z'
    })

mockAxios.delete = async ({ name, type }) =>
    Promise.resolve({
        id: 1,
        name,
        type,
        createdAt: '2020-05-24T09:45:33.595Z'
    })

mockAxios.put = async ({ name, type }) =>
    Promise.resolve({
        id: 1,
        name,
        type,
        createdAt: '2020-05-24T09:45:33.595Z'
    })

export default mockAxios
