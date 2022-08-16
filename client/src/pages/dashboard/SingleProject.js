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
      <div className="tickets-container">
        <div className="team">
          <HeaderProject
            showModal={showModal}
            displayModal={displayModal}
            dataModal={dataModal}
            projectName={projectName}
            teamMembersInProject={teamMembersInProject}
          />
        </div>
        <div className="ticket">
          <HeaderTicket
            {...singleProject}
            displayModal={displayModal}
            showModal={showModal}
            dataModal={dataModal}
            projectName={projectName}
            ticketId={ticketId}
          />
          {ticketsAll.map((ticket) => {
            return (
              <button
                type="button"
                className="none-button"
                onClick={() => setShowSingleTicket(true)}
              >
                <TicketsContainer key={ticket._id} {...ticket} />
              </button>
            )
          })}
        </div>
        {showSingleTicket && (
          <div className="single-ticket">
            <SingleTicketInfo {...singleTicket} />
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default SingleProject
