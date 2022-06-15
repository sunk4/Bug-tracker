import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy;{new Date().getFullYear()}
        <span>Bug Tracker </span>
      </h5>
      <h5> All rights reserved</h5>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  span {
    color: var(--primary-500);
    margin: 0.4rem;
  }
  h5 {
    text-transform: none;
    line-height: 1.25;
  }
`

export default Footer
