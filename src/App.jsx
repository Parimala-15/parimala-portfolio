import { useState } from 'react';
import { site, about, skills, experience, projects, moreProjects, certifications } from './data/site';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import ProjectItem from './components/ProjectItem';
import ResearchPanel from './components/ResearchPanel';
import ExternalLink from './components/ExternalLink';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import Icon from './components/Icon';

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copy this email address:', site.email);
    }
  };
  return (
    <>
      <button type="button" className="btn btn-ghost" onClick={copy}>
        <Icon name={copied ? 'check' : 'copy'} />
        {copied ? 'Copied' : 'Copy email address'}
      </button>
      <span className="sr-only" role="status" aria-live="polite">{copied ? 'Email address copied' : ''}</span>
    </>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to main content</a>
      <Header />
      <main id="main">
        <Hero />

        <Section id="about" title="About">
          {about.paragraphs.map((t) => <p key={t}>{t}</p>)}
          <h3 className="subhead">Beyond coursework</h3>
          <ul>{about.beyond.map((t) => <li key={t}>{t}</li>)}</ul>
          <p className="muted languages">Languages: {about.languages}.</p>
        </Section>

        <Section id="skills" title="Skills" intro="Grouped by what I use them for.">
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group}>
                <dt>{s.group}</dt>
                <dd>
                  <ul className="chips" role="list">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
                  {s.note && <p className="muted skill-note">{s.note}</p>}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="experience" title="Experience" intro="Three internships, all remote.">
          <ol className="timeline" role="list">
            {experience.map((e) => (
              <li key={e.role}>
                <p className="dates">{e.dates}</p>
                <h3>{e.role}</h3>
                <p className="muted org">{e.org}</p>
                <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <div className="actions">
                  {e.repos.map((r) => (
                    <ExternalLink key={r.href} href={r.href} icon="github" className="btn btn-ghost btn-sm">{r.label}<span className="sr-only"> for {e.role}</span></ExternalLink>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Projects" intro="Academic, internship and personal work." layout="stack">
          <div className="project-grid">
            {projects.map((p) => <ProjectItem key={p.id} project={p} />)}
          </div>
          <h3 className="subhead">More projects</h3>
          <div className="project-grid">
            {moreProjects.map((p) => <ProjectItem key={p.id} project={p} />)}
          </div>
        </Section>

        <Section id="research" title="Research and publications" layout="stack">
          <ResearchPanel />
        </Section>

        <Section id="certifications" title="Certifications">
          <ul className="certs" role="list">
            {certifications.map((c) => (
              <li key={c.title}>
                <strong>{c.title}</strong>
                <span className="muted">{c.issuer}</span>
                <ExternalLink href={c.link} className="text-link">View credential</ExternalLink>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact" intro="I am looking for AI, machine learning and software roles and internships. Email is the quickest way to reach me.">
          <p className="contact-email"><a href={`mailto:${site.email}`}>{site.email}</a></p>
          <div className="actions">
            <a className="btn btn-primary" href={`mailto:${site.email}`}><Icon name="mail" />Email me</a>
            <CopyEmail />
            <ExternalLink href={site.links.resume} download={site.links.resumeName} icon="download">Download Resume</ExternalLink>
          </div>
          <SocialLinks labeled className="contact-social" />
        </Section>
      </main>
      <Footer />
    </>
  );
}
