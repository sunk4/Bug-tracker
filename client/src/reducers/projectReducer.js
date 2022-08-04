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

const reducer = (state, action) => {
  if (action.type === CREATE_PROJECT_BEGIN) {
    return { ...state, isLoading: true }
  }

  if (action.type === CREATE_PROJECT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New project Created!',
    }
  }

  if (action.type === CREATE_PROJECT_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    }
  }

  if (action.type === GET_ALL_PROJECTS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === GET_ALL_PROJECTS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      projectsAll: action.payload.projects,
    }
  }

  if (action.type === GET_ALL_PROJECTS_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: action.payload.msg,
    }
  }

  if (action.type === GET_SINGLE_PROJECT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === GET_SINGLE_PROJECT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      singleProject: action.payload.project,
      teamMembersInProject: action.payload.users,
    }
  }

  if (action.type === GET_SINGLE_PROJECT_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: action.payload.msg,
    }
  }

  if (action.type === UPDATE_ADD_MEMBER_TO_PROJECT_BEGIN) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (action.type === UPDATE_ADD_MEMBER_TO_PROJECT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    }
  }

  if (action.type === UPDATE_ADD_MEMBER_TO_PROJECT_ERROR) {
    return {
      ...state,
      isLoading: false,
      alertText: action.payload.msg,
    }
  }
  throw new Error(`no such action :${action.type}`)
}

export default reducer
