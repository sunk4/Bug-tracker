import styled from 'styled-components'

const Wrapper = styled.nav`
  height: 100%;
  width: 12rem;
  position: fixed;
  z-index: 1;
  top: 60px;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
  background-color: var(--grey-200);
  .sidebar-link {
    font-size: 1.2rem;
  }
  .active {
    background-color: var(--primary-500);
  }
  .sidebar-link:hover {
    background-color: var(--primary-500);
  }
  .icon {
    margin-right: 0.5rem;
  }
`

export default Wrapper
