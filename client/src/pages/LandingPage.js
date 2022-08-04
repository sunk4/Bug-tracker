import LandingImg from '../assets/images/Landing-img.png'

import { Footer, Navbar } from '../components/Global'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LandingPage'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const LandingPage = () => {
  const { user } = useAppContext()

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
          <Link to="/register" className="btn">
            Login/Register
          </Link>
        </div>
        <div>
          <img src={LandingImg} alt="programmer" />
        </div>
      </section>

      <Footer />
    </Wrapper>
  )
}

export default LandingPage
