import Wrapper from './wrappers/Footer'

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy;{new Date().getFullYear()} Bug<span> Tracker </span>All rights
        reserved
      </h5>
    </Wrapper>
  )
}

export default Footer
