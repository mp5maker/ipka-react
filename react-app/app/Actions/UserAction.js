import { ActionList } from '../Constants/ActionList'
import { ApiHelper } from '../Api/Routes'


const UserListAction = () => (dispatch) => {
    ApiHelper.getUserList()
    .then((response) => {
        dispatch({
            type: ActionList.userListAction,
            payload: response.data,
            error: false,
            loading: false,
        })
    })
    .catch((error) => {
        dispatch({
            type: ActionList.userListAction,
            payload: [],
            error: error.response,
            loading: false
        })
    })
}

const UserDetailsAction = ({id}) => (dispatch) => {
    ApiHelper.getUserDetail({id})
    .then((response) => {
        dispatch({
            type: ActionList.userDetailsAction,
            payload: response.data,
            error: false,
            loading: false,
        })
    })
    .catch((error) => {
        dispatch({
            type: ActionList.userDetailsAction,
            payload: error.response,
            error: false,
            loading: false,
        })
    })
}

export { UserListAction, UserDetailsAction }