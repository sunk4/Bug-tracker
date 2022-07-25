import { useParams } from 'react-router-dom'
import { TeamComponent } from '../../components'
import Wrapper from '../../assets/wrappers/SingleProject'
import { useAppContext } from '../../context/appContext'
import { useEffect } from 'react'

const SingleProject = () => {
  const { id } = useParams()

  const { getSingleProject, singleProject, teamMembersInProject } =
    useAppContext()

  useEffect(() => {
    getSingleProject(id)
  }, [])

  return (
    <Wrapper>
      <h4>{singleProject.projectName} </h4>
      <section>
        <div>
          <h5>Team</h5>
          <button className="btn">New Member</button>
        </div>
        <div>
          <h5>First name</h5>
          <h5>Last name</h5>
          <h5>Email</h5>
          <h5>Phone</h5>
        </div>
      </section>
      <section>
        {teamMembersInProject.map((member) => {
          return <TeamComponent key={member._id} {...member} />
        })}
      </section>
    </Wrapper>
  )
}

export default SingleProject
