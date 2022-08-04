import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  DISPLAY_MODAL,
  HIDE_MODAL,
  DISPLAY_CREATE_TICKET_MODAL,
  HIDE_CREATE_TICKET_MODAL,
  DISPLAY_EDIT_TICKET_MODAL,
  HIDE_EDIT_TICKET_MODAL,
  HANDLE_CHANGE,
  HANDLE_CHANGE_SELECT,
} from './actions'

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

  if (action.type === DISPLAY_CREATE_TICKET_MODAL) {
    return {
      ...state,
      showCreateTicketModal: true,
    }
  }

  if (action.type === HIDE_CREATE_TICKET_MODAL) {
    return {
      ...state,
      showCreateTicketModal: false,
    }
  }

  if (action.type === DISPLAY_EDIT_TICKET_MODAL) {
    return {
      ...state,
      showUpdateTicketModal: true,
    }
  }

  if (action.type === HIDE_EDIT_TICKET_MODAL) {
    return {
      ...state,
      showUpdateTicketModal: false,
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

  throw new Error(`no such action :${action.type}`)
}

export default reducer
