import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GrainCanvas } from '../components/GrainCanvas'
import { Nav } from '../components/Nav'
import { Experience } from '../components/Experience'
import { MeSection } from '../components/MeSection'
import { OutsideOfWork } from '../components/OutsideOfWork'
import { Footer } from '../components/Footer'

type NextSection = 'experience' | 'outside' | null

export function AboutPage() {
  const { hash } = useLocation()
  const [nextSection, setNextSection] = useState<NextSection>(null)
  const [fadingOut, setFadingOut] = useState(false)

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

  useEffect(() => {
    const me = document.getElementById('me')
    const experience = document.getElementById('experience')
    const outside = document.getElementById('outside')
    if (!me || !experience || !outside) return

    const ratios: Record<string, number> = { me: 0, experience: 0, outside: 0 }
    const updateNext = () => {
      if (ratios.me >= ratios.experience && ratios.me >= ratios.outside && ratios.me > 0.1) {
        setNextSection('experience')
        setFadingOut(false)
      } else if (ratios.experience >= ratios.me && ratios.experience >= ratios.outside && ratios.experience > 0.1) {
        setNextSection('outside')
        setFadingOut(false)
      } else if (ratios.outside > 0.1) {
        setNextSection('outside')
        setFadingOut(true)
      } else {
        setNextSection('experience')
        setFadingOut(false)
      }
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = e.target.id
          if (id in ratios) ratios[id] = e.intersectionRatio
        })
        updateNext()
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.8, 1], rootMargin: '-80px 0px -30% 0px' }
    )
    observer.observe(me)
    observer.observe(experience)
    observer.observe(outside)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!fadingOut) return
    const t = setTimeout(() => {
      setNextSection(null)
      setFadingOut(false)
    }, 400)
    return () => clearTimeout(t)
  }, [fadingOut])

  const scrollToNext = () => {
    if (nextSection === 'experience') {
      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (nextSection === 'outside') {
      document.getElementById('outside')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <GrainCanvas />
      <Nav />
      <main className="page-main">
        <MeSection />
        <hr className="rule" />
        <Experience />
        <hr className="rule" />
        <OutsideOfWork />
      </main>
      <Footer />
      {(nextSection || fadingOut) && (
        <button
          type="button"
          className={`about-scroll-hint${fadingOut ? ' about-scroll-hint--fade-out' : ''}`}
          onClick={scrollToNext}
          aria-label={nextSection === 'experience' ? 'Scroll to Work Experience' : 'Scroll to Outside of Work'}
          style={fadingOut ? { pointerEvents: 'none' } : undefined}
        >
          <span className="about-scroll-hint-text">
            {nextSection === 'experience' ? 'Work experience' : 'Outside of work'}
          </span>
          <span className="about-scroll-hint-arrow">↓</span>
        </button>
      )}
    </>
  )
}
