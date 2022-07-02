import Wrapper from '../../assets/wrappers/AllDashboardPages'
import { UsersContainer } from '../../components/'
import { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
const Administration = () => {
  const { getAllUsers, users } = useAppContext()

  useEffect(() => {
    getAllUsers()
  }, [])

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

export default Administration
