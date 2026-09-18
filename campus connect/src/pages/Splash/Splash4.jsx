import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button.jsx'
import './Splash4.css'

function Splash4() {
  return (
    <div className="splash-screen splash-4">
      <div className="splash-content">
        <img src="/assets/icons/campusconnect-icon-light.svg" alt="Campus Connect" className="splash-logo" />
        <h1 className="splash-title">CampusConnect</h1>
        <p className="splash-tagline">Your campus, Connected!</p>
      </div>

      <div className="splash-actions">
        <Link to="/sign-in" className="splash-button-link">
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
  )
}

export default Splash4
