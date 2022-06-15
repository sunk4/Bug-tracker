import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  padding: 5rem 2rem;
  .section {
    padding: 2rem 7rem;
  }
  img {
    width: 400px;
  }
  span {
    color: var(--primary-500);
  }
`

export default Wrapper
