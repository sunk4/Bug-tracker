import { AddMemberModal } from '.'

const HeaderProject = ({ showModal, displayModal, dataModal, projectName }) => {
  return (
    <>
      <h4>{projectName} </h4>
      <section>
        <div>
          <h5>Team</h5>
          <button
            className="btn"
            data-modal="modal-add-member"
            onClick={displayModal}
          >
            New Member
          </button>
          {showModal && dataModal === 'modal-add-member' && <AddMemberModal />}
        </div>
        <div>
          <h5>First name</h5>
          <h5>Last name</h5>
          <h5>Email</h5>
          <h5>Phone</h5>
        </div>
      </section>
    </>
  )
}

export default HeaderProject
