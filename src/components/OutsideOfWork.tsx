import { useLanguage } from '../context/LanguageContext'
import { useFadeIn } from '../hooks/useFadeIn'
import { FilmGallery } from './FilmGallery'

const OUTSIDE_LINKS = {
  STRAVA: { href: 'https://strava.app.link/h9f0NYuJ20b', text: 'Strava' },
  MEDIUM: { href: 'https://medium.com/@iamy8000', text: 'Medium' },
  CORNER: { href: 'https://www.corner.inc/iamy8000', text: 'Corner Maps' },
} as const

const OUTSIDE_CARDS = [
  { emoji: '🏃‍♀️', key: 'running' },
  { emoji: '✍️', key: 'writing' },
  { emoji: '🍜', key: 'cornerMaps' },
  { emoji: '🏕️', key: 'hiking' },
  { emoji: '✈️', key: 'travel' },
  { emoji: '✨', key: 'placeholder' },
] as const

/** Replaces {{STRAVA}}, {{MEDIUM}}, and {{CORNER}} in card text with links. */
function injectLinks(desc: string): React.ReactNode {
  return desc.split(/\{\{(STRAVA|MEDIUM|CORNER)\}\}/).map((part, i) => {
    if (i % 2 === 0) return part
    const link = OUTSIDE_LINKS[part as keyof typeof OUTSIDE_LINKS]
    return <a key={`${part}-${i}`} href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>
  })
}

export function OutsideOfWork() {
  const { t, tr } = useLanguage()
  const ref = useFadeIn(0.12)
  const refPhotos = useFadeIn(0.12)

  return (
    <section className="section section-outside" id="outside">
      <div className="about-bg-word" aria-hidden>{t('outside.label')}</div>
      <div className="outside-inner">
        <p className="section-label">{t('outside.label')}</p>
        <div ref={ref} className="outside-grid fade-up">
          {OUTSIDE_CARDS.map((card) => {
            const data = tr.outside[card.key]
            return (
              <div key={card.key} className="outside-card">
                <span className="outside-icon" aria-hidden>{card.emoji}</span>
                <div className="outside-title">{data.title}</div>
                <p className="outside-text">{injectLinks(data.desc)}</p>
              </div>
            )
          })}
        </div>

        <div className="about-content">
          <div ref={refPhotos} className="about-subsection fade-up" style={{ transitionDelay: '0.26s' }}>
            <FilmGallery />
          </div>
        </div>
      </div>
    </section>
  )
}
