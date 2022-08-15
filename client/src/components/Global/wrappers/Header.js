import styled from 'styled-components'

const Wrapper = styled.header`
  background-color: var(--grey-200);
  display: grid;
  grid-template-columns: 1fr;
  h3 {
    font-size: 1.8rem;
    font-family: var(--headingFont);
    letter-spacing: var(--letterSpacing);
    color: var(--black);
    text-align: center;
    margin: 0;
    padding: 1.5rem;
  }
`

export default Wrapper
