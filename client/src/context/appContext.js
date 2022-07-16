import React, { useEffect, useContext, useReducer } from 'react'
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
  GET_ALL_USERS_BEGIN,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_ERROR,
  DISPLAY_MODAL,
  HIDE_MODAL,
  HANDLE_CHANGE,
  CREATE_PROJECT_BEGIN,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_ERROR,
  GET_ALL_PROJECTS_BEGIN,
  GET_ALL_PROJECTS_SUCCESS,
  GET_ALL_PROJECTS_ERROR,
  GET_ALL_TICKETS_BEGIN,
  GET_ALL_TICKETS_SUCCESS,
  GET_ALL_TICKETS_ERROR,
} from './actions'

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: null,
  users: [],
  showModal: false,
  projectName: '',
  projectDescription: '',
  projectUsers: ['62ab0e2e8cedb30795d2111a'],
  projectsAll: [],
  ticketsAll: [],
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
    dispatch({ type: LOGOUT_USER_BEGIN })
    try {
      await axios.delete('/api/v1/auth/logout')
      dispatch({ type: LOGOUT_USER_SUCCESS })
    } catch (error) {
      dispatch({ type: LOGOUT_USER_ERROR })
    }
  }

  const getAllUsers = async () => {
    dispatch({ type: GET_ALL_USERS_BEGIN })
    try {
      const response = await axios('/api/v1/users')
      const { users } = response.data

      dispatch({
        type: GET_ALL_USERS_SUCCESS,
        payload: { users },
      })
    } catch (error) {
      dispatch({
        type: GET_ALL_USERS_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
  }

  const displayModal = () => {
    dispatch({ type: DISPLAY_MODAL })
  }

  const hideModal = () => {
    dispatch({ type: HIDE_MODAL })
  }

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
  }

  const createProject = async () => {
    dispatch({ type: CREATE_PROJECT_BEGIN })

    try {
      const { projectName, projectDescription, projectUsers } = state

      await axios.post('/api/v1/projects', {
        projectName,
        projectDescription,
        projectUsers,
      })
      dispatch({ type: CREATE_PROJECT_SUCCESS })
    } catch (error) {
      dispatch({
        type: CREATE_PROJECT_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
  }

  const getAllProjects = async () => {
    dispatch({ type: GET_ALL_PROJECTS_BEGIN })

    try {
      const response = await axios('/api/v1/projects')
      const { projects } = response.data

      dispatch({ type: GET_ALL_PROJECTS_SUCCESS, payload: { projects } })
    } catch (error) {
      dispatch({
        type: GET_ALL_PROJECTS_ERROR,
        payload: { msg: error.response.data },
      })
    }
  }

  const getAllTickets = async () => {
    dispatch({ type: GET_ALL_TICKETS_BEGIN })

    try {
      const response = await axios('/api/v1/tickets')
      const { tickets } = response.data

      dispatch({ type: GET_ALL_TICKETS_SUCCESS, payload: { tickets } })
    } catch (error) {
      dispatch({
        type: GET_ALL_TICKETS_ERROR,
        payload: { msg: error.response.data },
      })
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
        getAllUsers,
        displayModal,
        hideModal,
        handleChange,
        createProject,
        getAllProjects,
        getAllTickets,
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
