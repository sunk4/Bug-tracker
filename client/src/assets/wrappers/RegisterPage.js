import styled from 'styled-components'

const Wrapper = styled.section`
  .header-form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logo {
    width: 80%;
  }

  h3 {
    color: var(--primary-500);
    text-decoration: underline;
  }

  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }

  p {
    text-align: center;
  }

  span {
    color: red;
  }
`

export default Wrapper
