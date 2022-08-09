import Wrapper from './wrappers/UsersContainer'
import { useUsersContext } from '../../context/usersContext'
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
const UsersContainer = ({ firstName, lastName, role, email, _id }) => {
  const { deleteUser, getSingleUser } = useUsersContext()

  return (
    <Wrapper>
      <div className="title-user">
        <h6>
          {firstName} {lastName}
        </h6>
        <h6>{role}</h6>
        <h6>{email}</h6>
        <div>
          <button type="button" onClick={() => deleteUser(_id)}>
            <AiFillDelete className="icon-delete" />
          </button>
          <button type="button" onClick={() => getSingleUser(_id)}>
            <FiEdit className="icon-edit" />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

export default UsersContainer
