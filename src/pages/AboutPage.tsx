import { useEffect } from 'react'
import { useHashScroll } from '../hooks/useHashScroll'
import { Nav } from '../components/Nav'
import { Experience } from '../components/Experience'
import { MeSection } from '../components/MeSection'
import { OutsideOfWork } from '../components/OutsideOfWork'
import { Footer } from '../components/Footer'

export function AboutPage() {
  useHashScroll(100)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Nav />
      <main className="page-main">
        <MeSection />
        <hr className="rule" />
        <Experience />
        <hr className="rule" />
        <OutsideOfWork />
      </main>
      <Footer />
    </>
  )
}
