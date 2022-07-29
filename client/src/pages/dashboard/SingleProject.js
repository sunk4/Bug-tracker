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
  } = useAppContext()

  const {
    description,
    priority,
    status,
    title,
    type,
    user: userId,
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
          <button className="btn" onClick={displayModal}>
            New Ticket
          </button>
          {showModal && <CreateTicketModal />}
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
          <h5>{title}</h5>
          <h6>Status</h6>
          <h5>{status}</h5>
        </div>
        <div>
          <div>
            <h6>Description</h6>
            <h5>{description}</h5>
          </div>
          <div>
            <h6>Priority</h6>
            <h5>{priority}</h5>
          </div>
          <div>
            <h6>Type</h6>
            <h5>{type}</h5>
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

export default SingleProject
