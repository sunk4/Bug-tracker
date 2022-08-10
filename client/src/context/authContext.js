import React, { useEffect, useContext, useReducer } from 'react'
import axios from 'axios'
import reducer from '../reducers/authReducer'

import {
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
} from '../actions/authActions.js'

const initialState = {
  isLoadingAuth: false,
  user: null,
  showAlertAuth: false,
  alertTypeAuth: '',
  alertTextAuth: '',
}

const AuthContext = React.createContext()

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      await axios.post('/api/v1/auth/register', currentUser)

      const { email, password } = currentUser

      dispatch({ type: REGISTER_USER_SUCCESS })
      loginUser({ email, password })
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
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
    dispatch({ type: LOGOUT_USER_BEGIN })
    try {
      await axios.delete('/api/v1/auth/logout')
      dispatch({ type: LOGOUT_USER_SUCCESS })
    } catch (error) {
      dispatch({ type: LOGOUT_USER_ERROR })
    }
  }

  return (
    <AuthContext.Provider
      value={{ ...state, registerUser, loginUser, showMe, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export { AuthProvider }
