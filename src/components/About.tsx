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
  const ref1 = useFadeIn(0.12)

  return (
    <section className="section section-about" id="about">
      <div className="about-bg-word" aria-hidden>About Me</div>
      <div className="about-inner">
        <p className="section-label">About Me</p>
        <div className="about-cols">
          <div ref={refLeft} className="about-teaser-left fade-up">
            <div className="about-heading-row">
              <h2 className="about-heading">
                Built with care, <br /><em>pixel by pixel.</em>
              </h2>
              <div className="stats-row">
                <div><span className="stat-num">4+</span><div className="stat-label">Years Eng</div></div>
                <div><span className="stat-num">10+</span><div className="stat-label">Projects</div></div>
              </div>
            </div>
            <p style={{ marginTop: '1.5rem' }}>
              <a href="/about" className="about-teaser-link">{`Learn more about me :)`} {'\u2192\uFE0E'}</a>
            </p>
          </div>
          <div ref={ref1} className="about-body fade-up" style={{ transitionDelay: '0.1s' }}>
            <p>Graduated with a Master&apos;s in Information Management from University of Maryland, College Park, I am a frontend engineer with 4+ years of experience. I primarily work with React, Next.js, JavaScript, TypeScript, Redux, and Material UI, with strong attention to visual detail and system scalability. I&apos;ve built AI-powered dashboards, WebRTC video platforms, Web3 applications, and marketing tools used by real users at scale.</p>
            <p>Before transitioning into engineering, I earned a Bachelor&apos;s in Advertising and worked 2 years at Ogilvy on campaigns for Nike and Google Play. Working closely with designers, strategists, and engineers taught me how to think about products not just as features, but as experiences.</p>
            <p>My advertising background influences how I approach engineering today — user emotion, clarity, and narrative, not just implementation. To me, frontend development isn&apos;t only about making things work; it&apos;s about making them feel <em>intuitive</em> and purposeful.</p>
            <p>
              <a href="https://www.linkedin.com/in/yang-ya-ting/" target="_blank" rel="noreferrer">LinkedIn {'\u2197\uFE0E'}</a>
              {' \u2003 '}
              <a href="mailto:yating.yy.yang@gmail.com">yating.yy.yang@gmail.com {'\u2197\uFE0E'}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
