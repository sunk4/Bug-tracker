import Wrapper from '../assets/wrappers/ModalNewProjects'

import { useAppContext } from '../context/appContext'
import Alert from './Alert'
import FormRow from './FormRow'

const ModalNewProject = () => {
  const {
    hideModal,
    projectName,
    projectDescription,
    displayAlert,
    handleChange,
    createProject,
    projectUsers,
  } = useAppContext()

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
    handleChange({ name, value })
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

        <FormRow
          labelText="Add team members"
          name="projectUsers"
          type="text"
          value={projectUsers}
          handleChange={handleProjectInput}
        />

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
