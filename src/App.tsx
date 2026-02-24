import { useEffect } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import { GrainCanvas } from './components/GrainCanvas'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function ThemeSync({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  return <>{children}</>
}

function AppContent() {
  return (
    <>
      <GrainCanvas />
      <Nav />
      <Hero />
      <hr className="rule" />
      <Projects />
      <hr className="rule" />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemeSync>
        <AppContent />
      </ThemeSync>
    </ThemeProvider>
  )
}
