import { rng } from '../lib/rng';

// A decorative illustration: a noisy signal with the pattern underneath it,
// the problem my spectrum sensing research works on. Generated, not real data.
const W = 520, H = 280, MID = 140;
const rand = rng(7);
const clean = (x) => 80 * Math.exp(-(((x - 270) / 120) ** 2)) * Math.sin(x * 0.11);
const xs = Array.from({ length: W / 3 + 1 }, (_, i) => i * 3);
const toPath = (f) => xs.map((x, i) => `${i ? 'L' : 'M'}${x} ${(MID - f(x)).toFixed(1)}`).join(' ');
const NOISY = toPath((x) => clean(x) + (rand() - 0.5) * 70);
const CLEAN = toPath(clean);

export default function SignalArt() {
  return (
    <figure className="signal">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A noisy signal with a clear wave pattern hidden inside it">
        <line x1="0" y1={MID} x2={W} y2={MID} className="sig-axis" />
        <path d={NOISY} className="sig-noise" />
        <path d={CLEAN} className="sig-clean" pathLength="1" />
      </svg>
      <figcaption>
        <span><i className="key key-noise" />Noisy signal</span>
        <span><i className="key key-clean" />Pattern underneath</span>
        <span className="muted">Illustration of the problem this research addresses. Generated, not real data.</span>
      </figcaption>
    </figure>
  );
}
