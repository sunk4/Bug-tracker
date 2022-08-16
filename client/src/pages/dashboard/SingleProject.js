import { useParams } from 'react-router-dom'
import { useState } from 'react'
import {
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
import { Header } from '../../components/Global'

const SingleProject = () => {
  const { id } = useParams()
  const { displayModal, showModal, dataModal } = useAppContext()
  const { getSingleProject, singleProject, teamMembersInProject } =
    useProjectContext()
  const { ticketsAll, singleTicket } = useTicketsContext()
  
  const [showSingleTicket, setShowSingleTicket] = useState(false)

  const { _id: ticketId } = singleTicket

  const { projectName } = singleProject

  useEffect(() => {
    getSingleProject(id)
    // eslint-disable-next-line
  }, [])

  return (
    <Wrapper>
      <Header title={projectName} />
      <HeaderProject
        showModal={showModal}
        displayModal={displayModal}
        dataModal={dataModal}
        projectName={projectName}
        teamMembersInProject={teamMembersInProject}
      />
      <HeaderTicket
        {...singleProject}
        displayModal={displayModal}
        showModal={showModal}
        dataModal={dataModal}
        projectName={projectName}
        ticketId={ticketId}
      />
      <button type="button" onClick={() => setShowSingleTicket(true)}>
        <TicketsContainer ticketsAll={ticketsAll} />
      </button>
      {showSingleTicket && <SingleTicketInfo {...singleTicket} />}
    </Wrapper>
  )
}

export default SingleProject
