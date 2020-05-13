import React, { useState, useCallback } from 'react'

import { Container, DragonLogo } from './styles'
import Hamburger from './Hamburger'

import dragonLogo from '@images/dragon.gif'

const MenuDesktop = () => {
    const [isOpenModal, setOpenModal] = useState(false)

    const openModal = useCallback(() => {
        setOpenModal(true)
    }, [])

    return (
        <Container>
            <DragonLogo src={dragonLogo} />
            <Hamburger onClick={openModal} />
        </Container>
    )
}

export default MenuDesktop
