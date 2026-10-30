// layout "rail": heading in a left column (sticky on wide screens). layout "stack": heading above full-width content.
export default function Section({ id, title, intro, layout = 'rail', children }) {
  return (
    <section id={id} className={`section section-${layout}`} aria-labelledby={`${id}-title`}>
      <div className="wrap section-grid">
        <header className="section-head">
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p className="muted">{intro}</p>}
        </header>
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}
