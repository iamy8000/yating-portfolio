import { useEffect, useState } from 'react'
import { filmPhotosGrid, filmPhotosRow, type FilmPhoto } from '../data/filmPhotos'

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  )
  useEffect(() => {
    const m = window.matchMedia(query)
    setMatches(m.matches)
    const handler = () => setMatches(m.matches)
    m.addEventListener('change', handler)
    return () => m.removeEventListener('change', handler)
  }, [query])
  return matches
}

function FilmCell({ photo, withLayout }: { photo: FilmPhoto; withLayout: boolean }) {
  return (
    <div className={`photo-cell ${withLayout ? photo.className ?? '' : ''}`.trim()}>
      <img
        src={photo.src}
        alt=""
        className="film-photo-img"
        style={photo.objectPosition != null ? { objectPosition: photo.objectPosition } : undefined}
      />
    </div>
  )
}

/** The film photo collage: a row of three above a mixed grid on desktop, one simple grid on mobile. */
export function FilmGallery() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  if (isMobile) {
    const all = [...filmPhotosGrid.slice(0, 5), ...filmPhotosRow, ...filmPhotosGrid.slice(5)]
    return (
      <div className="photos-grid film-photos-grid">
        {all.map((photo) => <FilmCell key={photo.src} photo={photo} withLayout={false} />)}
      </div>
    )
  }

  return (
    <>
      <div className="film-pics-row">
        {filmPhotosRow.map((photo) => <FilmCell key={photo.src} photo={photo} withLayout={false} />)}
      </div>
      <div className="photos-grid film-photos-grid">
        {filmPhotosGrid.map((photo) => <FilmCell key={photo.src} photo={photo} withLayout />)}
      </div>
    </>
  )
}
