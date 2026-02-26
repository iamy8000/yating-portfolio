import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GrainCanvas } from '../components/GrainCanvas'
import { Nav } from '../components/Nav'
import { Experience } from '../components/Experience'
import { MeSection } from '../components/MeSection'
import { OutsideOfWork } from '../components/OutsideOfWork'
import { Footer } from '../components/Footer'

type ScrollTarget = 'experience' | 'outside' | null
type ScrollDirection = 'up' | 'down'

export function AboutPage() {
  const { hash } = useLocation()
  const [scrollTarget, setScrollTarget] = useState<ScrollTarget>(null)
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('down')

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
    const footer = document.getElementById('footer')
    if (!me || !experience || !outside || !footer) return

    const ratios: Record<string, number> = { me: 0, experience: 0, outside: 0, footer: 0 }
    const updateNext = () => {
      if (ratios.footer >= ratios.me && ratios.footer >= ratios.experience && ratios.footer >= ratios.outside && ratios.footer > 0.1) {
        setScrollTarget('outside')
        setScrollDirection('up')
      } else if (ratios.me >= ratios.experience && ratios.me >= ratios.outside && ratios.me > 0.1) {
        setScrollTarget('experience')
        setScrollDirection('down')
      } else if (ratios.experience >= ratios.me && ratios.experience >= ratios.outside && ratios.experience > 0.1) {
        setScrollTarget('outside')
        setScrollDirection('down')
      } else if (ratios.outside > 0.1) {
        setScrollTarget('experience')
        setScrollDirection('up')
      } else {
        setScrollTarget('experience')
        setScrollDirection('down')
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
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  const scrollToTarget = () => {
    if (scrollTarget === 'experience') {
      document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (scrollTarget === 'outside') {
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
      {scrollTarget && (
        <button
          type="button"
          className="about-scroll-hint"
          onClick={scrollToTarget}
          aria-label={
            scrollTarget === 'experience'
              ? 'Scroll to Work Experience'
              : 'Scroll to Outside of Work'
          }
        >
          <span key={`${scrollTarget}-${scrollDirection}`} className="about-scroll-hint-content">
            <span className="about-scroll-hint-text">
              {scrollTarget === 'experience' ? 'Work experience' : 'Outside of work'}
            </span>
            <span className="about-scroll-hint-arrow">
              {scrollDirection === 'up' ? '\u2191\uFE0E' : '\u2193\uFE0E'}
            </span>
          </span>
        </button>
      )}
    </>
  )
}
