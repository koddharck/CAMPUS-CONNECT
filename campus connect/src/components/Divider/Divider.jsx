import './Divider.css'

function Divider({ text = 'or' }) {
  return (
    <div className="divider">
      <span className="divider-line" />
      <p className="divider-text">{text}</p>
      <span className="divider-line" />
    </div>
  )
}

export default Divider
