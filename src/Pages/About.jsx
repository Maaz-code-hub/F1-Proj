function About() {
  return (
    <section className="f1-subpage">
      <h1>Our Formula 1 Mission</h1>
      <p>F1 Central is a high-speed telemetry management and fans' insight platform designed for the 2026 era of racing.</p>

      <div className="f1-about-grid">
        <div className="f1-about-card">
          <h2>Engineering</h2>
          <p>We push the boundaries of data visualization, ensuring that every millisecond of race telemetry is translated into actionable insights for teams and engineers across the globe.</p>
        </div>
        <div className="f1-about-card">
          <h2>Innovation</h2>
          <p>By leveraging React 19 and Vite 8, we achieve near-instantaneous load times, mirroring the rapid pace of a pit stop under 2 seconds.</p>
        </div>
        <div className="f1-about-card">
          <h2>Community</h2>
          <p>Connecting millions of fans globally, we provide a unified space where high-octane passion meets technical brilliance.</p>
        </div>
      </div>

      <div className="f1-mission-quote">
        <p>"In Formula 1, speed is everything. Not just on the track, but in the data that drives every decision."</p>
      </div>
    </section>
  )
}

export default About
