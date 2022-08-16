import { AddMemberModal } from '.'
import Wrapper from '../SingleProject/wrappers/HeaderProject'

const HeaderProject = ({
  showModal,
  displayModal,
  dataModal,
  teamMembersInProject,
}) => {
  return (
    <Wrapper>
      <h4>Team</h4>
      <button
        className="btn"
        data-modal="modal-add-member"
        onClick={displayModal}
        type="button"
      >
        New Member
      </button>
      {showModal && dataModal === 'modal-add-member' && <AddMemberModal />}
      <div>
        <h5>Name</h5>
        <h5>Email</h5>
        <h5>Phone</h5>
      </div>
      {teamMembersInProject.map((member) => {
        const { _id, firstName, lastName, email, phoneNumber } = member
        return (
          <div key={_id}>
            <h5>
              {firstName} {lastName}
            </h5>
            <h5>{email}</h5>
            <h5>{phoneNumber}</h5>
          </div>
        )
      })}
    </Wrapper>
  )
}

export default HeaderProject
