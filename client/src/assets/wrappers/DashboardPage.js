import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  top: 60px;
  left: 12rem;
  bottom: 0;
  width: calc(100% - 12rem);
  display: grid;
  grid-template-columns: 1fr;

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
  .graphs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0 4rem;
  }
`
export default Wrapper
