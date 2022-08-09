import { useAppContext } from '../../context/appContext'
import { useProjectContext } from '../../context/projectContext'
import { useUsersContext } from '../../context/usersContext'
import { SelectComponent } from '../../components/SingleProject'
import Wrapper from './wrappers/AddMemberModal'

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
    <Wrapper>
      <h4>Add team member</h4>
      <form className="form">
        <SelectComponent options={usersNotInProject} />
        <button className="btn btn-block" type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <button
          type="button"
          className="btn btn-block btn-danger"
          onClick={hideModal}
        >
          Close
        </button>
      </form>
    </Wrapper>
  )
}

export default AddMemberModal
