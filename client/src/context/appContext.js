import React, { useContext, useReducer } from 'react'

import reducer from '../reducers/appReducer'
import { DISPLAY_MODAL, HIDE_MODAL } from '../actions/appActions'

const initialState = {
  showModal: false,
  dataModal: '',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const displayModal = (e) => {
    const dataModal = e.target.getAttribute('data-modal')

    dispatch({ type: DISPLAY_MODAL, payload: dataModal })
  }

  const hideModal = () => {
    dispatch({ type: HIDE_MODAL })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,

        displayModal,
        hideModal,
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
