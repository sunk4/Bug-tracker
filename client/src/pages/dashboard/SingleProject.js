import { useParams } from 'react-router-dom'
import { TeamComponent, TicketsContainerInProject } from '../../components'
import Wrapper from '../../assets/wrappers/SingleProject'
import { useAppContext } from '../../context/appContext'
import { useEffect } from 'react'

const SingleProject = () => {
  const { id } = useParams()

  const { getSingleProject, singleProject, teamMembersInProject, ticketsAll } =
    useAppContext()

  useEffect(() => {
    getSingleProject(id)
  }, [])

  return (
    <Wrapper>
      <h4>{singleProject.projectName} </h4>
      <section>
        <div>
          <h5>Team</h5>
          <button className="btn">New Member</button>
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
          <button className="btn">New Ticket</button>
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
    </Wrapper>
  )
}

export default SingleProject
