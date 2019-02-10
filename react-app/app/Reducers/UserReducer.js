import { InitState } from '../Constants/DefaultReducerState'
import { ActionList } from '../Constants/ActionList'

const UserReducer = (state=InitState, action) => {
    switch(action.type) {
        case ActionList.userListAction:
            return state
        case ActionList.userCreateAction:
            return state
        case ActionList.userUpdatePatchAction:
            return state
        case ActionList.userUpdatePutAction:
            return state
        case ActionList.userDeleteAction:
            return state
        default: return action
    }
}

export { UserReducer }