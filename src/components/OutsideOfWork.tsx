import { useRef, useEffect } from 'react'

const outsideCards = [
  {
    emoji: '🏃‍♀️',
    title: 'Running',
    description: (
      <>
        I love running. Currently training for a half marathon. Check out my{' '}
        <a href="#" target="_blank" rel="noopener noreferrer">Strava</a> — and I&apos;ll kudo back!
      </>
    ),
  },
  {
    emoji: '✍️',
    title: 'Writing',
    description: (
      <>
        I write on <a href="#" target="_blank" rel="noopener noreferrer">Medium</a> — travel, life reflections, and some random thoughts.
      </>
    ),
  },
  {
    emoji: '🍜',
    title: 'Corner Maps',
    description: (
      <>
        I curate lists for drinks, food, and laptop-friendly cafes on{' '}
        <a href="#" target="_blank" rel="noopener noreferrer">Corner Maps</a> — my fav app in 2025 &amp; 2026!
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
    <section className="section" id="outside">
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
        {/* Film Photos — reference portfolio (1).html */}
        <div ref={ref4} className="about-subsection fade-up" style={{ transitionDelay: '0.26s' }}>
          <div className="photos-grid">
            {[
              { emoji: '🏔️', caption: 'Add caption here', className: 'tall' },
              { emoji: '🌆', caption: 'Add caption here', className: '' },
              { emoji: '🌊', caption: 'Add caption here', className: '' },
              { emoji: '🏙️', caption: 'Add caption here', className: 'wide' },
              { emoji: '🌸', caption: 'Add caption here', className: '' },
              { emoji: '🍜', caption: 'Add caption here', className: '' },
              { emoji: '🌅', caption: 'Add caption here', className: '' },
            ].map((item, i) => (
              <div key={i} className={`photo-cell ${item.className}`.trim()}>
                <div className="photo-placeholder">
                  <span aria-hidden>{item.emoji}</span>
                  your photo
                </div>
                <div className="photo-overlay">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
