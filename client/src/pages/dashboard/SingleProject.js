import { useParams } from 'react-router-dom'
import {
  TicketsContainer,
  HeaderProject,
  SingleTicketInfo,
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

  const { _id: ticketId } = singleTicket

  const { projectName } = singleProject

  useEffect(() => {
    getSingleProject(id)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header title={projectName} />
      <Wrapper>
        <HeaderProject
          showModal={showModal}
          displayModal={displayModal}
          dataModal={dataModal}
          projectName={projectName}
          teamMembersInProject={teamMembersInProject}
        />

        <TicketsContainer
          ticketsAll={ticketsAll}
          singleTicket={singleTicket}
          singleProject={singleProject}
          displayModal={displayModal}
          showModal={showModal}
          dataModal={dataModal}
          projectName={projectName}
          ticketId={ticketId}
        />

        <SingleTicketInfo {...singleTicket} />
      </Wrapper>
    </>
  )
}

export default SingleProject
