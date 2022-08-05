import { useAppContext } from '../../context/appContext'
import { useProjectContext } from '../../context/projectContext'
import { useUsersContext } from '../../context/usersContext'
import { SelectComponent } from '../../components/SingleProject'

const AddMemberModal = () => {
  const { hideModal } = useAppContext()
  const { users } = useUsersContext()
  const { singleProject, addMemberToProject } = useProjectContext()
  const { projectUsers, _id: projectId } = singleProject

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

  return (
    <section>
      <form className="form">
        <label>Add team member</label>
        <SelectComponent options={usersNotInProject} />
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
