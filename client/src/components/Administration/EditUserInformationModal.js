import { useEffect, useState } from 'react'
import { useAppContext } from '../../context/appContext'
import { useUsersContext } from '../../context/usersContext'
import { FormRow } from '../Global'
import Wrapper from './wrappers/EditUserInformation'

const EditUserInformationModal = () => {
  const { hideModal } = useAppContext()
  const { singleUser, updateUserByAdmin, getAllUsers } = useUsersContext()

  const { _id } = singleUser

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUserByAdmin(_id, { firstName, lastName, phoneNumber, email, role })
    hideModal()
    getAllUsers()
  }

  useEffect(() => {
    setFirstName(singleUser?.firstName)
    setLastName(singleUser?.lastName)
    setPhoneNumber(singleUser?.phoneNumber)
    setEmail(singleUser?.email)
    setRole(singleUser?.role)
  }, [singleUser])

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h4>Edit User information</h4>
        <FormRow
          type="text"
          name="firstName"
          value={firstName || ''}
          handleChange={(e) => setFirstName(e.target.value)}
        />
        <FormRow
          type="text"
          name="lastName"
          value={lastName || ''}
          handleChange={(e) => setLastName(e.target.value)}
        />
        <FormRow
          type="text"
          name="phoneNumber"
          value={phoneNumber || ''}
          handleChange={(e) => setPhoneNumber(e.target.value)}
        />
        <FormRow
          type="email"
          name="email"
          value={email || ''}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormRow
          type="text"
          name="role"
          value={role || ''}
          handleChange={(e) => setRole(e.target.value)}
        />
        <div className="buttons">
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn" type="button" onClick={hideModal}>
            Close
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default EditUserInformationModal
