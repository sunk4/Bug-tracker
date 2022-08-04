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
  const { showModal, displayModal, ticketsAll: data } = useAppContext()
  const { getAllUsers } = useUsersContext()
  const { getAllTickets } = useTicketsContext()
  const { getAllProjects, projectsAll, isLoading } = useProjectContext()

  useEffect(() => {
    getAllProjects()
    getAllTickets()
    getAllUsers()
  }, [])

  return (
    <Wrapper>
      <section className="header">
        <h4>Projects</h4>
        <button onClick={displayModal} className="btn">
          New Project
        </button>
        {showModal && <ModalNewProject />}
      </section>
      {isLoading ? (
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

      {/* <ChartComponent data={data} /> */}
    </Wrapper>
  )
}

export default Dashboard
