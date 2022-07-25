import Wrapper from '../assets/wrappers/TicketsContainer'

const TicketsContainer = ({
  createdAt,
  priority,
  status,
  title,
  type,
  project,
}) => {
  let modifiedDate = createdAt.substring(0, 10)

  console.log(project)

  return (
    <Wrapper>
      <h5>{project.projectName}</h5>
      <h5>{title}</h5>
      <h5>{type}</h5>
      <h5>{status}</h5>
      <h5>{modifiedDate}</h5>
      <h5>{priority}</h5>
    </Wrapper>
  )
}

export default TicketsContainer
