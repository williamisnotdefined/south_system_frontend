import React, { useContext } from 'react'

import { AuthContext } from '@containers/Auth'
import { Creators as AuthActions } from '@containers/Auth/actionsCreators'

import PageTitle from '@components/PageTitle'
import { Form, Button } from '@components/Form'
import Input from '@components/Input'

import { Container } from './styles'

export default function Login() {
    const { state, dispatch, authenticateUser } = useContext(AuthContext)

    const onChangeUser = e => dispatch(AuthActions.setUser(e.target.value))

    const onChangePassword = e => dispatch(AuthActions.setPassword(e.target.value))

    const onSubmit = e => {
        e.preventDefault()
        authenticateUser()
    }

    return (
        <Container>
            <PageTitle>Login</PageTitle>
            <Form onSubmit={onSubmit}>
                <Input
                    value={state.user}
                    name="user"
                    onChange={onChangeUser}
                    placeholder="Type your user.."
                />

                <Input
                    type="password"
                    value={state.password}
                    name="password"
                    onChange={onChangePassword}
                    placeholder="Type your password.."
                />

                <Button loading={state.loading}>Entrar</Button>
            </Form>
        </Container>
    )
}
