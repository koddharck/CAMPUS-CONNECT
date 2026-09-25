import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button.jsx'
import './Onboarding.css'

function Onboarding2() {
  const navigate = useNavigate()

  return (
    <div className="screen onboarding-screen">
      <Link to="/onboarding-3" className="onboarding-skip">Skip</Link>

      <div>
        <div className="onboarding-image" />
        <h2 className="onboarding-title">Never miss an event</h2>
        <p className="onboarding-body">Get notified about campus events, matches, and announcements as they happen.</p>
      </div>

      <div>
        <div className="onboarding-dots">
          <span className="onboarding-dot" />
          <span className="onboarding-dot active" />
          <span className="onboarding-dot" />
        </div>
        <Button onClick={() => navigate('/onboarding-3')}>Next</Button>
      </div>
    </div>
  )
}

export default Onboarding2
