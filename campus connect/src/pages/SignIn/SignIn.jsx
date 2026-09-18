import { useState } from 'react'
import { Link } from 'react-router-dom'
import InputField from '../../components/InputField/InputField.jsx'
import Button from '../../components/Button/Button.jsx'
import Divider from '../../components/Divider/Divider.jsx'
import SocialLoginButton from '../../components/SocialLoginButton/SocialLoginButton.jsx'
import './SignIn.css'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log('sign in', email, password)
  }

  return (
    <div className="screen sign-in-screen">
      <div className="sign-in-header">
        <img src="/assets/icons/campusconnect-icon-mono.svg" alt="Campus Connect" className="sign-in-logo" />
        <h1 className="sign-in-title">Sign In</h1>
      </div>

      <form onSubmit={handleSubmit} className="sign-in-form">
        <InputField label="School e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <div className="sign-in-password-row">
          <InputField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Link to="/forgot-password" className="sign-in-forgot">Forgot Password?</Link>
        </div>

        <Button type="submit">Sign In</Button>
      </form>

      <Divider text="or" />

      <p className="sign-in-with">Sign in with</p>

      <div className="sign-in-social-row">
        <SocialLoginButton icon="/assets/icons/google.svg" alt="Google" />
        <SocialLoginButton icon="/assets/icons/apple.svg" alt="Apple" />
        <SocialLoginButton icon="/assets/icons/gmail.svg" alt="Gmail" />
      </div>

      <p className="sign-in-footer">
        Don't have an account? <Link to="/sign-up" className="sign-up-link">Sign Up</Link>
      </p>
    </div>
  )
}

export default SignIn
