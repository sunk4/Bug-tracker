import { useEffect } from 'react'
import Wrapper from '../../assets/wrappers/DashboardPage'
import { ListOfProjects, ModalNewProject } from '../../components'
import { useAppContext } from '../../context/appContext'
import { Loading, ChartComponent } from '../../components/'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const {
    showModal,
    displayModal,
    getAllProjects,
    projectsAll,
    isLoading,
    getAllTickets,
    ticketsAll: data,
  } = useAppContext()

  useEffect(() => {
    getAllProjects()
  }, [])

  useEffect(() => {
    getAllTickets()
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
