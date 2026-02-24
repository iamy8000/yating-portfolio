import { useRef, useEffect } from 'react'
import { projects } from '../data/projects'

const PC_CLASSES = ['pc1', 'pc2', 'pc3', 'pc4'] as const

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

export function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-label">Selected Projects</p>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.id}
            num={String(i + 1).padStart(2, '0')}
            title={p.title}
            sub={p.tags.join(' · ')}
            pc={PC_CLASSES[i % PC_CLASSES.length]}
            delay={i * 0.08}
          />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({
  num,
  title,
  sub,
  pc,
  delay,
}: {
  num: string
  title: string
  sub: string
  pc: (typeof PC_CLASSES)[number]
  delay?: number
}) {
  const ref = useFadeIn(0.12)

  return (
    <div
      ref={ref}
      className={`project-card ${pc} fade-up`}
      style={delay != null ? { transitionDelay: `${delay}s` } : undefined}
    >
      <div className="project-num">{num}</div>
      <div className="project-name">
        <div className="project-title">{title}</div>
        <div className="project-sub">{sub}</div>
      </div>
      <div className="project-arrow">↗</div>
    </div>
  )
}
