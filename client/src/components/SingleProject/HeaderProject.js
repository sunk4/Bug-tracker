import { AddMemberModal, TeamComponent } from '.'
import Wrapper from '../SingleProject/wrappers/HeaderProject'

const HeaderProject = ({
  showModal,
  displayModal,
  dataModal,
  projectName,
  teamMembersInProject,
}) => {
  return (
    <Wrapper>
      <div className="header">
        <h5>Team</h5>
        <button
          className="btn"
          data-modal="modal-add-member"
          onClick={displayModal}
          type="button"
        >
          New Member
        </button>
        {showModal && dataModal === 'modal-add-member' && <AddMemberModal />}
      </div>
      <div className="titles">
        <h5>Name</h5>
        <h5>Email</h5>
        <h5>Phone</h5>
      </div>
      {teamMembersInProject.map((member) => {
        return <TeamComponent key={member._id} {...member} />
      })}
    </Wrapper>
  )
}

export default HeaderProject
