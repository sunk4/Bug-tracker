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
  button {
    cursor: pointer;
    border: none;
    background-color: var(--grey-50);
    padding: 0.5rem;
  }

  .icon {
    font-size: 1.2rem;
    background-color: var(--grey-50);
  }
  .buttons {
    align-self: center;
    justify-self: center;
    margin-left: 6rem;
  }
`

export default Wrapper
