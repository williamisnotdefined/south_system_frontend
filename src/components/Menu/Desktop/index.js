import React from 'react'

import useAuthenticated from '@services/hooks/useAuthenticated'

import { Container, DragonLogo, List, ListItem, Anchor } from '../styles'

import dragonLogo from '@images/dragon.gif'

const MenuDesktop = () => {
    const isAuthenticated = useAuthenticated()

    return (
        <Container>
            <DragonLogo src={dragonLogo} />
            <List>
                <ListItem>
                    <Anchor exact to="/">
                        Dragon List
                    </Anchor>
                </ListItem>
                <ListItem>
                    <Anchor to="/new">Create Dragon</Anchor>
                </ListItem>
                {isAuthenticated && (
                    <ListItem>
                        <Anchor to="/logout">Logout</Anchor>
                    </ListItem>
                )}
            </List>
        </Container>
    )
}

export default MenuDesktop
