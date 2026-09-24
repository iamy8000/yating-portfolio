import { Link } from 'react-router-dom'

type SeeMoreLinkProps =
  | { to: string; scrollTo?: never; children: React.ReactNode }
  | { scrollTo: string; to?: never; children: React.ReactNode }

/** The "See more →" link: `to` navigates to a route, `scrollTo` smooth-scrolls to a section id on the same page. */
export function SeeMoreLink({ to, scrollTo, children }: SeeMoreLinkProps) {
  const label = <>{children} {'→︎'}</>
  return (
    <p className="see-more-wrap">
      {scrollTo ? (
        <a
          href={`#${scrollTo}`}
          className="about-teaser-link"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById(scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}
        >
          {label}
        </a>
      ) : (
        <Link to={to!} className="about-teaser-link">{label}</Link>
      )}
    </p>
  )
}
