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
      isLoadingAuth: true,
    }
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoadingAuth: false,
      showAlertAuth: true,
      alertTypeAuth: 'success',
      alertTextAuth: 'User Created! Redirecting...',
    }
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoadingAuth: false,
      showAlertAuth: true,
      alertTypeAuth: 'danger',
      alertTextAuth: action.payload.msg,
    }
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoadingAuth: true,
    }
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      isLoadingAuth: false,
      showAlertAuth: true,
      alertTypeAuth: 'success',
      alertTextAuth: 'User Logged in! Redirecting... ',
    }
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoadingAuth: false,
      showAlertAuth: true,
      alertTypeAuth: 'danger',
      alertTextAuth: action.payload.msg,
    }
  }

  if (action.type === SHOW_ME_BEGIN) {
    return {
      ...state,
      isLoadingAuth: true,
    }
  }

  if (action.type === SHOW_ME_SUCCESS) {
    return {
      ...state,
      isLoadingAuth: false,
      user: action.payload.user,
    }
  }

  if (action.type === SHOW_ME_ERROR) {
    return {
      ...state,
      isLoadingAuth: false,
      user: null,
    }
  }

  if (action.type === LOGOUT_USER_BEGIN) {
    return {
      ...state,
      isLoadingAuth: true,
    }
  }
  if (action.type === LOGOUT_USER_SUCCESS) {
    return {
      ...state,
      user: null,
      isLoadingAuth: false,
    }
  }
  if (action.type === LOGOUT_USER_ERROR) {
    return {
      ...state,
      isLoadingAuth: false,
    }
  }

  throw new Error(`no such action :${action.type}`)
}

export default reducer
