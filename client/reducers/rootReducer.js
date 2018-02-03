import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './authReducer'
import { LOGOUT } from '../constants/actionTypes'

const appReducer = combineReducers({
  auth: authReducer,
  form: formReducer
})

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
