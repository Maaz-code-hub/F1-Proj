function Dashboard() {
  return (
    <section className="f1-dashboard-section">
      <header className="f1-dash-header">
        <h1>Team Command Center</h1>
        <p>Telemetry, Strategy, and Real-time performance analysis for the 2026 season.</p>
        <div className="f1-session-live">LIVE: FREE PRACTICE 3 - MONACO</div>
      </header>

      <div className="f1-dashboard-grid">
        <div className="f1-box">
          <strong>Championship Points</strong>
          <p>Red Bull: 520 pts</p>
          <div className="f1-prog-container">
            <div className="f1-prog-bar" style={{ width: '85%' }}></div>
          </div>
        </div>
        <div className="f1-box">
          <strong>Laps Completed</strong>
          <p>342 In Session</p>
          <div className="f1-prog-container">
            <div className="f1-prog-bar" style={{ width: '60%' }}></div>
          </div>
        </div>
        <div className="f1-box">
          <strong>Tire Life Projection</strong>
          <p>Medium: 22 Laps</p>
          <div className="f1-prog-container">
            <div className="f1-prog-bar f1-prog-yellow" style={{ width: '45%' }}></div>
          </div>
        </div>
        <div className="f1-box">
          <strong>Power Unit Performance</strong>
          <p>98.4% Efficiency</p>
          <div className="f1-prog-container">
            <div className="f1-prog-bar f1-prog-blue" style={{ width: '98%' }}></div>
          </div>
        </div>
      </div>

      <div className="f1-dash-extra">
        <div className="f1-strategy-card">
          <h2>Race Strategy Overview</h2>
          <div className="f1-strategy-item">
            <strong>Plan A (Aggressive): </strong>
            Soft to Medium at Lap 18. Switch to Soft at Lap 48.
          </div>
          <div className="f1-strategy-item active">
            <strong>Plan B (Main):</strong>
            Medium to Hard at Lap 24. Final sprint on Soft at Lap 60.
          </div>
          <p className="f1-strategy-note">*Strategy adjusted for 40% rain probability in Monaco hills.</p>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
