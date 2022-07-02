const UsersContainer = ({ firstName, lastName, role, email }) => {
  return (
    <div>
      <h6>{firstName}</h6>
      <h6>{lastName}</h6>
      <h6>{email}</h6>
      <h6>{role}</h6>
    </div>
  )
}

export default UsersContainer
