import { useParams } from 'react-router-dom'

import {
  TeamComponent,
  TicketsContainer,
  HeaderTicket,
  SingleTicketInfo,
  HeaderProject,
} from '../../components/SingleProject'
import Wrapper from '../../assets/wrappers/SingleProject'
import { useAppContext } from '../../context/appContext'
import { useTicketsContext } from '../../context/ticketsContext'
import { useProjectContext } from '../../context/projectContext'
import { useEffect } from 'react'

const SingleProject = () => {
  const { id } = useParams()

  const { displayModal, showModal, dataModal } = useAppContext()
  const { getSingleProject, singleProject, teamMembersInProject } =
    useProjectContext()
  const { ticketsAll, singleTicket } = useTicketsContext()

  const { _id: ticketId } = singleTicket

  const { projectName } = singleProject
  useEffect(() => {
    getSingleProject(id)
  }, [])

  return (
    <Wrapper>
      <HeaderProject
        showModal={showModal}
        displayModal={displayModal}
        dataModal={dataModal}
        projectName={projectName}
      />
      {teamMembersInProject.map((member) => {
        return <TeamComponent key={member._id} {...member} />
      })}

      <HeaderTicket
        {...singleProject}
        displayModal={displayModal}
        showModal={showModal}
        dataModal={dataModal}
        projectName={projectName}
        ticketId={ticketId}
      />
      {ticketsAll.map((ticket) => {
        return <TicketsContainer key={ticket._id} {...ticket} />
      })}
      <SingleTicketInfo {...singleTicket} />
    </Wrapper>
  )
}

export default SingleProject
