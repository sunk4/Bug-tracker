import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;

  :hover {
    background-color: var(--grey-200);
    cursor: pointer;
  }

  h6 {
    text-align: center;
    width: 6.25rem;
  }
`

export default Wrapper
