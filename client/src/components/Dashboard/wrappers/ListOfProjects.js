import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;

  h6 {
    width: 10rem;
  }

  :hover {
    cursor: pointer;
    background-color: var(--grey-200);
  }
`

export default Wrapper
