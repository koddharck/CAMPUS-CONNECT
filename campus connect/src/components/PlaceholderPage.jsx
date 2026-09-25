import BottomNav from './BottomNav/BottomNav.jsx'
import './PlaceholderPage.css'

function PlaceholderPage({ title }) {
  return (
    <div className="screen placeholder-screen">
      <h1 className="placeholder-title">{title}</h1>
      <BottomNav />
    </div>
  )
}

export default PlaceholderPage
