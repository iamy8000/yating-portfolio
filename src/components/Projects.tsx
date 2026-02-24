import { useRef, useEffect } from 'react'

const PROJECTS = [
  { num: '01', title: 'Interactive Map App', sub: 'React · Mapbox · TypeScript', pc: 'pc1' },
  { num: '02', title: 'Design System', sub: 'Component Library · Storybook · A11y', pc: 'pc2', delay: 0.08 },
  { num: '03', title: 'E-commerce Platform', sub: 'Next.js · Tailwind · Stripe', pc: 'pc3', delay: 0.16 },
  { num: '04', title: 'Data Dashboard', sub: 'D3.js · React · REST API', pc: 'pc4', delay: 0.24 },
] as const

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
        {PROJECTS.map((p) => (
          <ProjectCard key={p.num} {...p} />
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
  pc: string
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
