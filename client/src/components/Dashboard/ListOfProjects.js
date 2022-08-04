import Wrapper from './wrappers/ListOfProjects'

const ListOfProjects = ({ projectName, projectDescription, user }) => {
  return (
    <Wrapper>
      <h5> {projectName}</h5>
      <h5> {projectDescription}</h5>
      <h5> {user.lastName}</h5>
    </Wrapper>
  )
}

export default ListOfProjects
