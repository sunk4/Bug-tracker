import { Navbar, Footer } from '../components'
import Wrapper from '../assets/wrappers/AboutPage'
import googleImg from '../assets/images/google.png'
import meImg from '../assets/images/romanTrnka.jpg'
import godImg from '../assets/images/god.jpg'

const AboutPage = () => {
  return (
    <main className="full-page">
      <Navbar />
      <Wrapper>
        <section className="about-section">
          <section className="first-member member">
            <img src={googleImg} alt="google" />
            <h4>Google</h4>
            <p>
              Minim labore duis labore id. Labore labore aliquip velit nostrud
              incididunt quis labore adipisicing. Non eiusmod dolor ipsum cillum
              ipsum sit nostrud esse nisi cillum sunt proident elit. Sint irure
              Lorem laborum duis fugiat fugiat cillum est eiusmod exercitation
              fugiat.
            </p>
          </section>
          <section className="second-member member">
            <img src={meImg} alt="me" />
            <h4>Roman Trnka</h4>
            <p>
              My name is Roman Trnka and this is my first fullstack App - using
              MERN STACK.
            </p>
          </section>
          <section className="third-member member">
            <img src={godImg} alt="god" />
            <h4>God</h4>
            <p>
              Minim labore duis labore id. Labore labore aliquip velit nostrud
              incididunt quis labore adipisicing. Non eiusmod dolor ipsum cillum
              ipsum sit nostrud esse nisi cillum sunt proident elit. Sint irure
              Lorem laborum duis fugiat fugiat cillum est eiusmod exercitation
              fugiat.
            </p>
          </section>
        </section>
      </Wrapper>

      <Footer />
    </main>
  )
}

export default AboutPage
