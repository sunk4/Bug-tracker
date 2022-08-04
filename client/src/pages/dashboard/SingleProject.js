import { useParams } from 'react-router-dom'

import {
  AddMemberModal,
  TeamComponent,
  TicketsContainer,
  CreateTicketModal,
  UpdateTicketModal,
} from '../../components/SingleProject'
import Wrapper from '../../assets/wrappers/SingleProject'
import { useAppContext } from '../../context/appContext'
import { useTicketsContext } from '../../context/ticketsContext'
import { useProjectContext } from '../../context/projectContext'
import { useEffect } from 'react'
import { BiZoomIn } from 'react-icons/bi'

const SingleProject = () => {
  const { id } = useParams()

  const {
    displayModal,
    showModal,
    showCreateTicketModal,
    createTicketModal,
    showUpdateTicketModal,
  } = useAppContext()
  const { getSingleProject, singleProject, teamMembersInProject } =
    useProjectContext()
  const { ticketsAll, singleTicket } = useTicketsContext()

  const {
    ticketTitle,
    ticketStatus,
    ticketDescription,
    ticketPriority,
    ticketType,
    _id: ticketId,
  } = singleTicket

  const { projectName } = singleProject
  useEffect(() => {
    getSingleProject(id)
  }, [])

  return (
    <Wrapper>
      <h4>{singleProject.projectName} </h4>
      <section>
        <div>
          <h5>Team</h5>
          <button className="btn" onClick={displayModal}>
            New Member
          </button>
          {showModal && <AddMemberModal />}
        </div>
        <div>
          <h5>First name</h5>
          <h5>Last name</h5>
          <h5>Email</h5>
          <h5>Phone</h5>
        </div>
      </section>
      {teamMembersInProject.map((member) => {
        return <TeamComponent key={member._id} {...member} />
      })}
      <section>
        <div>
          <h5>Tickets</h5>
          <button className="btn" onClick={createTicketModal}>
            New Ticket
          </button>
          {showCreateTicketModal && <CreateTicketModal {...singleProject} />}
          {showUpdateTicketModal && (
            <UpdateTicketModal projectName={projectName} ticketId={ticketId} />
          )}
        </div>
        <div>
          <h5>Ticket title</h5>
          <h5>Description</h5>
          <h5>Ticket author</h5>
        </div>
      </section>
      {ticketsAll.map((ticket) => {
        return <TicketsContainer key={ticket._id} {...ticket} />
      })}

      <section>
        <div>
          <h6>Ticket title</h6>
          <h5>{ticketTitle}</h5>
          <h6>Status</h6>
          <h5>{ticketStatus}</h5>
        </div>
        <div>
          <div>
            <h6>Description</h6>
            <h5>{ticketDescription}</h5>
          </div>
          <div>
            <h6>Priority</h6>
            <h5>{ticketPriority}</h5>
          </div>
          <div>
            <h6>Type</h6>
            <h5>{ticketType}</h5>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default SingleProject
