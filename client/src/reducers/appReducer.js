import { DISPLAY_MODAL, HIDE_MODAL } from '../actions/appActions'

const reducer = (state, action) => {
  console.log(action.payload)

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
