import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  top: 60px;
  left: 12rem;
  bottom: 0;
  width: calc(100% - 12rem);

  .main-title {
    background-color: var(--grey-200);
  }

  h4 {
    margin-bottom: 0;
  }

  .titles-tickets {
    display: flex;
    justify-content: space-around;
    background-color: var(--grey-100);
  }
`
export default Wrapper
