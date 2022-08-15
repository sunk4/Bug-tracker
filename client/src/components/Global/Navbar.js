import Wrapper from './wrappers/Navbar'
import { NavLink, Link } from 'react-router-dom'
import { Logo } from './'

const Navbar = () => {
  return (
    <Wrapper>
      <Link to="/landing">
        <Logo />
      </Link>
      <ul>
        <li>
          <NavLink
            to="/landing"
            className={({ isActive }) => (isActive ? 'active-home' : null)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active-about' : null)}
          >
            About us
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Navbar
