import './About.css'

function About() {
  return (
    <div className="about-page">
      <div className="container">
        <section className="values-section">
          <h2 className="section-title">Vlerat Tona</h2>
          <div className="values-grid grid grid-3">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Cilësi</h3>
              <p>Makinat më të mira dhe shërbimi më i lartë për klientët tanë</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Besueshmëri</h3>
              <p>Ndërtojmë marrëdhënie afatgjata me bazë në besim dhe transparencë</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Inovacion</h3>
              <p>Përmirësojmë vazhdimisht shërbimet tona për të qënë gjithmonë përpara</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2 className="section-title">Ekipi Ynë</h2>
          <p className="section-subtitle">Profesionistë të përkushtuar për shërbimin tuaj</p>
          <div className="team-grid grid grid-4">
            <div className="team-member">
              <div className="member-photo">👨‍💼</div>
              <h4>Geci Hoxha</h4>
              <p>Themelues & CEO</p>
            </div>
            <div className="team-member">
              <div className="member-photo">👩‍💼</div>
              <h4>Ana Basha</h4>
              <p>Menaxhere Operacionesh</p>
            </div>
            <div className="team-member">
              <div className="member-photo">👨‍🔧</div>
              <h4>Dritan Kola</h4>
              <p>Përgjegjës i Flotës</p>
            </div>
            <div className="team-member">
              <div className="member-photo">👩‍💻</div>
              <h4>Elira Dema</h4>
              <p>Shërbimi i Klientit</p>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-grid grid grid-4">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Vite Eksperiencë</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Makina në Flotë</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Klientë të Kënaqur</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1</span>
              <span className="stat-label">Lokacion</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
