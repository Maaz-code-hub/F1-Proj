import { useState } from 'react'
import redbullLogo from '../assets/redbull.png'
import ferrariLogo from '../assets/ferrari.png'
import mercedesLogo from '../assets/mercedes.png'
import mclarenLogo from '../assets/mclaren.png'
import astonLogo from '../assets/aston.png'

const teamsData = [
  {
    id: 1,
    name: "Oracle Red Bull Racing",
    logo: redbullLogo,
    nationality: "Austrian",
    base: "Milton Keynes, United Kingdom",
    powerUnit: "Honda RBPT",
    info: "Dominant in recent years, Red Bull Racing is known for its incredible aerodynamics and tactical brilliance. Led by Max Verstappen, they have set new records for consistency and speed.",
    drivers: ["Max Verstappen", "Sergio Perez"]
  },
  {
    id: 2,
    name: "Scuderia Ferrari",
    logo: ferrariLogo,
    nationality: "Italian",
    base: "Maranello, Italy",
    powerUnit: "Ferrari",
    info: "The most historic and successful team in F1 history. Ferrari is the heartbeat of the sport, representing passion and prestige with its iconic 'Prancing Horse' emblem.",
    drivers: ["Charles Leclerc", "Lewis Hamilton"]
  },
  {
    id: 3,
    name: "Mercedes-AMG Petronas",
    logo: mercedesLogo,
    nationality: "German",
    base: "Brackley, United Kingdom",
    powerUnit: "Mercedes",
    info: "A powerhouse of the hybrid era, Mercedes-AMG redefined dominance with eight consecutive constructors' titles. They continue to be a benchmark for engineering excellence.",
    drivers: ["George Russell", "Andrea Kimi Antonelli"]
  },
  {
    id: 4,
    name: "McLaren Formula 1 Team",
    logo: mclarenLogo,
    nationality: "British",
    base: "Woking, United Kingdom",
    powerUnit: "Mercedes",
    info: "One of the most successful teams in history, McLaren has returned to the front of the pack with a young, dynamic lineup and a bold papaya orange identity.",
    drivers: ["Lando Norris", "Oscar Piastri"]
  },
  {
    id: 5,
    name: "Aston Martin Aramco",
    logo: astonLogo,
    nationality: "British",
    base: "Silverstone, United Kingdom",
    powerUnit: "Mercedes",
    info: "A team with massive ambitions, Aston Martin has invested heavily in state-of-the-art facilities to challenge the top order, led by legendary Fernando Alonso.",
    drivers: ["Fernando Alonso", "Lance Stroll"]
  }
]

function Teams() {
  const [selectedTeam, setSelectedTeam] = useState(null)

  return (
    <section className="f1-teams-container">
      <div className="f1-teams-header">
        <h1>F1 Teams</h1>
        <p>Discover the engineering marvels and legendary constructors of Formula 1.</p>
      </div>

      <div className="f1-card-grid">
        {teamsData.map((team) => (
          <div key={team.id} className="f1-team-card">
            <div className="f1-team-logo-wrap">
              <img src={team.logo} alt={`${team.name} Logo`} className="f1-team-logo" />
            </div>
            <div className="f1-team-content">
              <h2>{team.name}</h2>
              <p>{team.nationality}</p>
              <button 
                className="f1-learn-more-btn"
                onClick={() => setSelectedTeam(team)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedTeam && (
        <div className="f1-modal-overlay" onClick={() => setSelectedTeam(null)}>
          <div className="f1-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="f1-modal-close" onClick={() => setSelectedTeam(null)}>×</button>
            <div className="f1-modal-body">
              <div className="f1-modal-left">
                <img src={selectedTeam.logo} alt={selectedTeam.name} className="f1-modal-logo" />
                <h2>{selectedTeam.name}</h2>
              </div>
              <div className="f1-modal-right">
                <div className="f1-modal-info-item">
                  <strong>Base:</strong> {selectedTeam.base}
                </div>
                <div className="f1-modal-info-item">
                  <strong>Power Unit:</strong> {selectedTeam.powerUnit}
                </div>
                <div className="f1-modal-info-item">
                  <strong>Drivers:</strong> {selectedTeam.drivers.join(', ')}
                </div>
                <p className="f1-modal-desc">{selectedTeam.info}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Teams
