import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import type { Locale } from '../i18n/translations'

const RESUME_URL = 'https://drive.google.com/file/d/1Nk4w9CPRc5VI38YxVyBuAZXBgTlk8OP8/view?usp=drive_link'

const navKeys = [
  { key: 'projects' as const, href: '/#projects', isRoute: false },
  { key: 'about' as const, href: '/about', isRoute: true },
  { key: 'resume' as const, href: RESUME_URL, isRoute: false, external: true },
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

function GearIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}

/** Combined theme + language control, collapsed behind a single settings icon. */
function SettingsMenu({ variant }: { variant: 'desktop' | 'mobile' }) {
  const { theme, toggleTheme } = useTheme()
  const { t, locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [open])

  return (
    <div className={`nav-settings-wrap nav-settings-${variant}`} ref={wrapRef}>
      <button
        type="button"
        className="lamp-btn nav-settings-btn"
        onClick={() => setOpen((o) => !o)}
        aria-label={t('nav.aria.settings')}
        aria-expanded={open}
      >
        <GearIcon />
      </button>
      <div className={`nav-settings-panel ${open ? 'nav-settings-panel-open' : ''}`}>
        <button type="button" className="nav-settings-item" onClick={toggleTheme}>
          <span aria-hidden>{theme === 'dark' ? '💡' : '🌙'}</span>
          <span>{theme === 'dark' ? t('nav.settings.light') : t('nav.settings.dark')}</span>
        </button>
        <div className="nav-settings-divider" />
        <div className="nav-settings-lang">
          <button type="button" className="nav-settings-lang-btn" onClick={() => setLocale('en' as Locale)} aria-pressed={locale === 'en'}>EN</button>
          <button type="button" className="nav-settings-lang-btn" onClick={() => setLocale('zh-TW')} aria-pressed={locale === 'zh-TW'}>繁中</button>
        </div>
      </div>
    </div>
  )
}

export function Nav() {
  const { theme, toggleTheme } = useTheme()
  const { t, locale, setLocale } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <nav className="nav-bar">
        <a href="/" className="nav-logo" onClick={closeMobile}>
          Amy Yang
          <sub>{t('nav.subtitle')}</sub>
        </a>

        {/* Desktop: links + settings */}
        <ul className="nav-links">
          {navKeys.map((item) => (
            <li key={item.href}>
              {item.isRoute ? (
                <Link to={item.href}>{t(`nav.${item.key}`)}</Link>
              ) : (
                <a href={item.href} {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{t(`nav.${item.key}`)}</a>
              )}
            </li>
          ))}
          <li>
            <SettingsMenu variant="desktop" />
          </li>
        </ul>

        {/* Mobile: settings + hamburger */}
        <div className="nav-mobile-actions">
          <SettingsMenu variant="mobile" />
          <button
            type="button"
            className="nav-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t('nav.aria.closeMenu') : t('nav.aria.openMenu')}
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
          aria-label={t('nav.aria.closeMenu')}
        >
          <CloseIcon />
        </button>
        <div className="nav-overlay-content">
          {navKeys.map((item, i) => (
            item.isRoute ? (
              <Link
                key={item.href}
                to={item.href}
                className="nav-overlay-link"
                onClick={closeMobile}
                style={{ transitionDelay: `${0.1 + i * 0.06}s` }}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="nav-overlay-link"
                onClick={closeMobile}
                style={{ transitionDelay: `${0.1 + i * 0.06}s` }}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {t(`nav.${item.key}`)}
              </a>
            )
          ))}
          <div className="nav-overlay-lang" style={{ transitionDelay: `${0.1 + navKeys.length * 0.06}s` }}>
            <button type="button" className="nav-overlay-lang-btn" onClick={toggleTheme} aria-label={t('nav.aria.toggleTheme')}>
              {theme === 'dark' ? '💡' : '🌙'}
            </button>
            <span className="nav-overlay-lang-sep">·</span>
            <button type="button" className="nav-overlay-lang-btn" onClick={() => { setLocale('en' as Locale); closeMobile(); }} aria-pressed={locale === 'en'}>EN</button>
            <span className="nav-overlay-lang-sep">/</span>
            <button type="button" className="nav-overlay-lang-btn" onClick={() => { setLocale('zh-TW'); closeMobile(); }} aria-pressed={locale === 'zh-TW'}>繁中</button>
          </div>
        </div>
      </div>
    </>
  )
}
