import {
  GET_ALL_USERS_BEGIN,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_ERROR,
  GET_SINGLE_USER_BEGIN,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR,
  DELETE_USER_BEGIN,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  UPDATE_USER_BY_ADMIN_BEGIN,
  UPDATE_USER_BY_ADMIN_SUCCESS,
  UPDATE_USER_BY_ADMIN_ERROR,
} from '../actions/usersActions'

const reducer = (state, action) => {
  if (action.type === GET_ALL_USERS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === GET_ALL_USERS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      users: action.payload.users,
    }
  }

  if (action.type === GET_ALL_USERS_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: action.payload.msg,
    }
  }

  if (action.type === GET_SINGLE_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === GET_SINGLE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      singleUser: action.payload.user,
    }
  }

  if (action.type === GET_SINGLE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: action.payload.msg,
    }
  }

  if (action.type === DELETE_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === DELETE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    }
  }

  if (action.type === DELETE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: action.payload.msg,
    }
  }

  if (action.type === UPDATE_USER_BY_ADMIN_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === UPDATE_USER_BY_ADMIN_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: 'DONE',
    }
  }

  if (action.type === UPDATE_USER_BY_ADMIN_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  throw new Error(`no such action :${action.type}`)
}

export default reducer
