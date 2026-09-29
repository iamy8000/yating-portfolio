import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import { useFadeIn } from '../hooks/useFadeIn'

function ArrowLeftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  )
}

function getYoutubeEmbedId(url: string): string | null {
  try {
    const u = new URL(url)
    if (u.hostname === 'www.youtube.com' || u.hostname === 'youtube.com') {
      if (u.pathname.startsWith('/embed/')) return u.pathname.split('/').pop() || null
      if (u.pathname.startsWith('/shorts/')) return u.pathname.split('/').pop() || null
      return u.searchParams.get('v')
    }
    if (u.hostname === 'youtu.be') return u.pathname.slice(1).replace(/^\//, '') || null
  } catch {
    return null
  }
  return null
}

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>()
  const { t, tr } = useLanguage()
  const project = projects.find((p) => p.id === projectId)
  const localized = project ? tr.projects.list[project.id as keyof typeof tr.projects.list] : null
  const ref1 = useFadeIn(0.12)
  const ref2 = useFadeIn(0.12)
  const ref3 = useFadeIn(0.12)
  const ref4 = useFadeIn(0.12)
  // The screenshots block can be taller than several screens, so any ratio above 0 may never be reached
  const ref5 = useFadeIn(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  // Lightbox: index into the screenshots that have an image
  const shots = project?.screenshots?.filter((s) => s.src) ?? []
  const [openShot, setOpenShot] = useState<number | null>(null)

  useEffect(() => {
    setOpenShot(null)
  }, [projectId])

  useEffect(() => {
    if (openShot === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenShot(null)
      if (e.key === 'ArrowRight') setOpenShot((i) => (i === null ? i : (i + 1) % shots.length))
      if (e.key === 'ArrowLeft') setOpenShot((i) => (i === null ? i : (i - 1 + shots.length) % shots.length))
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [openShot, shots.length])

  if (!project) {
    return (
      <>
        <Nav />
        <div className="project-detail-page">
          <div className="project-detail-inner">
            <Link to="/#projects" className="project-detail-back">
              <ArrowLeftIcon /> {t('projects.backToProjects')}
            </Link>
            <h1 className="project-detail-title" style={{ fontSize: '1.5rem' }}>{t('projects.notFound')}</h1>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Nav />
      <div className="project-detail-page">
        <div className="project-detail-inner">
          <div ref={ref1} className="fade-up">
            <Link to="/#projects" className="project-detail-back">
              <ArrowLeftIcon /> {t('projects.backToProjects')}
            </Link>
            <h1 className="project-detail-title">{localized?.title ?? project.title}</h1>
            <p className="project-detail-desc">{localized?.description ?? project.description}</p>
          </div>

          <div ref={ref2} className="project-detail-meta-grid fade-up" style={{ transitionDelay: '0.1s' }}>
            <div className="project-detail-meta-item">
              <p className="project-detail-meta-label">{t('projects.role')}</p>
              <p className="project-detail-meta-value">{localized?.role ?? project.role}</p>
            </div>
            <div className="project-detail-meta-item">
              <p className="project-detail-meta-label">{t('projects.teamSize')}</p>
              <p className="project-detail-meta-value">{project.teamSize}</p>
            </div>
            <div className="project-detail-meta-item">
              <p className="project-detail-meta-label">{t('projects.organization')}</p>
              <p className="project-detail-meta-value">{localized?.teamOrg ?? project.teamOrg}</p>
            </div>
            {project.githubUrl && (
              <div className="project-detail-meta-item project-detail-github-wrap">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-detail-github-link">
                  {t('projects.viewOnGithub')} {'\u2197\uFE0E'}
                </a>
              </div>
            )}
          </div>

          <div ref={ref3} className="project-detail-block fade-up" style={{ transitionDelay: '0.15s' }}>
            {project.overview?.length || project.whatIDid?.length ? (
              <>
                {project.overview?.length ? (
                  <div className="project-detail-section">
                    <h2 className="project-detail-heading">{t('projects.overview')}</h2>
                    {project.overview.map((para, i) => (
                      <p key={i} className="project-detail-para">{para}</p>
                    ))}
                  </div>
                ) : null}
                {project.whatIDid?.length ? (
                  <div className="project-detail-section">
                    <h2 className="project-detail-heading">{t('projects.whatIDid')}</h2>
                    {project.whatIDid.map((para, i) => (
                      <p key={i} className="project-detail-para">{para}</p>
                    ))}
                  </div>
                ) : null}
              </>
            ) : (
              <>
                <h2 className="project-detail-heading">{t('projects.details')}</h2>
                <p className="project-detail-desc">{localized?.details ?? project.details}</p>
              </>
            )}
          </div>

          <div ref={ref4} className="project-detail-block fade-up" style={{ transitionDelay: '0.2s' }}>
            <h2 className="project-detail-heading">{t('projects.techStack')}</h2>
            <div className="project-detail-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-detail-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div ref={ref5} className="project-detail-block fade-up" style={{ transitionDelay: '0.25s' }}>
            <h2 className="project-detail-heading">{t('projects.demoMockups')}</h2>
            <div className="project-detail-mockup">
              {project.demoVideos && project.demoVideos.length > 0 && (
                <div className="project-detail-demo-videos">
                  {project.demoVideos.map((url, i) => {
                    const videoId = getYoutubeEmbedId(url)
                    if (!videoId) return null
                    return (
                      <div key={i} className="project-detail-demo-video-wrap">
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}`}
                          title=""
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="project-detail-demo-video"
                        />
                      </div>
                    )
                  })}
                </div>
              )}
              {project.demoImages?.length > 0 && (
                <div className="project-detail-demo-images">
                  {project.demoImages.map((src, i) => (
                    <img key={i} src={src} alt="" className="project-detail-demo-img" />
                  ))}
                </div>
              )}
              {project.screenshots && project.screenshots.length > 0 && (
                <div className="project-detail-shots">
                  {project.screenshots.map((shot, i) => (
                    <figure key={i} className={`project-detail-shot project-detail-shot--${shot.device}`}>
                      {shot.src ? (
                        <button
                          type="button"
                          className="project-detail-shot-zoom"
                          onClick={() => setOpenShot(shots.indexOf(shot))}
                          aria-label={`${t('projects.enlargeImage')}: ${shot.caption}`}
                        >
                          <img src={shot.src} alt={shot.caption} className="project-detail-shot-img" loading="lazy" />
                        </button>
                      ) : (
                        <div className="project-detail-shot-placeholder">
                          <span>{t('projects.screenshotsComing')}</span>
                        </div>
                      )}
                      <figcaption className="project-detail-shot-caption">{shot.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
              {(!project.demoVideos?.length && !project.demoImages?.length && !project.screenshots?.length) && (
                <span className="project-detail-mockup-text">{t('projects.screenshotsComing')}</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {openShot !== null && shots[openShot] && (
        <div className="shot-lightbox" role="dialog" aria-modal="true" onClick={() => setOpenShot(null)}>
          <img
            src={shots[openShot].src}
            alt={shots[openShot].caption}
            className="shot-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="shot-lightbox-caption" onClick={(e) => e.stopPropagation()}>
            {shots[openShot].caption} · {openShot + 1} / {shots.length}
          </p>
          <button type="button" className="shot-lightbox-btn shot-lightbox-close" aria-label={t('projects.closeImage')} onClick={() => setOpenShot(null)}>
            ✕
          </button>
          {shots.length > 1 && (
            <>
              <button
                type="button"
                className="shot-lightbox-btn shot-lightbox-prev"
                aria-label={t('projects.prevImage')}
                onClick={(e) => {
                  e.stopPropagation()
                  setOpenShot((openShot - 1 + shots.length) % shots.length)
                }}
              >
                ←
              </button>
              <button
                type="button"
                className="shot-lightbox-btn shot-lightbox-next"
                aria-label={t('projects.nextImage')}
                onClick={(e) => {
                  e.stopPropagation()
                  setOpenShot((openShot + 1) % shots.length)
                }}
              >
                →
              </button>
            </>
          )}
        </div>
      )}
    </>
  )
}
