import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { useLanguage } from '../context/LanguageContext'
import { useFadeIn } from '../hooks/useFadeIn'

const PC_CLASSES = ['pc1', 'pc2', 'pc3', 'pc4'] as const

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
  const ref = useFadeIn<HTMLAnchorElement>(0.12)

  return (
    <Link
      ref={ref}
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
