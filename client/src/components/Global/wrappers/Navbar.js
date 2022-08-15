import styled from 'styled-components'

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  padding: 0.8rem 4.5rem;
  margin: 0 4rem;

  ul {
    display: grid;
    grid-template-columns: 100px 100px;
  }

  ul li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
    font-family: var(--bodyFont);
    letter-spacing: var(--letterSpacing);
    color: var(--black);
  }

  .active-home {
    color: var(--primary-500);
  }

  .active-about {
    color: var(--primary-500);
  }
  .logo {
    width: 200px;
    cursor: pointer;
  }

  @media (max-width: 991px) {
    display: grid;
    grid-template-columns: 1fr;
    .logo {
      display: none;
    }
  }
`

export default Wrapper
