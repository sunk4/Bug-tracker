import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  :hover {
    background-color: var(--primary-500);
  }

  .title-user {
    text-decoration: none;
    color: var(--grey-500);
    font-size: 1rem;
  }
`

export default Wrapper
