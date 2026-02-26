import { useRef, useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  )
  useEffect(() => {
    const m = window.matchMedia(query)
    setMatches(m.matches)
    const handler = () => setMatches(m.matches)
    m.addEventListener('change', handler)
    return () => m.removeEventListener('change', handler)
  }, [query])
  return matches
}

const FILM_PICS: { src: string; className: string; objectPosition?: string }[] = [
  { src: '/images/film-pic-1.jpg', className: '' },
  { src: '/images/film-pic-2.jpg', className: '' },
  { src: '/images/film-pic-3.png', className: 'tall' },
  { src: '/images/film-pic-4.png', className: 'wide' },
  { src: '/images/film-pic-5.jpg', className: 'tall' },
  { src: '/images/film-pic-9.jpg', className: 'wide', objectPosition: 'center 85%' },
  { src: '/images/film-pic-10.jpg', className: 'wide', objectPosition: 'center 68%' },
]

const SAME_ROW_PICS: { src: string; className: string; objectPosition?: string }[] = [
  { src: '/images/film-pic-6.jpg', className: '' },
  { src: '/images/film-pic-7.jpg', className: '' },
  { src: '/images/film-pic-8.jpg', className: '' },
]

const ALL_FILM_PICS_MOBILE = [
  ...FILM_PICS.slice(0, 5),
  ...SAME_ROW_PICS,
  ...FILM_PICS.slice(5, 7),
]

const OUTSIDE_LINKS = {
  STRAVA: { href: 'https://strava.app.link/h9f0NYuJ20b', text: 'Strava' },
  MEDIUM: { href: 'https://medium.com/@iamy8000', text: 'Medium' },
  CORNER: { href: 'https://www.corner.inc/iamy8000', text: 'Corner Maps' },
} as const

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

function injectLinks(desc: string): React.ReactNode {
  const parts = desc.split(/(?:\{\{)(STRAVA|MEDIUM|CORNER)(?:\}\})/)
  const result: React.ReactNode[] = []
  parts.forEach((part, i) => {
    if (i % 2 === 0) {
      result.push(part)
    } else {
      const link = OUTSIDE_LINKS[part as keyof typeof OUTSIDE_LINKS]
      if (link) result.push(<a key={part} href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>)
    }
  })
  return <>{result}</>
}

export function OutsideOfWork() {
  const { t, tr } = useLanguage()
  const ref = useFadeIn(0.12)
  const ref4 = useFadeIn(0.12)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const outsideCards = [
    { emoji: '🏃‍♀️' as const, key: 'running' as const },
    { emoji: '✍️' as const, key: 'writing' as const },
    { emoji: '🍜' as const, key: 'cornerMaps' as const },
  ]

  return (
    <section className="section section-outside" id="outside">
      <div className="about-bg-word" aria-hidden>{t('outside.label')}</div>
      <div className="outside-inner">
        <p className="section-label">{t('outside.label')}</p>
        <div ref={ref} className="outside-grid fade-up">
        {outsideCards.map((card) => {
          const data = tr.outside[card.key]
          return (
          <div key={card.key} className="outside-card">
            <span className="outside-icon" aria-hidden>{card.emoji}</span>
            <div className="outside-title">{data.title}</div>
            <p className="outside-text">{injectLinks(data.desc)}</p>
          </div>
        )})}
      </div>

      <div className="about-content">
        <div ref={ref4} className="about-subsection fade-up" style={{ transitionDelay: '0.26s' }}>
          {isMobile ? (
            <div className="photos-grid film-photos-grid">
              {ALL_FILM_PICS_MOBILE.map((item, i) => (
                <div key={i} className="photo-cell">
                  <img
                    src={item.src}
                    alt=""
                    className="film-photo-img"
                    style={item.objectPosition != null ? { objectPosition: item.objectPosition } : undefined}
                  />
                </div>
              ))}
            </div>
          ) : (
            <>
              <div className="film-pics-row">
                {SAME_ROW_PICS.map((item, i) => (
                  <div key={i} className="photo-cell">
                    <img src={item.src} alt="" className="film-photo-img" />
                  </div>
                ))}
              </div>
              <div className="photos-grid film-photos-grid">
                {FILM_PICS.map((item, i) => (
                  <div key={i} className={`photo-cell ${item.className}`.trim()}>
                    <img
                      src={item.src}
                      alt=""
                      className="film-photo-img"
                      style={item.objectPosition != null ? { objectPosition: item.objectPosition } : undefined}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      </div>
    </section>
  )
}
