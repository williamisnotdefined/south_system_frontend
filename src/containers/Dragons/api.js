import api from '@services/api'
import history from '@services/history'
import * as toastify from '@services/toastify'

import { Creators } from './actionsCreators'

export async function loadDragons(dispatch) {
    dispatch(Creators.loadingDragons())

    try {
        const dragons = await api.get()
        dispatch(Creators.loadedDragons(dragons))
    } catch (err) {
        dispatch(Creators.loadedDragons([]))
        toastify.error('Error on load dragons.', 3000)
    }
}

export async function deleteDragon(dispatch, id) {
    toastify.info('Removing dragon..')

    try {
        await api.delete(`/${id}`)
        dispatch(Creators.removeDragon(id))
        toastify.clear()
        toastify.success('Dragon removed successfully.')
    } catch (err) {
        toastify.clear()
        toastify.error('Error on delete dragon.', 3000)
    }
}

export async function addDragon(dispatch, dragon) {
    dispatch(Creators.setSavingDragon())
    toastify.info('Adding dragon..')

    try {
        const newDragon = await api.post(`/`, dragon)
        dispatch(Creators.addDragon(newDragon))
        history.push('/')
        toastify.clear()
        toastify.success('Dragon removed successfully.')
    } catch (err) {
        dispatch(Creators.unsetSavingDragon())
        toastify.clear()
        toastify.error('Error on delete dragon.', 3000)
    }
}

export async function editDragon(dispatch, dragon) {
    dispatch(Creators.setSavingDragon())
    toastify.info('Adding dragon..')

    try {
        const newDragon = await api.put(`/${dragon.id}`, dragon)
        dispatch(Creators.editDragon(newDragon))
        history.push('/')
        toastify.clear()
        toastify.success('Dragon edited successfully.')
    } catch (err) {
        dispatch(Creators.unsetSavingDragon())
        toastify.clear()
        toastify.error('Error on edit dragon.', 3000)
    }
}

export async function loadDragon(dragonId) {
    try {
        return await api.get(`/${dragonId}`)
    } catch (err) {
        history.push('/')
        toastify.error('Error on load dragon.', 3000)
    }
}
