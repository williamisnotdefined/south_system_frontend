import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API,
    delay: 1000
})

api.interceptors.response.use(response => response.data)

export default api
