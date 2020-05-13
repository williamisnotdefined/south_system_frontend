import React from 'react'

import { HamburgerWrapper, HamburgerLine } from './styles'

const Hamburger = ({ onClick }) => (
    <HamburgerWrapper onClick={onClick}>
        <HamburgerLine />
    </HamburgerWrapper>
)

export default Hamburger
