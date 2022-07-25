const TeamComponent = ({ firstName, lastName, email, phone }) => {
  return (
    <>
      <h5>{firstName}</h5>
      <h5>{lastName}</h5>
      <h5>{email}</h5>
      <h5>{phone}</h5>
    </>
  )
}

export default TeamComponent
