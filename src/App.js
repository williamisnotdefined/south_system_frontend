import React from 'react'
import { Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import ContextContainer from '@containers'

import { GlobalStyle, theme } from '@styles'

import history from '@services/history'
import MainRoutes from '@routes'
import Menu from '@components/Menu'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ContextContainer>
                <GlobalStyle />

                <Router history={history}>
                    <Menu />
                    <MainRoutes />
                </Router>

                <ToastContainer position="bottom-right" draggablePercent={60} autoClose={1000} />
            </ContextContainer>
        </ThemeProvider>
    )
}

export default App
