import styled from 'styled-components'

const Wrapper = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  height: 3rem;
  width: 100%;
  padding-bottom: 4rem;

  h5 {
    font-family: var(--bodyFont);
    letter-spacing: var(--letterSpacing);
    text-align: center;
    font-size: 1rem;
  }

  span {
    color: var(--primary-500);
  }
`

export default Wrapper
