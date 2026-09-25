import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputField from '../../components/InputField/InputField.jsx'
import Button from '../../components/Button/Button.jsx'
import Divider from '../../components/Divider/Divider.jsx'
import SocialLoginButton from '../../components/SocialLoginButton/SocialLoginButton.jsx'
import { saveAuth } from '../../utils/auth.js'
import './SignUp.css'

function SignUp() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }

    saveAuth({ fullName, email })
    navigate('/onboarding-1')
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword)
  }

  return (
    <div className="screen sign-up-screen">
      <div className="sign-up-header">
        <img src="/assets/icons/campusconnect-icon-mono.svg" alt="Campus Connect" className="sign-up-logo" />
        <h1 className="sign-up-title">Sign Up</h1>
      </div>

      <form onSubmit={handleSubmit} className="sign-up-form">
        <InputField label="Full Name" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />

        <InputField label="School e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <div className="password-field-wrapper">
          <InputField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="password-toggle-button"
            onClick={togglePasswordVisibility}
            aria-label="Toggle password visibility"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>

        <InputField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button type="submit">Sign Up</Button>
      </form>

      <Divider text="or" />

      <p className="sign-up-with">Sign up with</p>

      <div className="sign-up-social-row">
        <SocialLoginButton icon="/assets/icons/google.svg" alt="Google" />
        <SocialLoginButton icon="/assets/icons/apple.svg" alt="Apple" />
        <SocialLoginButton icon="/assets/icons/gmail.svg" alt="Gmail" />
      </div>

      <p className="sign-up-footer">
        Already have an account? <Link to="/sign-in" className="sign-in-link">Sign In</Link>
      </p>
    </div>
  )
}

export default SignUp
