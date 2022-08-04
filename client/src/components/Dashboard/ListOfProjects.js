import Wrapper from './wrappers/ListOfProjects'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
const ListOfProjects = ({ projectName, projectDescription, user }) => {
  return (
    <Wrapper>
      <h5> {projectName}</h5>
      <h5> {projectDescription}</h5>
      <h5> {user.lastName}</h5>
      <BiDotsHorizontalRounded />
    </Wrapper>
  )
}

export default ListOfProjects
