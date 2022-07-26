const TeamComponent = ({ firstName, lastName, email, phone }) => {
  return (
    <section>
      <h5>{firstName}</h5>
      <h5>{lastName}</h5>
      <h5>{email}</h5>
      <h5>{phone}</h5>
    </section>
  )
}

export default TeamComponent
