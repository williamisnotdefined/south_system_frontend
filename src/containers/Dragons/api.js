import api from '@services/api'

import { Creators } from './index'
import * as toastify from '@services/toastify'

export async function loadDragons(dispatch) {
    dispatch(Creators.loadingDragons())

    try {
        const dragons = await api.get()
        dispatch(Creators.loadedDragons(dragons))
    } catch (err) {
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
