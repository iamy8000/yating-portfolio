import { useLanguage } from '../context/LanguageContext'
import { useFadeIn } from '../hooks/useFadeIn'
import { FilmGallery } from './FilmGallery'

const OUTSIDE_LINKS = {
  STRAVA: { href: 'https://strava.app.link/h9f0NYuJ20b', text: 'Strava' },
  MEDIUM: { href: 'https://medium.com/@iamy8000', text: 'Medium' },
  CORNER: { href: 'https://www.corner.inc/iamy8000', text: 'Corner Maps' },
  // Medium travel stories
  TRIP_LATAM: { href: 'https://iamy8000.medium.com/3-months-in-latin-america-budget-packing-list-2019-5cd950cd3075', text: '3 months in Latin America', textZh: '拉丁美洲三個月' },
  TRIP_HWY50: { href: 'https://iamy8000.medium.com/highway-50-a-3-933-mile-road-trip-from-sunnyvale-to-maryland-days-1-2-7fdd1ecf6e36', text: 'a 3,933-mile road trip on Highway 50', textZh: '沿 50 號公路橫跨美國的 3,933 英里公路旅行' },
  // Facebook photo albums (public)
  ALBUM_ARGENTINA: { href: 'https://www.facebook.com/media/set/?set=a.4571809562833396&type=3', text: 'Argentina', textZh: '阿根廷' },
  ALBUM_PATAGONIA: { href: 'https://www.facebook.com/media/set/?set=a.3905982992749393&type=3', text: 'Torres del Paine', textZh: '智利百內國家公園' },
  ALBUM_CUBA: { href: 'https://www.facebook.com/media/set/?set=a.3483658641648499&type=3', text: 'Cuba', textZh: '古巴' },
  ALBUM_XINJIANG: { href: 'https://www.facebook.com/media/set/?set=a.2641386529209052&type=3', text: 'Xinjiang', textZh: '新疆' },
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
  { emoji: '📷', key: 'albums' },
] as const

/** Replaces {{KEY}} placeholders in card text with the matching link from OUTSIDE_LINKS. */
function injectLinks(desc: string, locale: string): React.ReactNode {
  return desc.split(/\{\{([A-Z0-9_]+)\}\}/).map((part, i) => {
    if (i % 2 === 0) return part
    const link: { href: string; text: string; textZh?: string } | undefined = OUTSIDE_LINKS[part as keyof typeof OUTSIDE_LINKS]
    if (!link) return `{{${part}}}`
    const text = locale === 'zh-TW' && link.textZh ? link.textZh : link.text
    return <a key={`${part}-${i}`} href={link.href} target="_blank" rel="noopener noreferrer">{text}</a>
  })
}

export function OutsideOfWork() {
  const { t, tr, locale } = useLanguage()
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
                <p className="outside-text">{injectLinks(data.desc, locale)}</p>
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
