import React, { useState, useContext } from 'react'

import { DragonContext } from '@containers/Dragons'
import PageTitle from '@components/PageTitle'
import { Form, Button } from '@components/Form'
import Input from '@components/Input'
import Loader from '@components/Loader'

import { Container, LoaderWrapper } from './styles'

export default function Dragon({ match }) {
    const { state, addDragon } = useContext(DragonContext)

    const dragonId = match.params.id
    const title = dragonId ? 'Editing Dragon' : 'Creating Dragon'

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [createdAt, setCreatedAt] = useState('')
    const [fetchingDragon, setFetchingDragon] = useState(!!dragonId)

    const onSubmit = e => {
        e.preventDefault()
        if (dragonId) {
        } else {
            addDragon({ name, type })
        }
    }

    return (
        <Container>
            <PageTitle>{title}</PageTitle>

            {fetchingDragon ? (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            ) : (
                <Form onSubmit={onSubmit}>
                    <Input
                        value={name}
                        name="user"
                        onChange={e => setName(e.target.value)}
                        placeholder="Type dragon name.."
                    />

                    <Input
                        value={type}
                        name="kind"
                        onChange={e => setType(e.target.value)}
                        placeholder="Type dragon kind.."
                    />

                    {dragonId && <Input value={createdAt} name="createAt" disabled />}

                    <Button loading={state.saving}>Entrar</Button>
                </Form>
            )}
        </Container>
    )
}
