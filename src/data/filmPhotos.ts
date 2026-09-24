export interface FilmPhoto {
  src: string
  className?: 'tall' | 'wide'
  objectPosition?: string
}

// Film photos: the row sits above the grid on desktop; on mobile everything flows into one grid.
export const filmPhotosRow: FilmPhoto[] = [
  { src: '/images/film-pic-6.jpg' },
  { src: '/images/film-pic-7.jpg' },
  { src: '/images/film-pic-8.jpg' },
]

export const filmPhotosGrid: FilmPhoto[] = [
  { src: '/images/film-pic-1.jpg' },
  { src: '/images/film-pic-2.jpg' },
  { src: '/images/film-pic-3.png', className: 'tall' },
  { src: '/images/film-pic-4.png', className: 'wide' },
  { src: '/images/film-pic-5.jpg', className: 'tall' },
  { src: '/images/film-pic-9.jpg', className: 'wide', objectPosition: 'center 85%' },
  { src: '/images/film-pic-10.jpg', className: 'wide', objectPosition: 'center 68%' },
]
