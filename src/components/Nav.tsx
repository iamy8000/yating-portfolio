import { useTheme } from '../context/ThemeContext'

export function Nav() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav>
      <div className="nav-logo">
        Amy Yang
        <sub>Frontend Engineer</sub>
      </div>
      <ul className="nav-links">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="https://linkedin.com/in/yating-yang" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="mailto:yating.yy.yang@gmail.com">Contact</a></li>
        <li>
          <button type="button" className="lamp-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '💡' : '🌙'}
          </button>
        </li>
      </ul>
    </nav>
  )
}
