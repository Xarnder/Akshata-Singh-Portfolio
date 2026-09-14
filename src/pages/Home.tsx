import { useState } from 'react'
import { ArrowRight, CodeXml, Sparkles, GraduationCap, Phone, Mail, Copy } from 'lucide-react'
import { Link } from 'react-router-dom'

function Home() {
  const [copyStatus, setCopyStatus] = useState('')

  async function copyContact(label: string, value: string) {
    try {
      await navigator.clipboard.writeText(value)
      setCopyStatus(`${label} copied to clipboard.`)
    } catch {
      setCopyStatus(`Could not copy ${label.toLowerCase()}. Please select and copy it manually.`)
    }
  }

  return (
    <section className="home-panel" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="hero-eyebrow">Artificial intelligence &amp;<br />full-stack development</p>
        <h1 id="hero-title"><small className="hero-greeting">Hi, I’m</small><br /><span>Akshata Singh</span></h1>
        <p className="hero-description">Full Stack Developer &amp; AI Engineer with an <strong>AI Master’s Degree</strong>, <strong>4+ Years</strong> of experience building production web applications and AI-powered systems, and hands-on <strong>Claude Code Experience</strong>.<br className="hero-line-break" /> I build secure, fast backends paired with pixel-perfect frontends.</p>
        <div className="hero-actions">
          <a href="tel:+447747231464" className="hero-button hero-button-primary hero-button-glow hero-button-call" aria-label="Call me on +44 7747 231464">Call me</a>
          <Link to="/projects" className="hero-button hero-button-secondary">View My Work <ArrowRight size={19} aria-hidden="true" /></Link>
        </div>
        <div className="hero-email">
          <a href="https://www.linkedin.com/in/akshata-singh-89b83b194/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <div className="hero-contact-item">
            <a href="mailto:akshatasingh444@gmail.com"><Mail size={18} aria-hidden="true" /><span>akshatasingh444@gmail.com</span></a>
            <button type="button" className="contact-copy" onClick={() => copyContact('Email', 'akshatasingh444@gmail.com')} aria-label="Copy email address" title="Copy email address"><Copy size={18} aria-hidden="true" /></button>
          </div>
          <div className="hero-contact-item">
            <a href="tel:+447747231464"><Phone size={18} aria-hidden="true" /><span>+44 7747 231464</span></a>
            <button type="button" className="contact-copy" onClick={() => copyContact('Phone number', '+44 7747 231464')} aria-label="Copy phone number" title="Copy phone number"><Copy size={18} aria-hidden="true" /></button>
          </div>
        </div>
        <p className="hero-copy-status" role="status">{copyStatus}</p>
        <ul className="hero-technologies" aria-label="Technologies">
          {['React', 'Node.js', 'Python', 'TypeScript', 'AI/ML', 'Claude', 'OpenAI'].map(technology => <li key={technology}>{technology}</li>)}
        </ul>
        <div className="hero-stats">
          <div className="hero-stat"><span className="hero-stat-icon"><CodeXml aria-hidden="true" /></span><div><strong>4+</strong><span>Years Experience</span></div></div>
          <div className="hero-stat"><span className="hero-stat-icon"><GraduationCap aria-hidden="true" /></span><div><strong>AI</strong><span>Master’s Degree</span></div></div>
          <div className="hero-stat"><span className="hero-stat-icon"><Sparkles aria-hidden="true" /></span><div><strong>Claude Code</strong><span>AI Coding Specialist</span></div></div>
        </div>
      </div>
    </section>
  )
}

export default Home
