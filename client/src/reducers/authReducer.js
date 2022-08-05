import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  SHOW_ME_SUCCESS,
  SHOW_ME_ERROR,
  SHOW_ME_BEGIN,
  LOGOUT_USER_BEGIN,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
} from '../actions/authActions.js'

const reducer = (state, action) => {
  if (action.type === REGISTER_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === REGISTER_USER_SUCCESS) {

    return {
      ...state,     
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Created! Now you can login',
    }
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Logged in! Redirecting... ',
    }
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  if (action.type === SHOW_ME_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === SHOW_ME_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
    }
  }

  if (action.type === SHOW_ME_ERROR) {
    return {
      ...state,
      isLoading: false,
      user: null,
    }
  }

  if (action.type === LOGOUT_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === LOGOUT_USER_SUCCESS) {
    return {
      ...state,
      user: null,
      isLoading: false,
    }
  }
  if (action.type === LOGOUT_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
    }
  }

  throw new Error(`no such action :${action.type}`)
}

export default reducer
