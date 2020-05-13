import React from 'react'

import { MenuWrapper, DragonLogo, MenuList, MenuListItem } from './styles'

import dragonLogo from '@images/dragon.gif'

const Menu = () => {
    return (
        <MenuWrapper>
            <DragonLogo src={dragonLogo} />
            <MenuList>
                <MenuListItem>Dragon List</MenuListItem>
                <MenuListItem>Create Dragon</MenuListItem>
                <MenuListItem>Logout</MenuListItem>
            </MenuList>
        </MenuWrapper>
    )
}

export default Menu
