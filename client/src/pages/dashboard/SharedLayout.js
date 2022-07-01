import { Outlet } from 'react-router-dom'
import { Header, Sidebar } from '../../components'
import Wrapper from '../../assets/wrappers/SharedLayout'

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <Outlet />
    </Wrapper>
  )
}

export default SharedLayout
