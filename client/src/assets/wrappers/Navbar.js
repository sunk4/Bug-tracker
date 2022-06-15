import styled from 'styled-components'

const Wrapper = styled.nav`
  .nav-center {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }
  .nav-header {
    display: flex;
    justify-content: center;
  }
  .nav-links {
    display: flex;
    justify-content: center;
    li {
      margin: 0 0.5rem;
      a {
        color: var(--grey-700);
        font-size: 1.5rem;
        text-transform: capitalize;
        letter-spacing: var(--letter-spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--primary-600);
        }
      }
    }
  }
  .logo {
    width: 220px;
  }
`

export default Wrapper
