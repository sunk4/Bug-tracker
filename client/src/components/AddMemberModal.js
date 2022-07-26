import { useAppContext } from '../context/appContext'

const AddMemberModal = () => {
  const { hideModal, handleChangeSelect, users, singleProject } =
    useAppContext()

  const { projectUsers } = singleProject

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleProjectSelect = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChangeSelect({ name, value })
    console.log(name, value)
  }

  const usersNotInProject = users.filter(
    (user) => !projectUsers.includes(user._id)
  )

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
