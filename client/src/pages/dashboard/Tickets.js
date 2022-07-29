import { useEffect } from 'react'
import Wrapper from '../../assets/wrappers/TicketPage'
import { useAppContext } from '../../context/appContext'
import { TicketsContainer } from '../../components'
import { Link } from 'react-router-dom'

const Tickets = () => {
  const { getAllTickets, ticketsAll } = useAppContext()

  useEffect(() => {
    getAllTickets()
  }, [])

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
      {ticketsAll.map((ticket) => {
        const { project } = ticket
        return (
          <Link key={ticket._id} to={`project/${project._id}`}>
            <TicketsContainer {...ticket} />
          </Link>
        )
      })}
    </Wrapper>
  )
}

export default Tickets
