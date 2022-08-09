import styled from 'styled-components'

const Wrapper = styled.section`
  .title-user {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  h6 {
    justify-self: center;
    text-align: start;
    align-self: center;
    display: inline-block;
    width: 7.5rem;
  }
  button {
    border: none;
    justify-self: center;
    align-self: center;
    cursor: pointer;
    margin-left: 1rem;
  }
  .icon-delete {
    background-color: red;
    font-size: 1.05rem;
  }
  .icon-edit {
    background-color: green;
    font-size: 1.05rem;
  }
`

export default Wrapper
