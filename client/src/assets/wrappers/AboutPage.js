import styled from 'styled-components'

const Wrapper = styled.div`
  .about-main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
    width: 70rem;
    margin: 0 auto;
  }

  .team-member-section {
    border: 1px solid var(--primary-500);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 22rem;
  }
  .team-member-img {
    object-fit: cover;
    width: 12vw;
    height: 12vw;
    border-radius: 50%;
  }

  p {
    font-size: 1rem;
    text-align: center;
    height: 8.75rem;
  }
`

export default Wrapper
