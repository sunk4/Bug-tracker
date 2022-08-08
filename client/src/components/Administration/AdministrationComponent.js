import { UsersContainer } from './'
import { Loading } from '../Global'
import { useEffect } from 'react'
import { useUsersContext } from '../../context/usersContext'
import Wrapper from './wrappers/Administration'

const AdministrationComponent = () => {
  const { getAllUsers, users, isLoadingUser } = useUsersContext()

  useEffect(() => {
    getAllUsers()
  }, [])

  if (isLoadingUser) {
    return <Loading />
  }

  return (
    <Wrapper>
      <h4>Organization</h4>
      <section className="title-administration">
        <h5>First Name</h5>
        <h5>Last Name</h5>
        <h5>Email</h5>
        <h5>role</h5>
      </section>
      {users.map((user) => {
        return <UsersContainer key={user._id} {...user} />
      })}
    </Wrapper>
  )
}

export default AdministrationComponent
