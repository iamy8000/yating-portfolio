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

export function About() {
  const refLeft = useFadeIn(0.12)
  const refRight = useFadeIn(0.12)

  return (
    <section className="section" id="about">
      <p className="section-label">About Me</p>
      <div className="about-grid">
        <div ref={refLeft} className="fade-up">
          <h2 className="about-heading">
            Built with care,<br /><em>pixel by pixel.</em>
          </h2>
          <div className="stats-row">
            <div><span className="stat-num">4+</span><div className="stat-label">Years Exp</div></div>
            <div><span className="stat-num">60</span><div className="stat-label">Projects</div></div>
          </div>
        </div>
        <div ref={refRight} className="about-body fade-up" style={{ transitionDelay: '0.12s' }}>
          <p>I'm a frontend engineer with a love for clean UI, great performance, and details that make people smile. I care about both the code and the experience it creates.</p>
          <p>Based in NYC, open to relocate. Currently looking for my next role — full-time or contract.</p>
          <p>
            <a href="https://www.linkedin.com/in/yang-ya-ting/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            {' \u2003 '}
            <a href="mailto:yating.yy.yang@gmail.com">yating.yy.yang@gmail.com ↗</a>
          </p>
        </div>
      </div>
    </section>
  )
}
