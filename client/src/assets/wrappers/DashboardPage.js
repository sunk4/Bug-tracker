import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  .graphs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0.5rem 0.1rem;
    gap: 1rem;
  }
`
export default Wrapper
