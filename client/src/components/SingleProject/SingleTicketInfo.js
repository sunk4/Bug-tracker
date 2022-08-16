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
      <div>
        <h5>Ticket title</h5>
        <h5>Status</h5>
        <h5>Description</h5>
        <h5>Priority</h5>
        <h5>Type</h5>
      </div>
      <div className="underline"></div>
      <div>
        <h5>{ticketTitle}</h5>
        <h5>{ticketDescription}</h5>
        <h5>{ticketType}</h5>
        <h5>{ticketStatus}</h5>
        <h5>{ticketPriority}</h5>
      </div>
    </Wrapper>
  )
}

export default SingleTicketInfo
