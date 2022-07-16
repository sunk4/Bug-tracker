import { useEffect } from 'react'
import Wrapper from '../../assets/wrappers/DashboardPage'
import { ListOfProjects, ModalNewProject } from '../../components'
import { useAppContext } from '../../context/appContext'
import Loading from '../../components/Loading'
const Dashboard = () => {
  const { showModal, displayModal, getAllProjects, projectsAll, isLoading } =
    useAppContext()

  useEffect(() => {
    getAllProjects()
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
            return <ListOfProjects key={project._id} {...project} />
          })}
        </section>
      )}
    </Wrapper>
  )
}

export default Dashboard
