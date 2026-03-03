function App() {
  return (
    <main className="page">
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <span className="hero__badge">Progressive Web App</span>
        <h1 id="hero-title" className="hero__title">
          Build fast. <span>Ship everywhere.</span>
        </h1>
        <p className="hero__subtitle">
          A modern React app with Vite and TypeScript. Install it on any device and use it offline.
        </p>
        <button type="button" className="hero__cta" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
          See what’s inside
          <span aria-hidden>↓</span>
        </button>
      </section>

      {/* Features */}
      <section id="features" className="features" aria-labelledby="features-title">
        <div className="features__inner">
          <header className="features__heading">
            <h2 id="features-title" className="features__title">Why this stack</h2>
            <p className="features__subtitle">Vite, React, TypeScript, and PWA in one place.</p>
          </header>
          <div className="features__grid">
            <article className="feature-card">
              <div className="feature-card__icon" aria-hidden>⚡</div>
              <h3 className="feature-card__title">Instant dev experience</h3>
              <p className="feature-card__text">
                Vite provides fast HMR and quick builds so you can focus on building features.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-card__icon" aria-hidden>📱</div>
              <h3 className="feature-card__title">Installable PWA</h3>
              <p className="feature-card__text">
                Add to home screen, work offline, and get a native-like experience on any device.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-card__icon" aria-hidden>🔒</div>
              <h3 className="feature-card__title">Type-safe with TypeScript</h3>
              <p className="feature-card__text">
                Catch errors early and scale your codebase with confidence and better tooling.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" aria-labelledby="cta-title">
        <div className="cta__inner">
          <h2 id="cta-title" className="cta__title">Ready to customize?</h2>
          <p className="cta__text">
            Clone the repo, run npm install and npm run dev. Start building your next idea.
          </p>
          <div className="cta__buttons">
            <button type="button" className="cta__btn cta__btn--primary">
              Get started
            </button>
            <a
              href="https://vite.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="cta__btn cta__btn--secondary"
            >
              Vite docs
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
