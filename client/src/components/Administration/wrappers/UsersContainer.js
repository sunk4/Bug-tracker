import styled from 'styled-components'

const Wrapper = styled.section`
  .title-user {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
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
    border-radius: 50%;
    background-color: #fff;
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
