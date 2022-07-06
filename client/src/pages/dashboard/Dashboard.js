import { useState } from 'react'
import Wrapper from '../../assets/wrappers/DashboardPage'
import { ModalNewProject } from '../../components'
import { useAppContext } from '../../context/appContext'
const Dashboard = () => {
  const { showModal, displayModal} = useAppContext()

  return (
    <Wrapper>
      <h4>Projects</h4>
      <button onClick={displayModal} className="btn">
        New Project
      </button>
      {showModal && <ModalNewProject />}
    </Wrapper>
  )
}

export default Dashboard
