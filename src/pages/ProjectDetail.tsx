import { useRef, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { GrainCanvas } from '../components/GrainCanvas'

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

function ArrowLeftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  )
}

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>()
  const project = projects.find((p) => p.id === projectId)
  const ref1 = useFadeIn(0.12)
  const ref2 = useFadeIn(0.12)
  const ref3 = useFadeIn(0.12)
  const ref4 = useFadeIn(0.12)
  const ref5 = useFadeIn(0.12)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  if (!project) {
    return (
      <>
        <GrainCanvas />
        <Nav />
        <div className="project-detail-page">
          <div className="project-detail-inner">
            <Link to="/#projects" className="project-detail-back">
              <ArrowLeftIcon /> Back to Projects
            </Link>
            <h1 className="project-detail-title" style={{ fontSize: '1.5rem' }}>Project not found</h1>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <GrainCanvas />
      <Nav />
      <div className="project-detail-page">
        <div className="project-detail-inner">
          <div ref={ref1} className="fade-up">
            <Link to="/#projects" className="project-detail-back">
              <ArrowLeftIcon /> Back to Projects
            </Link>
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-desc">{project.description}</p>
          </div>

          <div ref={ref2} className="project-detail-meta-grid fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="project-detail-meta-item">
              <p className="project-detail-meta-label">Role</p>
              <p className="project-detail-meta-value">{project.role}</p>
            </div>
            <div className="project-detail-meta-item">
              <p className="project-detail-meta-label">Team Size</p>
              <p className="project-detail-meta-value">{project.teamSize}</p>
            </div>
            <div className="project-detail-meta-item">
              <p className="project-detail-meta-label">Organization</p>
              <p className="project-detail-meta-value">{project.teamOrg}</p>
            </div>
          </div>

          <div ref={ref3} className="project-detail-block fade-up" style={{ transitionDelay: '0.15s' }}>
            <h2 className="project-detail-heading">Details</h2>
            <p className="project-detail-desc">{project.details}</p>
          </div>

          <div ref={ref4} className="project-detail-block fade-up" style={{ transitionDelay: '0.2s' }}>
            <h2 className="project-detail-heading">Tech Stack</h2>
            <div className="project-detail-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-detail-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div ref={ref5} className="project-detail-block fade-up" style={{ transitionDelay: '0.25s' }}>
            <h2 className="project-detail-heading">Demo & Mockups</h2>
            <div className="project-detail-mockup">
              <span className="project-detail-mockup-text">Screenshots / demo coming soon</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
