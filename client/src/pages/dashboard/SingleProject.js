import { useParams } from 'react-router-dom'
import { TeamComponent } from '../../components'
import Wrapper from '../../assets/wrappers/SingleProject'

const SingleProject = () => {
  const { id } = useParams()
  console.log(id)
  return (
    <Wrapper>
      <TeamComponent />
    </Wrapper>
  )
}

export default SingleProject
