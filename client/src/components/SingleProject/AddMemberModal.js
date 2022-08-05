import { useAppContext } from '../../context/appContext'
import { useProjectContext } from '../../context/projectContext'
import { useUsersContext } from '../../context/usersContext'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const AddMemberModal = () => {
  const { hideModal } = useAppContext()
  const { users } = useUsersContext()
  const { singleProject, addMemberToProject, handleChange } =
    useProjectContext()
  const { projectUsers, _id: projectId } = singleProject

  const animatedComponents = makeAnimated()

  const handleSubmit = (e) => {
    e.preventDefault()
    addMemberToProject(projectId)
    hideModal()
  }

  const usersNotInProject = users
    .filter((user) => !projectUsers.includes(user._id))
    .map((user) => {
      return {
        value: user._id,
        label: `${user.firstName} ${user.lastName}`,
      }
    })

  const handleProjectSelect = (e) => {
    let users = []
    e.map((user) => {
      return users.push(user.value)
    })
    handleChange(users)
  }

  return (
    <section>
      <form className="form">
        <label>Add team member</label>
        <Select
          closeMenuOnSelect={false}
          onChange={handleProjectSelect}
          components={animatedComponents}
          isMulti
          options={usersNotInProject}
        />
        <button className="btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button type="button" className="btn" onClick={hideModal}>
          Close
        </button>
      </form>
    </section>
  )
}

export default AddMemberModal
