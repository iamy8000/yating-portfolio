import { useLanguage } from '../context/LanguageContext'
import { useFadeIn } from '../hooks/useFadeIn'

export function Contact() {
  const { t } = useLanguage()
  const ref = useFadeIn(0.12)

  return (
    <section className="contact-section">
      <div className="contact-blob-wrap">
        <div className="cb cb1" />
        <div className="cb cb2" />
      </div>
      <div ref={ref} className="contact-content fade-up">
        <h2>{t('contact.heading')}<br /><em>{t('contact.headingEm')}</em></h2>
        <a href="mailto:yang.yy.yating@gmail.com" className="email-link">{t('contact.email')}</a>
      </div>
    </section>
  )
}
