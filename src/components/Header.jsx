import { useEffect, useRef, useState } from 'react';
import { nav, site } from '../data/site';
import { useActiveSection } from '../hooks';
import Icon from './Icon';

const SECTION_IDS = nav.map(([id]) => id);
const initials = site.name.split(' ').map((w) => w[0]).join('').slice(0, 2);

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuBtn = useRef(null);
  const active = useActiveSection(SECTION_IDS);
  const [theme, setTheme] = useState(() =>
    typeof document === 'undefined' ? 'light'
      : document.documentElement.dataset.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  // Follow the system theme until the visitor picks one with the toggle.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (e) => {
      if (!document.documentElement.dataset.theme) setTheme(e.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch { /* storage unavailable */ }
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen((wasOpen) => {
          if (wasOpen) menuBtn.current?.focus();
          return false;
        });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="header">
      <div className="wrap header-row">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">{initials}</span>
          <span className="brand-name">{site.name}</span>
        </a>
        <nav id="site-nav" className={`nav${open ? ' open' : ''}`} aria-label="Main">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="tools">
          <button
            type="button"
            className="icon-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} theme`}
            title={`Switch to ${nextTheme} theme`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={20} />
          </button>
          <button
            type="button"
            ref={menuBtn}
            className="menu-btn"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
            <span>{open ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
