import React from 'react'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'

import { theme } from '@styles'
import { DragonContext, initialState } from '@containers/Dragons'
import DragonList from '@pages/DragonList'

import axios from 'axios'

jest.mock('axios')

describe('Testing Dragon List Page Render', () => {
    it('should render correctly', async () => {
        const apiDragons = await axios.get()

        const contextValue = { state: { ...initialState, dragons: apiDragons, firstLoad: false } }
        const list = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <DragonContext.Provider value={contextValue}>
                        <DragonList />
                    </DragonContext.Provider>
                </ThemeProvider>
            )
            .toJSON()

        expect(list).toMatchSnapshot()
    })
})
