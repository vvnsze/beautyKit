/**
 * aggregate of all reducer modules.
 */
import { combineReducers } from 'redux'
import UserReducer from './user'

const RootReducer = combineReducers({ UserReducer })


export default RootReducer
