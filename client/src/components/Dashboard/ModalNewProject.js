import Wrapper from './wrappers/ModalNewProjects'
import { useAppContext } from '../../context/appContext'
import { useProjectContext } from '../../context/projectContext'
import { useUsersContext } from '../../context/usersContext'
import { FormRow, Alert } from '../Global'

const ModalNewProject = () => {
  const { hideModal, displayAlert, handleChange, handleChangeSelect } =
    useAppContext()

  const { users } = useUsersContext()
  const { projectName, projectDescription, createProject, projectUsers } =
    useProjectContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!projectName || !projectDescription) {
      displayAlert()
    }
    createProject()
    //  hideModal()
  }

  const handleProjectInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  const handleProjectSelect = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChangeSelect({ name, value })
  }

  return (
    <Wrapper>
      <h4>Add new project </h4>
      <Alert />
      <form className="form">
        <FormRow
          labelText="Project Name"
          name="projectName"
          type="text"
          value={projectName}
          handleChange={handleProjectInput}
        />

        <FormRow
          labelText="Project Description"
          name="projectDescription"
          type="text"
          value={projectDescription}
          handleChange={handleProjectInput}
        />
        <label>
          Add team member
          <select
            name="projectUsers"
            type="select"
            value={projectUsers}
            onChange={handleProjectSelect}
            multiple={true}
          >
            {users.map((user) => {
              return (
                <option key={user._id} value={user._id}>
                  {user.firstName} {user.lastName}
                </option>
              )
            })}
          </select>
        </label>
        <button className="btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" className="btn" onClick={hideModal}>
          Close
        </button>
      </form>
    </Wrapper>
  )
}

export default ModalNewProject
