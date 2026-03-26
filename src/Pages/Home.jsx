import heroImg from '../assets/hero.png'
import f1Logo from '../assets/f1-logo.png'

function Home() {
  return (
    <section className="f1-home-section">
      <div className="f1-hero-container">
        <div className="f1-hero-text">
          <img src={f1Logo} alt="F1" className="f1-hero-logo" />
          <h1>Experience the Speed of F1</h1>
          <p>The ultimate destination for Formula 1 fans. Get real-time updates, team insights, and race analysis from across the globe.</p>
        </div>
        <div className="f1-hero-visual">
          <img src={heroImg} alt="F1 Racing Car" className="f1-hero-img" />
        </div>
      </div>

      <div className="f1-card-grid">
        <article className="f1-card">
          <div className="f1-card-tag">Upcoming</div>
          <h2>Monaco Grand Prix</h2>
          <p>The crown jewel of the F1 calendar. Experience the narrow streets of Monte Carlo where skill meets the ultimate test of precision.</p>
          <div className="f1-card-footer">
            <span>May 25, 2026</span>
          </div>
        </article>

        <article className="f1-card">
          <div className="f1-card-tag">Standings</div>
          <h2>Championship Race</h2>
          <p>Max Verstappen leads the pack, but Charles Leclerc and Lando Norris are closing the gap as we enter the European leg of the season.</p>
          <div className="f1-card-footer">
            <span>Red Bull vs Ferrari vs McLaren</span>
          </div>
        </article>

        <article className="f1-card">
          <div className="f1-card-tag f1-tag-red">Tech Spot</div>
          <h2>Inside the Engine</h2>
          <p>Exploring the 2026 engine regulations: A shift towards 100% sustainable fuels and increased electrical power deployment.</p>
          <div className="f1-card-footer">
            <span>Engineering Insights</span>
          </div>
        </article>
      </div>

      <div className="f1-highlights">
        <h2>Latest Highlights</h2>
        <div className="f1-highlights-grid">
          <div className="f1-highlight-item">
            <strong>Video</strong>
            <p>Spanish GP: Final Lap Drama</p>
          </div>
          <div className="f1-highlight-item">
            <strong>Article</strong>
            <p>New Aerodynamic Trends for 2026</p>
          </div>
          <div className="f1-highlight-item">
            <strong>Photo</strong>
            <p>Night Racing in Singapore</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
