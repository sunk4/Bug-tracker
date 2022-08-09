import Wrapper from './wrappers/TeamComponent'

const TeamComponent = ({ firstName, lastName, email, phoneNumber }) => {
  return (
    <Wrapper>
      <h6>
        {firstName} {lastName}
      </h6>
      <h6>{email}</h6>
      <h6>{phoneNumber}</h6>
    </Wrapper>
  )
}

export default TeamComponent
