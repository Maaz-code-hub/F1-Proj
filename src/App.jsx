import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')
    setSuccess('')

    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }

    // Fake login (replace with real API call)
    if (email.toLowerCase() === 'champion@f1.com' && password === 'podium') {
      setSuccess('Welcome to F1 dashboard!')
      setError('')
    } else {
      setError('Invalid credentials. Try  champion@f1.com / podium')
      setSuccess('')
    }
  }

  return (
    <div className="f1-app">
      <header className="f1-navbar">
        <div className="f1-brand">F1 Formula One</div>
        <nav className="f1-nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#drivers">Drivers</a>
          <a href="#teams">Teams</a>
          <a href="#login" className="active">Login</a>
        </nav>
      </header>

      <main className="f1-login-wrap" id="login">
        <section className="f1-login-card">
          <h1>Team Login</h1>
          <p>Sign in to your F1 operations account</p>

          {error && <div className="f1-alert f1-alert-error">{error}</div>}
          {success && <div className="f1-alert f1-alert-success">{success}</div>}

          <form onSubmit={handleSubmit} className="f1-login-form">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="driver@team.com"
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />

            <div className="f1-checkbox-wrapper">
              <label>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
            </div>

            <button type="submit" className="f1-submit-btn">
              Sign In
            </button>
            <p className="f1-helper">Use champion@f1.com / podium for demo login.</p>
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
