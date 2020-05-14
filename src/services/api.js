import axios from 'axios'

const api = axios.create({
    baseURL: process.env.DRAGONS_API,
    delay: 2000
})

api.interceptors.response.use(response => response.data)

export default api
