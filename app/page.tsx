const earlyAccessHref =
  "mailto:alfredlabs.help@gmail.com?subject=Playwright%20Flow%20Recorder%20early%20access&body=Hi%20Alfred%20Labs%2C%20I%27m%20interested%20in%20early%20access%20to%20Playwright%20Flow%20Recorder%20Kit.";

const outcomes = [
  {
    number: "01",
    title: "Capture what actually happened",
    copy: "Record clicks, inputs, selections, and same-site navigation from the product you are already testing.",
  },
  {
    number: "02",
    title: "Define the expected result",
    copy: "Add visibility and text checks directly from the page—without translating intent into test code.",
  },
  {
    number: "03",
    title: "Hand off a reproducible flow",
    copy: "Replay the journey and export evidence for product, QA, or an automation engineer.",
  },
];

const workflow = [
  ["Name", "Give the journey a business-readable outcome."],
  ["Record", "Complete the flow in the current Chrome tab."],
  ["Confirm", "Select the result that proves the flow worked."],
  ["Export", "Share JSON, Playwright, or Gherkin."],
];

const exports = [
  {
    format: "Journey JSON",
    audience: "Evidence & portability",
    copy: "A structured, versioned record of every captured action and expected result.",
  },
  {
    format: "Playwright",
    audience: "Automation handoff",
    copy: "A TypeScript test draft with protected credential placeholders and observable assertions.",
  },
  {
    format: "Gherkin",
    audience: "Product & BDD",
    copy: "A business-readable feature scenario for review, documentation, or Cucumber refinement.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Alfred Labs home">
          Alfred Labs
        </a>
        <div className="nav-links">
          <a href="#workflow">How it works</a>
          <a href="#pricing">Pricing</a>
          <a className="nav-cta" href={earlyAccessHref}>
            Get early access
          </a>
        </div>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow-row">
            <span className="eyebrow">For product & QA teams</span>
            <span className="version">v0.1.1</span>
          </div>
          <h1>
            Record the journey.
            <br />
            <em>Hand off the evidence.</em>
          </h1>
          <p className="hero-lede">
            Turn a real browser flow into reproducible test evidence—without
            writing automation code. Record, add the expected result, replay,
            and export.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={earlyAccessHref}>
              Join early access <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#workflow">
              See the 4-step workflow <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="microcopy">
            One-time purchase · 12 months of updates · No subscription in v0.1
          </p>
        </div>

        <div className="product-stage" aria-label="Flow Recorder product preview">
          <div className="browser-chrome">
            <div className="browser-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="address">staging.yourproduct.com/checkout</div>
          </div>
          <div className="stage-body">
            <div className="sample-app" aria-hidden="true">
              <span className="sample-kicker">Checkout</span>
              <div className="sample-line wide" />
              <div className="sample-line" />
              <div className="sample-field" />
              <div className="sample-field short" />
              <div className="sample-button" />
            </div>
            <div className="recorder-panel">
              <div className="panel-brand">ALFRED LABS</div>
              <div className="panel-title-row">
                <h2>Flow Recorder</h2>
                <span className="recording-dot">REC</span>
              </div>
              <p className="panel-name">Customer completes checkout</p>
              <ol className="recorded-steps">
                <li>
                  <span>1</span> Open checkout
                </li>
                <li>
                  <span>2</span> Enter test email
                </li>
                <li>
                  <span>3</span> Select Place order
                </li>
                <li className="check-step">
                  <span>4</span> ✓ Check “Order confirmed”
                </li>
              </ol>
              <div className="panel-actions">
                <div>Replay</div>
                <div className="panel-primary">Export</div>
              </div>
            </div>
          </div>
          <div className="floating-note">
            <span className="pulse" aria-hidden="true" />
            Recording stays in Chrome
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Product principles">
        <div className="shell trust-grid">
          <span>Built for PMs & QAs</span>
          <span>Local-first recording</span>
          <span>Human-reviewed output</span>
          <span>No mandatory telemetry</span>
        </div>
      </section>

      <section className="section shell outcomes" aria-labelledby="outcomes-title">
        <div className="section-heading">
          <span className="eyebrow">From report to reproduction</span>
          <h2 id="outcomes-title">Stop describing the bug from memory.</h2>
          <p>
            Capture the exact path, show what should have happened, and give
            every teammate the same starting point.
          </p>
        </div>
        <div className="outcome-grid">
          {outcomes.map((outcome) => (
            <article className="outcome-card" key={outcome.number}>
              <span className="card-number">{outcome.number}</span>
              <h3>{outcome.title}</h3>
              <p>{outcome.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="workflow" className="section workflow-section">
        <div className="shell">
          <div className="section-heading light">
            <span className="eyebrow">A four-step workflow</span>
            <h2>From browser journey to shared evidence.</h2>
          </div>
          <ol className="workflow-grid">
            {workflow.map(([title, copy], index) => (
              <li key={title}>
                <div className="workflow-index">0{index + 1}</div>
                <h3>{title}</h3>
                <p>{copy}</p>
                {index < workflow.length - 1 && (
                  <span className="workflow-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section shell export-section" aria-labelledby="export-title">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">One recording, three handoffs</span>
            <h2 id="export-title">Useful beyond the recorder.</h2>
          </div>
          <p>
            Keep the flow understandable for product stakeholders while giving
            technical teams a practical starting point for automation.
          </p>
        </div>
        <div className="export-grid">
          {exports.map((item, index) => (
            <article className="export-card" key={item.format}>
              <div className="export-topline">
                <span className="file-mark">{["{ }", "PW", "GH"][index]}</span>
                <span>{item.audience}</span>
              </div>
              <h3>{item.format}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="section pricing-section">
        <div className="shell pricing-layout">
          <div className="pricing-copy">
            <span className="eyebrow">Simple launch pricing</span>
            <h2>Pay once. Keep the workflow.</h2>
            <p>
              Early-access buyers receive the complete kit and 12 months of
              published updates. No subscription in v0.1.
            </p>
            <div className="status-note">
              <span /> Paid checkout opens after store approval. Early-access
              requests are open now.
            </div>
          </div>
          <div className="price-grid">
            <article className="price-card">
              <span className="price-label">Individual</span>
              <div className="price">
                <sup>$</sup>49 <small>USD</small>
              </div>
              <p>For one person working on their own projects.</p>
              <ul>
                <li>Complete product</li>
                <li>One authorized user</li>
                <li>12 months of updates</li>
              </ul>
              <a className="button button-outline" href={earlyAccessHref}>
                Request early access
              </a>
            </article>
            <article className="price-card featured">
              <span className="recommended">Best for teams</span>
              <span className="price-label">Team</span>
              <div className="price">
                <sup>$</sup>199 <small>USD</small>
              </div>
              <p>For up to 10 users in one legal entity.</p>
              <ul>
                <li>Complete product</li>
                <li>Up to 10 authorized users</li>
                <li>12 months of updates</li>
              </ul>
              <a className="button button-lime" href={earlyAccessHref}>
                Request team access
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell faq-section" aria-labelledby="faq-title">
        <div className="section-heading faq-heading">
          <span className="eyebrow">Before you record</span>
          <h2 id="faq-title">Clear expectations, from day one.</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>Who is this kit for?</summary>
            <p>
              Product managers and QA professionals who need to reproduce and
              communicate real browser journeys. Developers and automation
              engineers are the primary handoff audience.
            </p>
          </details>
          <details>
            <summary>Does it require coding?</summary>
            <p>
              Recording, adding checks, replaying, and exporting require no test
              code. A technical reviewer should refine Playwright output before
              relying on it in CI.
            </p>
          </details>
          <details>
            <summary>What stays private?</summary>
            <p>
              The MVP has no backend or mandatory telemetry. Journeys stay in
              Chrome storage. Recognizable email, password, and token inputs are
              replaced with placeholders, but every export should still be
              reviewed before sharing.
            </p>
          </details>
          <details>
            <summary>What does v0.1 not support?</summary>
            <p>
              Cross-site journeys, popups, iframes, canvas interactions, and
              every custom control may need manual adjustment. Gherkin export is
              documentation; executable Cucumber step definitions are not
              included.
            </p>
          </details>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div>
            <span className="eyebrow">Early access is open</span>
            <h2>Make the next handoff reproducible.</h2>
          </div>
          <a className="button button-lime" href={earlyAccessHref}>
            Contact Alfred Labs <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="footer shell">
        <div>
          <a className="brand" href="#top">
            Alfred Labs
          </a>
          <p>Practical tools for product and engineering teams.</p>
        </div>
        <div className="footer-right">
          <a href="mailto:alfredlabs.help@gmail.com">alfredlabs.help@gmail.com</a>
          <p>© 2026 Alfred Labs · Prelaunch terms under review</p>
        </div>
      </footer>
    </main>
  );
}
