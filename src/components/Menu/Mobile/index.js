import React, { useState, useCallback } from 'react'

import { Container, DragonLogo } from '../styles'
import Hamburger from './Hamburger'
import MobileModal from './MobileModal'

import dragonLogo from '@images/dragon.gif'

const MenuDesktop = () => {
    const [isOpenModal, setOpenModal] = useState(false)

    const openModal = useCallback(() => {
        setOpenModal(true)
    }, [])

    const closeModal = useCallback(() => {
        setOpenModal(false)
    }, [])

    return (
        <Container>
            <DragonLogo src={dragonLogo} />
            <Hamburger onClick={openModal} />
            <MobileModal isOpen={isOpenModal} closeModal={closeModal} />
        </Container>
    )
}

export default MenuDesktop
