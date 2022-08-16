import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import { useUsersContext } from '../../context/usersContext'
import { useTicketsContext } from '../../context/ticketsContext'
import { AiFillDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import Wrapper from './wrappers/TicketsContainer'

const TicketsContainerInProject = ({ ticketsAll }) => {
  const { displayModal } = useAppContext()
  const { getSingleUser, singleUser } = useUsersContext()
  const { deleteTicket, getSingleTicket } = useTicketsContext()

  // useEffect(() => {
  //   getSingleUser(userId)
  //   // eslint-disable-next-line
  // }, [])

  return (
    <Wrapper>
      <div>
        <h5>Title</h5>
        <h5>Description</h5>
        <h5>Name</h5>
      </div>
      {ticketsAll.map((ticket) => {
        const {
          ticketTitle,
          ticketDescription,
          ticketId,
          firstName,
          lastName,
        } = ticket
        return (
          <div key={ticketId}>
            <div onClick={() => getSingleTicket(ticketId)}>
              <h5>{ticketTitle}</h5>
              <h5>{ticketDescription}</h5>
              <h5>
                {firstName} {lastName}
              </h5>
            </div>
            <button type="button">
              <AiFillDelete onClick={() => deleteTicket(ticketId)} />
            </button>
            <button type="button">
              <FiEdit data-modal="modal-edit-project" onClick={displayModal} />
            </button>
          </div>
        )
      })}
    </Wrapper>
  )
}

export default TicketsContainerInProject
