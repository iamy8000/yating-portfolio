import { useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

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
  const { t } = useLanguage()
  const ref = useFadeIn(0.12)

  return (
    <section className="section section-me" id="me" style={{ marginTop: '2rem' }}>
      <div className="about-bg-word" aria-hidden>{t('me.label')}</div>
      <div className="me-inner">
        <p className="section-label">{t('me.label')}</p>
        <div className="me-content">
        <div className="about-heading me-heading-diary">
          <p>{t('me.p1')}</p>
          <p>{t('me.p2')}</p>
          <p>{t('me.p3')}</p>
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
