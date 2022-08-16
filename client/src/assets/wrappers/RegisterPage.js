import styled from 'styled-components'

const Wrapper = styled.main`
  display: grid;
  justify-items: center;
  padding: 2rem 0;
  form {
    background-color: var(--white);
    display: grid;
    justify-items: center;
    border-top: 10px solid var(--primary-500);
    border-bottom: 10px solid var(--primary-500);
    border-radius: 10px;
    max-width: 700px;
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
    margin: 0;
    padding: 1.5rem;
  }
  p {
    font-family: var(--headingFont);
    color: var(--black);
    letter-spacing: var(--letterSpacing);
    font-size: 1.1rem;
    text-align: center;
    margin: 0;
    padding-bottom: 1.5rem;
    width: 80%;
  }

  .temp-paragraph {
    border: 1px solid red;
  }

  p > span {
    color: red;
  }

  .login-btn {
    margin: 1rem 0;
  }

  .isMember {
    border: none;
    font-family: var(--headingFont);
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    font-size: 1.1rem;
    background-color: var(--white);
    cursor: pointer;
  }
`

export default Wrapper
