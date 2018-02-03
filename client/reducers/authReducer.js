import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE
} from '../constants/actionTypes'

const initialState = {
  isAuthenticated: false,
  token: '',
  employeeName: '',
  role: '',
  isFetching: false,
  error: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...initialState,
        isFetching: true
      }
    }
    case LOG_IN_SUCCESS: {
      const { token, employeeName, role, isFetching } = action.payload
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        token,
        employeeName,
        role
      }
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }
    }
    default:
      return state
  }
}

export default authReducer
