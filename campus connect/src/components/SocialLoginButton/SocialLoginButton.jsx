import './SocialLoginButton.css'

function SocialLoginButton({ icon, alt, onClick }) {
  return (
    <button className="social-login-button" onClick={onClick} type="button">
      <img src={icon} alt={alt} />
    </button>
  )
}

export default SocialLoginButton
