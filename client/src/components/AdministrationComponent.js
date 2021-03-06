import { UsersContainer, Loading } from './'

import { useEffect } from 'react'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/AdministrationComponent'

const AdministrationComponent = () => {
  const { getAllUsers, users, isLoading } = useAppContext()

  useEffect(() => {
    getAllUsers()
  }, [])

  if (isLoading) {
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
