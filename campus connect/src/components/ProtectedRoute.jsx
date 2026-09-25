import { Navigate } from 'react-router-dom'
import { isLoggedIn } from '../utils/auth.js'

function ProtectedRoute({ children }) {
  if (!isLoggedIn()) {
    return <Navigate to="/sign-in" replace />
  }

  return children
}

export default ProtectedRoute
