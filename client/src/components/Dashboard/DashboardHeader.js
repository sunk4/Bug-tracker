import ModalNewProject from './ModalNewProject'

const DashboardHeader = ({ displayModal, showModal, dataModal }) => {
  return (
    <section className="header">
      <h4>Projects</h4>
      <button
        onClick={displayModal}
        data-modal="modal-create-project"
        className="btn"
      >
        New Project
      </button>
      {showModal && dataModal === 'modal-create-project' && <ModalNewProject />}
    </section>
  )
}

export default DashboardHeader
