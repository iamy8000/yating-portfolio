import { useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

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
  const { t } = useLanguage()
  const refLeft = useFadeIn(0.12)
  const ref1 = useFadeIn(0.12)

  return (
    <section className="section section-about" id="about">
      <div className="about-bg-word" aria-hidden>{t('about.label')}</div>
      <div className="about-inner">
        <p className="section-label">{t('about.label')}</p>
        <div className="about-cols">
          <div ref={refLeft} className="about-teaser-left fade-up">
            <div className="about-heading-row">
              <h2 className="about-heading">
                {t('about.heading')} <br /><em>{t('about.headingEm')}</em>
              </h2>
              <div className="stats-row">
                <div><span className="stat-num">4+</span><div className="stat-label">{t('about.yearsEng')}</div></div>
                <div><span className="stat-num">10+</span><div className="stat-label">{t('about.projects')}</div></div>
              </div>
            </div>
            <p style={{ marginTop: '1.5rem' }}>
              <a href="/about" className="about-teaser-link">{t('about.learnMore')} {'\u2192\uFE0E'}</a>
            </p>
          </div>
          <div ref={ref1} className="about-body fade-up" style={{ transitionDelay: '0.1s' }}>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
            <p>
              <a href="https://www.linkedin.com/in/yang-ya-ting/" target="_blank" rel="noreferrer">{t('about.linkedin')} {'\u2197\uFE0E'}</a>
              {' \u2003 '}
              <a href="mailto:yating.yy.yang@gmail.com">{t('about.email')} {'\u2197\uFE0E'}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
