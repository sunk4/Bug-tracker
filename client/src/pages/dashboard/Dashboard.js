import { useEffect } from 'react'
import Wrapper from '../../assets/wrappers/DashboardPage'
import {
  ListOfProjects,
  ChartComponent,
  DashboardHeader,
  DashboardTitle,
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
    // eslint-disable-next-line
  }, [])

  return (
    <Wrapper>
      <div>
        <DashboardHeader
          displayModal={displayModal}
          showModal={showModal}
          dataModal={dataModal}
        />
        {isLoadingProject ? (
          <Loading />
        ) : (
          <section>
            <DashboardTitle />
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
        <section className="graphs">
          <ChartComponent data={statsTicketPriority} name={'Ticket Priority'} />
          <ChartComponent data={statsTicketStatus} name={'Ticket Status'} />
          <ChartComponent data={statsTicketType} name={'Ticket Type'} />
        </section>
      )}
    </Wrapper>
  )
}

export default Dashboard
