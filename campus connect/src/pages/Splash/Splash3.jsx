import { Link } from 'react-router-dom'
import './Splash3.css'

function Splash3() {
  return (
    <div className="splash-screen splash-3">
      <Link to="/splash-4" className="splash-skip-link">Skip</Link>
    </div>
  )
}

export default Splash3
