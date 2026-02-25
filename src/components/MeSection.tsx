import { useRef, useEffect } from 'react'

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
          <div className="me-photo-wrap">
            <div className="me-photo-placeholder">Photo 1</div>
          </div>
          <div className="me-photo-wrap">
            <div className="me-photo-placeholder">Photo 2</div>
          </div>
          <div className="me-photo-wrap">
            <div className="me-photo-placeholder">Photo 3</div>
          </div>
          <div className="me-photo-wrap">
            <div className="me-photo-placeholder">Photo 4</div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
