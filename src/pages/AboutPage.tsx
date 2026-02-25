import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { GrainCanvas } from '../components/GrainCanvas'
import { Nav } from '../components/Nav'
import { Experience } from '../components/Experience'
import { MeSection } from '../components/MeSection'
import { OutsideOfWork } from '../components/OutsideOfWork'
import { Footer } from '../components/Footer'

export function AboutPage() {
  const { hash } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!hash) return
    const id = hash.slice(1)
    if (!id) return
    const el = document.getElementById(id)
    if (el) {
      const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
      return () => clearTimeout(t)
    }
  }, [hash])

  return (
    <>
      <GrainCanvas />
      <Nav />
      <main className="page-main">
        <MeSection />
        <Experience />
        <hr className="rule" />
        <OutsideOfWork />
      </main>
      <Footer />
    </>
  )
}
