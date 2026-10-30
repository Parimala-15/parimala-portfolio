import ExternalLink from './ExternalLink';
import Result from './Result';

// A GitHub repository link and a live demo are different things and are labelled differently.
export default function ProjectItem({ project: p }) {
  const repos = p.repos || (p.github ? [{ label: 'GitHub repository', href: p.github }] : []);
  return (
    <article className={`card project${p.category === 'Research' ? ' project-research' : ''}`} aria-labelledby={`${p.id}-title`}>
      <header>
        <p className="tag">{p.category}</p>
        <h3 id={`${p.id}-title`}>{p.title}</h3>
        <p className="muted kind">{p.kind}</p>
      </header>

      <div>
        <h4 className="label">Problem</h4>
        <p>{p.problem}</p>
      </div>

      <div>
        <h4 className="label">What I built</h4>
        <ul>{p.contributions.map((c) => <li key={c}>{c}</li>)}</ul>
      </div>

      <Result result={p.result} />

      <ul className="chips" role="list" aria-label="Tech stack">
        {p.stack.map((s) => <li key={s}>{s}</li>)}
      </ul>

      <div className="card-links">
        {repos.map((r) => (
          <ExternalLink key={r.href} href={r.href} icon="github" className="btn btn-ghost btn-sm">{r.label}<span className="sr-only"> for {p.title}</span></ExternalLink>
        ))}
        {p.demo && <ExternalLink href={p.demo} icon="external" className="btn btn-primary btn-sm">Live demo<span className="sr-only"> for {p.title}</span></ExternalLink>}
        {(p.docs || []).map((d) => (
          <ExternalLink key={d.href} href={d.href} icon={d.icon} className="btn btn-ghost btn-sm">{d.label}</ExternalLink>
        ))}
      </div>
    </article>
  );
}
