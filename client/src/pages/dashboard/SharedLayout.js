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
      <div className="header">
        <Logo />
        <h2>
          Bug <span>Tracker</span>
        </h2>
        <button type="button" className="btn" onClick={logoutUser}>
          Logout
        </button>
      </div>
      <div className="container">
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
        </nav>
      </div>
      <Outlet />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .header {
    display: flex;
    justify-content: space-between;
    margin: 1rem 6rem;
  }
  img {
    width: 15%;
  }
  span {
    color: var(--primary-500);
  }

  .container {
    display: grid;
    grid-template-columns: 200px auto;
  }

  nav {
  }
  nav ul {
  }
`

export default SharedLayout
