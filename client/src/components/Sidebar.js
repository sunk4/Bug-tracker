import { NavLink } from 'react-router-dom'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { FaTicketAlt } from 'react-icons/fa'
import { GrUserAdmin } from 'react-icons/gr'
import Wrapper from '../assets/wrappers//Sidebar'
import { useAppContext } from '../context/appContext'

const Sidebar = () => {
  const { user } = useAppContext()

  return (
    <Wrapper>
      <div className="sidebar-link">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active' : null)}
        >
          <AiOutlineFundProjectionScreen className="icon" />
          Dashboard
        </NavLink>
      </div>
      <div className="sidebar-link">
        <NavLink to="/tickets">
          <FaTicketAlt className="icon" />
          Tickets
        </NavLink>
      </div>
      {(user.role === 'admin' || user.role === 'senior') && (
        <div className="sidebar-link">
          <NavLink to="/administration">
            <GrUserAdmin className="icon" />
            Administration
          </NavLink>
        </div>
      )}
    </Wrapper>
  )
}

export default Sidebar
