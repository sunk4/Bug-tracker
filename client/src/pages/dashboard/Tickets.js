import { useEffect } from 'react'
import Wrapper from '../../assets/wrappers/TicketPage'
import { useTicketsContext } from '../../context/ticketsContext'
import { TicketsContainer, TicketTitle } from '../../components/TicketsPage'
import { Link } from 'react-router-dom'

const Tickets = () => {
  const { getAllTickets, ticketsAll } = useTicketsContext()

  useEffect(() => {
    getAllTickets()
  }, [])

  return (
    <Wrapper>
      <TicketTitle />
      {ticketsAll.map((ticket) => {
        const { ticketProjectId } = ticket
        return (
          <Link key={ticket._id} to={`/project/${ticketProjectId._id}`}>
            <TicketsContainer {...ticket} />
          </Link>
        )
      })}
    </Wrapper>
  )
}

export default Tickets
