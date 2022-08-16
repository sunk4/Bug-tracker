import styled from 'styled-components'

const Wrapper = styled.section`
  .main-title {
    display: grid;
    grid-template-columns: 1fr 108px;
  }

  h4,
  h5 {
    font-family: var(--bodyFont);
    letter-spacing: var(--letterSpacing);
    color: var(--black);
  }

  h4 {
    font-size: 1.2rem;
  }

  h5 {
    font-size: 1rem;
  }

  .ticket-members {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .underline {
    border-bottom: 2px solid var(--grey-200);
    width: 85%;
  }
`

export default Wrapper
