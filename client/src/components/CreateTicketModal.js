import { useAppContext } from '../context/appContext'
import { FormRow, FormRowSelect } from '../components'
const CreateTicketModal = () => {
  const {
    createNewTicket,
    handleChange,
    ticketTitle,
    ticketProjectId,
    ticketDescription,
    ticketPriority,
    ticketPriorityOptions,
    ticketStatus,
    ticketStatusOptions,
    ticketType,
    ticketTypeOptions,
    hideCreateTicketModal,
    singleProject,
  } = useAppContext()

  const { _id: projectId } = singleProject

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
        <div>
          <FormRow
            type="text"
            name="ticketProjectId"
            value={projectId}
            handleChange={handleTicketInput}
          />
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
