import { Outlet } from 'react-router-dom'
import { Sidebar } from '../../components/SharedLayout'
import Wrapper from '../../assets/wrappers/SharedLayout'

const SharedLayout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Outlet />
    </Wrapper>
  )
}

export default SharedLayout
