import { UsersContainer, AdministrationTitle } from './'
import { Loading } from '../Global'
import { useEffect } from 'react'
import { useUsersContext } from '../../context/usersContext'
import Wrapper from './wrappers/AdministrationComponent'

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
      <AdministrationTitle />
      {users.map((user) => {
        return <UsersContainer key={user._id} {...user} />
      })}
    </Wrapper>
  )
}

export default AdministrationComponent
