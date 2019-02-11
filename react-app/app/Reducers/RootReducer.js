import { combineReducers } from 'redux'
import { UserReducer } from '../Reducers/UserReducer'

const RootReducer = combineReducers({
    user: UserReducer
})

export { RootReducer }