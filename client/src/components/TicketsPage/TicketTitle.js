import Wrapper from './wrappers/TicketTitle'


const TicketTitle = () => {


  return (
    <Wrapper>
      <div className="main-title">
        <h4>Tickets</h4>
      </div>
      <div className="titles-tickets">
        <h5>Project</h5>
        <h5>Ticket</h5>
        <h5>Type</h5>
        <h5>Status</h5>
        <h5>Created at</h5>
        <h5>Priority</h5>
      </div>
    </Wrapper>
  )
}

export default TicketTitle
