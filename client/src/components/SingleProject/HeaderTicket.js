import {
  CreateTicketModal,
  UpdateTicketModal,
} from '../../components/SingleProject'

import Wrapper from './wrappers/HeaderTicket'

const HeaderTicket = ({
  displayModal,
  showModal,
  dataModal,
  projectName,
  ticketId,
}) => {
  return (
    <Wrapper>
      <h4>Tickets</h4>
      <button
        className="btn"
        data-modal="modal-create-ticket"
        onClick={displayModal}
        type="button"
      >
        New Ticket
      </button>

      {showModal && dataModal === 'modal-create-ticket' && (
        <CreateTicketModal projectName={projectName} />
      )}

      {showModal && dataModal === 'modal-edit-project' && (
        <UpdateTicketModal projectName={projectName} ticketId={ticketId} />
      )}

      <div>
        <h5>Ticket title</h5>
        <h5>Description</h5>
        <h5>Ticket author</h5>
        <h5>Actions</h5>
      </div>
    </Wrapper>
  )
}

export default HeaderTicket
