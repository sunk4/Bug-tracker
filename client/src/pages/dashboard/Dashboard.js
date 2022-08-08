import { useEffect } from 'react'
import Wrapper from '../../assets/wrappers/DashboardPage'
import {
  ListOfProjects,
  ModalNewProject,
  ChartComponent,
} from '../../components/Dashboard'
import { useAppContext } from '../../context/appContext'
import { useProjectContext } from '../../context/projectContext'
import { useTicketsContext } from '../../context/ticketsContext'

import { Loading } from '../../components/Global'
import { Link } from 'react-router-dom'
import { useUsersContext } from '../../context/usersContext'

const Dashboard = () => {
  const { showModal, displayModal, dataModal } = useAppContext()
  const { getAllUsers } = useUsersContext()
  const {
    isLoadingTicket,
    getAllTickets,
    statsTicketPriority,
    statsTicketStatus,
    statsTicketType,
    getStatsTickets,
  } = useTicketsContext()
  const { getAllProjects, projectsAll, isLoadingProject } = useProjectContext()

  useEffect(() => {
    getStatsTickets()
    getAllProjects()
    getAllTickets()
    getAllUsers()
  }, [])

  return (
    <Wrapper>
      <div>
        <section className="header">
          <h4>Projects</h4>
          <button
            onClick={displayModal}
            data-modal="modal-create-project"
            className="btn"
          >
            New Project
          </button>
          {showModal && dataModal === 'modal-create-project' && (
            <ModalNewProject />
          )}
        </section>
        {isLoadingProject ? (
          <Loading />
        ) : (
          <section>
            <div className="titles-projects">
              <h5>Project</h5>
              <h5>Description</h5>
              <h5>Created by</h5>
            </div>

            {projectsAll.map((project) => {
              return (
                <Link key={project._id} to={`project/${project._id}`}>
                  <ListOfProjects {...project} />
                </Link>
              )
            })}
          </section>
        )}
      </div>
      {isLoadingTicket ? (
        <Loading />
      ) : (
        <div className="graphs">
          <ChartComponent data={statsTicketPriority} name={'Ticket Priority'} />
          <ChartComponent data={statsTicketStatus} name={'Ticket Status'} />
          <ChartComponent data={statsTicketType} name={'Ticket Type'} />
        </div>
      )}
    </Wrapper>
  )
}

export default Dashboard
