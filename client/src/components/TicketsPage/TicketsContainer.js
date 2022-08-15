import Wrapper from './wrappers/TicketsContainer'
import { Link } from 'react-router-dom'

const TicketsContainer = ({ ticketsAll }) => {
  return (
    <Wrapper>
      <div>
        <h5>Project</h5>
        <h5>Ticket</h5>
        <h5>Type</h5>
        <h5>Status</h5>
        <h5 className="hide">Created at</h5>
        <h5 className="hide">Priority</h5>
      </div>
      <div className="underline"></div>
      {ticketsAll.map((ticket) => {
        const {
          ticketProjectId,
          ticketType,
          ticketStatus,
          createdAt,
          ticketPriority,
          _id,
          ticketTitle,
        } = ticket
        let modifiedDate = createdAt.substring(0, 10)
        return (
          <Link key={_id} to={`/project/${_id}`}>
            <div className="ticket-info">
              <h5>{ticketProjectId.projectName}</h5>
              <h5>{ticketTitle}</h5>
              <h5>{ticketType}</h5>
              <h5>{ticketStatus}</h5>
              <h5 className="hide">{modifiedDate}</h5>
              <h5 className="hide">{ticketPriority}</h5>
            </div>
          </Link>
        )
      })}
    </Wrapper>
  )
}

export default TicketsContainer
