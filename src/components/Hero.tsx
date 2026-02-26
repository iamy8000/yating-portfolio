import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

export function Hero() {
  const { t, tArray } = useLanguage()
  const ROTATOR_WORDS = tArray('hero.rotator')
  const words = ROTATOR_WORDS.length > 0 ? [...ROTATOR_WORDS, ROTATOR_WORDS[0]] : []
  const [index, setIndex] = useState(0)
  const [noTransition, setNoTransition] = useState(false)
  const isDuplicateSlot = index === words.length - 1

  useEffect(() => {
    if (words.length === 0) return
    const id = setInterval(
      () => setIndex((i: number) => Math.min(i + 1, words.length - 1)),
      2000
    )
    return () => clearInterval(id)
  }, [words.length])

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
          {t('hero.subtitle')} <a href="https://connnext.com" target="_blank" rel="noopener noreferrer">{t('hero.subtitleConnNext')}</a>. {t('hero.subtitleBased')}
        </p>
        <div className="hero-cta-wrap">
          <a href="/about" className="view-btn">
            <div className="view-btn-circle">{'\u2197\uFE0E'}</div>
            {t('hero.learnMore')}
          </a>
          <a href="#projects" className="view-btn">
            <div className="view-btn-circle">{'\u2197\uFE0E'}</div>
            {t('hero.viewProjects')}
          </a>
        </div>
      </div>
    </section>
  )
}
