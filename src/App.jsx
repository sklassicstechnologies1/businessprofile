import { useEffect, useMemo, useState } from 'react'

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Profile', id: 'profile' },
  { label: 'Ventures', id: 'ventures' },
  { label: 'Strategy', id: 'strategy' },
  { label: 'Results', id: 'results' },
  { label: 'Journey', id: 'journey' },
  { label: 'Contact', id: 'contact' },
]

const ventures = [
  {
    title: 'Sterling Capital',
    tag: 'Private Equity',
    metric: '$620M portfolio value',
    desc: 'Operator-led investments focused on disciplined scaling, governance, and resilient value creation across high-growth sectors.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'North Axis Developments',
    tag: 'Real Assets',
    metric: '24 landmark projects',
    desc: 'Modern mixed-use and logistics developments driven by long-term regional demand, design quality, and execution velocity.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Aurelia Brands',
    tag: 'Consumer Growth',
    metric: '11 countries reached',
    desc: 'Premium consumer ventures built with category positioning, data-driven storytelling, and distribution strategies that compound over time.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80',
  },
]

const pillars = [
  {
    title: 'Investment Intelligence',
    text: 'High-conviction deployment models backed by scenario mapping, competitive positioning, and risk-aware expansion planning.',
  },
  {
    title: 'Brand Authority',
    text: 'Executive positioning, premium perception, and narrative frameworks that make ventures look credible to markets and partners.',
  },
  {
    title: 'Operating Discipline',
    text: 'Decision systems, reporting cadence, and execution dashboards designed to convert strategy into measurable business movement.',
  },
]

const outcomes = [
  { label: 'Annualized Growth', value: 84, suffix: '%' },
  { label: 'Partnership Strength', value: 92, suffix: '%' },
  { label: 'Investor Confidence', value: 96, suffix: '%' },
  { label: 'Brand Positioning', value: 88, suffix: '%' },
]

const timeline = [
  { year: '2012', title: 'First operating venture launched', text: 'Built a market-focused business around execution quality, profitability, and trust.' },
  { year: '2017', title: 'Regional expansion phase', text: 'Entered new sectors with sharper capital allocation and stronger leadership systems.' },
  { year: '2021', title: 'Portfolio architecture evolved', text: 'Integrated investments, advisory, and brand-led growth under a unified structure.' },
  { year: '2026', title: 'Modern executive presence', text: 'Now leading a diversified portfolio with a more visible, premium digital identity.' },
]

const testimonials = [
  {
    quote: 'His ability to combine premium brand thinking with commercial precision makes every venture feel stronger and more investable.',
    name: 'Sophia Maren',
    role: 'Board Member, Crest Meridian',
  },
  {
    quote: 'Clear strategy, confident leadership, and disciplined execution. He operates with the polish of a corporate institution and the speed of an entrepreneur.',
    name: 'Rohan Mehta',
    role: 'Partner, Horizon Advisory',
  },
  {
    quote: 'Every initiative he touches becomes more structured, more credible, and more valuable in the eyes of stakeholders.',
    name: 'Daniel Voss',
    role: 'Investor, North Circle Capital',
  },
]

function Counter({ value, suffix = '' }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let frame
    let start
    const duration = 1400

    const animate = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCount(Math.floor(progress * value))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [value])

  return <>{count}{suffix}</>
}

