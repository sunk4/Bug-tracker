import Wrapper from './wrappers/TicketsContainer'

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
      <h6>{ticketProjectId.projectName}</h6>
      <h6>{ticketTitle}</h6>
      <h6>{ticketType}</h6>
      <h6>{ticketStatus}</h6>
      <h6>{modifiedDate}</h6>
      <h6>{ticketPriority}</h6>
    </Wrapper>
  )
}

export default TicketsContainer
