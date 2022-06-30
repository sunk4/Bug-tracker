import { Logo } from './'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/wrappers/Header'

const Header = () => {
  const { logoutUser } = useAppContext()
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
