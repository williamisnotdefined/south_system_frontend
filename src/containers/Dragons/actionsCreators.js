export const Actions = {
    LOAD_DRAGONS: '@Dragons/LOAD_DRAGONS',
    LOADED_DRAGONS: '@Dragons/LOADED_DRAGONS',

    ADD_DRAGON: '@Dragons/ADD_DRAGON',
    EDIT_DRAGON: '@Dragons/EDIT_DRAGON',
    REMOVE_DRAGON: '@Dragons/REMOVE_DRAGON',

    SET_SAVING_DRAGON: '@Dragons/SET_SAVING_DRAGON',
    UNSET_SAVING_DRAGON: '@Dragons/UNSET_SAVING_DRAGON'
}

export const Creators = {
    loadingDragons: () => ({ type: Actions.LOAD_DRAGONS }),
    loadedDragons: dragons => ({ type: Actions.LOADED_DRAGONS, payload: dragons }),

    removeDragon: dragonId => ({ type: Actions.REMOVE_DRAGON, payload: dragonId }),
    addDragon: dragon => ({ type: Actions.ADD_DRAGON, payload: dragon }),
    editDragon: dragon => ({ type: Actions.EDIT_DRAGON, payload: dragon }),

    setSavingDragon: () => ({ type: Actions.SET_SAVING_DRAGON }),
    unsetSavingDragon: () => ({ type: Actions.UNSET_SAVING_DRAGON })
}
