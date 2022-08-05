import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import { useUsersContext } from '../../context/usersContext'
import { useTicketsContext } from '../../context/ticketsContext'
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'

const TicketsContainerInProject = ({
  ticketTitle,
  ticketDescription,
  user: userId,
  _id: ticketId,
}) => {
  const { displayModal } = useAppContext()
  const { getSingleUser, singleUser } = useUsersContext()
  const { deleteTicket, getSingleTicket } = useTicketsContext()

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
      <button type="button">
        <AiFillDelete onClick={() => deleteTicket(ticketId)} />
      </button>
      <button type="button">
        <FiEdit data-modal="modal-edit-project" onClick={displayModal} />
      </button>
    </div>
  )
}

export default TicketsContainerInProject
