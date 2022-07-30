import Wrapper from '../assets/wrappers/TicketsContainer'

const TicketsContainer = ({
  createdAt,
  ticketPriority,
  ticketStatus,
  ticketTitle,
  ticketType,
  ticketProjectId,
}) => {
  let modifiedDate = createdAt.substring(0, 10)

  return (
    <Wrapper>
      <h5>{ticketProjectId.projectName || 'Project does not exist'}</h5>
      <h5>{ticketTitle}</h5>
      <h5>{ticketType}</h5>
      <h5>{ticketStatus}</h5>
      <h5>{modifiedDate}</h5>
      <h5>{ticketPriority}</h5>
    </Wrapper>
  )
}

export default TicketsContainer
