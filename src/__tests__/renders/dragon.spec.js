import React from 'react'
import { render, wait } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { theme } from '@styles'
import ContextContainer from '@containers'
import DragonForm from '@pages/Dragon'

const formEdit = () => (
    <ThemeProvider theme={theme}>
        <ContextContainer>
            <DragonForm match={{ params: { id: '0' } }} />
        </ContextContainer>
    </ThemeProvider>
)

const formNew = () => (
    <ThemeProvider theme={theme}>
        <ContextContainer>
            <DragonForm match={{ params: { id: null } }} />
        </ContextContainer>
    </ThemeProvider>
)

describe('Testing Dragon Form Page Render', () => {
    it('should render correctly edit form after load dragon', async () => {
        const form = render(formEdit())
        await wait(() => expect(form).toMatchSnapshot())
    })

    it('should render correctly create form after load dragon', async () => {
        const form = render(formNew())
        await wait(() => expect(form).toMatchSnapshot())
    })
})
