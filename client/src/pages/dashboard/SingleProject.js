import { useParams } from 'react-router-dom'
import {
  TeamComponent,
  TicketsContainerInProject,
  AddMemberModal,
  CreateTicketModal,
} from '../../components'
import Wrapper from '../../assets/wrappers/SingleProject'
import { useAppContext } from '../../context/appContext'
import { useEffect } from 'react'
import { BiZoomIn } from 'react-icons/bi'

const SingleProject = () => {
  const { id } = useParams()

  const {
    getSingleProject,
    singleProject,
    teamMembersInProject,
    ticketsAll,
    displayModal,
    showModal,
    singleTicket,
    showCreateTicketModal,
    createTicketModal,
  } = useAppContext()

  const {
    ticketTitle,
    ticketStatus,
    ticketDescription,
    ticketPriority,
    ticketType,
  } = singleTicket

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
        </div>
        <div>
          <h5>Ticket title</h5>
          <h5>Description</h5>
          <h5>Ticket author</h5>
        </div>
      </section>
      {ticketsAll.map((ticket) => {
        return <TicketsContainerInProject key={ticket._id} {...ticket} />
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
