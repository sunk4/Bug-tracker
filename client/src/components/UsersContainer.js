import Wrapper from '../assets/wrappers/UsersContainer'

const UsersContainer = ({ firstName, lastName, role, email, _id }) => {
  return (
    <Wrapper>
      <h5 className="title-user">{firstName}</h5>
      <h5 className="title-user">{lastName}</h5>
      <h5 className="title-user">{email}</h5>
      <h5 className="title-user">{role}</h5>
    </Wrapper>
  )
}

export default UsersContainer
