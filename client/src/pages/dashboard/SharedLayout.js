import { Outlet, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Logo } from '../../components'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { FaTicketAlt } from 'react-icons/fa'
import { GrUserAdmin } from 'react-icons/gr'
import { useAppContext } from '../../context/appContext'

const SharedLayout = () => {
  const { logoutUser } = useAppContext()

  return (
    <Wrapper>
      <div>
        <Logo />
        <h2>
          Bug <span>Tracker</span>
        </h2>
      </div>
      <nav>
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
        <button className="btn" onClick={logoutUser}>
          Logout
        </button>
      </nav>
      <Outlet />
    </Wrapper>
  )
}

const Wrapper = styled.main``

export default SharedLayout
