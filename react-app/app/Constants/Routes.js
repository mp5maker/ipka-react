import { reduce, keys } from 'lodash'

const prefix = ""

const routes = {
    root: '/',
    userList: '/users',
    userDetails: '/user/:id'
}

const Routes = reduce(keys(routes), (newObj, path) => {
    return { ...newObj, [path]: prefix + routes[path] }
}, {})
export { Routes }