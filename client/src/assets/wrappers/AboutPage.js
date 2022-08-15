import styled from 'styled-components'

const Wrapper = styled.main`
  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
    width: 70rem;
    margin: 0 auto;
  }

  .team-member {
    border: 1px solid var(--primary-500);
    border-radius: 12px;
    display: grid;
    grid-template-rows: 2fr 1fr 2fr;
    justify-items: center;
    padding: 0.7rem;
  }
  .team-member-img {
    object-fit: cover;
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
  }

  h4 {
    text-align: center;
    letter-spacing: var(--letterSpacing);
    font-size: 1.5rem;
    color: var(--primary-500);
    font-family: var(--bodyFont);
  }

  p {
    font-size: 1rem;
    text-align: center;
    font-family: var(--bodyFont);
    height: 8.75rem;
    letter-spacing: var(--letterSpacing);
  }

  @media (max-width: 992px) {
    section {
      display: grid;
      grid-template-columns: 1fr;
      width: var(--fixed-width);
      max-width: var(--fluid-width);
    }
    .team-member-img {
      object-fit: cover;
      width: 32vw;
      height: 32vw;
    }
  }
`

export default Wrapper
