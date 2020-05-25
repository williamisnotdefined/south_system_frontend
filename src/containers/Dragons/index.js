import React, { createContext, useReducer, useCallback } from 'react'
import PropTypes from 'prop-types'

import sortDragons from '@helpers/sortDragon'

import * as request from './api'
import { Actions } from './actionsCreators'

const initialState = {
    dragons: [],
    firstLoad: true,
    loadingList: false,
    saving: false
}

const DragonContext = createContext(initialState)

const reducer = (state, { type, payload }) => {
    switch (type) {
        case Actions.LOAD_DRAGONS:
            return { ...state, loadingList: true }
        case Actions.LOADED_DRAGONS:
            const sortedDragons = sortDragons(payload)
            return { ...state, dragons: sortedDragons, loadingList: false, firstLoad: false }

        case Actions.ADD_DRAGON:
            const allDragons = [...state.dragons, payload]
            const sortedDragonsAdded = sortDragons(allDragons)
            return { ...state, dragons: sortedDragonsAdded, saving: false }

        case Actions.EDIT_DRAGON:
            const dragonsWithoutOld = state.dragons.filter(dragon => dragon.id !== payload.id)
            const dragonsWithEdited = [...dragonsWithoutOld, payload]
            const sortedDragonsEdited = sortDragons(dragonsWithEdited)
            return { ...state, dragons: sortedDragonsEdited, saving: false }

        case Actions.REMOVE_DRAGON:
            const dragons = state.dragons.filter(dragon => dragon.id !== payload)
            return { ...state, dragons }

        case Actions.SET_SAVING_DRAGON:
            return { ...state, saving: true }
        case Actions.UNSET_SAVING_DRAGON:
            return { ...state, saving: false }

        default:
            return { ...state }
    }
}

function DragonsProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    const loadDragons = useCallback(() => request.loadDragons(dispatch), [])
    const deleteDragon = useCallback(dragonId => request.deleteDragon(dispatch, dragonId), [])
    const addDragon = useCallback(dragon => request.addDragon(dispatch, dragon), [])
    const editDragon = useCallback(dragon => request.editDragon(dispatch, dragon), [])
    const loadDragonById = useCallback(dragonId => request.loadDragon(dragonId), [])

    const valueProvider = {
        state,
        dispatch,
        loadDragons,
        deleteDragon,
        addDragon,
        editDragon,
        loadDragonById
    }

    return <DragonContext.Provider value={valueProvider}>{children}</DragonContext.Provider>
}

DragonsProvider.propTypes = {
    children: PropTypes.node
}

export { DragonContext, DragonsProvider, initialState, reducer }
