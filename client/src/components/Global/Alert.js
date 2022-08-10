import { useAuthContext } from '../../context/authContext'

const Alert = () => {
  const { alertTypeAuth, alertTextAuth } = useAuthContext()

  return <div className={`alert alert-${alertTypeAuth}`}>{alertTextAuth}</div>
}

export default Alert
