import React, { useContext, useReducer } from 'react'

import reducer from './reducer'
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  DISPLAY_MODAL,
  HIDE_MODAL,
  HANDLE_CHANGE,
  HANDLE_CHANGE_SELECT,
} from './actions'

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  showModal: false,
  dataModal: '',
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

  const displayModal = (e) => {
    const dataModal = e.target.getAttribute('data-modal')
    console.log(dataModal)

    dispatch({ type: DISPLAY_MODAL, payload: dataModal })
  }

  const hideModal = () => {
    dispatch({ type: HIDE_MODAL })
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
