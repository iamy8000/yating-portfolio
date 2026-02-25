export function Hero() {
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
        {/* <p className="hero-eyebrow">Frontend Engineer · NYC</p> */}
        <h1 className="hero-title">
          Amy Yang is a <em>frontend engineer.</em> based in NY.
        </h1>
        <p className="hero-sub">
          {/* Currently Founding software engineer at ConnNext. */}
          I share my work and the rest of me here.
          Think of this as my corner of the internet — pull up a seat.
        </p>
        <a href="#projects" className="view-btn">
          <div className="view-btn-circle">↗</div>
          View Projects
        </a>
      </div>
    </section>
  )
}
