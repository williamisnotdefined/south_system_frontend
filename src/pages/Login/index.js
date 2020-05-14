import React, { useContext } from 'react'

import { Creators as AuthActions, AuthContext } from '@containers/Auth'

import PageTitle from '@components/PageTitle'
import { Form, Submit } from '@components/Form'
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

                <Submit loading={state.loading}>Entrar</Submit>
            </Form>
        </Container>
    )
}
