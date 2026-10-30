import Icon from './Icon';

// Renders a link. Placeholder links (containing "REPLACE") are hidden in production
// and shown as a TODO badge in development, so a broken link never goes live.
// Pass `label` (and no children) for an icon-only link: label becomes its accessible name.
export default function ExternalLink({ href, children, className = 'btn btn-ghost', download, icon, label }) {
  if (!href) return null;
  if (href.includes('REPLACE')) {
    return import.meta.env.DEV ? <span className="todo">TODO: {children || label}</span> : null;
  }
  const external = /^https?:/.test(href);
  return (
    <a
      className={className}
      href={href}
      download={download || undefined}
      aria-label={label ? `${label}${external ? ' (opens in a new tab)' : ''}` : undefined}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon && <Icon name={icon} />}
      {children}
      {external && !label && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
