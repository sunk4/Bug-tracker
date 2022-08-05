import Wrapper from './wrappers/ModalNewProjects'
import { useAppContext } from '../../context/appContext'
import { useProjectContext } from '../../context/projectContext'
import { useUsersContext } from '../../context/usersContext'
import { FormRow, Alert } from '../Global'
import { SelectComponent } from '../SingleProject'

const ModalNewProject = () => {
  const { hideModal, displayAlert } = useAppContext()

  const { users } = useUsersContext()
  const { projectName, projectDescription, createProject, handleChangeInput } =
    useProjectContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!projectName || !projectDescription) {
      displayAlert()
    }
    createProject()
  }

  const handleProjectInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChangeInput({ name, value })
  }

  const newProjectUsers = users.map((user) => {
    return {
      value: user._id,
      label: `${user.firstName} ${user.lastName}`,
    }
  })

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
          <SelectComponent options={newProjectUsers} />
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
