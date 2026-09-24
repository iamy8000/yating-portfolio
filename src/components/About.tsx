import { useLanguage } from '../context/LanguageContext'
import { useFadeIn } from '../hooks/useFadeIn'
import { SeeMoreLink } from './SeeMoreLink'

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
            <SeeMoreLink to="/about">{t('about.learnMore')}</SeeMoreLink>
          </div>
          <div ref={ref1} className="about-body fade-up" style={{ transitionDelay: '0.1s' }}>
            <h3 className="about-subheading">{t('about.engineer.title')}</h3>
            <p>{t('about.engineer.body')}</p>
            <h3 className="about-subheading">{t('about.person.title')}</h3>
            <p>{t('about.person.body')}</p>
            <p>
              <a href="https://www.linkedin.com/in/yang-ya-ting/" target="_blank" rel="noreferrer">{t('about.linkedin')} {'↗︎'}</a>
              {'   '}
              <a href="mailto:yang.yy.yating@gmail.com">{t('about.email')} {'↗︎'}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
