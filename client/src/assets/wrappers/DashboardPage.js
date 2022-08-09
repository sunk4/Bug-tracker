import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  top: 60px;
  left: 12rem;
  bottom: 0;
  width: calc(100% - 12rem);
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
