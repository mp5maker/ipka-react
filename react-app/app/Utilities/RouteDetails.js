import { isInteger } from 'lodash'

const RouteId = ({match}) => {
    const { isExact, params } = match
    const { id } = params
    if (isExact && isInteger(parseInt(id))) {
        return {id: id}
    }
}

export { RouteId }