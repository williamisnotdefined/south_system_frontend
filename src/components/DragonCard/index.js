import React, { useContext } from 'react'

import { DragonContext } from '@containers/Dragons'

import { DragonCard as DragonCardStyle, DragonImage, Name, Type, DeleteButton } from './styles'

import DragonLord from '@images/dragon_lord.gif'

const DragonCard = ({ dragon }) => {
    const { deleteDragon } = useContext(DragonContext)

    return (
        <DragonCardStyle>
            <DragonImage src={DragonLord} />
            <Name>{dragon.name}</Name>
            <Type>{dragon.type}</Type>
            <DeleteButton onClick={() => deleteDragon(dragon.id)}>X</DeleteButton>
        </DragonCardStyle>
    )
}

export default DragonCard
