import { useEffect } from 'react'
import { useAppContext } from '../context/appContext'

const TicketsContainerInProject = ({ description, title, user: userId }) => {
  const { getSingleUser, singleUser } = useAppContext()

  const { firstName, lastName } = singleUser

  useEffect(() => {
    getSingleUser(userId)
  }, [])

  return (
    <div>
      <h5>{title}</h5>
      <h5>{description}</h5>
      <h5>
        {firstName} {lastName}
      </h5>
    </div>
  )
}

export default TicketsContainerInProject
