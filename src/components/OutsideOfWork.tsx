import { useLanguage } from '../context/LanguageContext'
import { useFadeIn } from '../hooks/useFadeIn'
import { FilmGallery } from './FilmGallery'

const OUTSIDE_LINKS = {
  STRAVA: { href: 'https://strava.app.link/h9f0NYuJ20b', text: 'Strava' },
  MEDIUM: { href: 'https://medium.com/@iamy8000', text: 'Medium' },
  CORNER: { href: 'https://www.corner.inc/iamy8000', text: 'Corner Maps' },
  // AllTrails saved lists
  HIKE_LONG: { href: 'https://www.alltrails.com/explore/list/maybe-i-ll-finally-do-long-hikes-ef17268', text: "Maybe I'll finally do long hikes?" },
  HIKE_VIEW: { href: 'https://www.alltrails.com/lists/but-the-view-is-so-pretty-d50b435?u=i&sh=3n1lgn', text: 'But the view is so pretty' },
  HIKE_TRAVEL: { href: 'https://www.alltrails.com/lists/travel-worthy-trails-37cf60c?u=i&sh=3n1lgn', text: 'Travel-Worthy Trails' },
} as const

const OUTSIDE_CARDS = [
  { emoji: '🏃‍♀️', key: 'running' },
  { emoji: '✍️', key: 'writing' },
  { emoji: '🍜', key: 'cornerMaps' },
  { emoji: '🏕️', key: 'hiking' },
  { emoji: '✈️', key: 'travel' },
  { emoji: '✨', key: 'placeholder' },
] as const

/** Replaces {{KEY}} placeholders in card text with the matching link from OUTSIDE_LINKS. */
function injectLinks(desc: string): React.ReactNode {
  return desc.split(/\{\{([A-Z_]+)\}\}/).map((part, i) => {
    if (i % 2 === 0) return part
    const link = OUTSIDE_LINKS[part as keyof typeof OUTSIDE_LINKS]
    if (!link) return `{{${part}}}`
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
