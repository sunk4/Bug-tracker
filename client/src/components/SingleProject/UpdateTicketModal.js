import { useAppContext } from '../../context/appContext'
import { useTicketsContext } from '../../context/ticketsContext'
import { FormRow, FormRowSelect } from '../Global'
import { useEffect, useState } from 'react'
import Wrapper from './wrappers/UpdateTicketModal'

const UpdateTicketModal = ({ projectName }) => {
  const { hideModal } = useAppContext()

  const {
    updateTicket,
    ticketPriorityOptions,
    ticketStatusOptions,
    ticketTypeOptions,
    singleTicket,
  } = useTicketsContext()

  const [ticketTitle, setTicketTitle] = useState('')
  const [ticketDescription, setTicketDescription] = useState('')
  const [ticketPriority, setTicketPriority] = useState('')
  const [ticketStatus, setTicketStatus] = useState('')
  const [ticketType, setTicketType] = useState('')

  const { _id } = singleTicket

  const handleSubmit = (e) => {
    e.preventDefault()
    updateTicket(_id, {
      ticketTitle,
      ticketDescription,
      ticketPriority,
      ticketStatus,
      ticketType,
    })
  }

  useEffect(() => {
    setTicketTitle(singleTicket?.ticketTitle)
    setTicketDescription(singleTicket?.ticketDescription)
    setTicketPriority(singleTicket?.ticketPriority)
    setTicketStatus(singleTicket?.ticketStatus)
    setTicketType(singleTicket?.ticketType)
  }, [singleTicket])

  return (
    <Wrapper>
      <form className="form">
        <h4>{projectName}</h4>

        <FormRow
          type="text"
          name="ticketTitle"
          value={ticketTitle || ''}
          handleChange={(e) => setTicketTitle(e.target.value)}
        />
        <FormRow
          type="text"
          name="ticketDescription"
          value={ticketDescription || ''}
          handleChange={(e) => setTicketDescription(e.target.value)}
        />

        <FormRowSelect
          name="ticketPriority"
          value={ticketPriority || ''}
          handleChange={(e) => setTicketPriority(e.target.value)}
          list={[...ticketPriorityOptions]}
        />

        <FormRowSelect
          name="ticketStatus"
          value={ticketStatus || ''}
          handleChange={(e) => setTicketStatus(e.target.value)}
          list={[...ticketStatusOptions]}
        />

        <FormRowSelect
          name="ticketType"
          value={ticketType || ''}
          handleChange={(e) => setTicketType(e.target.value)}
          list={[...ticketTypeOptions]}
        />
        <div className="buttons">
          <button
            type="submit"
            className="btn btn-block"
            onClick={handleSubmit}
          >
            Ok
          </button>
          <button
            type="button"
            className="btn btn-block btn-danger"
            onClick={hideModal}
          >
            Close
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default UpdateTicketModal
