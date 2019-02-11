import axios from '../Api/axios'

// Fake Rest Api
const JsonServer = "http://localhost:3000"
const ApiHelper = {
    getUserList: () => axios.get(`${JsonServer}/users`),
    getUserDetail: ({id}) => axios.get(`${JsonServer}/users/${id}`),
}

export { ApiHelper }