import React from 'react'

import useWindowSize from '@services/hooks/useWindowSize'

import MenuDesktop from './Desktop'
import MenuMobile from './Mobile'

const Menu = () => {
    const { width } = useWindowSize()

    if (width > 720) {
        return <MenuDesktop />
    }

    return <MenuMobile />
}

export default Menu
