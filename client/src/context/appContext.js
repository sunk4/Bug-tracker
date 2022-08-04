import React, { useContext, useReducer } from 'react'
import axios from 'axios'
import reducer from './reducer'
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  DISPLAY_MODAL,
  HIDE_MODAL,
  HIDE_CREATE_TICKET_MODAL,
  DISPLAY_EDIT_TICKET_MODAL,
  HIDE_EDIT_TICKET_MODAL,
  HANDLE_CHANGE,
  HANDLE_CHANGE_SELECT,
  DISPLAY_CREATE_TICKET_MODAL,
} from './actions'

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  showModal: false,
  showCreateTicketModal: false,
  showUpdateTicketModal: false,
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }

  const displayModal = () => {
    dispatch({ type: DISPLAY_MODAL })
  }

  const hideModal = () => {
    dispatch({ type: HIDE_MODAL })
  }

  const createTicketModal = () => {
    dispatch({ type: DISPLAY_CREATE_TICKET_MODAL })
  }

  const hideCreateTicketModal = () => {
    dispatch({ type: HIDE_CREATE_TICKET_MODAL })
  }

  const updateTicketModal = () => {
    dispatch({ type: DISPLAY_EDIT_TICKET_MODAL })
  }

  const hideUpdateTicketModal = () => {
    dispatch({ type: HIDE_EDIT_TICKET_MODAL })
  }

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
  }

  const handleChangeSelect = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE_SELECT, payload: { name, value } })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        displayModal,
        hideModal,
        handleChange,
        handleChangeSelect,
        createTicketModal,
        hideCreateTicketModal,
        updateTicketModal,
        hideUpdateTicketModal,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
