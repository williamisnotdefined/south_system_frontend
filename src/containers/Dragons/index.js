import React, { createContext, useReducer, useCallback } from 'react'
import PropTypes from 'prop-types'

import sortDragons from '@helpers/sortDragon'

import * as request from './api'

const initialState = {
    dragons: [],
    firstLoad: true,
    loadingList: false,
    saving: false
}

const DragonContext = createContext(initialState)

const Actions = {
    LOAD_DRAGONS: '@Dragons/LOAD_DRAGONS',
    LOADED_DRAGONS: '@Dragons/LOADED_DRAGONS',

    ADD_DRAGON: '@Dragons/ADD_DRAGON',
    EDIT_DRAGON: '@Dragons/EDIT_DRAGON',
    REMOVE_DRAGON: '@Dragons/REMOVE_DRAGON',

    SET_SAVING_DRAGON: '@Dragons/SET_SAVING_DRAGON',
    UNSET_SAVING_DRAGON: '@Dragons/UNSET_SAVING_DRAGON'
}

const Creators = {
    loadingDragons: () => ({ type: Actions.LOAD_DRAGONS }),
    loadedDragons: dragons => ({ type: Actions.LOADED_DRAGONS, payload: dragons }),

    removeDragon: dragonId => ({ type: Actions.REMOVE_DRAGON, payload: dragonId }),
    addDragon: dragon => ({ type: Actions.ADD_DRAGON, payload: dragon }),
    editDragon: dragon => ({ type: Actions.EDIT_DRAGON, payload: dragon }),

    setSavingDragon: () => ({ type: Actions.SET_SAVING_DRAGON }),
    unsetSavingDragon: () => ({ type: Actions.UNSET_SAVING_DRAGON })
}

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

export { Creators, DragonContext, DragonsProvider }
