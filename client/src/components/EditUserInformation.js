import { useState } from 'react'
import { useAppContext } from '../context/appContext'
import { FormRow } from '../components'

const EditUserInformation = () => {
  const { singleUser, updateUserByAdmin, getAllUsers } = useAppContext()

  const { _id } = singleUser

  const [firstName, setFirstName] = useState('dickead')
  const [lastName, setLastName] = useState(singleUser?.lastName)
  const [phoneNumber, setPhoneNumber] = useState(singleUser?.phoneNumber)
  const [email, setEmail] = useState(singleUser?.email)
  const [role, setRole] = useState(singleUser?.role)

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUserByAdmin(_id, { firstName, lastName, phoneNumber, email, role })
    getAllUsers()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormRow
          type="text"
          name="firstName"
          value={firstName}
          handleChange={(e) => setFirstName(e.target.value)}
        />
        <FormRow
          type="text"
          name="lastName"
          value={lastName}
          handleChange={(e) => setLastName(e.target.value)}
        />
        <FormRow
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          handleChange={(e) => setPhoneNumber(e.target.value)}
        />
        <FormRow
          type="email"
          name="email"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <FormRow
          type="text"
          name="role"
          value={role}
          handleChange={(e) => setRole(e.target.value)}
        />
        <button className="btn btn-block" type="submit">
          Save changes
        </button>
      </form>
    </div>
  )
}

export default EditUserInformation
