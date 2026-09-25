import { Link, useLocation } from 'react-router-dom'
import './BottomNav.css'

const NAV_ITEMS = [
  { path: '/home', label: 'Home' },
  { path: '/discover', label: 'Discover' },
  { path: '/events', label: 'Events' },
  { path: '/connections', label: 'Chats' },
  { path: '/profile', label: 'Profile' },
]

function BottomNav() {
  const location = useLocation()

  return (
    <nav className="bottom-nav">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`bottom-nav-item ${location.pathname === item.path ? 'active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default BottomNav
