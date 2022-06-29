import { Outlet, Link } from 'react-router-dom'

import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { FaTicketAlt } from 'react-icons/fa'
import { GrUserAdmin } from 'react-icons/gr'

import Wrapper from '../../assets/wrappers/SharedLayout'
import Header from '../../components/Header'

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <ul>
        <li>
          <Link to="/">
            <AiOutlineFundProjectionScreen />
            dashboard
          </Link>
        </li>
        <li>
          <Link to="/tickets">
            <FaTicketAlt />
            tickets
          </Link>
        </li>
        <li>
          <Link to="/administration">
            <GrUserAdmin />
            administration
          </Link>
        </li>
      </ul>
      <Outlet />
    </Wrapper>
  )
}

export default SharedLayout
