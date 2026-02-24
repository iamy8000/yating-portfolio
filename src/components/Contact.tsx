import { useRef, useEffect } from 'react'

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
  const ref = useFadeIn(0.12)

  return (
    <section className="contact-section">
      <div className="contact-blob-wrap">
        <div className="cb cb1" />
        <div className="cb cb2" />
      </div>
      <div ref={ref} className="contact-content fade-up">
        <h2>Want to work<br /><em>together?</em></h2>
        <a href="mailto:yating.yy.yang@gmail.com" className="email-link">yating.yy.yang@gmail.com</a>
      </div>
    </section>
  )
}
