import { useEffect } from 'react'
import Wrapper from '../../assets/wrappers/DashboardPage'
import { ListOfProjects, ChartComponent } from '../../components/Dashboard'
import { useAppContext } from '../../context/appContext'
import { useProjectContext } from '../../context/projectContext'
import { useTicketsContext } from '../../context/ticketsContext'
import { Loading } from '../../components/Global'

import { useUsersContext } from '../../context/usersContext'
import { Header } from '../../components/Global'

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
      <Header title="Dashboard" />
      <ListOfProjects
        projectsAll={projectsAll}
        displayModal={displayModal}
        showModal={showModal}
        dataModal={dataModal}
      />

      <section className="graphs">
        <ChartComponent data={statsTicketPriority} name={'Ticket Priority'} />
        <ChartComponent data={statsTicketStatus} name={'Ticket Status'} />
        <ChartComponent data={statsTicketType} name={'Ticket Type'} />
      </section>
    </Wrapper>
  )
}

export default Dashboard
