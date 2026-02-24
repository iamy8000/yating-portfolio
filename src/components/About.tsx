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
  const ref2 = useFadeIn(0.12)
  const ref3 = useFadeIn(0.12)
  const ref4 = useFadeIn(0.12)

  return (
    <section className="section" id="about">
      <p className="section-label">About Me</p>
      <div className="about-content">
        <div ref={refLeft} className="fade-up">
          <h2 className="about-heading">
            Built with care, <em>pixel by pixel.</em>
          </h2>
        </div>
        <div ref={ref1} className="about-block fade-up">
          <h3 className="about-subheading">As a Frontend Engineer</h3>
          <p className="about-body">
            I'm a frontend engineer with <strong>4+ years of experience</strong>, focused on
            turning ideas into interactive, user-friendly products. I work primarily with{' '}
            <strong>React, Next.js, JavaScript, TypeScript, Redux, and Material UI</strong>,
            with a strong attention to visual detail. My work has spanned{' '}
            <strong>AI dashboards, WebRTC video platforms, Web3 apps, and marketing tools</strong>{' '}
            used by real users at scale.
          </p>
        </div>

        <div ref={ref2} className="about-block fade-up" style={{ transitionDelay: '0.06s' }}>
          <h3 className="about-subheading">Before Frontend</h3>
          <p className="about-body">
            Before transitioning into frontend engineering, I spent{' '}
            <strong>2+ years in advertising</strong> and earned a{' '}
            <strong>Bachelor's degree in Advertising</strong>. At an agency, I helped bring ideas
            to life for clients like <strong>Nike</strong> and <strong>Google Play</strong>,
            collaborating closely with engineers and designers.
          </p>
        </div>

        <div ref={ref3} className="about-block fade-up" style={{ transitionDelay: '0.12s' }}>
          <h3 className="about-subheading">A Cross-Functional Perspective</h3>
          <p className="about-body">
            My background in <strong>project management and creative strategy</strong> gives me a
            broader perspective on software development. I'm comfortable working across
            disciplines, translating between designers, product, and engineering to ship
            thoughtful, well-aligned work.
          </p>
        </div>

        <p ref={ref4} className="about-body about-links fade-up" style={{ transitionDelay: '0.18s' }}>
          <a href="https://www.linkedin.com/in/yang-ya-ting/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          {' \u2003 '}
          <a href="mailto:yating.yy.yang@gmail.com">yating.yy.yang@gmail.com ↗</a>
        </p>
      </div>
    </section>
  )
}
