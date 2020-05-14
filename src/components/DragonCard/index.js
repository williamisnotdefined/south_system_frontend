import React, { useContext } from 'react'

import history from '@services/history'
import { DragonContext } from '@containers/Dragons'

import { DragonCard as DragonCardStyle, DragonImage, Name, Type, DeleteButton } from './styles'

import DragonLord from '@images/dragon_lord.gif'

const DragonCard = ({ dragon }) => {
    const { deleteDragon } = useContext(DragonContext)

    const deleteHandle = e => {
        e.preventDefault()
        e.stopPropagation()

        deleteDragon(dragon.id)
    }

    return (
        <DragonCardStyle onClick={() => history.push(`/dragon/${dragon.id}`)}>
            <DragonImage src={DragonLord} />
            <Name>{dragon.name}</Name>
            <Type>{dragon.type}</Type>
            <DeleteButton onClick={deleteHandle}>X</DeleteButton>
        </DragonCardStyle>
    )
}

export default DragonCard
