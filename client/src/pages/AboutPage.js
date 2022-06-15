import { Navbar, Footer } from '../components'
import Wrapper from '../assets/wrappers/AboutPage'

const AboutPage = () => {
  return (
    <main className="full-page">
      <Navbar />
      <Wrapper>
        <div>
          <h1>About Us </h1>
          <p>
            My name is Roman Trnka and this is my first fullstack App - using
            MERN STACK.
          </p>
        </div>
        <h2>Our team</h2>

        <h1>to BE done</h1>
      </Wrapper>

      <Footer />
    </main>
  )
}

export default AboutPage
