import { Link } from 'react-router-dom'
import './Splash2.css'

function Splash2() {
  return (
    <div className="splash-screen splash-2">
      <Link to="/splash-3" className="splash-skip-link">Skip</Link>
      
      <div className="splash-content">
        <img src="/assets/icons/campusconnect-icon-color.svg" alt="Campus Connect" className="splash-logo" />
        <h1 className="splash-title">CampusConnect</h1>
        <p className="splash-tagline">Your campus, Connected!</p>
      </div>
    </div>
  )
}

export default Splash2
