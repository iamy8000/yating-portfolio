import { useLanguage } from '../context/LanguageContext'
import { useFadeIn } from '../hooks/useFadeIn'
import { SeeMoreLink } from './SeeMoreLink'

const ABOUT_ME_IMAGES = [
  '/images/about-me-1.JPG',
  '/images/about-me-2.jpeg',
  '/images/about-me-3.jpg',
  '/images/about-me-4.JPG',
]

// Each part ends with a link down to the section that expands on it
const PARTS = [
  { key: 'engineer', target: 'experience' },
  { key: 'person', target: 'outside' },
] as const

export function MeSection() {
  const { t, tArray } = useLanguage()
  const ref = useFadeIn(0.12)

  return (
    <section className="section section-me" id="me">
      <div className="about-bg-word" aria-hidden>{t('me.label')}</div>
      <div className="me-inner">
        <p className="section-label">{t('me.label')}</p>
        <div className="me-content">
          {PARTS.map(({ key, target }) => (
            <div key={key} className="me-part">
              <h2 className="me-part-title">{t(`me.${key}.title`)}</h2>
              <div className="about-heading me-heading-diary">
                {tArray(`me.${key}.paras`).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <SeeMoreLink scrollTo={target}>{t(`me.${key}.link`)}</SeeMoreLink>
            </div>
          ))}
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
