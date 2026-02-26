import { useRef, useEffect } from 'react'

const ABOUT_ME_IMAGES = [
  '/images/about-me-1.JPG',
  '/images/about-me-2.jpeg',
  '/images/about-me-3.jpg',
  '/images/about-me-4.JPG',
]

function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return ref
}

export function MeSection() {
  const ref = useFadeIn(0.12)

  return (
    <section className="section section-me" id="me" style={{ marginTop: '2rem' }}>
      <div className="about-bg-word" aria-hidden>About Me</div>
      <div className="me-inner">
        <p className="section-label">About Me</p>
        <div className="me-content">
        <h2 className="about-heading">
          Born and raised in Taiwan. Three years in DC and Maryland, now based in NYC.
          I&apos;m a front-end engineer and I love running — 63/184 cafés in NYC checked off and counting!
        </h2>
        <div ref={ref} className="me-photos fade-up">
          {ABOUT_ME_IMAGES.map((src, i) => (
            <div key={i} className="me-photo-wrap">
              <img src={src} alt="" className="me-photo" />
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
