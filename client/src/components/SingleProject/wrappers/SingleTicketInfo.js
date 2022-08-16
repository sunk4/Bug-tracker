import styled from 'styled-components'

const Wrapper = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;

  div {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
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
    width: 100%;
  }
`

export default Wrapper
