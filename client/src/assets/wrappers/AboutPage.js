import styled from 'styled-components'

const Wrapper = styled.section`
  h2 {
    text-align: center;
  }
  .about-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'a b c';
    gap: 1rem;
  }

  .member {
    margin: 5rem;
  }

  .first-member {
    grid-area: a;
  }
  .second-member {
    grid-area: b;
  }
  .third-member {
    grid-area: c;
  }

  img {
    width: 40%;
    border-radius: 50%;
  }
`

export default Wrapper
