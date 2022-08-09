import {
  CreateTicketModal,
  UpdateTicketModal,
} from '../../components/SingleProject'

const HeaderTicket = ({
  displayModal,
  showModal,
  dataModal,
  projectName,
  singleProject,
  ticketId,
}) => {
  return (
    <section>
      <div>
        <h5>Tickets</h5>
        <button
          className="btn"
          data-modal="modal-create-ticket"
          onClick={displayModal}
        >
          New Ticket
        </button>
        {showModal && dataModal === 'modal-create-ticket' && (
          <CreateTicketModal {...singleProject} />
        )}
        {showModal && dataModal === 'modal-edit-project' && (
          <UpdateTicketModal projectName={projectName} ticketId={ticketId} />
        )}
      </div>
      <div>
        <h5>Ticket title</h5>
        <h5>Description</h5>
        <h5>Ticket author</h5>
      </div>
    </section>
  )
}

export default HeaderTicket
