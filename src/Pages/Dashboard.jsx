function Dashboard() {
  return (
    <section className="f1-dashboard-section">
      <header>
        <h1>F1 Dashboard</h1>
        <p>Welcome back, team principal. Quick performance overview:</p>
      </header>
      <div className="f1-dashboard-grid">
        <div className="f1-box">
          <strong>Standings</strong>
          <p>Red Bull 520, Ferrari 472, Mercedes 403</p>
        </div>
        <div className="f1-box">
          <strong>Laps Led</strong>
          <p>160 in season so far</p>
        </div>
        <div className="f1-box">
          <strong>Next Strategy</strong>
          <p>Medium start, switch to soft at lap 28</p>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
