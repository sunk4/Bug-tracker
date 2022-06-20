import React, { useEffect, useContext, useReducer, useState } from 'react'
import axios from 'axios'
import reducer from './reducer'
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  SHOW_ME_BEGIN,
  SHOW_ME_SUCCESS,
  SHOW_ME_ERROR,
  LOGOUT_USER_BEGIN,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
} from './actions'

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: null,
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

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      const response = await axios.post('/api/v1/auth/register', currentUser)

      const { user } = response.data
      dispatch({ type: REGISTER_USER_SUCCESS, payload: { user } })
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN })

    try {
      const response = await axios.post('/api/v1/auth/login', currentUser)
      const { user } = response.data
      dispatch({ type: LOGIN_USER_SUCCESS, payload: { user } })
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
    clearAlert()
  }

  const showMe = async () => {
    dispatch({ type: SHOW_ME_BEGIN })
    try {
      const response = await axios.get('/api/v1/users/showMe')
      const { user } = response.data

      dispatch({ type: SHOW_ME_SUCCESS, payload: { user } })
    } catch (error) {
      dispatch({
        type: SHOW_ME_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
  }
  useEffect(() => {
    showMe()
  }, [])

  const logoutUser = async () => {
    dispatch({ type: LOGIN_USER_BEGIN })
    try {
      await axios.delete('/api/v1/auth/logout')
      dispatch({ type: LOGOUT_USER_SUCCESS })
    } catch (error) {
      dispatch({ type: LOGIN_USER_ERROR })
    }
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        logoutUser,
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
