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
  HIDE_CREATE_TICKET_MODAL,
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
  HANDLE_CHANGE_SELECT,
  GET_SINGLE_PROJECT_BEGIN,
  GET_SINGLE_PROJECT_SUCCESS,
  GET_SINGLE_PROJECT_ERROR,
  GET_SINGLE_USER_BEGIN,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR,
  UPDATE_ADD_MEMBER_TO_PROJECT_BEGIN,
  UPDATE_ADD_MEMBER_TO_PROJECT_SUCCESS,
  UPDATE_ADD_MEMBER_TO_PROJECT_ERROR,
  CREATE_TICKET_BEGIN,
  CREATE_TICKET_SUCCESS,
  CREATE_TICKET_ERROR,
  DELETE_TICKET_BEGIN,
  DELETE_TICKET_SUCCESS,
  DELETE_TICKET_ERROR,
  GET_TICKET_BEGIN,
  GET_TICKET_SUCCESS,
  GET_TICKET_ERROR,
  DELETE_USER_BEGIN,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  DISPLAY_CREATE_TICKET_MODAL,
} from './actions'

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  user: null,
  users: [],
  showModal: false,
  showCreateTicketModal: false,
  projectName: '',
  projectDescription: '',
  projectUsers: [],
  projectsAll: [],
  ticketsAll: [],
  singleProject: [],
  teamMembersInProject: [],
  singleUser: [],
  ticketTitle: '',
  ticketDescription: '',
  ticketPriority: 'medium',
  ticketPriorityOptions: ['low', 'medium', 'high'],
  ticketStatus: 'open',
  ticketStatusOptions: ['open', 'in progress', 'closed'],
  ticketType: 'bug',
  ticketTypeOptions: ['bug', 'error', 'featured request', 'other'],
  singleTicket: [],
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

  useEffect(() => {
    getAllUsers()
  }, [])

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

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
  }

  const handleChangeSelect = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE_SELECT, payload: { name, value } })
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
      getAllProjects()
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

  const getSingleProject = async (id) => {
    dispatch({ type: GET_SINGLE_PROJECT_BEGIN })
    try {
      const response = await axios(`/api/v1/projects/${id}`)
      const { project, users } = response.data

      dispatch({
        type: GET_SINGLE_PROJECT_SUCCESS,
        payload: { project, users },
      })
    } catch (error) {
      dispatch({
        type: GET_SINGLE_PROJECT_ERROR,
        payload: { msg: error.response.data },
      })
    }
  }

  const getSingleUser = async (id) => {
    dispatch({ type: GET_SINGLE_USER_BEGIN })
    try {
      const response = await axios(`/api/v1/users/${id}`)
      const { user } = response.data
      dispatch({ type: GET_SINGLE_USER_SUCCESS, payload: { user } })
    } catch (error) {
      dispatch({
        type: GET_SINGLE_USER_ERROR,
        payload: { msg: error.response.data },
      })
    }
  }

  const addMemberToProject = async (id) => {
    dispatch({ type: UPDATE_ADD_MEMBER_TO_PROJECT_BEGIN })
    try {
      const { projectUsers } = state

      await axios.patch(`/api/v1/projects/${id}`, {
        projectUsers,
      })

      dispatch({ type: UPDATE_ADD_MEMBER_TO_PROJECT_SUCCESS })
    } catch (error) {
      dispatch({
        type: UPDATE_ADD_MEMBER_TO_PROJECT_ERROR,
        payload: { msg: error.response.data },
      })
    }
  }

  const deleteTicket = async (id) => {
    dispatch({ type: DELETE_TICKET_BEGIN })
    try {
      await axios.delete(`/api/v1/tickets/${id}`)
      dispatch({ type: DELETE_TICKET_SUCCESS })
      getAllTickets()
    } catch (error) {
      dispatch({
        type: DELETE_TICKET_ERROR,
        payload: { msg: error.response.data },
      })
    }
  }

  const getSingleTicket = async (id) => {
    dispatch({ type: GET_TICKET_BEGIN })

    try {
      const response = await axios(`/api/v1/tickets/${id}`)
      const { ticket } = response.data

      dispatch({ type: GET_TICKET_SUCCESS, payload: { ticket } })
    } catch (error) {
      dispatch({
        type: GET_TICKET_ERROR,
        payload: { msg: error.response.data },
      })
    }
  }

  const deleteUser = async (id) => {
    dispatch({ type: DELETE_USER_BEGIN })

    try {
      await axios.delete(`/api/v1/users/${id}`)

      dispatch({ type: DELETE_USER_SUCCESS })
      getAllUsers()
    } catch (error) {
      dispatch({
        type: DELETE_USER_ERROR,
        payload: { msg: error.response.data },
      })
    }
  }

  const createNewTicket = async () => {
    dispatch({ type: CREATE_TICKET_BEGIN })

    try {
      const {
        ticketTitle,
        ticketDescription,
        ticketPriority,
        ticketStatus,
        ticketType,
        singleProject,
      } = state

      const { _id } = singleProject

      await axios.post('/api/v1/tickets', {
        ticketTitle,
        ticketProjectId: _id,
        ticketDescription,
        ticketPriority,
        ticketStatus,
        ticketType,
      })

      dispatch({ type: CREATE_TICKET_SUCCESS })
      hideCreateTicketModal()
      getAllTickets()
    } catch (error) {
      dispatch({
        type: CREATE_TICKET_ERROR,
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
        handleChangeSelect,
        createProject,
        getAllProjects,
        getAllTickets,
        getSingleProject,
        getSingleUser,
        addMemberToProject,
        deleteTicket,
        getSingleTicket,
        deleteUser,
        createTicketModal,
        createNewTicket,
        hideCreateTicketModal,
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
