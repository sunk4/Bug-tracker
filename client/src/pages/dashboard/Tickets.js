import { useEffect } from 'react'
import Wrapper from '../../assets/wrappers/TicketPage'
import { useTicketsContext } from '../../context/ticketsContext'
import { TicketsContainer } from '../../components/TicketsPage'

import { Header } from '../../components/Global'

const Tickets = () => {
  const { getAllTickets, ticketsAll } = useTicketsContext()

  useEffect(() => {
    getAllTickets()
    // eslint-disable-next-line
  }, [])

  return (
    <Wrapper>
      <Header title="Tickets" />
      <TicketsContainer ticketsAll={ticketsAll} />
    </Wrapper>
  )
}

export default Tickets
