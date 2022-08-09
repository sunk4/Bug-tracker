import Wrapper from './wrappers/AdministrationTitle'

const AdministrationTitle = () => {
  return (
    <Wrapper>
      <div className="main-title">
        <h4>Organization</h4>
      </div>
      <section className="title-administration">
        <h5>Name</h5>
        <h5>role</h5>
        <h5>email</h5>
        <h5>Actions</h5>
      </section>
    </Wrapper>
  )
}

export default AdministrationTitle
