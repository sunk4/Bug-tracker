import Wrapper from './wrappers/SingleTicketInfo'

const SingleTicketInfo = ({
  ticketTitle,
  ticketStatus,
  ticketDescription,
  ticketPriority,
  ticketType,
}) => {
  return (
    <Wrapper>
      <div className="title-status">
        <h6>Ticket title</h6>
        <h4>{ticketTitle}</h4>
        <h6>Status</h6>
        <h4>{ticketStatus}</h4>
      </div>
      <div className="ticket-types">
        <div>
          <h6>Description</h6>
          <h4>{ticketDescription}</h4>
        </div>
        <div>
          <h6>Priority</h6>
          <h4>{ticketPriority}</h4>
        </div>
        <div>
          <h6>Type</h6>
          <h4>{ticketType}</h4>
        </div>
      </div>
    </Wrapper>
  )
}

export default SingleTicketInfo
