import React, { useContext, useEffect } from 'react'

import { DragonContext } from '@containers/Dragons'

import PageTitle from '@components/PageTitle'
import Loader from '@components/Loader'
import DragonCard from '@components/DragonCard'

import { Container, ListWrapper, LoaderWrapper } from './styles'

export default function DragonList() {
    const { state, loadDragons } = useContext(DragonContext)
    const { dragons, loadingList, firstLoad } = state

    useEffect(() => {
        if (firstLoad) {
            loadDragons()
        }
    }, [loadDragons, firstLoad])

    return (
        <Container>
            <PageTitle>Dragon List</PageTitle>
            <ListWrapper>
                {loadingList && (
                    <LoaderWrapper>
                        <Loader />
                    </LoaderWrapper>
                )}
                {!loadingList &&
                    dragons.map((dragon, key) => <DragonCard key={key} dragon={dragon} />)}
            </ListWrapper>
        </Container>
    )
}
