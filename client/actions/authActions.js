import axios from 'axios'
import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOGOUT
} from '../constants/actionTypes'
import { ENDPOINT_LOGIN } from '../constants/endpoint'
import { history } from '../routers/routes'
import { store }  from '../store/store'

const onLoginRequest = () => ({
  type: LOG_IN_REQUEST
})

const onLoginSuccess = (payload) => ({
  type: LOG_IN_SUCCESS,
  payload
})

const onLoginFailure = (payload) => ({
  type: LOG_IN_FAILURE,
  payload
})

export const loggin = formData => (dispatch) => {
  dispatch(onLoginRequest())
  setTimeout(() => {
    history.push('/dashboard')
    dispatch(onLoginSuccess({ payload: res }))
  }, 1000)
  // TODO wait for solve CORs
  // const { username, password } = formData
  // axios.post('/auth/login', { username, password })
  // .then((res) => {
  //   history.push('/dashboard')
  //   dispatch(onLoginSuccess({ payload: res }))
  // })
  // .catch((err) => {
  //   dispatch(onLoginFailure({ payload: { error: err.massage } }))
  // })
}

export const logout = () => {
  // dispatch(onLoginRequest())
  const { dispatch } = store
  dispatch({ type: LOGOUT })
 
  setTimeout(() => {
    history.push('/')
    // window.location.href = 'http://localhost:3001/' + 'dashboard';
  }, 1000)
  // dispatch(onLoginFailure())
}
