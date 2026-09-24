import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import { GrainCanvas } from './components/GrainCanvas'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ProjectDetail } from './pages/ProjectDetail'
import { AboutPage } from './pages/AboutPage'
import { useHashScroll } from './hooks/useHashScroll'

const THEME_COLORS = { dark: '#0d1117', light: '#F0EFED' } as const

function ThemeSync({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', THEME_COLORS[theme])
  }, [theme])
  return <>{children}</>
}

function HomePage() {
  useHashScroll()

  return (
    <>
      <GrainCanvas />
      <Nav />
      <Hero />
      <hr className="rule" />
      <Projects />
      <hr className="rule" />
      <About />
      <hr className="rule" />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ThemeSync>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects/:projectId" element={<ProjectDetail />} />
            </Routes>
          </BrowserRouter>
        </ThemeSync>
      </LanguageProvider>
    </ThemeProvider>
  )
}
