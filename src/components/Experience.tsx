import { useRef, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

interface ExperienceItemType {
  period: string
  title: string
  company: string
  description: string
  tags: readonly string[]
}

interface EducationItemType {
  period: string
  title: string
  school: string
  detail?: string
}

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

export function Experience() {
  const { t, tr } = useLanguage()
  const experiences = tr.experience.items as unknown as ExperienceItemType[]
  const education = tr.experience.educationItems as unknown as EducationItemType[]

  return (
    <section className="section section-experience" id="experience">
      <div className="about-bg-word" aria-hidden>{t('experience.label')}</div>
      <div className="experience-inner">
        <p className="section-label">{t('experience.label')}</p>
        <div className="experience-list">
        {experiences.map((exp, i) => (
          <ExperienceRow key={i} exp={exp} delay={i * 0.05} />
        ))}
      </div>

      <div className="experience-education">
        <p className="section-label">{t('experience.education')}</p>
        <div className="experience-list">
          {education.map((edu, i) => (
            <EducationRow key={i} edu={edu} delay={i * 0.05} />
          ))}
        </div>
        <p className="experience-resume-wrap">
          <a
            href="https://drive.google.com/file/d/15kAqEEE7kAjZWnxhAWhMQeB1yyEK-lDV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-resume-link"
          >
            {t('experience.viewResume')} {'\u2197\uFE0E'}
          </a>
        </p>
      </div>
      </div>
    </section>
  )
}

function ExperienceRow({ exp, delay }: { exp: ExperienceItemType; delay: number }) {
  const ref = useFadeIn(0.12)
  return (
    <div
      ref={ref}
      className="experience-item fade-up"
      style={{ transitionDelay: `${delay}s` }}
    >
      <p className="experience-period">{exp.period}</p>
      <div className="experience-content">
        <h3 className="experience-title">
          {exp.title} @ {exp.company}
        </h3>
        <p className="experience-desc">{exp.description}</p>
        <div className="experience-tags">
          {exp.tags.map((tag: string) => (
            <span key={tag} className="experience-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function EducationRow({ edu, delay }: { edu: EducationItemType; delay: number }) {
  const ref = useFadeIn(0.12)
  return (
    <div
      ref={ref}
      className="experience-item fade-up"
      style={{ transitionDelay: `${delay}s` }}
    >
      <p className="experience-period">{edu.period}</p>
      <div className="experience-content">
        <h3 className="experience-title">{edu.title}</h3>
        <p className="experience-desc">@ {edu.school}</p>
        {edu.detail != null && <p className="experience-detail">{edu.detail}</p>}
      </div>
    </div>
  )
}
