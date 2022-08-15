import styled from 'styled-components'

const Wrapper = styled.main`
  section {
    display: grid;
    grid-template-columns: 1fr;
    margin: 1rem 3rem;
  }

  h1 {
    font-size: 2.5rem;
    font-family: var(--headingFont);
    letter-spacing: var(--letterSpacing);
  }

  h1 span {
    color: var(--primary-500);
  }

  p {
    font-family: var(--bodyFont);
    font-size: 1rem;
    letter-spacing: var(--letterSpacing);
    margin-bottom: 2rem;
  }

  .main-image {
    display: none;
  }
  @media (min-width: 992px) {
    section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      width: 90vw;
      padding: 3rem 6rem;
    }
    .main-image {
      display: block;
      width: 80%;
      height: 80%;
    }

    p {
      width: 80%;
    }
  }
`

export default Wrapper
