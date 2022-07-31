import { useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import { AiFillDelete } from 'react-icons/ai'

const TicketsContainerInProject = ({
  ticketTitle,
  ticketDescription,
  user: userId,
  _id: ticketId,
}) => {
  const { getSingleUser, singleUser, deleteTicket, getSingleTicket } =
    useAppContext()

  const { firstName, lastName } = singleUser

  useEffect(() => {
    getSingleUser(userId)
  }, [])

  return (
    <div onClick={() => getSingleTicket(ticketId)}>
      <h5>{ticketTitle}</h5>
      <h5>{ticketDescription}</h5>
      <h5>
        {firstName} {lastName}
      </h5>
      <AiFillDelete onClick={() => deleteTicket(ticketId)} />
    </div>
  )
}

export default TicketsContainerInProject
