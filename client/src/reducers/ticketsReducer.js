import {
  GET_ALL_TICKETS_BEGIN,
  GET_ALL_TICKETS_SUCCESS,
  GET_ALL_TICKETS_ERROR,
  CREATE_TICKET_BEGIN,
  CREATE_TICKET_SUCCESS,
  CREATE_TICKET_ERROR,
  DELETE_TICKET_BEGIN,
  DELETE_TICKET_SUCCESS,
  DELETE_TICKET_ERROR,
  GET_TICKET_BEGIN,
  GET_TICKET_SUCCESS,
  GET_TICKET_ERROR,
  UPDATE_TICKET_BEGIN,
  UPDATE_TICKET_SUCCESS,
  UPDATE_TICKET_ERROR,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  SHOW_STATS_ERROR,
  HANDLE_CHANGE_INPUT,
} from '../actions/ticketsAction'

const reducer = (state, action) => {
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

  if (action.type === CREATE_TICKET_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === CREATE_TICKET_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New ticket Created!',
    }
  }

  if (action.type === CREATE_TICKET_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  if (action.type === UPDATE_TICKET_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === UPDATE_TICKET_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New ticket Created!',
    }
  }

  if (action.type === UPDATE_TICKET_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  if (action.type === SHOW_STATS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === SHOW_STATS_SUCCESS) {
    const changeKeys = (type) => {
      return type.map((item) => {
        return {
          name: item._id,
          value: item.count,
        }
      })
    }
    return {
      ...state,
      isLoading: false,
      statsTicketPriority: changeKeys(action.payload.countPriority),
      statsTicketStatus: changeKeys(action.payload.countStatus),
      statsTicketType: changeKeys(action.payload.countType),
    }
  }

  if (action.type === SHOW_STATS_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: action.payload.msg,
    }
  }

  if (action.type === HANDLE_CHANGE_INPUT) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    }
  }
  throw new Error(`no such action :${action.type}`)
}

export default reducer
