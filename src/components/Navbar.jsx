function Navbar({ currentPage, onNavigate }) {
  return (
    <header className="f1-navbar">
      <div className="f1-brand">F1 Formula One</div>
      <nav className="f1-nav-links" aria-label="Main navigation">
        <button type="button" className={currentPage === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>
          Home
        </button>
        <button type="button" className={currentPage === 'dashboard' ? 'active' : ''} onClick={() => onNavigate('dashboard')}>
          Dashboard
        </button>
        <button type="button" className={currentPage === 'teams' ? 'active' : ''} onClick={() => onNavigate('teams')}>
          Teams
        </button>
        <button type="button" className={currentPage === 'about' ? 'active' : ''} onClick={() => onNavigate('about')}>
          About Us
        </button>
        <button type="button" className={currentPage === 'login' ? 'active' : ''} onClick={() => onNavigate('login')}>
          Login
        </button>
      </nav>
    </header>
  )
}

export default Navbar
