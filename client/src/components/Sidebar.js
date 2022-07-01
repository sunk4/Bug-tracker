import { Link, NavLink } from 'react-router-dom'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { FaTicketAlt } from 'react-icons/fa'
import { GrUserAdmin } from 'react-icons/gr'
import Wrapper from '../assets/wrappers//Sidebar'

const Sidebar = () => {
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
      <div className="sidebar-link">
        <NavLink to="/administration">
          <GrUserAdmin className="icon" />
          Administration
        </NavLink>
      </div>
    </Wrapper>
  )
}

export default Sidebar
