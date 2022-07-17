import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  top: 60px;
  left: 12rem;
  bottom: 0;
  width: calc(100% - 12rem);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
    background-color: var(--grey-200);
  }
  .titles-projects {
    display: flex;
    justify-content: space-around;
    background-color: var(--grey-100);
  }
`
export default Wrapper
