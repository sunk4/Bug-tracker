import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  left: 12rem;
  width: calc(100% - 12rem);
  padding: 1rem 2rem;

  .project-title,
  .project-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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

  a {
    text-decoration: none;
  }
  .underline {
    border-bottom: 2px solid var(--grey-200);
    width: 100%;
  }

  .project-info:hover {
    background-color: var(--grey-100);
  }
`

export default Wrapper
