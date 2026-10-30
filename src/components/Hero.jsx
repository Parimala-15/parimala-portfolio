import { site } from '../data/site';
import ExternalLink from './ExternalLink';
import ProfilePhoto from './ProfilePhoto';
import SignalBand from './SignalBand';
import SocialLinks from './SocialLinks';

export default function Hero() {
  const roles = site.headline.split(' | ');
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-photo">
          <ProfilePhoto />
        </div>
        <div className="hero-text">
          <p className="status-line"><span className="dot" aria-hidden="true" />{site.openTo}</p>
          <h1 id="hero-title">{site.name}</h1>
          <p className="headline">
            {roles.map((r, i) => (
              <span key={r}>
                <span className="role">{r}</span>
                {i < roles.length - 1 && <i className="sep" aria-hidden="true">|</i>}{' '}
              </span>
            ))}
          </p>
          <p className="lead">{site.intro}</p>
          <div className="actions hero-actions">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn btn-ghost" href="#research">View Research</a>
            <ExternalLink href={site.links.resume} download={site.links.resumeName} icon="download">Download Resume</ExternalLink>
            <ExternalLink href={site.links.linkedin} icon="linkedin">Connect on LinkedIn</ExternalLink>
          </div>
          <SocialLinks className="hero-social" />
          <dl className="facts">
            {site.facts.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </div>
      </div>
      <SignalBand />
    </section>
  );
}
