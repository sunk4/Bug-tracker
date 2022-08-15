import Wrapper from './wrappers/ListOfProjects'
import ModalNewProject from './ModalNewProject'
import { Link } from 'react-router-dom'
const ListOfProjects = ({
  projectsAll,
  displayModal,
  showModal,
  dataModal,
}) => {
  return (
    <Wrapper>
      <button
        onClick={displayModal}
        data-modal="modal-create-project"
        className="btn"
        type="button"
      >
        New Project
      </button>
      <div>
        <h5>Project</h5>
        <h5>Description</h5>
        <h5>Created by</h5>

        {showModal && dataModal === 'modal-create-project' && (
          <ModalNewProject />
        )}
      </div>
      <div className="underline"></div>

      {projectsAll.map((project) => {
        const { _id, projectName, projectDescription, user } = project
        return (
          <Link to={`project/${_id}`} key={_id}>
            <div className="project-info">
              <h5>{projectName}</h5>
              <h5>{projectDescription}</h5>
              <h5>
                {user.firstName} {user.lastName}
              </h5>
            </div>
          </Link>
        )
      })}
    </Wrapper>
  )
}

export default ListOfProjects
