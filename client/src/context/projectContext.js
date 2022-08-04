import React, { useContext, useReducer } from 'react'
import axios from 'axios'
import reducer from '../reducers/projectReducer'
import {
  CREATE_PROJECT_BEGIN,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_ERROR,
  GET_ALL_PROJECTS_BEGIN,
  GET_ALL_PROJECTS_SUCCESS,
  GET_ALL_PROJECTS_ERROR,
  GET_SINGLE_PROJECT_BEGIN,
  GET_SINGLE_PROJECT_SUCCESS,
  GET_SINGLE_PROJECT_ERROR,
  UPDATE_ADD_MEMBER_TO_PROJECT_BEGIN,
  UPDATE_ADD_MEMBER_TO_PROJECT_SUCCESS,
  UPDATE_ADD_MEMBER_TO_PROJECT_ERROR,
} from '../actions/projectActions'

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
  projectName: '',
  projectDescription: '',
  projectUsers: [],
  projectsAll: [],
  singleProject: [],
  teamMembersInProject: [],
}

const ProjectContext = React.createContext()

const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

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

  return (
    <ProjectContext.Provider
      value={{
        ...state,
        getSingleProject,
        createProject,
        getAllProjects,
        addMemberToProject,
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}

export const useProjectContext = () => {
  return useContext(ProjectContext)
}

export { ProjectProvider }
