import styled from 'styled-components'

const Wrapper = styled.section`
  .main-title {
    display: grid;
    grid-template-columns: 1fr 108px;
  }
  .ticket-title,
  .ticket-info {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
  }

  .ticket-info:hover {
    cursor: pointer;
    background-color: var(--grey-200);
  }

  h4,
  h5 {
    font-family: var(--bodyFont);
    letter-spacing: var(--letterSpacing);
    color: var(--black);
  }

  h4 {
    font-size: 1.3rem;
  }

  h5 {
    font-size: 1rem;
    text-align: center;
  }

  .underline {
    border-bottom: 2px solid var(--grey-200);
    width: 100%;
  }

  .btn-delete-edit {
    cursor: pointer;
    border: none;
    background-color: var(--grey-50);
    padding: 0.5rem;
  }

  .icon {
    font-size: 1.2rem;
    background-color: var(--grey-50);
  }

  .buttons {
    margin-left: 3.5rem;
  }
`
export default Wrapper
