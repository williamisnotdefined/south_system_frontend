import React, { createContext, useReducer, useCallback } from 'react'

import sortDragons from '@helpers/sortDragon'

import * as dragonRequest from './api'

const initialState = {
    dragons: [],
    loadingList: false
}

const DragonContext = createContext(initialState)

const Actions = {
    LOAD_DRAGONS: '@Dragons/LOAD_DRAGONS',
    LOADED_DRAGONS: '@Dragons/LOADED_DRAGONS',

    ADD_DRAGON: '@Dragons/ADD_DRAGON',

    REMOVE_DRAGON: '@Dragons/REMOVE_DRAGON'
}

const Creators = {
    loadingDragons: () => ({ type: Actions.LOAD_DRAGONS }),
    loadedDragons: dragons => ({ type: Actions.LOADED_DRAGONS, payload: dragons }),
    removeDragon: dragonId => ({ type: Actions.REMOVE_DRAGON, payload: dragonId }),
    addDragon: dragon => ({ type: Actions.ADD_DRAGON, payload: dragon })
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case Actions.LOAD_DRAGONS:
            return { ...state, loadingList: true }
        case Actions.LOADED_DRAGONS:
            const sortedDragons = sortDragons(payload)
            return { dragons: sortedDragons, loadingList: false }

        case Actions.ADD_DRAGON:
            const allDragons = state.dragons.push(payload)
            const sortedDragonsAdded = sortDragons(allDragons)
            return { ...state, dragons: sortedDragonsAdded }

        case Actions.REMOVE_DRAGON:
            const dragons = state.dragons.filter(dragon => dragon.id !== payload)
            return { ...state, dragons }

        default:
            return { ...state }
    }
}

function DragonsProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const loadDragons = useCallback(() => dragonRequest.loadDragons(dispatch), [])
    const deleteDragon = useCallback(dragonId => dragonRequest.deleteDragon(dispatch, dragonId), [])

    return (
        <DragonContext.Provider value={{ state, dispatch, loadDragons, deleteDragon }}>
            {props.children}
        </DragonContext.Provider>
    )
}
export { Creators, DragonContext, DragonsProvider }
