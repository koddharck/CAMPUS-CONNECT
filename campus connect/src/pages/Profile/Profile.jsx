import { getAuth, logout } from '../../utils/auth.js'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../../components/BottomNav/BottomNav.jsx'
import './Profile.css'

function Profile() {
  const user = getAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/sign-in')
  }

  return (
    <div className="screen profile-screen">
      <div className="profile-header">
        <h1>Profile</h1>
        <button className="profile-settings-btn">⚙️</button>
      </div>

      <div className="profile-info">
        <div className="profile-avatar" />
        <h2 className="profile-name">{user?.fullName || 'Campus User'}</h2>
        <p className="profile-email">{user?.email}</p>
      </div>

      <div className="profile-stats">
        <div className="profile-stat">
          <p className="profile-stat-value">12</p>
          <p className="profile-stat-label">Communities</p>
        </div>
        <div className="profile-stat">
          <p className="profile-stat-value">48</p>
          <p className="profile-stat-label">Connections</p>
        </div>
        <div className="profile-stat">
          <p className="profile-stat-value">24</p>
          <p className="profile-stat-label">Events Attended</p>
        </div>
      </div>

      <div className="profile-sections">
        <div className="profile-section">
          <h3>My Communities</h3>
          <p className="profile-placeholder">You're part of 12 communities</p>
        </div>

        <div className="profile-section">
          <h3>Saved Events</h3>
          <p className="profile-placeholder">You've saved 5 events</p>
        </div>

        <div className="profile-section">
          <h3>Account Settings</h3>
          <button className="profile-logout-btn" onClick={handleLogout}>Sign Out</button>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

export default Profile
