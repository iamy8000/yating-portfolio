import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

const PC_CLASSES = ['pc1', 'pc2', 'pc3', 'pc4'] as const

function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null)

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

export function Projects() {
  const { t, tr } = useLanguage()
  return (
    <section className="section section-projects" id="projects">     
      <div className="projects-bg-word" aria-hidden>
        {t('projects.sectionLabel')}
      </div>
      <div className="projects-constrain">
        <div className="projects-inner">
          <p className="section-label">{t('projects.sectionLabel')}</p>
          <div className="projects-grid">
            {projects.map((p, i) => {
              const localized = tr.projects.list[p.id as keyof typeof tr.projects.list]
              return (
              <ProjectCard
                key={p.id}
                id={p.id}
                num={String(i + 1).padStart(2, '0')}
                title={localized?.title ?? p.title}
                sub={p.tags.join(' · ')}
                pc={PC_CLASSES[i % PC_CLASSES.length]}
                delay={i * 0.08}
              />
            )})}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  id,
  num,
  title,
  sub,
  pc,
  delay,
}: {
  id: string
  num: string
  title: string
  sub: string
  pc: (typeof PC_CLASSES)[number]
  delay?: number
}) {
  const ref = useFadeIn(0.12)

  return (
    <Link
      ref={ref as React.RefObject<HTMLAnchorElement>}
      to={`/projects/${id}`}
      className={`project-card ${pc} fade-up`}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        ...(delay != null ? { transitionDelay: `${delay}s` } : {}),
      }}
    >
      <div className="project-num">{num}</div>
      <div className="project-name">
        <div className="project-title">{title}</div>
        <div className="project-sub">{sub}</div>
      </div>
      <div className="project-arrow">{'\u2197\uFE0E'}</div>
    </Link>
  )
}
