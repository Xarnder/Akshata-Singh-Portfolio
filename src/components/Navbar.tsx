import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
    document.documentElement.classList.remove('oled')
    try { localStorage.setItem('theme', nextTheme) } catch { /* Theme still works without storage. */ }
    document.querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]').forEach(meta => {
      meta.content = nextTheme === 'light' ? '#f6f3f0' : '#141b1e'
    })
  }
  return (
    <nav className="hero-nav" aria-label="Main navigation">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Link to="/" className="hero-brand">Akshata Singh</Link>
      <div className="hero-nav-links">
        {navItems.map(item => <NavLink key={item.to} to={item.to} end={item.to === '/'}>{item.label}</NavLink>)}
      </div>
      <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Dark mode" aria-pressed={theme === 'dark'} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
        <Sun size={16} aria-hidden="true" />
        <span className="theme-toggle-track" aria-hidden="true"><span /></span>
        <Moon size={16} aria-hidden="true" />
      </button>
    </nav>
  )
}

export default Navbar
