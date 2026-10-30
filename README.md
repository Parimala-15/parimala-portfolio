# Parimala Dharshini M: Portfolio (React + Vite)

All content lives in **`src/data/site.js`**. Components are in `src/components/`, styles in `src/styles.css`.

## Run it on your computer

Install Node.js 18+ (LTS) from https://nodejs.org, then in this folder:

```bash
node -v                 # should print v18 or higher
npm install             # creates package-lock.json: commit that file too
npm run dev             # http://localhost:5173
npm run build           # production build into dist/
npm run preview         # serve the production build locally
```

> **Build status:** the upgrade was made in an environment that could not reach the npm registry, so `npm install`, `npm run build` and `npm audit` were **not run** there. The app was compiled with esbuild and tested in a real browser (see the notes at the end of this file). Run `npm install && npm run build && npm audit` yourself and send me any error.

In `npm run dev`, placeholder links show as dashed **TODO** badges. Results marked `verified: false` are labelled **Self-reported result**.

## Resume (public/resume.pdf)

1. Rename your latest resume to exactly `resume.pdf`.
2. Copy it into the `public/` folder, so the path is `public/resume.pdf`.
3. Restart `npm run dev` (or rebuild). The "Download resume" and "Resume (PDF)" buttons appear automatically and download as `Parimala_Dharshini_Resume.pdf`.

If `public/resume.pdf` does not exist, the resume buttons are hidden instead of leading to a 404. Use one master resume, and re-copy the file whenever you update it.

## Links (all set in `src/data/site.js`)

| Item | Link |
|---|---|
| LinkedIn (hero, contact, footer, structured data) | https://www.linkedin.com/in/parimala-dharshini-903b4a271/ |
| Student Dropout Prediction (OULAD) | github.com/Parimala-15/OULAD-Dropout |
| Innomatics (two repository links, in the internship entry and the project card) | `Innomatics`, `Innomatics_MLFlow-ass` |
| Spectrum sensing project files | Google Drive folder (button: View Project Files) |
| IEEE publication / Google Scholar | ieeexplore.ieee.org/document/11545535 and the Scholar citation URL |
| Cardio-Bot, Xeno CRM, Timetable, Muththamizh | Repositories from your earlier URLs |
| Cover Letter Generator (Infosys), AI-powered-Data-Insights (Excelerate) | Mapping inferred from repo names: confirm |
| Eye Tracker | No repository URL supplied, so no GitHub button |
| Live demos | None exist, so none are shown. Set `demo` on a project only when a deployed URL is real |

The Sentiment analysis repository link was removed because it did not resolve. The Drive folder's sharing setting is unchecked: open the link in a private window to see whether visitors can view it.

## Numbers that need verification

Results marked `verified: false` in `site.js` appear on the site as **"Self-reported result."** After you check one against your source, set `verified: true` and it becomes "Result."

| Claim | Check against | Why flagged |
|---|---|---|
| **Spectrum sensing: 73.64% overall accuracy, 0.988 ROC-AUC (conflict, needs your decision)** | Tables in your IEEE QPAIN 2026 paper | Another resume says "73.64% in low-SNR conditions" and "220,000 samples". Also confirm the title, the 4-stage curriculum and the SNR range (-20 to +18 dB) |
| Cardio-Bot: 35% fewer hallucinations, 90% relevance | Your test logs | Not in the public README. Be ready to say how many queries and who judged them |
| Timetable: 70% less manual scheduling effort | How you measured it | Not in the public README. The README lists HTML/CSS/JS as the frontend, so also confirm the Streamlit dashboard claim |
| Dropout (OULAD course project): 78.28% accuracy, 0.65 ROC-AUC | Your notebook | Kept **separate** from the Excelerate internship model (88% accuracy, 20% F1 gain). No source shows they are the same experiment. If they are, merge them |
| Excelerate: 88% accuracy, 20% F1 improvement | Your internship report | Not flagged on the site yet; check before interviews |

Also: Cardio-Bot's README says it uses the BioMistral-7B GGUF model, while your resume lists Cohere API, LangChain and ChromaDB. Make sure both descriptions match what the code does.

## Git and security

`.gitignore` excludes `node_modules/`, `dist/`, all `.env` files (except `.env.example`), keys and certificates, logs and editor files. This project contains no API keys or secrets; the only environment variable is the public site URL. **Never put a secret in a `VITE_` variable**, because Vite bundles those into public JavaScript.

Your public **Timetable-Management-System** repo shows `venv/`, `__pycache__/`, `Timetable.log`, `config.py` and several password/admin scripts. Open `config.py` and the scripts, and if any contains a real database password, change that password now and remove the files from git history. Add a `.gitignore` there for `venv/`, `__pycache__/`, `*.log` and `.env`.

```bash
cp .env.example .env.local     # then edit VITE_SITE_URL
git init
git add .
git status                      # confirm no .env file is listed
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/Parimala-15/portfolio.git
git push -u origin main
```

## Deploy (Vercel)

1. Sign in at https://vercel.com with GitHub, choose **Add New > Project**, and import the repo (Vite is auto-detected).
2. Add the environment variable `VITE_SITE_URL` = your final URL (for example `https://your-name.vercel.app`) and deploy. If it is not set, the canonical and og:url tags are left out rather than filled with a wrong address.
3. Every `git push` redeploys. GitHub Pages: build with `VITE_BASE=/portfolio/`.

## Quality notes

- Theme: follows your system setting, with a Dark/Light toggle in the menu (saved in your browser).
- Mobile menu opens with the Menu button and closes with Escape or a link click.
- Skip link, visible focus outlines, list roles, reduced-motion support.
- SEO: description, Open Graph, Twitter and JSON-LD tags. The site is a single-page app: add `og:image` (1200x630) later for link previews.

## Checklist before publishing

- [x] `public/resume.pdf` present
- [ ] Spectrum sensing numbers checked against the IEEE paper, then `verified: true`
- [ ] Cardio-Bot and Timetable numbers verified (or removed), then `verified: true`
- [ ] Confirm the Infosys and Excelerate repo mapping
- [x] LinkedIn URL set to /in/parimala-dharshini-903b4a271/ everywhere
- [ ] Open every external link once (none could be checked automatically)
- [ ] Credential URLs for certifications (optional)
- [ ] `VITE_SITE_URL` set in Vercel
- [ ] Timetable repo checked for passwords and generated files
- [ ] Run `npm install && npm run build` successfully, and test on your phone

## What was tested (and what was not)

Tested with a real Chromium browser against an esbuild bundle of this source (React 19 dev build, because Vite could not be installed): no console errors or React key warnings, no horizontal scrolling at 360, 390, 768, 1024, 1440 and 1920 px, light and dark themes, theme toggle and its persistence, mobile menu with Escape, scroll-spy active link, photo fallback, and that all 25 external links open in a new tab with `rel="noopener noreferrer"`. The one React warning seen there (`fetchpriority`) is a React 19 vs 18 difference: the project pins React 18.3.1, where the lowercase attribute is correct.

Not tested: the real Vite production build, `npm audit`, Google Fonts (blocked there, so system fonts were shown), real phones, Safari and Firefox, screen readers.

Open Graph and JSON-LD use `/profile.jpg` as the preview image once `VITE_SITE_URL` is set. For GitHub Pages, set `VITE_SITE_URL` to the full address including the repo path.
