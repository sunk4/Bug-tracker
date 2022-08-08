import React, { useContext, useReducer } from 'react'
import axios from 'axios'
import reducer from '../reducers/usersReducer'

import {
  GET_ALL_USERS_BEGIN,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_ERROR,
  GET_SINGLE_USER_BEGIN,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR,
  DELETE_USER_BEGIN,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  UPDATE_USER_BY_ADMIN_BEGIN,
  UPDATE_USER_BY_ADMIN_SUCCESS,
  UPDATE_USER_BY_ADMIN_ERROR,
} from '../actions/usersActions'

const initialState = {
  isLoadingUser: false,
  users: [],
  singleUser: [],
}

const UsersContext = React.createContext()

const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
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

  const updateUserByAdmin = async (id, currentUser) => {
    dispatch({ type: UPDATE_USER_BY_ADMIN_BEGIN })
    try {
      const { firstName, lastName, phoneNumber, email, role } = currentUser
      await axios.patch(`api/v1/users/updateUser/${id}`, {
        firstName,
        lastName,
        phoneNumber,
        email,
        role,
      })

      dispatch({ type: UPDATE_USER_BY_ADMIN_SUCCESS })
    } catch (error) {
      dispatch({
        type: UPDATE_USER_BY_ADMIN_ERROR,
        payload: { msg: error.response.data },
      })
    }
  }

  return (
    <UsersContext.Provider
      value={{
        ...state,
        getAllUsers,
        getSingleUser,
        deleteUser,
        updateUserByAdmin,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export const useUsersContext = () => {
  return useContext(UsersContext)
}

export { UsersProvider }
