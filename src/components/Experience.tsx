import { useRef, useEffect } from 'react'

interface ExperienceItem {
  period: string
  title: string
  company: string
  link?: string
  description: string
  tags: string[]
}

interface EducationItem {
  period: string
  title: string
  school: string
  detail?: string
}

const experiences: ExperienceItem[] = [
  {
    period: 'Aug 2024 – Jul 2025',
    title: 'Frontend Engineer',
    company: 'Tymeline',
    // description:
    //   'Built core UI components for an AI-powered performance platform, leading frontend development and improving key workflows for real-time goal tracking.',
      description:
      'Built core UI components for an AI-powered performance platform.',
    tags: ['React', 'JavaScript', 'Redux', 'TypeScript', 'Playwright', 'AWS'],
  },
  {
    period: 'Jul 2024 – Jul 2025',
    title: 'Software Engineer',
    company: 'IpserLab',
    description:
      'Worked on a WebRTC video conferencing platform, leading UI revamps and improving accessibility, interaction, and UX.',
    tags: ['React', 'JavaScript', 'WebRTC'],
  },
  {
    period: 'Sep 2023 – May 2024',
    title: 'Teaching Assistant, Python Programming',
    company: 'University of Maryland',
    description:
      'Supported course instructors by leading Python lab sessions and providing technical assistance for student projects.',
    tags: ['Python'],
  },
  {
    period: 'Aug 2021 – Feb 2023',
    title: 'Frontend Engineer',
    company: 'Tagnology',
    description:
      'Built and shipped features across 6 projects, from a Web3 NFT marketplace to an Instagram chatbot flow builder.',
    tags: ['React', 'JavaScript', 'Next.js', 'Web3', 'HTML', 'CSS'],
  },
  {
    period: 'Dec 2017 – Jun 2019',
    title: 'Account Executive',
    company: 'Ogilvy',
    description:
      'Executed branding, digital, and social campaigns for global brands including Nike and Google Play. Collaborated cross-functionally with clients, creators, and engineers.',
    tags: ['Campaign Execution', 'Cross-team Delivery', 'Brand Strategy', 'Project Management'],
  },
]

const education: EducationItem[] = [
  {
    period: 'Sep 2022 – May 2024',
    title: 'Master of Information Management',
    school: 'University of Maryland, College Park',
    detail: 'Coursework: Web Development, Database Design (SQL/NoSQL), Cloud Security, NLP',
  },
  {
    period: 'Sep 2013 – Jun 2017',
    title: 'Bachelor of Arts in Advertising and Public Relations',
    school: 'Fu Jen Catholic University',
  },
]

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
  return (
    <section className="section section-experience" id="experience">
      <div className="about-bg-word" aria-hidden>Work Experience</div>
      <div className="experience-inner">
        <p className="section-label">Work Experience</p>
        <div className="experience-list">
        {experiences.map((exp, i) => (
          <ExperienceRow key={i} exp={exp} delay={i * 0.05} />
        ))}
      </div>

      <div className="experience-education">
        <p className="section-label">Education</p>
        <div className="experience-list">
          {education.map((edu, i) => (
            <EducationRow key={i} edu={edu} delay={i * 0.05} />
          ))}
        </div>
        <p className="experience-resume-wrap">
          <a
            href="/Resume_Yating_Amy_Yang.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-resume-link"
          >
            View Full Resume ↗
          </a>
        </p>
      </div>
      </div>
    </section>
  )
}

function ExperienceRow({ exp, delay }: { exp: ExperienceItem; delay: number }) {
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
          {exp.link && (
            <a href={exp.link} target="_blank" rel="noreferrer" className="experience-ext-link" aria-label="Company link">
              ↗
            </a>
          )}
        </h3>
        <p className="experience-desc">{exp.description}</p>
        <div className="experience-tags">
          {exp.tags.map((tag) => (
            <span key={tag} className="experience-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function EducationRow({ edu, delay }: { edu: EducationItem; delay: number }) {
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
        {edu.detail && <p className="experience-detail">{edu.detail}</p>}
      </div>
    </div>
  )
}
