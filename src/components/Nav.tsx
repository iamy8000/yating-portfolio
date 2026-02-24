import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
]

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export function Nav() {
  const { theme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <nav className="nav-bar">
        <a href="/" className="nav-logo" onClick={closeMobile}>
          Amy Yang
          <sub>Frontend Engineer</sub>
        </a>

        {/* Desktop: links + theme */}
        <ul className="nav-links">
          <li><a href="/#projects">Projects</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#experience">Experience</a></li>
          <li>
            <button type="button" className="lamp-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '💡' : '🌙'}
            </button>
          </li>
        </ul>

        {/* Mobile: theme + hamburger */}
        <div className="nav-mobile-actions">
          <button type="button" className="lamp-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '💡' : '🌙'}
          </button>
          <button
            type="button"
            className="nav-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={`nav-overlay ${mobileOpen ? 'nav-overlay-open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          className="nav-overlay-close"
          onClick={closeMobile}
          aria-label="Close menu"
        >
          <CloseIcon />
        </button>
        <div className="nav-overlay-content">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-overlay-link"
              onClick={closeMobile}
              style={{ transitionDelay: `${0.1 + i * 0.06}s` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Resume_Yating_Amy_Yang.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-overlay-resume"
            onClick={closeMobile}
            style={{ transitionDelay: `${0.1 + navItems.length * 0.06}s` }}
          >
            Resume ↗
          </a>
        </div>
      </div>
    </>
  )
}
