import Wrapper from '../assets/wrappers/Navbar'
import { NavLink, Link } from 'react-router-dom'
import { Logo } from '../components'

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/landing">
        <Logo />
      </Link>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/landing"
            className={({ isActive }) => isActive && 'active'}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive && 'active'}
          >
            About us
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Navbar
