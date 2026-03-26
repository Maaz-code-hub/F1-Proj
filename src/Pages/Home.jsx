function Home() {
  return (
    <section className="f1-home-section">
      <h1>Welcome to the F1 Experience</h1>
      <p>Track standings, teams, and live race performance in one place.</p>
      <div className="f1-card-grid">
        <article className="f1-card">
          <h2>Next Race</h2>
          <p>Monaco GP  05 May 2026  14:00 UTC</p>
        </article>
        <article className="f1-card">
          <h2>Top Driver</h2>
          <p>Max Verstappen  268 points  Red Bull</p>
        </article>
        <article className="f1-card">
          <h2>Top Team</h2>
          <p>Red Bull Racing  520 points</p>
        </article>
      </div>
    </section>
  )
}

export default Home
