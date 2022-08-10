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
  singleProject,
  ticketId,
}) => {
  return (
    <Wrapper>
      <div className="header">
        <h5>Tickets</h5>
        <button
          className="btn"
          data-modal="modal-create-ticket"
          onClick={displayModal}
        >
          New Ticket
        </button>
      </div>
      <div>
        {showModal && dataModal === 'modal-create-ticket' && (
          <CreateTicketModal {...singleProject} />
        )}

        {showModal && dataModal === 'modal-edit-project' && (
          <UpdateTicketModal projectName={projectName} ticketId={ticketId} />
        )}
      </div>
      <div className="titles">
        <h5>Ticket title</h5>
        <h5>Description</h5>
        <h5>Ticket author</h5>
        <h5>Actions</h5>
      </div>
    </Wrapper>
  )
}

export default HeaderTicket
