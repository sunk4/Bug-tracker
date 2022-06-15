import LandingImg from '../assets/images/Landing-img.png'
import { Navbar, Footer } from '../components'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LandingPage'

const LandingPage = () => {
  return (
    <main className="full-page">
      <Navbar />
      <Wrapper>
        <div className="section">
          <h1>
            Bug <span>Tracker</span> App
          </h1>
          <p>
            A bug tracking system or defect tracking system is a software
            application that keeps track of reported software bugs in software
            development projects. It may be regarded as a type of issue tracking
            system.
          </p>
          <Link to="/register" className="btn ">
            Login/Register
          </Link>
        </div>
        <img src={LandingImg} alt="programmer" />
      </Wrapper>
      <Footer />
    </main>
  )
}

export default LandingPage
