import { NavLink } from 'react-router-dom'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { FaTicketAlt } from 'react-icons/fa'
import { GrUserAdmin } from 'react-icons/gr'
import Wrapper from './wrappers/Sidebar'
import { useAuthContext } from '../../context/authContext'
import { Logo } from '../Global'

const Sidebar = () => {
  const { user, logoutUser } = useAuthContext()

  return (
    <Wrapper>
      <Logo />
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : null)}
          >
            <AiOutlineFundProjectionScreen className="icon" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/tickets">
            <FaTicketAlt className="icon" />
            Tickets
          </NavLink>
        </li>
        {(user.role === 'admin' || user.role === 'senior') && (
          <li>
            <NavLink to="/administration">
              <GrUserAdmin className="icon" />
              Administration
            </NavLink>
          </li>
        )}
        <li>
          <button type="button" className="btn" onClick={logoutUser}>
            Logout
          </button>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Sidebar
