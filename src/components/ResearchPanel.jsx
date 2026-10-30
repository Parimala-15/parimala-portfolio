import { research } from '../data/site';
import ExternalLink from './ExternalLink';
import Result from './Result';
import SignalArt from './SignalArt';

const ICONS = { ieee: 'book', scholar: 'book', files: 'folder' };

// Laid out differently from the project cards on purpose: a dark panel with the problem,
// approach and result in labelled blocks, and the three research links as buttons.
export default function ResearchPanel() {
  const r = research;
  return (
    <article className="research" aria-labelledby="paper-title">
      <div className="research-main">
        <p className="status">{r.status}</p>
        <h3 id="paper-title">{r.title}</h3>
        <p className="venue">{r.venue}</p>

        <div className="research-blocks">
          <section aria-labelledby="r-problem">
            <h4 id="r-problem" className="label">Problem</h4>
            <p>{r.problem}</p>
          </section>
          <section aria-labelledby="r-approach">
            <h4 id="r-approach" className="label">Approach</h4>
            <ul>{r.approach.map((a) => <li key={a}>{a}</li>)}</ul>
          </section>
          <section aria-labelledby="r-result">
            <h4 id="r-result" className="label">Result</h4>
            <Result result={r.result} />
          </section>
        </div>

        <div className="actions research-actions">
          {r.links.map((l, i) => (
            <ExternalLink key={l.href} href={l.href} icon={ICONS[l.type]} className={i === 0 ? 'btn btn-primary' : 'btn btn-ghost'}>
              {l.label}
            </ExternalLink>
          ))}
        </div>
        <p className="note">{r.filesNote}</p>
      </div>

      <div className="research-side">
        <SignalArt />
      </div>
    </article>
  );
}
