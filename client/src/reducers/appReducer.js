import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  DISPLAY_MODAL,
  HIDE_MODAL,
} from '../actions/appActions'

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
      dataModal: action.payload,
    }
  }
  if (action.type === HIDE_MODAL) {
    return {
      ...state,
      showModal: false,
      dataModal: '',
    }
  }

  throw new Error(`no such action :${action.type}`)
}

export default reducer
