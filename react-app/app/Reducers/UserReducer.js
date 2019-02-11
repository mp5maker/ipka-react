import { InitState } from '../Constants/DefaultReducerState'
import { ActionList } from '../Constants/ActionList'

const UserReducer = (state=InitState, action) => {
    switch(action.type) {
        case ActionList.userListAction:
            return action
        case ActionList.userDetailsAction:
            return action
        default: return state
    }
}

export { UserReducer }