import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import { GrainCanvas } from './components/GrainCanvas'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ProjectDetail } from './pages/ProjectDetail'

function ThemeSync({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  return <>{children}</>
}

function HomePage() {
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
      <Experience />
      <hr className="rule" />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemeSync>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
          </Routes>
        </BrowserRouter>
      </ThemeSync>
    </ThemeProvider>
  )
}
