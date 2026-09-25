import { getAuth } from '../../utils/auth.js'
import BottomNav from '../../components/BottomNav/BottomNav.jsx'
import './Home.css'

const trendingEvents = [
  { id: 1, title: 'Anybook Book Club', blurb: 'The meeting point for the coolest nerds. Talk, read & diss books', location: 'Behind Major Library' },
  { id: 2, title: 'Underground Rave', blurb: 'The biggest electronic music festival of the semester', location: 'Behind Major Library' },
  { id: 3, title: 'Anybook Book Club', blurb: 'The meeting point for the coolest nerds', location: 'Behind Major Library' },
]

const feedPosts = [
  {
    id: 1,
    community: 'Sports Community',
    time: '23mins ago',
    title: 'Ultra-Modern Sport Complex Set To Open Soon',
    body: 'A service discovery and booking platform designed to make finding trusted services easier.',
  },
  {
    id: 2,
    community: 'Metaverse Designer',
    time: '23mins ago',
    title: 'Grand-finale Of Metaverse Design VS Developer',
    body: 'Many competitions and tech battles later, the Metaverse stood against every other community.',
  },
]

function Home() {
  const user = getAuth()
  const firstName = user?.fullName?.split(' ')[0] || 'there'

  return (
    <div className="screen home-screen">
      <div className="home-header">
        <div>
          <h1 className="home-greeting">Hello, {firstName}</h1>
          <p className="home-subtitle">Ready for the latest campus gist? Dive in</p>
        </div>
      </div>

      <div className="home-banner">
        <p className="home-banner-tag">BREAKING NEWS!</p>
        <h2 className="home-banner-title">Interfaculty Pageantry & Football Match Announced!</h2>
        <p className="home-banner-body">Get ready for an unforgettable moment. Tickets drop tomorrow.</p>
        <button className="home-banner-button">Get Details</button>
      </div>

      <div className="home-section-header">
        <p className="home-section-title">TRENDING EVENTS</p>
        <p className="home-section-link">See all</p>
      </div>

      <div className="home-events-row">
        {trendingEvents.map((event) => (
          <div className="home-event-card" key={event.id}>
            <div className="home-event-image" />
            <p className="home-event-title">{event.title}</p>
            <p className="home-event-blurb">{event.blurb}</p>
            <p className="home-event-location">📍 {event.location}</p>
          </div>
        ))}
      </div>

      <div className="home-section-header">
        <p className="home-section-title">CURATED FEED</p>
        <p className="home-section-link">Latest Updates</p>
      </div>

      <div className="home-feed">
        {feedPosts.map((post) => (
          <div className="home-feed-card" key={post.id}>
            <div className="home-feed-image" />
            <div className="home-feed-content">
              <div className="home-feed-meta">
                <p className="home-feed-community">{post.community}</p>
                <p className="home-feed-time">{post.time}</p>
              </div>
              <p className="home-feed-title">{post.title}</p>
              <p className="home-feed-body">{post.body}</p>
              <p className="home-feed-read-more">Read full story</p>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}

export default Home
