import { UsersContainer } from './'
import { Loading } from '../Global'
import { useEffect } from 'react'
import { useUsersContext } from '../../context/usersContext'
import Wrapper from './wrappers/AdministrationComponent'

const AdministrationComponent = () => {
  const { getAllUsers, users, isLoadingUser } = useUsersContext()

  useEffect(() => {
    getAllUsers()
    // eslint-disable-next-line
  }, [])

  if (isLoadingUser) {
    return <Loading />
  }

  return (
    <Wrapper>
      <UsersContainer users={users} />
    </Wrapper>
  )
}

export default AdministrationComponent
