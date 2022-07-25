import { useParams } from 'react-router-dom'
import { TeamComponent } from '../../components'
import Wrapper from '../../assets/wrappers/SingleProject'
import { useAppContext } from '../../context/appContext'
import { useEffect } from 'react'

const SingleProject = () => {
  const { id } = useParams()
  console.log(id)
  const { getSingleProject, singleProject, getSingleUser, singleUser } =
    useAppContext()

  const { projectUsers } = singleProject

  useEffect(() => {
    getSingleProject(id)
  }, [])

  useEffect(() => {
    getSingleUser()
  }, [])

  return (
    <Wrapper>
      <h4>{singleProject.projectName} </h4>
      <TeamComponent />
    </Wrapper>
  )
}

export default SingleProject
