import { rng } from '../lib/rng';

// The page's one animated moment: a wide noisy trace under the hero, with the clean pattern
// drawing itself through it once on load. Purely decorative (hidden from assistive tech).
const W = 1200, H = 130, MID = 65;
const rand = rng(11);
const clean = (x) => 40 * Math.exp(-(((x - 700) / 240) ** 2)) * Math.sin(x * 0.085);
const xs = Array.from({ length: W / 4 + 1 }, (_, i) => i * 4);
const toPath = (f) => xs.map((x, i) => `${i ? 'L' : 'M'}${x} ${(MID - f(x)).toFixed(1)}`).join(' ');
const NOISY = toPath((x) => clean(x) + (rand() - 0.5) * 46);
const CLEAN = toPath(clean);

export default function SignalBand() {
  return (
    <svg className="signal-band" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <path d={NOISY} className="sig-noise" />
      <path d={CLEAN} className="sig-clean" pathLength="1" />
    </svg>
  );
}
