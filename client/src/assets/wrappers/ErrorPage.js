import styled from 'styled-components'

const Wrapper = styled.main`
  section {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h4 {
    font-family: var(--bodyFont);
    font-size: 1.2rem;
    letter-spacing: var(--letterSpacing);
  }

  img {
    width: 35%;
    margin: 5rem 0;
  }
`

export default Wrapper
