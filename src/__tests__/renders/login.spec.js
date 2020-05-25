import React from 'react'
import renderer from 'react-test-renderer'

import { ThemeProvider } from 'styled-components'
import { theme } from '@styles'

import ContextContainer from '@containers'
import Login from '@pages/Login'

describe('Testing Login Page Render', () => {
    it('should render correctly', () => {
        const loginPage = renderer
            .create(
                <ThemeProvider theme={theme}>
                    <ContextContainer>
                        <Login />
                    </ContextContainer>
                </ThemeProvider>
            )
            .toJSON()

        expect(loginPage).toMatchSnapshot()
    })
})
