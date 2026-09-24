import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Smooth-scrolls to the element matching the URL hash (e.g. /life#travel) after render. */
export function useHashScroll(delay = 50) {
  const { hash } = useLocation()
  useEffect(() => {
    const id = hash.slice(1)
    if (!id) return
    const t = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, delay)
    return () => clearTimeout(t)
  }, [hash, delay])
}
