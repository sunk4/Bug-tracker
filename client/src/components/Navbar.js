import Wrapper from '../assets/wrappers/Navbar'
import { Link } from 'react-router-dom'
import { Logo } from '../components'

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/landing">
            <Logo />
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/landing">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default Navbar
