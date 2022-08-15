import Wrapper from './wrappers/UsersContainer'
import { useUsersContext } from '../../context/usersContext'
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { useAppContext } from '../../context/appContext'
const UsersContainer = ({ users }) => {
  const { deleteUser, getSingleUser } = useUsersContext()
  const { displayModal } = useAppContext()

  const handleClick = (id, e) => {
    e.preventDefault()
    getSingleUser(id)
    displayModal(e)
  }

  return (
    <Wrapper>
      <div>
        <h5>Name</h5>
        <h5>Role</h5>
        <h5>Email</h5>
        <h5>Number</h5>
        <h5>Actions</h5>
      </div>
      <div className="underline"></div>
      {users.map((user) => {
        const { _id, firstName, lastName, email, phoneNumber, role } = user
        return (
          <div key={_id}>
            <h5>
              {firstName} {lastName}
            </h5>
            <h5>{role}</h5>
            <h5>{email}</h5>
            <h5>{phoneNumber}</h5>
            <div className="buttons">
              <button type="button" onClick={() => deleteUser(_id)}>
                <AiFillDelete className="icon" />
              </button>

              <button
                type="button"
                data-modal="modal-edit-user"
                onClick={(e) => handleClick(_id, e)}
              >
                <FiEdit
                  className="icon"
                  data-modal="modal-edit-user"
                  onClick={(e) => handleClick(_id, e)}
                />
              </button>
            </div>
          </div>
        )
      })}
    </Wrapper>
  )
}

export default UsersContainer
