import BottomNav from '../../components/BottomNav/BottomNav.jsx'
import './Connections.css'

const chats = [
  { id: 1, name: 'Princess Rapunzel', lastMessage: 'See you tomorrow!', time: '2 mins ago', unread: false },
  { id: 2, name: 'Hadassah David', lastMessage: 'That event sounds cool...', time: '1 hour ago', unread: true },
  { id: 3, name: 'Agnes Adebola', lastMessage: 'Are you coming to the meet?', time: '3 hours ago', unread: false },
  { id: 4, name: 'Tech Club Group', lastMessage: 'Everyone bring your laptops', time: 'Yesterday', unread: false },
]

function Connections() {
  return (
    <div className="screen connections-screen">
      <div className="connections-header">
        <h1>Chats</h1>
        <button className="connections-new-btn">+</button>
      </div>

      <div className="connections-search">
        <input type="text" placeholder="Search chats..." className="connections-search-input" />
      </div>

      <div className="connections-list">
        {chats.map((chat) => (
          <div key={chat.id} className={`connections-chat-item ${chat.unread ? 'unread' : ''}`}>
            <div className="connections-avatar" />
            <div className="connections-chat-info">
              <p className="connections-chat-name">{chat.name}</p>
              <p className="connections-last-message">{chat.lastMessage}</p>
            </div>
            <div className="connections-chat-meta">
              <p className="connections-time">{chat.time}</p>
              {chat.unread && <div className="connections-unread-badge" />}
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}

export default Connections
