import { ArrowRight, CodeXml, Sparkles, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home-panel" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-eyebrow">Building intelligent<br />applications for a brighter tomorrow</p>
        <h1 id="hero-title">Hi, I’m<br /><span>Akshata Singh</span></h1>
        <p className="hero-description">Full Stack Developer &amp; AI Engineer with 4+ years of experience building production web applications and AI-powered systems.<br className="hero-line-break" /> I love turning complex problems into elegant, practical solutions that make a real impact.</p>
        <div className="hero-actions">
          <Link to="/projects" className="hero-button hero-button-primary">View My Work <ArrowRight size={19} aria-hidden="true" /></Link>
          <Link to="/contact" className="hero-button hero-button-secondary">Get In Touch</Link>
        </div>
        <ul className="hero-technologies" aria-label="Technologies">
          {['React', 'Node.js', 'Python', 'TypeScript', 'AI/ML', 'Claude', 'OpenAI'].map(technology => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="hero-stats">
          <div className="hero-stat"><span className="hero-stat-icon"><CodeXml aria-hidden="true" /></span><div><strong>4+</strong><span>Years Experience</span></div></div>
          <div className="hero-stat"><span className="hero-stat-icon"><Users aria-hidden="true" /></span><div><strong>20+</strong><span>Projects Delivered</span></div></div>
          <div className="hero-stat"><span className="hero-stat-icon"><Sparkles aria-hidden="true" /></span><div><strong>AI</strong><span>Focused on Impact</span></div></div>
        </div>
      </div>
    </section>
  )
}

export default Home
