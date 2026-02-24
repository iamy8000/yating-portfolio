import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { Nav } from '../components/Nav'
import { GrainCanvas } from '../components/GrainCanvas'

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>()
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return (
      <>
        <GrainCanvas />
        <Nav />
        <section className="section" style={{ paddingTop: '6rem' }}>
          <p>Project not found.</p>
          <Link to="/#projects" className="about-body a">← Back to projects</Link>
        </section>
      </>
    )
  }

  return (
    <>
      <GrainCanvas />
      <Nav />
      <section className="section" style={{ paddingTop: '6rem' }}>
        <Link to="/#projects" className="project-back">← Back to projects</Link>
        <h1 className="project-detail-title">{project.title}</h1>
        <p className="project-detail-tags">{project.tags.join(' · ')}</p>
        <p className="about-body" style={{ marginTop: '1.5rem' }}>{project.description}</p>
        <dl className="project-detail-meta">
          <dt>Role</dt>
          <dd>{project.role}</dd>
          <dt>Team</dt>
          <dd>{project.teamSize} · {project.teamOrg}</dd>
        </dl>
        <p className="about-body" style={{ marginTop: '1rem' }}>{project.details}</p>
      </section>
    </>
  )
}
