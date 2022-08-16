import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  .graphs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0.5rem 0.1rem;
    gap: 1rem;
    position: relative;
    left: 12rem;
    width: calc(100% - 12rem);
    padding: 1rem 2rem;
  }

  @media (max-width: 992px) {
    .graphs {
      grid-template-columns: 1fr;
    }
  }
`
export default Wrapper
