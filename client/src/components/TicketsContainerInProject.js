import { useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import { AiFillDelete } from 'react-icons/ai'

const TicketsContainerInProject = ({
  description,
  title,
  user: userId,
  _id: ticketId,
}) => {
  const { getSingleUser, singleUser, deleteTicket } = useAppContext()

  const { firstName, lastName } = singleUser

  useEffect(() => {
    getSingleUser(userId)
  }, [])

  return (
    <div>
      <h5>{title}</h5>
      <h5>{description}</h5>
      <h5>
        {firstName} {lastName}
      </h5>
      <AiFillDelete onClick={() => deleteTicket(ticketId)} />
    </div>
  )
}

export default TicketsContainerInProject
