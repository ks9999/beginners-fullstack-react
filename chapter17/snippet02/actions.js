import {ADD, REMOVE} from './actiontypes.js'

// Action creators
export const addToList = (item) => ({type: ADD, data: item})
export const removeFromList = (item) => ({type: REMOVE, data: item})