import styled from 'styled-components'

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  h6 {
    text-decoration: underline;
  }
  .title-status {
    border: 1px solid var(--grey-200);
    padding-left: 2rem;
  }
  .ticket-types {
    border: 1px solid var(--grey-200);
    padding-left: 2rem;
  }
`

export default Wrapper
