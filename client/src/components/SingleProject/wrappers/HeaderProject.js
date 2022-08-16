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
    font-size: 1.3rem;
  }

  h5 {
    font-size: 1rem;
    text-align: center;
  }

  .ticket-members {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  .underline {
    border-bottom: 2px solid var(--grey-200);
    width: 100%;
  }
`

export default Wrapper
