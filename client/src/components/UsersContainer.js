import Wrapper from '../assets/wrappers/UsersContainer'
import { useAppContext } from '../context/appContext'
import { AiFillDelete } from 'react-icons/ai'
const UsersContainer = ({ firstName, lastName, role, email, _id }) => {
  const { deleteUser } = useAppContext()

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
      </h5>
    </Wrapper>
  )
}

export default UsersContainer
