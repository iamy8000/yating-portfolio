import { useRef, useEffect } from 'react'

const cornerMapsLists = [
  { city: 'NYC', lists: ['Coffee spots', 'Bars', 'Food', 'Laptop-friendly cafes'] },
]

const mediumPosts = [
  { title: 'Post title one', desc: 'Short description of the article.' },
  { title: 'Post title two', desc: 'Short description of the article.' },
]

const places = [
  '🇹🇼 Taipei', '🇺🇸 New York', '🇺🇸 Washington DC', '🇯🇵 Tokyo',
  '🇩🇪 Berlin', '🇬🇧 London', '🇰🇷 Seoul', '🇹🇭 Bangkok',
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

function ArrowUpRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17L17 7M17 7h-10v10" />
    </svg>
  )
}

export function OutsideOfWork() {
  const ref = useFadeIn(0.12)
  const ref2 = useFadeIn(0.12)
  const ref3 = useFadeIn(0.12)
  const ref4 = useFadeIn(0.12)
  const ref5 = useFadeIn(0.12)

  return (
    <section className="section" id="outside">
      <p className="section-label">Outside of Work</p>
      <div ref={ref} className="outside-content fade-up">
        <p className="about-outside-intro">The things that keep me going when the screen is off.</p>
        <div className="about-floating-list">
          <div className="about-floating-item about-float-1">
            <span className="about-floating-emoji" style={{ animationDelay: '0s' }} aria-hidden>🏃‍♀️</span>
            <div>
              <p className="about-floating-text"><strong>I RUN</strong> — currently training for DC half &amp; Brooklyn half.</p>
              <p className="about-floating-sub">Check out my <a href="#" className="about-ext-link">Strava</a> — I&apos;ll kudo back!</p>
            </div>
          </div>
          <div className="about-floating-item about-float-2">
            <span className="about-floating-emoji" style={{ animationDelay: '0.5s' }} aria-hidden>✈️</span>
            <div>
              <p className="about-floating-text"><strong>I TRAVEL</strong> — new places, new hikes, new bars 🥺</p>
              <p className="about-floating-sub">New city. New food spot.</p>
            </div>
          </div>
          <div className="about-floating-item about-float-3">
            <span className="about-floating-emoji" style={{ animationDelay: '1s' }} aria-hidden>🍜</span>
            <div>
              <p className="about-floating-text">
                <strong>I EAT &amp; CAFE-HOP</strong> — lists on{' '}
                <a href="#" className="about-ext-link">Corner Maps</a>, my fav app in 2025 &amp; 2026!
              </p>
            </div>
          </div>
          {/* <div className="about-floating-item about-float-4">
            <span className="about-floating-emoji" style={{ animationDelay: '1.5s' }} aria-hidden>📷</span>
            <div>
              <p className="about-floating-text"><strong>I PHOTOGRAPH</strong> — shooting film. Check out my photos below :)</p>
            </div>
          </div> */}
        </div>
      </div>

      <div className="about-content">
        {/* Corner Maps Lists */}
        <div ref={ref2} className="about-subsection fade-up" style={{ transitionDelay: '0.2s' }}>
          <h2 className="about-subsection-heading">My Corner Maps Lists</h2>
          <div className="about-cornermaps-grid">
            {cornerMapsLists.map((group) => (
              <div key={group.city}>
                <h3 className="about-cornermaps-city">{group.city}</h3>
                <ul className="about-cornermaps-list">
                  {group.lists.map((list) => (
                    <li key={list}>
                      <a href="#" className="about-cornermaps-link">
                        {group.city.toLowerCase()}: {list}
                        <ArrowUpRightIcon />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* My Medium */}
        <div ref={ref3} className="about-subsection fade-up" style={{ transitionDelay: '0.24s' }}>
          <h2 className="about-subsection-heading">My Medium</h2>
          <div className="about-medium-list">
            {mediumPosts.map((post, i) => (
              <a key={i} href="#" target="_blank" rel="noopener noreferrer" className="about-medium-item">
                <div className="about-medium-thumb">img</div>
                <div>
                  <h3 className="about-medium-title">{post.title}</h3>
                  <p className="about-medium-desc">{post.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Film Photos */}
        <div ref={ref4} className="about-subsection fade-up" style={{ transitionDelay: '0.26s' }}>
          <h2 className="about-subsection-heading">Film Photos</h2>
          <div className="about-photos-grid">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="about-photo-placeholder">
                Photo {i}
              </div>
            ))}
          </div>
          <p className="about-photos-note">Upload your film photos to replace these placeholders.</p>
        </div>

        {/* Places I've Been */}
        <div ref={ref5} className="about-subsection fade-up" style={{ transitionDelay: '0.28s' }}>
          <h2 className="about-subsection-heading">Places I&apos;ve Been</h2>
          <p className="about-places-intro">A running list of cities and countries — always growing.</p>
          <div className="about-places-tags">
            {places.map((place) => (
              <span key={place} className="about-place-tag">{place}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
