import { useAppContext } from '../../context/appContext'
import { useProjectContext } from '../../context/projectContext'
import { useUsersContext } from '../../context/usersContext'
import Select from 'react-select'

const AddMemberModal = () => {
  const { hideModal, handleChangeSelect } = useAppContext()
  const { users } = useUsersContext()
  const { singleProject, addMemberToProject } = useProjectContext()

  

  const { projectUsers, _id: projectId } = singleProject

  const handleSubmit = (e) => {
    e.preventDefault()
    addMemberToProject(projectId)
  }

  const handleProjectSelect = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChangeSelect({ name, value })
  }

  const usersNotInProject = users.filter(
    (user) => !projectUsers.includes(user._id)
  )
  console.log(usersNotInProject)

  return (
    <section>
      <form className="form">
        <label>
          Add team member
          <select
            name="projectUsers"
            type="select"
            value={projectUsers}
            onChange={handleProjectSelect}
            multiple={true}
          >
            {usersNotInProject.map((user) => {
              return (
                <option key={user._id} value={user._id}>
                  {user.firstName} {user.lastName}
                </option>
              )
            })}
          </select>
        </label>
        <Select options={usersNotInProject} />
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
