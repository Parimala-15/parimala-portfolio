import { site } from '../data/site';
import ExternalLink from './ExternalLink';
import Icon from './Icon';

// Icon links used in the hero, the contact section and the footer.
// All three read the same URLs from site.js, so they cannot disagree.
// `labeled` shows the name next to each icon; otherwise the link is icon-only with an accessible label.
export default function SocialLinks({ className = '', labeled = false }) {
  const items = [
    { key: 'linkedin', icon: 'linkedin', text: 'LinkedIn', label: 'LinkedIn profile', href: site.links.linkedin },
    { key: 'github', icon: 'github', text: 'GitHub', label: 'GitHub profile', href: site.links.github },
  ];
  return (
    <ul className={`social ${labeled ? 'social-labeled' : ''} ${className}`} role="list" aria-label="Profiles and contact">
      {items.map((i) => (
        <li key={i.key}>
          {labeled ? (
            <ExternalLink href={i.href} className="icon-btn" icon={i.icon}>{i.text}</ExternalLink>
          ) : (
            <ExternalLink href={i.href} className="icon-btn" icon={i.icon} label={i.label} />
          )}
        </li>
      ))}
      <li>
        {labeled ? (
          <a className="icon-btn" href={`mailto:${site.email}`}><Icon name="mail" />Email</a>
        ) : (
          <a className="icon-btn" href={`mailto:${site.email}`} aria-label={`Email ${site.email}`}><Icon name="mail" /></a>
        )}
      </li>
    </ul>
  );
}
