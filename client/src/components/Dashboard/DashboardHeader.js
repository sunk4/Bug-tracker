import ModalNewProject from './ModalNewProject'
import Wrapper from './wrappers/DashboardHeader'

const DashboardHeader = ({ displayModal, showModal, dataModal }) => {
  return (
    <Wrapper>
      <h4>Projects</h4>
      <button
        onClick={displayModal}
        data-modal="modal-create-project"
        className="btn"
        type="button"
      >
        New Project
      </button>
      {showModal && dataModal === 'modal-create-project' && <ModalNewProject />}
    </Wrapper>
  )
}

export default DashboardHeader
