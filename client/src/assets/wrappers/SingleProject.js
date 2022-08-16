import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  top: 60px;
  left: 12rem;
  bottom: 0;
  width: calc(100% - 12rem);

  .title {
    background-color: var(--grey-200);
  }
  .tickets-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .team {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 2rem;
  }

  .ticket {
    display: grid;
    grid-template-columns: 1fr;
    padding-right: 2rem;
  }

  .single-ticket {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
  }

  .none-button {
    all: unset;
  }
`
export default Wrapper
