import BottomNav from '../../components/BottomNav/BottomNav.jsx'
import './Events.css'

const upcomingEvents = [
  { id: 1, title: 'Anybook Book Club', date: 'Tomorrow', location: 'Behind Major Library' },
  { id: 2, title: 'Underground Rave', date: 'Sat, Sep 28', location: 'Main Campus Grounds' },
  { id: 3, title: 'Tech Talk Wednesday', date: 'Wed, Oct 2', location: 'Tech Hub Building' },
]

function Events() {
  return (
    <div className="screen events-screen">
      <div className="events-header">
        <h1>Events</h1>
        <button className="events-filter-btn">⚙️</button>
      </div>

      <div className="events-tabs">
        <button className="events-tab active">All</button>
        <button className="events-tab">Upcoming</button>
        <button className="events-tab">Interested</button>
      </div>

      <div className="events-list">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="events-card">
            <div className="events-card-image" />
            <div className="events-card-content">
              <h3 className="events-card-title">{event.title}</h3>
              <p className="events-card-date">📅 {event.date}</p>
              <p className="events-card-location">📍 {event.location}</p>
              <button className="events-card-button">View Details</button>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}

export default Events
