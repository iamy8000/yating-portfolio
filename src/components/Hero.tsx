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
        <p className="hero-eyebrow">Frontend Engineer · NYC · Open to Relocate</p>
        <h1 className="hero-title">
          welcome to<br />my <em>living room.</em>
        </h1>
        <p className="hero-sub">
          I build fast, accessible, and delightful web experiences.
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
