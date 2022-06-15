import React from 'react'
import Wrapper from '../assets/wrappers/ErrorPage'
import { Navbar, Footer } from '../components'
import { Link } from 'react-router-dom'
import errorImage from '../assets/images/error_404.svg'

const ErrorPage = () => {
  return (
    <main className="full-page">
      <Navbar />
      <Wrapper>
        <img src={errorImage} alt="error" />
        <Link to="/landing" className="btn">
          back home
        </Link>
      </Wrapper>
      <Footer />
    </main>
  )
}

export default ErrorPage
