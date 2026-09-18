import { Link } from 'react-router-dom'
import './Splash1.css'

function Splash1() {
  return (
    <div className="splash-screen splash-1">
      <Link to="/splash-2" className="splash-skip-link">Skip</Link>
    </div>
  )
}

export default Splash1
