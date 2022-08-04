import Wrapper from './wrappers/UsersContainer'
import { useUsersContext } from '../../context/usersContext'
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
const UsersContainer = ({ firstName, lastName, role, email, _id }) => {
  const { deleteUser, getSingleUser } = useUsersContext()

  return (
    <Wrapper>
      <h5 className="title-user">{firstName}</h5>
      <h5 className="title-user">{lastName}</h5>
      <h5 className="title-user">{email}</h5>
      <h5 className="title-user">
        {role}
        <button onClick={() => deleteUser(_id)}>
          <AiFillDelete />
        </button>
        <button onClick={() => getSingleUser(_id)}>
          <FiEdit />
        </button>
      </h5>
    </Wrapper>
  )
}

export default UsersContainer
