import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { act } from 'react-dom/test-utils'
import waitForExpect from 'wait-for-expect'

import { ThemeProvider } from 'styled-components'
import { theme } from '@styles'

import { AuthContext, initialState, reducer } from '@containers/Auth'
import { Creators } from '@containers/Auth/actionsCreators'
import { authenticateUser } from '@containers/Auth/api'
import Login from '@pages/Login'

Enzyme.configure({ adapter: new Adapter() })

const getLoginForm = contextValue => {
    return mount(
        <ThemeProvider theme={theme}>
            <AuthContext.Provider value={{ ...contextValue }}>
                <Login />
            </AuthContext.Provider>
        </ThemeProvider>
    )
}

describe('Container Auth', () => {
    it('should be able to call set user action', () => {
        const dispatch = jest.fn()
        const login = getLoginForm({ state: initialState, dispatch })

        login.find('input[name="user"]').simulate('change', { target: { value: 'username' } })

        expect(dispatch).toBeCalledWith(Creators.setUser('username'))
    })

    it('should set user in reduce state', () => {
        const newState = reducer(initialState, Creators.setUser('william'))
        expect(newState.user).toEqual('william')
    })

    it('should be able to call set password action', () => {
        const dispatch = jest.fn()
        const login = getLoginForm({ state: initialState, dispatch })

        login
            .find('input[name="password"]')
            .simulate('change', { target: { value: 'user_password' } })

        expect(dispatch).toBeCalledWith(Creators.setPassword('user_password'))
    })

    it('should set password in reduce state', () => {
        const newState = reducer(initialState, Creators.setPassword('123456'))
        expect(newState.password).toEqual('123456')
    })

    it('should be able to handle success auth with correct credentials', async () => {
        const state = {
            ...initialState,
            user: 'user',
            password: '123456'
        }

        const dispatch = jest.fn()

        const contextValue = {
            state,
            dispatch,
            authenticateUser: async () =>
                await authenticateUser(dispatch, state.user, state.password)
        }

        const login = getLoginForm(contextValue)
        await act(async () => login.find('form').simulate('submit'))

        await waitForExpect(() => {
            expect(dispatch).toHaveBeenNthCalledWith(1, Creators.handleAuth())
            expect(dispatch).toHaveBeenNthCalledWith(2, Creators.handleAuthSuccess())
        })
    })

    it('should be able to handle failure auth with wrong credentials', async () => {
        const state = {
            ...initialState,
            user: 'WRONG_USER',
            password: 'WRONG_PWD'
        }

        const dispatch = jest.fn()

        const contextValue = {
            state,
            dispatch,
            authenticateUser: async () =>
                await authenticateUser(dispatch, state.user, state.password)
        }

        const login = getLoginForm(contextValue)
        await act(async () => login.find('form').simulate('submit'))

        await waitForExpect(() => {
            expect(dispatch).toHaveBeenNthCalledWith(1, Creators.handleAuth())
            expect(dispatch).toHaveBeenNthCalledWith(2, Creators.handleAuthFailure())
        })
    })
})
