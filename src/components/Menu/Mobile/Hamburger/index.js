import React from 'react'
import PropTypes from 'prop-types'

import { HamburgerWrapper, HamburgerLine } from './styles'

const Hamburger = ({ onClick }) => (
    <HamburgerWrapper onClick={onClick}>
        <HamburgerLine />
    </HamburgerWrapper>
)

Hamburger.propTypes = {
    onClick: PropTypes.func
}

export default Hamburger
