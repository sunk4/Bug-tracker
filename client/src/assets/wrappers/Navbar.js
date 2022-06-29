import styled from 'styled-components'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 50% 0 8rem;
  height: 10%;

  .nav-links {
    display: flex;
    gap: 0 2rem;
  }
  .nav-links li {
    font-size: 1.5rem;
  }
  li:hover {
    text-decoration: underline;
  }

  .active-home {
    color: var(--primary-500);
    text-decoration: underline;
  }

  .active-about {
    color: var(--primary-500);
    text-decoration: underline;
  }

  .logo {
    width: 250px;
  }
`

export default Wrapper
