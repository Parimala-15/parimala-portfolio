# Parimala Dharshini M. | Personal Portfolio

A modern, responsive personal portfolio built with **React and Vite**, showcasing my technical skills, projects, internships, research work, and professional experience in Artificial Intelligence, Machine Learning, and Software Development.

🌐 **GitHub Repository:** [parimala-portfolio](https://github.com/Parimala-15/parimala-portfolio)

---

## About Me

I am an Information Technology undergraduate at **SRM Institute of Science and Technology, Chennai**, with a strong interest in Artificial Intelligence, Machine Learning, Generative AI, and Full-Stack Development.

I enjoy building practical technology solutions, exploring LLM-based applications, and applying machine learning techniques to real-world problems.

This portfolio brings together my academic background, technical expertise, internships, research contributions, and projects in one place.

## Portfolio Features

- **Responsive Design:** Optimized layouts for desktop, tablet, and mobile devices.
- **Dark and Light Themes:** Theme switching with browser preference persistence.
- **Interactive Navigation:** Smooth section navigation and active-section highlighting.
- **Professional Introduction:** Profile photo, headline, introduction, and social links.
- **Project Showcase:** Dedicated project cards with descriptions, technology stacks, and repository links.
- **Research Section:** Highlights my research work and IEEE publication.
- **Internship Experience:** Displays professional experience and relevant contributions.
- **Technical Skills:** Skills organized into clear categories.
- **Resume Download:** Downloadable PDF resume.
- **SEO Optimization:** Meta descriptions, Open Graph tags, Twitter metadata, and structured data.
- **Accessibility:** Keyboard navigation, visible focus indicators, skip navigation link, and reduced-motion support.

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React 18, JavaScript, HTML5, CSS3 |
| Build Tool | Vite |
| Styling | Custom CSS |
| Development Tools | VS Code, npm |
| Version Control | Git, GitHub |
| Deployment | Vercel / Netlify |

## Featured Projects

The portfolio showcases projects across AI/ML, Generative AI, NLP, Computer Vision, and Web Development.

| Project | Description | Technologies |
|---|---|---|
| Cardio-Bot | RAG-based healthcare chatbot for retrieving relevant heart-health information. | Python, Streamlit, LangChain, ChromaDB, SentenceTransformers |
| Xeno CRM | CRM application with customer management, campaign analytics, and an AI-powered copilot. | React, Vite, FastAPI, MySQL, Gemini API |
| Timetable Management System | Web-based timetable management application with database operations. | Flask, MySQL, HTML, CSS, JavaScript |
| Muththamizh | Tamil NLP chatbot with language-related capabilities. | Python, NLP, Generative AI |
| Student Dropout Prediction | Machine learning project for predicting student dropout patterns using educational data. | Python, PySpark, Machine Learning |
| Eye Tracker | Computer vision project for eye tracking and visual interaction. | Python, OpenCV, MediaPipe |
| Spectrum Sensing | Research project on deep-learning-based spectrum sensing for cognitive radio networks. | Python, Deep Learning, CLDNN, Attention |

For detailed descriptions, implementation information, and source code, visit the Projects section of the portfolio.

## Research Publication

**Efficient Spectrum Sensing for Cognitive Radio Networks Using Curriculum Learning-Based CLDNN with Attention**

Research work presented at the **2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence and Networking (QPAIN 2026)**.

The portfolio includes links to the IEEE publication, Google Scholar, and project resources.

## Internship Experience

The portfolio highlights my internship experiences, including:

- **Infosys Springboard** – Generative AI Internship
- **Innomatics Research Labs** – Machine Learning Internship
- **Excelerate** – AI-Powered Data Insights and Prompt Engineering Internship

Additional project details and contributions are available in the Experience section.

---

## Getting Started

Follow these steps to run the portfolio locally.

### Prerequisites

Install the following:

- [Node.js](https://nodejs.org/) – Use a currently supported LTS version.
- npm – Included with Node.js.
- [Git](https://git-scm.com/) – For version control.

Verify the installations:

```bash
node -v
npm -v
git --version
```

### 1. Clone the Repository

```bash
git clone https://github.com/Parimala-15/parimala-portfolio.git
```

### 2. Navigate to the Project Directory

```bash
cd parimala-portfolio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local development URL:

```text
http://localhost:5173
```

### 5. Create a Production Build

```bash
npm run build
```

The optimized production files will be generated inside the `dist/` directory.

### 6. Preview the Production Build

```bash
npm run preview
```

---

## Project Structure

```text
parimala-portfolio/
│
├── public/
│   ├── resume.pdf
│   └── profile.jpg
│
├── src/
│   ├── components/
│   │   ├── ExternalLink.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProfilePhoto.jsx
│   │   ├── ProjectItem.jsx
│   │   ├── ResearchPanel.jsx
│   │   ├── Section.jsx
│   │   ├── SignalArt.jsx
│   │   ├── SignalBand.jsx
│   │   └── SocialLinks.jsx
│   │
│   ├── data/
│   │   └── site.js
│   │
│   ├── lib/
│   │   └── rng.js
│   │
│   ├── App.jsx
│   ├── hooks.js
│   └── styles.css
│
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

*The structure above describes the main application files; additional configuration or asset files may also be present.*

## Customization

Most portfolio content is maintained in:

```text
src/data/site.js
```

You can update:

- Personal introduction and headline
- Social media and contact links
- Project descriptions and repository URLs
- Internship details
- Technical skills
- Research information
- Resume download configuration

The visual appearance and responsive layouts can be modified in:

```text
src/styles.css
```

Reusable UI components are maintained in:

```text
src/components/
```

### Updating Your Resume

Replace the existing resume with your latest PDF, keeping the filename:

```text
public/resume.pdf
```

The application uses this file for the resume download links.

## Deployment

### Deploy Using Vercel

1. Visit [Vercel](https://vercel.com/).
2. Sign in using your GitHub account.
3. Select **Add New → Project**.
4. Import `Parimala-15/parimala-portfolio`.
5. Verify the Vite build configuration.
6. Configure the environment variable:

```text
VITE_SITE_URL=https://your-portfolio-domain.vercel.app
```

7. Click **Deploy**.

Vercel will build and host the portfolio.

Future pushes to the connected GitHub branch can automatically trigger deployments.

### GitHub Pages

For GitHub Pages deployment under this repository, configure the Vite base path as:

```text
VITE_BASE=/parimala-portfolio/
```

Follow the repository's Vite configuration and deployment workflow when publishing.

## Environment Variables

The portfolio uses the following public configuration variable:

| Variable | Purpose |
|---|---|
| `VITE_SITE_URL` | Sets the canonical website URL and social-sharing URL metadata. |

Example:

```env
VITE_SITE_URL=https://your-portfolio-domain.vercel.app
```

Never store API keys, passwords, private tokens, or other secrets in variables prefixed with `VITE_`. These values can become accessible in the client-side application.

## Quality Assurance

The application has undergone browser-based checks using an esbuild-generated bundle.

Previously tested:

- Responsive layouts at multiple viewport widths.
- Dark and light theme switching.
- Theme preference persistence.
- Mobile navigation and Escape-key handling.
- Active navigation highlighting.
- Profile image fallback.
- External link safety attributes.
- Browser console and React key warnings.

**Verification limitations:**

The original upgrade environment could not access the npm registry. Consequently, the genuine Vite production build and npm security audit were not completed there.

The following checks should be completed locally before production deployment:

```bash
npm install
npm run build
npm audit
```

Also test the deployed website on actual mobile devices and additional browsers.

## Security Notes

- Do not commit `.env` files, API keys, passwords, or private credentials.
- Keep `node_modules/` and `dist/` out of Git.
- Review external repository links before publishing.
- Ensure that public documents and Google Drive resources have the intended sharing permissions.
- Review project repositories for accidentally committed credentials or sensitive configuration files.

## Connect With Me

**Parimala Dharshini M.**

- [LinkedIn](https://www.linkedin.com/in/parimala-dharshini-903b4a271/)
- [GitHub](https://github.com/Parimala-15)

For professional opportunities, collaborations, and technical discussions, feel free to connect.

---

*Built with React and Vite. Continuously evolving as I learn, build, and explore new technologies.*