function App() {
  const [activeTag, setActiveTag] = useState('Executive Profile')
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => setSpotlight({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const activeLabel = useMemo(() => activeTag, [activeTag])

  return (
    <div className="page-shell">
      <div className="cursor-aura" style={{ transform: `translate(${spotlight.x - 180}px, ${spotlight.y - 180}px)` }} />

      <header className="topbar">
        <a href="#home" className="brand-block">
          <div className="brand-logo">SB</div>
          <div>
            <p>Sterling Business</p>
            <span>{activeLabel}</span>
          </div>
        </a>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.label}</a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-fullscreen">
  <div className="hero-overlay" />

  <div className="hero-grid">
    <div className="hero-copy">
      <p className="eyebrow">Chairman • Investor • Business Architect</p>
      <h1>A full-screen business portfolio with stronger presence, richer motion, and premium executive appeal.</h1>
      <p className="hero-text">
        Designed for a modern businessman who wants every section to feel distinct, immersive,
        and screen-filling — not boxed inside repetitive containers.
      </p>

      <div className="hero-actions">
        <a href="#ventures" className="btn btn-primary">View Portfolio</a>
        <a href="#contact" className="btn btn-secondary">Schedule Meeting</a>
      </div>

      <div className="hero-metrics">
        <div className="glass-tile">
          <strong><Counter value={14} suffix="+" /></strong>
          <span>Years leading ventures</span>
        </div>
        <div className="glass-tile">
          <strong><Counter value={38} suffix="+" /></strong>
          <span>Strategic partnerships</span>
        </div>
        <div className="glass-tile">
          <strong><Counter value={620} suffix="M" /></strong>
          <span>Capital influenced</span>
        </div>
      </div>
    </div>

    <div className="hero-sidecard hero-sidecard-refined">
      <div className="hero-card hero-card-main">
        <span>Executive Snapshot</span>
        <h3>Arvind Sterling</h3>
        <p>
          Building high-trust ventures through long-term strategy, premium execution,
          and an unmistakably modern leadership brand.
        </p>
      </div>

      <div className="hero-floating-row">
        <div className="hero-card small floating-card">
          <small>Reputation Score</small>
          <strong>98 / 100</strong>
        </div>

        <div className="hero-card small floating-card">
          <small>Market Position</small>
          <strong>High Authority</strong>
        </div>
      </div>

      <div className="hero-card small hero-card-bottom">
        <small>Active Theme</small>
        <strong>{activeLabel}</strong>
      </div>
    </div>
  </div>
</section>
        <section id="profile" className="profile-section section-fullscreen">
          <div className="split-layout">
            <div className="image-panel">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80" alt="Businessman portrait" />
            </div>
            <div className="content-panel warm-theme">
              <p className="eyebrow dark">Executive Profile</p>
              <h2>A businessman presented like a brand, not just a résumé.</h2>
              <p>
                This section uses a different theme and full-width split-screen presentation to create
                a stronger sense of luxury, leadership, and visual hierarchy. It feels like an editorial
                spread instead of a narrow content block.
              </p>
              <p>
                The layout balances portrait imagery, strategic narrative, and premium typography to make
                the profile more credible and visually memorable.
              </p>
              <div className="profile-points">
                <div>
                  <span>Primary Focus</span>
                  <strong>Growth, Governance, Expansion</strong>
                </div>
                <div>
                  <span>Industry Coverage</span>
                  <strong>Finance, Real Assets, Consumer</strong>
                </div>
                <div>
                  <span>Leadership Signature</span>
                  <strong>Precision with premium execution</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="ventures" className="ventures-section section-fullscreen">
          <div className="section-intro light">
            <p className="eyebrow">Portfolio Companies</p>
            <h2>Each venture displayed with image-led, dynamic business storytelling.</h2>
          </div>

          <div className="ventures-grid">
            {ventures.map((venture) => (
              <article
                key={venture.title}
                className="venture-card"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(5,10,20,0.08), rgba(5,10,20,0.85)), url(${venture.image})` }}
              >
                <div className="venture-chip-row">
                  <span>{venture.tag}</span>
                  <button type="button" className="ghost-chip" onClick={() => setActiveTag(venture.tag)}>
                    Activate theme
                  </button>
                </div>
                <div className="venture-copy">
                  <strong>{venture.metric}</strong>
                  <h3>{venture.title}</h3>
                  <p>{venture.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="strategy" className="strategy-section section-fullscreen">
          <div className="section-intro dark-copy">
            <p className="eyebrow dark">Operating Philosophy</p>
            <h2>Different visual language. Different business story.</h2>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className="pillar-card">
                <span>0{index + 1}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="results" className="results-section section-fullscreen">
          <div className="results-left">
            <p className="eyebrow">Performance Narrative</p>
            <h2>Immersive results section with a darker dashboard mood.</h2>
            <p>
              Instead of repeating the same style, this area behaves more like a premium executive
              reporting surface with layered gradients, bars, metrics, and social proof.
            </p>

            <div className="bars-wrap">
              {outcomes.map((item) => (
                <div key={item.label} className="bar-item">
                  <div className="bar-meta">
                    <span>{item.label}</span>
                    <strong>{item.value}{item.suffix}</strong>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="results-right">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <p>“{item.quote}”</p>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="journey-section section-fullscreen">
          <div className="journey-image">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80" alt="Executive meeting room" />
          </div>
          <div className="journey-content">
            <p className="eyebrow dark">Business Journey</p>
            <h2>Timeline presented as a strong editorial progression.</h2>
            <div className="timeline-list">
              {timeline.map((item) => (
                <div key={item.year} className="timeline-item">
                  <div className="timeline-year">{item.year}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section section-fullscreen">
          <div className="contact-backdrop" />
          <div className="contact-content">
            <p className="eyebrow">Executive Contact</p>
            <h2>End with a high-impact screen instead of a simple boxed footer.</h2>
            <p>
              Ready for investor conversations, strategic partnerships, media appearances,
              and business expansion opportunities.
            </p>

            <form className="contact-form">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Business email" />
              <textarea rows="5" placeholder="Tell me about your opportunity" />
              <button type="button" className="btn btn-primary">Send Inquiry</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
