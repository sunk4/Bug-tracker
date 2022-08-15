import styled from 'styled-components'

const Wrapper = styled.nav`
  height: 100%;
  width: 12rem;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  background-color: var(--grey-200);

  ul {
    padding-top: 1.5rem;
    padding-left: 0;
  }

  li {
    list-style-type: none;
    padding: 0.6rem;
  }

  .icon {
    color: var(--black);
    margin-right: 0.8rem;
  }

  a {
    text-decoration: none;
    color: var(--black);
    font-size: 1.2rem;
    font-family: var(--headingFont);
    letter-spacing: var(--letterSpacing);
  }

  a:hover {
    color: var(--primary-500);
  }
`

export default Wrapper
