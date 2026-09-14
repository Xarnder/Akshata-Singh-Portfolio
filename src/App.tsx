import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ExperiencePage from './pages/ExperiencePage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

function App() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const scrollArea = useRef<HTMLElement>(null)
  const scrollTint = useRef<HTMLDivElement>(null)

  function updateScrollTint(scrollTop: number) {
    scrollTint.current?.style.setProperty('--scroll-tint', String(Math.min(Math.max(scrollTop, 0) / 220, 1) * 0.96))
  }
  const isLeaving = location.pathname !== displayLocation.pathname

  useEffect(() => {
    if (!isLeaving) return
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180
    const timeout = window.setTimeout(() => setDisplayLocation(location), delay)
    return () => window.clearTimeout(timeout)
  }, [location, isLeaving])

  useLayoutEffect(() => {
    scrollArea.current?.scrollTo({ top: 0, behavior: 'instant' })
    updateScrollTint(0)
    const page = displayLocation.pathname.slice(1)
    document.title = page ? `${page[0].toUpperCase()}${page.slice(1)} | Akshata Singh` : 'Akshata Singh'
  }, [displayLocation.pathname])

  return (
    <div className="portfolio-shell">
      <div className="portfolio-backdrop" aria-hidden="true">
        <picture>
          <source media="(max-width: 700px)" srcSet="/profile.jpeg" />
          <img className="hero-photo" src="/hero-profile.webp" alt="" fetchPriority="high" />
        </picture>
        <div className="hero-shade" />
        <div ref={scrollTint} className="scroll-tint" />
      </div>
      <Navbar />
      <main ref={scrollArea} onScroll={event => updateScrollTint(event.currentTarget.scrollTop)} className="portfolio-scroll" id="main-content" tabIndex={-1}>
        <div key={displayLocation.pathname} className={`page-transition ${isLeaving ? 'page-leaving' : 'page-entering'}`}>
          <Routes location={displayLocation}>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
