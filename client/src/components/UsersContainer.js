import Wrapper from '../assets/wrappers/UsersContainer'

const UsersContainer = ({ firstName, lastName, role, email }) => {
  return (
    <Wrapper>
      <h6>{firstName}</h6>
      <h6>{lastName}</h6>
      <h6>{email}</h6>
      <h6>{role}</h6>
    </Wrapper>
  )
}

export default UsersContainer
