import axios from 'axios'
import { API } from './api'

axios.defaults.baseURL = API
axios.defaults.timeout = 1000
axios.defaults.withCredentials = true
axios.defaults.transformRequest = [(data) => JSON.stringify(data.data)]
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Acces-Control-Allow-Origin'] = '*'
axios.defaults.headers.post['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'
