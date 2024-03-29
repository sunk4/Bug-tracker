import LandingImg from '../assets/images/Landing-img.png'
import { Footer, Navbar } from '../components/Global'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LandingPage'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'

const LandingPage = () => {
  const { user } = useAuthContext()

  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  return (
    <Wrapper>
      <Navbar />
      <section>
        <div>
          <h1>
            Bug <span>Tracker</span> App
          </h1>
          <p>
            A bug tracking system or defect tracking system is a software
            application that keeps track of reported software bugs in software
            development projects. It may be regarded as a type of issue tracking
            system.
          </p>
          <Link className="btn" to="/register">
            Login/Register
          </Link>
        </div>

        <img className="main-image" src={LandingImg} alt="programmer" />
      </section>

      <Footer />
    </Wrapper>
  )
}

export default LandingPage
