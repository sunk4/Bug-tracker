import Wrapper from './wrappers/ListOfProjects'

const ListOfProjects = ({ projectName, projectDescription, user }) => {
  return (
    <Wrapper>
      <h6> {projectName}</h6>
      <h6> {projectDescription}</h6>
      <h6> {user.lastName}</h6>
    </Wrapper>
  )
}

export default ListOfProjects
