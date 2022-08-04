import { Logo } from '../Global'
import { useAuthContext } from '../../context/authContext'
import Wrapper from './wrappers/Header'

const Header = () => {
  const { logoutUser } = useAuthContext()
  return (
    <Wrapper>
      <Logo />
      <button type="button" className="btn" onClick={logoutUser}>
        Logout
      </button>
    </Wrapper>
  )
}

export default Header
