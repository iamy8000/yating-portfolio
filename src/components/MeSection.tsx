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
        <div className="about-heading me-heading-diary">
          <p>I grew up in Taiwan, moved to DC and Maryland for grad school and work, and now I&apos;m in NYC. Still adjusting, still learning, still building. Before engineering I did advertising at Ogilvy, working on campaigns for Nike and Google Play alongside designers, strategists, and engineers. That taught me to think about products as experiences, not just features.</p>
          <p>Outside of code I run. Central Park is the place that makes the city feel less overwhelming. I also keep a café list and a lot of small goals; to me the world is one big bucket list. There&apos;s so much to do, eat, see, and try. I like having things to look forward to!</p>
          <p>What I carry from all of that into frontend: curiosity and care. I care a lot about clarity and how small details shape how people experience something. To me, good frontend isn&apos;t only about making things work. It&apos;s about making them feel intuitive and purposeful ✨.</p>
        </div>
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
