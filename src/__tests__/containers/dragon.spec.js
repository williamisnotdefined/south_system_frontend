import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { act } from 'react-dom/test-utils'
import waitForExpect from 'wait-for-expect'

import { ThemeProvider } from 'styled-components'

import { theme } from '@styles'
import { DragonContext, initialState, reducer } from '@containers/Dragons'
import { Creators } from '@containers/Dragons/actionsCreators'
import * as request from '@containers/Dragons/api'
import DragonList from '@pages/DragonList'
import DragonForm from '@pages/Dragon'
import axios from 'axios'

jest.mock('axios')

Enzyme.configure({ adapter: new Adapter() })

const getDragonList = contextValue => {
    return mount(
        <ThemeProvider theme={theme}>
            <DragonContext.Provider value={{ ...contextValue }}>
                <DragonList />
            </DragonContext.Provider>
        </ThemeProvider>
    )
}

const getDragonForm = contextValue => {
    return mount(
        <ThemeProvider theme={theme}>
            <DragonContext.Provider value={{ ...contextValue }}>
                <DragonForm match={{ params: { id: 0 } }} />
            </DragonContext.Provider>
        </ThemeProvider>
    )
}

describe('Container Dragon - DragonList', () => {
    it('should be able to call action load dragons', async () => {
        const apiDragons = await axios.get()
        const dispatch = jest.fn()

        const loadDragons = () => request.loadDragons(dispatch)

        getDragonList({ state: initialState, dispatch, loadDragons })

        await waitForExpect(() => {
            expect(dispatch).toHaveBeenNthCalledWith(1, Creators.loadingDragons())
            expect(dispatch).toHaveBeenNthCalledWith(2, Creators.loadedDragons(apiDragons))
        })
    })

    it('should be able to set dragons in state', async () => {
        const apiDragons = await axios.get()
        let newState = reducer(initialState, Creators.loadedDragons(apiDragons))
        expect(newState.dragons.length).toBe(apiDragons.length)
    })

    it('should be able to call action delete dragon', async () => {
        const apiDragons = await axios.get()

        const dispatch = jest.fn()

        const deleteDragon = id => request.deleteDragon(dispatch, id)
        const loadDragons = () => request.loadDragons(dispatch)

        const list = getDragonList({
            state: { ...initialState, firstLoad: false, dragons: apiDragons },
            dispatch,
            deleteDragon,
            loadDragons
        })

        await act(async () => list.find('ul li').first().find('button').simulate('click'))

        expect(dispatch).toBeCalledWith(Creators.removeDragon(0))
    })

    it('should be able to remove a dragon from state', async () => {
        const apiDragons = await axios.get()

        let newState = reducer(initialState, Creators.loadedDragons(apiDragons))
        newState = reducer(newState, Creators.removeDragon(0))

        expect(newState.dragons.length).toBe(apiDragons.length - 1)
    })
})

describe('Container Dragon - Create', () => {
    it('should be able to call add dragon action', async () => {
        const dispatch = jest.fn()

        const addDragon = dragon => request.addDragon(dispatch, dragon)

        const form = getDragonForm({ state: initialState, dispatch, addDragon })

        form.find('input[name="name"]').simulate('change', { target: { value: '_D Dragon' } })
        form.find('input[name="kind"]').simulate('change', { target: { value: 'K-Drag' } })

        await act(async () => form.find('form').simulate('submit'))

        await waitForExpect(() => {
            expect(dispatch).toHaveBeenNthCalledWith(1, Creators.setSavingDragon())
            expect(dispatch).toHaveBeenNthCalledWith(
                2,
                Creators.addDragon({
                    createdAt: '2020-05-24T09:45:33.595Z',
                    id: 2,
                    name: '_D Dragon',
                    type: 'K-Drag'
                })
            )
        })
    })
})
