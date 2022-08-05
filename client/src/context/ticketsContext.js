import React, { useContext, useReducer } from 'react'
import axios from 'axios'
import reducer from '../reducers/ticketsReducer'
import { useAppContext } from './appContext'

import {
  GET_ALL_TICKETS_BEGIN,
  GET_ALL_TICKETS_SUCCESS,
  GET_ALL_TICKETS_ERROR,
  CREATE_TICKET_BEGIN,
  CREATE_TICKET_SUCCESS,
  CREATE_TICKET_ERROR,
  DELETE_TICKET_BEGIN,
  DELETE_TICKET_SUCCESS,
  DELETE_TICKET_ERROR,
  GET_TICKET_BEGIN,
  GET_TICKET_SUCCESS,
  GET_TICKET_ERROR,
  UPDATE_TICKET_BEGIN,
  UPDATE_TICKET_SUCCESS,
  UPDATE_TICKET_ERROR,
} from '../actions/ticketsAction'

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  ticketsAll: [],
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

const TicketsContext = React.createContext()

const TicketsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { hideModal } = useAppContext()

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
      hideModal()
      getAllTickets()
    } catch (error) {
      dispatch({
        type: CREATE_TICKET_ERROR,
        payload: { msg: error.response.data },
      })
    }
  }

  const updateTicket = async (id) => {
    dispatch({ type: UPDATE_TICKET_BEGIN })
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

      await axios.patch(`/api/v1/tickets/${id}`, {
        ticketTitle,
        ticketProjectId: _id,
        ticketDescription,
        ticketPriority,
        ticketStatus,
        ticketType,
      })
      dispatch({ type: UPDATE_TICKET_SUCCESS })
    } catch (error) {
      dispatch({
        type: UPDATE_TICKET_ERROR,
        payload: { msg: error.response.data },
      })
    }
  }

  return (
    <TicketsContext.Provider
      value={{
        ...state,
        getAllTickets,
        createNewTicket,
        deleteTicket,
        getSingleTicket,
        updateTicket,
      }}
    >
      {children}
    </TicketsContext.Provider>
  )
}

export const useTicketsContext = () => {
  return useContext(TicketsContext)
}

export { TicketsProvider }
