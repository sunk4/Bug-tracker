import styled from 'styled-components'

const Wrapper = styled.section`
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  h5 {
    font-size: 1rem;
    font-family: var(--bodyFont);
    letter-spacing: var(--letterSpacing);
    color: var(--black);
    text-align: center;
    margin: 0;
    padding: 1.5rem;
  }

  .underline {
    border-bottom: 2px solid var(--grey-200);
    width: 80%;
  }
  .buttons {
    align-self: center;
    justify-self: center;
    padding-left: 5.5rem;
  }
`

export default Wrapper
