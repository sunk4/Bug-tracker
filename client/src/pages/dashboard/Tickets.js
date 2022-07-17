import { useEffect } from 'react'
import Wrapper from '../../assets/wrappers/TicketPage'
import { useAppContext } from '../../context/appContext'
import { TicketsContainer } from '../../components'

const Tickets = () => {
  const { getAllTickets, ticketsAll } = useAppContext()

  useEffect(() => {
    getAllTickets()
  }, [])

  return (
    <Wrapper>
      <h4>Tickets</h4>
      <div className="titles-tickets">
        <h5>Project</h5>
        <h5>Ticket</h5>
        <h5>Type</h5>
        <h5>Status</h5>
        <h5>Created at</h5>
        <h5>Priority</h5>
      </div>
      {ticketsAll.map((ticket) => {
        return <TicketsContainer key={ticket._id} {...ticket} />
      })}
    </Wrapper>
  )
}

export default Tickets
