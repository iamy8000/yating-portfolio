import { useState, useEffect } from 'react'

const ROTATOR_WORDS = [
  'a frontend engineer.',
  'loves running in Central Park,',
  'especially those hills. iykyk.',
  'walks fast. always.',
  'stops for dogs 🐶 ',
  'three lattes a day.',
  'usually at a café.',
  'prefers trains over cars,',
  'but still loves road trips.',
  'five hours is her max.',
  'tried snowboarding once.',
  'realized it’s not for her.',
  // 'deep cleaning is her therapy.',
  'has lists for everything.',
  'recently made one called:',
  '“maybe I will finally go on long hikes.”',
  // 'friends go to person to ask where to go for night out',
  'always has a kindle in her tote bag.',
  'collects tote bags unironically,',
  'has 20+ of them. Ten are from Trader Joe’s.',
  'owns too many mugs.',
  'the friend everyone texts for dinner ideas.',
  'she has the reservation ready.',
  'reads the menu before arriving.',
]

export function Hero() {
  const [index, setIndex] = useState(0)
  const [noTransition, setNoTransition] = useState(false)
  const words = [...ROTATOR_WORDS, ROTATOR_WORDS[0]]
  const isDuplicateSlot = index === words.length - 1

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => Math.min(i + 1, words.length - 1)),
      2000
    )
    return () => clearInterval(id)
  }, [])

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.propertyName !== 'transform') return
    if (!isDuplicateSlot) return
    setNoTransition(true)
    requestAnimationFrame(() => {
      setIndex(0)
      requestAnimationFrame(() => setNoTransition(false))
    })
  }

  return (
    <section className="hero">
      <div className="hero-gradient" />
      <div className="blob-wrap">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
        <div className="blob b4" />
        <div className="blob b5" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Amy Yang, <br />
          <span className="hero-rotator-wrap">
            <span
              className={`hero-rotator ${noTransition ? 'hero-rotator-no-transition' : ''}`}
              style={{ transform: `translateY(-${index * (100 / words.length)}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {words.map((word, i) => (
                <em key={`${word}-${i}`}>{word}</em>
              ))}
            </span>
          </span>
        </h1>
        <p className="hero-sub">
          Currently a Founding Full-Stack Engineer at <a href="https://connnext.com" target="_blank" rel="noopener noreferrer">ConnNext</a>.
          Based in NY.
        </p>
        <div className="hero-cta-wrap">
          <a href="/about" className="view-btn">
            <div className="view-btn-circle">{'\u2197\uFE0E'}</div>
            {`Learn more about me :)`}
          </a>
          <a href="#projects" className="view-btn">
            <div className="view-btn-circle">{'\u2197\uFE0E'}</div>
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}
