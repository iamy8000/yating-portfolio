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
        <a href="mailto:yating.yy.yang@gmail.com" className="email-link">{t('contact.email')}</a>
      </div>
    </section>
  )
}
