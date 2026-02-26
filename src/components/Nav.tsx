import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import type { Locale } from '../i18n/translations'

const RESUME_URL = 'https://drive.google.com/file/d/15kAqEEE7kAjZWnxhAWhMQeB1yyEK-lDV/view?usp=sharing'

const navKeys = [
  { key: 'home' as const, href: '/', isRoute: true },
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

        {/* Desktop: links + lang + theme */}
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
          <li className="nav-lang-wrap">
            <button type="button" className="nav-lang-btn" onClick={() => setLocale('en' as Locale)} aria-pressed={locale === 'en'}>EN</button>
            <span className="nav-lang-sep">/</span>
            <button type="button" className="nav-lang-btn" onClick={() => setLocale('zh-TW')} aria-pressed={locale === 'zh-TW'}>繁中</button>
          </li>
          <li>
            <button type="button" className="lamp-btn" onClick={toggleTheme} aria-label={t('nav.aria.toggleTheme')}>
              {theme === 'dark' ? '💡' : '🌙'}
            </button>
          </li>
        </ul>

        {/* Mobile: 圓框語言鈕（顯示另一個語言）+ theme + hamburger */}
        <div className="nav-mobile-actions">
          <button
            type="button"
            className="nav-lang-circle-btn"
            onClick={() => setLocale(locale === 'en' ? 'zh-TW' : ('en' as Locale))}
            aria-label={locale === 'en' ? 'Switch to 繁中' : 'Switch to EN'}
          >
            {locale === 'en' ? '繁中' : 'EN'}
          </button>
          <button type="button" className="lamp-btn" onClick={toggleTheme} aria-label={t('nav.aria.toggleTheme')}>
            {theme === 'dark' ? '💡' : '🌙'}
          </button>
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
            <button type="button" className="nav-overlay-lang-btn" onClick={() => { setLocale('en' as Locale); closeMobile(); }} aria-pressed={locale === 'en'}>EN</button>
            <span className="nav-overlay-lang-sep">/</span>
            <button type="button" className="nav-overlay-lang-btn" onClick={() => { setLocale('zh-TW'); closeMobile(); }} aria-pressed={locale === 'zh-TW'}>繁中</button>
          </div>
        </div>
      </div>
    </>
  )
}
