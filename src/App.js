import React from 'react'
import { Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { GlobalStyle, theme } from '@styles'
import history from '@services/history'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />

                <Router history={history}>oi</Router>
                <ToastContainer draggablePercent={60} autoClose={1000} />
            </>
        </ThemeProvider>
    )
}

export default App
