import { Footer, Navbar } from '../components/Global'
import Wrapper from '../assets/wrappers/AboutPage'
import googleImg from '../assets/images/google.png'
import meImg from '../assets/images/romanTrnka.jpg'
import godImg from '../assets/images/god.jpg'

const AboutPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <section>
        <div className="team-member">
          <img className="team-member-img" src={googleImg} alt="google" />
          <h4>Google</h4>
          <p>
            Google is my best friend since 2008. He helps me with everything. He
            even finishes my sentences. And sometimes I say something stupid,
            and he is like, did you mean ..... And I am like, that's exactly
            what I meant. I love google, we are inseparable
          </p>
        </div>
        <div className="team-member">
          <img className="team-member-img" src={meImg} alt="me" />
          <h4>Roman Trnka</h4>
          <p>
            My name is Roman Trnka. I'm a passionate child who lives in
            Bratislava and passionate software engineer who will do whatever it
            takes to find and answer.
          </p>
        </div>
        <div className="team-member">
          <img className="team-member-img" src={godImg} alt="god" />
          <h4>God</h4>
          <p>
            When I wrote this code, only God and I understood what it did.
            Now... Only god knows.
          </p>
        </div>
      </section>
      <Footer />
    </Wrapper>
  )
}

export default AboutPage
