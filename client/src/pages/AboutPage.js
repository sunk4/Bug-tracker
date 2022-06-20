import { Navbar, Footer } from '../components'
// import Wrapper from '../assets/wrappers/AboutPage'
import googleImg from '../assets/images/google.png'
import meImg from '../assets/images/romanTrnka.jpg'
import godImg from '../assets/images/god.jpg'
import styled from 'styled-components'

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

const Wrapper = styled.section`
  h2 {
    text-align: center;
  }
  .about-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'a b c';
    gap: 1rem;
  }

  .member {
    margin: 5rem;
  }

  .first-member {
    grid-area: a;
  }
  .second-member {
    grid-area: b;
  }
  .third-member {
    grid-area: c;
  }

  img {
    width: 40%;
    border-radius: 50%;
  }
`

export default AboutPage
