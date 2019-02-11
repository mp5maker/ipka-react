import { isInteger } from 'lodash'

const RouteId = ({match, history, redirectUrl}) => {
    const { isExact, params } = match
    const { id } = params
    if (isExact && isInteger(parseInt(id))) {
        return {id: id}
    }
    return history.push(redirectUrl)
}

export { RouteId }