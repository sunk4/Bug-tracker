import { useAppContext } from '../../context/appContext'
import { useTicketsContext } from '../../context/ticketsContext'

import { FormRow, FormRowSelect } from '../Global'

const CreateTicketModal = ({ projectName }) => {
  const {
    handleChange,
    hideCreateTicketModal,
  } = useAppContext()

  const {
    createNewTicket,
    ticketTitle,
    ticketDescription,
    ticketPriority,
    ticketPriorityOptions,
    ticketStatus,
    ticketStatusOptions,
    ticketType,
    ticketTypeOptions,
  } = useTicketsContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    createNewTicket()
  }

  const handleTicketInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  return (
    <section>
      <form className="form">
        <h5>{projectName}</h5>
        <div>
          <FormRow
            type="text"
            name="ticketTitle"
            value={ticketTitle}
            handleChange={handleTicketInput}
          />
          <FormRow
            type="text"
            name="ticketDescription"
            value={ticketDescription}
            handleChange={handleTicketInput}
          />

          <FormRowSelect
            name="ticketPriority"
            value={ticketPriority}
            handleChange={handleTicketInput}
            list={[...ticketPriorityOptions]}
          />

          <FormRowSelect
            name="ticketStatus"
            value={ticketStatus}
            handleChange={handleTicketInput}
            list={[...ticketStatusOptions]}
          />

          <FormRowSelect
            name="ticketType"
            value={ticketType}
            handleChange={handleTicketInput}
            list={[...ticketTypeOptions]}
          />

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
            onClick={hideCreateTicketModal}
          >
            Close
          </button>
        </div>
      </form>
    </section>
  )
}

export default CreateTicketModal