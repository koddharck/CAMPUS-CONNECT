import BottomNav from '../../components/BottomNav/BottomNav.jsx'
import './Discover.css'

const suggestedStudents = [
  { id: 1, name: 'Princess Rapunzel', mutualCommunities: 3 },
  { id: 2, name: 'Hadassah David', mutualCommunities: 6 },
  { id: 3, name: 'Agnes Adebola', mutualCommunities: 5 },
]

const communitiesToExplore = [
  { id: 1, name: 'Now Sounds Ravers', members: '1.8k', activity: 'Very Active' },
  { id: 2, name: 'Developers Network', members: '1.8k', activity: 'Very Active' },
  { id: 3, name: 'Book Lovers Club', members: '2.4k', activity: 'Active' },
]

function Discover() {
  return (
    <div className="screen discover-screen">
      <div className="discover-header">
        <button className="discover-back-btn">←</button>
        <img src="/assets/icons/campusconnect-icon-mono.svg" alt="Campus Connect" className="discover-logo" />
        <button className="discover-notify-btn">🔔</button>
      </div>

      <div className="discover-section">
        <div className="discover-section-header">
          <h2>STUDENTS YOU MAY KNOW</h2>
          <a href="#" className="discover-see-all">See all</a>
        </div>
        <div className="discover-cards-row">
          {suggestedStudents.map((student) => (
            <div key={student.id} className="discover-card">
              <div className="discover-card-avatar" />
              <p className="discover-card-name">{student.name}</p>
              <p className="discover-card-meta">{student.mutualCommunities} mutual communities</p>
              <button className="discover-card-action">+</button>
            </div>
          ))}
        </div>
      </div>

      <div className="discover-section">
        <div className="discover-section-header">
          <h2>EXPLORE COMMUNITIES</h2>
          <a href="#" className="discover-see-all">See more</a>
        </div>
        <div className="discover-cards-row">
          {communitiesToExplore.map((community) => (
            <div key={community.id} className="discover-community-card">
              <div className="discover-community-icon" />
              <p className="discover-community-name">{community.name}</p>
              <p className="discover-community-info">
                {community.members} Members • {community.activity}
              </p>
              <button className="discover-community-action">→</button>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

export default Discover
