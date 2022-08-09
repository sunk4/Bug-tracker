const SingleTicketInfo = ({
  ticketTitle,
  ticketStatus,
  ticketDescription,
  ticketPriority,
  ticketType,
}) => {
  return (
    <section>
      <div>
        <h6>Ticket title</h6>
        <h5>{ticketTitle}</h5>
        <h6>Status</h6>
        <h5>{ticketStatus}</h5>
      </div>
      <div>
        <div>
          <h6>Description</h6>
          <h5>{ticketDescription}</h5>
        </div>
        <div>
          <h6>Priority</h6>
          <h5>{ticketPriority}</h5>
        </div>
        <div>
          <h6>Type</h6>
          <h5>{ticketType}</h5>
        </div>
      </div>
    </section>
  )
}

export default SingleTicketInfo
