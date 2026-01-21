import './About.css'

function About() {
  return (
    <div className="about-page">
      <div className="container">
        <section className="values-section">
          <h2 className="section-title">Vlerat Tona</h2>
          <div className="values-grid grid grid-3">
            <div className="value-card">
              <div className="value-icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
              <h3>Cilësi</h3>
              <p>Makinat më të mira dhe shërbimi më i lartë për klientët tanë</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/><path d="M16.7 13H19a2 2 0 0 1 2 2v4a4 4 0 0 1-8 0v-8a2 2 0 0 1 2-2h2.7"/><path d="M7 9h0"/></svg></div>
              <h3>Besueshmëri</h3>
              <p>Ndërtojmë marrëdhënie afatgjata me bazë në besim dhe transparencë</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg></div>
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
              <div className="member-photo"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
              <h4>Geci Hoxha</h4>
              <p>Themelues & CEO</p>
            </div>
            <div className="team-member">
              <div className="member-photo"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
              <h4>Ana Basha</h4>
              <p>Menaxhere Operacionesh</p>
            </div>
            <div className="team-member">
              <div className="member-photo"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"/></svg></div>
              <h4>Dritan Kola</h4>
              <p>Përgjegjës i Flotës</p>
            </div>
            <div className="team-member">
              <div className="member-photo"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
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
