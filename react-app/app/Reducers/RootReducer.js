import { combineReducers } from 'redux'
import { UserReducer } from '../Reducers/UserReducer'

const RootReducer = combineReducers({
    users: UserReducer
})

export { RootReducer }