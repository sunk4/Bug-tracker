import styled from 'styled-components'

const Wrapper = styled.section`
  position: fixed;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  display: grid;
  justify-content: center;
  width: var(--fixed-width);
  padding: 2rem;

  h4 {
    font-size: 1.5rem;
    text-align: center;
    font-family: var(--headingFont);
    letter-spacing: var(--letterSpacing);
    color: var(--primary-500);
  }

  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 2rem;
  }
`
export default Wrapper
