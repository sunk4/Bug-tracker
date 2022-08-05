import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext()

  if (!user) {
    return <Navigate to="/landing" />
  }

  return children
}

export default ProtectedRoute
