import { useRef, useEffect } from 'react'

const FILM_PICS = [
  { src: '/images/film-pic-1.jpg', className: '' },
  { src: '/images/film-pic-2.jpg', className: '' },
  { src: '/images/film-pic-3.png', className: 'tall' },
  { src: '/images/film-pic-4.png', className: 'wide' },
  { src: '/images/film-pic-5.jpg', className: 'tall' },
  { src: '/images/film-pic-6.jpg', className: 'wide' },
]

const outsideCards = [
  {
    emoji: '🏃‍♀️',
    title: 'Running',
    description: (
      <>
        I love running. Currently training for a half marathon. Check out my{' '}
        <a href="https://strava.app.link/h9f0NYuJ20b" target="_blank" rel="noopener noreferrer">Strava</a> — and I&apos;ll kudo back!
      </>
    ),
  },
  {
    emoji: '✍️',
    title: 'Writing',
    description: (
      <>
        I write on <a href="https://medium.com/@iamy8000" target="_blank" rel="noopener noreferrer">Medium</a> — travel, life reflections, and some random thoughts.
      </>
    ),
  },
  {
    emoji: '🍜',
    title: 'Corner Maps',
    description: (
      <>
        I curate lists for drinks, food, and laptop-friendly cafes on{' '}
        <a href="https://www.corner.inc/iamy8000" target="_blank" rel="noopener noreferrer">Corner Maps</a> — my fav app in 2025 &amp; 2026!
      </>
    ),
  },
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

export function OutsideOfWork() {
  const ref = useFadeIn(0.12)
  const ref4 = useFadeIn(0.12)

  return (
    <section className="section section-outside" id="outside">
      <div className="about-bg-word" aria-hidden>Outside of Work</div>
      <div className="outside-inner">
        <p className="section-label">Outside of Work</p>
        <div ref={ref} className="outside-grid fade-up">
        {outsideCards.map((card) => (
          <div key={card.title} className="outside-card">
            <span className="outside-icon" aria-hidden>{card.emoji}</span>
            <div className="outside-title">{card.title}</div>
            <p className="outside-text">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="about-content">
        <div ref={ref4} className="about-subsection fade-up" style={{ transitionDelay: '0.26s' }}>
          <div className="photos-grid film-photos-grid">
            {FILM_PICS.map((item, i) => (
              <div key={i} className={`photo-cell ${item.className}`.trim()}>
                <img src={item.src} alt="" className="film-photo-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
