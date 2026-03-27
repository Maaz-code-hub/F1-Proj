import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import About from './Pages/About'
import Teams from './Pages/Teams'
import UpcomingEvents from './Pages/UpcomingEvents'

import Footer from './components/Footer'

function App() {
  const [page, setPage] = useState('home')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmitLogin = (event) => {
    event.preventDefault()
    setError('')
    setSuccess('')

    if (!email || !password) {
      setError('Please enter both email and password.')
      setPage('login')
      return
    }

    if (email.toLowerCase() === 'champion@f1.com' && password === 'podium') {
      setSuccess('Welcome to F1 Dashboard!')
      setError('')
      setPage('dashboard')
    } else {
      setError('Invalid credentials. Try champion@f1.com / podium')
      setSuccess('')
      setPage('login')
    }
  }

  return (
    <div className="f1-app">
      <Navbar currentPage={page} onNavigate={setPage} />
      <main className="f1-page-main">
        {page === 'home' && <Home />}
        {page === 'dashboard' && <Dashboard />}
        {page === 'teams' && <Teams />}
        {page === 'events' && <UpcomingEvents />}
        {page === 'about' && <About />}
        {page === 'login' && (
          <Login
            email={email}
            password={password}
            remember={remember}
            error={error}
            success={success}
            onChangeEmail={(e) => setEmail(e.target.value)}
            onChangePassword={(e) => setPassword(e.target.value)}
            onToggleRemember={(e) => setRemember(e.target.checked)}
            onSubmit={handleSubmitLogin}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
