import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
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
  GET_ALL_USERS_BEGIN,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_ERROR,
  DISPLAY_MODAL,
  HIDE_MODAL,
  HANDLE_CHANGE,
  HANDLE_CHANGE_SELECT,
  CREATE_PROJECT_BEGIN,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_ERROR,
  GET_ALL_PROJECTS_BEGIN,
  GET_ALL_PROJECTS_SUCCESS,
  GET_ALL_PROJECTS_ERROR,
  GET_ALL_TICKETS_BEGIN,
  GET_ALL_TICKETS_SUCCESS,
  GET_ALL_TICKETS_ERROR,
  GET_SINGLE_PROJECT_BEGIN,
  GET_SINGLE_PROJECT_SUCCESS,
  GET_SINGLE_PROJECT_ERROR,
  GET_SINGLE_USER_BEGIN,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR,
  UPDATE_ADD_MEMBER_TO_PROJECT_BEGIN,
  UPDATE_ADD_MEMBER_TO_PROJECT_SUCCESS,
  UPDATE_ADD_MEMBER_TO_PROJECT_ERROR,
  CREATE_TICKET_BEGIN,
  CREATE_TICKET_SUCCESS,
  CREATE_TICKET_ERROR,
  DELETE_TICKET_BEGIN,
  DELETE_TICKET_SUCCESS,
  DELETE_TICKET_ERROR,
  GET_TICKET_BEGIN,
  GET_TICKET_SUCCESS,
  GET_TICKET_ERROR,
} from './actions'
import { initialState } from './appContext'

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please Provide all values',
    }
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
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

  if (action.type === DISPLAY_MODAL) {
    return {
      ...state,
      showModal: true,
    }
  }

  if (action.type === HIDE_MODAL) {
    return {
      ...state,
      showModal: false,
    }
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    }
  }

  if (action.type === HANDLE_CHANGE_SELECT) {
    const newProjectUsers = state.projectUsers.filter((user) => {
      return user !== action.payload.value
    })

    return {
      ...state,
      [action.payload.name]: [...newProjectUsers, action.payload.value],
    }
  }

  if (action.type === CREATE_PROJECT_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === CREATE_PROJECT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New project Created!',
    }
  }

  if (action.type === CREATE_PROJECT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  if (action.type === GET_ALL_PROJECTS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === GET_ALL_PROJECTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      projectsAll: action.payload.projects,
    }
  }

  if (action.type === GET_ALL_PROJECTS_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: action.payload.msg,
    }
  }
  if (action.type === GET_ALL_TICKETS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === GET_ALL_TICKETS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      ticketsAll: action.payload.tickets,
    }
  }

  if (action.type === GET_ALL_TICKETS_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: action.payload.msg,
    }
  }

  if (action.type === GET_SINGLE_PROJECT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === GET_SINGLE_PROJECT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      singleProject: action.payload.project,
      teamMembersInProject: action.payload.users,
    }
  }

  if (action.type === GET_SINGLE_PROJECT_ERROR) {
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

  if (action.type === UPDATE_ADD_MEMBER_TO_PROJECT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === UPDATE_ADD_MEMBER_TO_PROJECT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    }
  }

  if (action.type === UPDATE_ADD_MEMBER_TO_PROJECT_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: action.payload.msg,
    }
  }

  if (action.type === DELETE_TICKET_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === DELETE_TICKET_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      alertText: 'Deleted',
    }
  }

  if (action.type === DELETE_TICKET_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: action.payload.msg,
    }
  }

  if (action.type === GET_TICKET_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === GET_TICKET_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      singleTicket: action.payload.ticket,
    }
  }

  if (action.type === GET_TICKET_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: action.payload.msg,
    }
  }

  throw new Error(`no such action :${action.type}`)
}

export default reducer
