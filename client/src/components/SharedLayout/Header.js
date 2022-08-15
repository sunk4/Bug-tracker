import Wrapper from './wrappers/Header'

const Header = ({ title }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
    </Wrapper>
  )
}

export default Header
