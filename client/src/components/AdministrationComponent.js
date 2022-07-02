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
        <h6>First Name</h6>
        <h6>Last Name</h6>
        <h6>Email</h6>
        <h6>role</h6>
      </section>
      {users.map((user) => {
        return <UsersContainer {...user} />
      })}
    </Wrapper>
  )
}

export default AdministrationComponent
