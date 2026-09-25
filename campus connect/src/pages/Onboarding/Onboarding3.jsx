import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button.jsx'
import './Onboarding.css'

function Onboarding3() {
  const navigate = useNavigate()

  return (
    <div className="screen onboarding-screen">
      <div>
        <div className="onboarding-image" />
        <h2 className="onboarding-title">You're all set</h2>
        <p className="onboarding-body">Your campus, connected. Let's get you started.</p>
      </div>

      <div>
        <div className="onboarding-dots">
          <span className="onboarding-dot" />
          <span className="onboarding-dot" />
          <span className="onboarding-dot active" />
        </div>
        <Button onClick={() => navigate('/home')}>Get Started</Button>
      </div>
    </div>
  )
}

export default Onboarding3
