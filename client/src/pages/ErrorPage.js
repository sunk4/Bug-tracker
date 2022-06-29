import React from 'react'
import Wrapper from '../assets/wrappers/ErrorPage'
import { Footer } from '../components'
import { Link } from 'react-router-dom'
import errorImage from '../assets/images/error_404.svg'

const ErrorPage = () => {
  return (
    <Wrapper>
      <section>
        <img src={errorImage} alt="error" />
        <h4>Ops page does not exist :-&#x28;</h4>
        <Link to="/landing" className="btn">
          back home
        </Link>
      </section>
      <Footer />
    </Wrapper>
  )
}

export default ErrorPage
