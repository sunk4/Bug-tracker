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

const SingleProject = () => {
  const { id } = useParams()

  const {
    getSingleProject,
    singleProject,
    teamMembersInProject,
    ticketsAll,
    displayModal,
    showModal,
    deleteTicket,
  } = useAppContext()

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
        console.log(ticket)
        return <TicketsContainerInProject key={ticket._id} {...ticket} />
      })}
    </Wrapper>
  )
}

export default SingleProject
