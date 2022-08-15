import styled from 'styled-components'

const Wrapper = styled.main`
  display: grid;
  justify-items: center;

  form {
    background-color: var(--white);
    display: grid;
    justify-items: center;
    border: 1px solid black;
  }

  .logo {
    width: 300px;
  }

  h3 {
    font-size: 2rem;
    font-family: var(--headingFont);
    letter-spacing: var(--letterSpacing);
    color: var(--primary-500);
    text-align: center;
  }
  p {
  }
`

export default Wrapper
