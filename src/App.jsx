const features = [
  {
    number: '01',
    title: 'Bring your ideas together',
    text: 'Keep every note, task, and project in one calm workspace built for momentum.',
    icon: '✦',
  },
  {
    number: '02',
    title: 'Make progress visible',
    text: 'See what matters now with simple views that turn busy work into clear next steps.',
    icon: '↗',
  },
  {
    number: '03',
    title: 'Move as one team',
    text: 'Share context instantly and keep everyone aligned without adding more meetings.',
    icon: '◌',
  },
];

import { useState } from 'react';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <main className="site-shell">
      <nav className="navbar">
        <a className="brand" href="#top" aria-label="Luma home">
          <span className="brand-mark"><span /></span>
          <span>Luma</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span /><span />
        </button>

        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#product" onClick={() => setMenuOpen(false)}>Product</a>
          <a href="#why-luma" onClick={() => setMenuOpen(false)}>Why Luma</a>
          <a href="#stories" onClick={() => setMenuOpen(false)}>Stories</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a className="nav-cta" href="#get-started" onClick={() => setMenuOpen(false)}>Get started <span>↗</span></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> THE CALMER WAY TO WORK</div>
          <h1>Make room for<br /><em>great work.</em></h1>
          <p className="hero-text">Luma brings your projects, people, and plans into focus — so your team can spend less time organizing and more time creating.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#get-started">Start for free <span>↗</span></a>
            <a className="text-link" href="#product">See how it works <span>→</span></a>
          </div>
          <div className="trust-line"><div className="avatar-stack"><i>J</i><i>A</i><i>M</i><i>+</i></div><span>Join 12,000+ productive teams</span></div>
        </div>

        <div className="hero-art" aria-label="Luma workspace preview">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="workspace-card">
            <div className="card-top"><div className="mini-logo"><span /></div><span className="card-title">Monday, October 14</span><span className="dots">•••</span></div>
            <div className="card-heading"><div><small>GOOD MORNING, MAYA</small><h3>Let’s make today<br />count.</h3></div><div className="sun">☼</div></div>
            <div className="progress-label"><span>Today’s progress</span><strong>68%</strong></div>
            <div className="progress"><span /></div>
            <div className="task-list">
              <div className="task done"><span className="check">✓</span><span>Review project brief</span><b>09:00</b></div>
              <div className="task"><span className="check" /><span>Creative direction sync</span><b>11:30</b></div>
              <div className="task"><span className="check" /><span>Share first concepts</span><b>14:00</b></div>
            </div>
          </div>
          <div className="floating-note"><span className="note-icon">✦</span><div><small>YOU’RE ON A ROLL</small><strong>3 tasks completed</strong></div></div>
        </div>
      </section>

      <section className="logo-strip" aria-label="Companies using Luma"><span>Used by teams at</span><strong>arc<span>°</span></strong><strong>Northstar</strong><strong className="serif-logo">commonplace</strong><strong className="mono-logo">studio/09</strong></section>

      <section className="intro-section" id="why-luma">
        <div className="section-kicker">01 — A BETTER STARTING POINT</div>
        <div className="intro-content"><h2>Work should feel<br /><em>lighter.</em></h2><div><p>Great work starts with a clear mind. Luma gives your team a simple, beautiful place to plan, focus, and make things happen.</p><a className="circle-link" href="#product">↗</a></div></div>
      </section>

      <section className="feature-grid" id="product">
        {features.map((feature) => (
          <article className="feature-card" key={feature.number}>
            <div className="feature-top"><span>{feature.number}</span><span className="feature-icon">{feature.icon}</span></div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
            <a href="#get-started">Learn more <span>↗</span></a>
          </article>
        ))}
      </section>

      <section className="quote-section" id="stories">
        <div className="quote-mark">“</div>
        <blockquote>Luma gave us back the headspace to do the work we’re actually proud of.</blockquote>
        <div className="quote-author">
          <div className="author-avatar">S</div>
          <div>
            <strong>Samira Okafor</strong>
            <span>Co-founder, Kindred Studio</span>
          </div>
        </div>
      </section>

      <section className="cta-section" id="get-started">
        <div>
          <span className="section-kicker light">02 — YOUR NEXT CHAPTER</span>
          <h2>Ready to make<br /><em>space?</em></h2>
          <p>Join thousands of teams doing their best work with Luma.</p>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="success-message">You’re on the list. Welcome to Luma ✦</div>
          ) : (
            <>
              <input aria-label="Your email address" type="email" placeholder="Your email address" value={email} onChange={(event) => setEmail(event.target.value)} required />
              <button type="submit">Get started <span>↗</span></button>
              <small>Free forever for your personal workspace. No credit card required.</small>
            </>
          )}
        </form>
      </section>

      <footer className="footer">
        <a className="brand" href="#top"><span className="brand-mark"><span /></span><span>Luma</span></a>
        <span>© 2024 Luma, Inc.</span>
        <div>
          <a href="#product">Product</a>
          <a href="#stories">Stories</a>
          <a href="#get-started">Contact</a>
        </div>
      </footer>
    </main>
  );
}
