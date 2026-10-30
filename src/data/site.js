// ALL CONTENT LIVES HERE. Edit this file to update the site.
// Any link containing "REPLACE" is a placeholder: it is hidden on the live site
// (and shown as a TODO badge while you run `npm run dev`). Set a link to null to hide it.

const BASE = import.meta.env.BASE_URL;
// __HAS_RESUME__ is set at build time by vite.config.js: true only if public/resume.pdf exists.
const HAS_RESUME = typeof __HAS_RESUME__ !== 'undefined' && __HAS_RESUME__;

// Numbers below are marked verified: false until you check them against your own source
// (paper, notebook, test logs). The site then labels them "Self-reported result".
// After you verify one, set verified: true.
const SPECTRUM_RESULT = {
  text: '73.64% overall accuracy and 0.988 ROC-AUC on RadioML 2016.10a.',
  verified: false,
  note: 'Check 73.64% accuracy and 0.988 ROC-AUC against the tables in your IEEE QPAIN paper. Another version of your resume said "73.64% in low-SNR conditions" and "220,000 samples"; these cannot all be right.',
};

export const site = {
  name: 'Parimala Dharshini M',
  headline: 'AI/ML Engineer | Generative AI & LLM Applications | Software Development',
  location: 'Chennai, Tamil Nadu, India',
  email: 'parimalamurugan15@gmail.com',
  links: {
    github: 'https://github.com/Parimala-15',
    linkedin: 'https://www.linkedin.com/in/parimala-dharshini-903b4a271/',
    // Put your PDF at public/resume.pdf. Until that file exists the resume buttons stay hidden on the live site.
    resume: HAS_RESUME ? `${BASE}resume.pdf` : 'REPLACE-add-public-resume.pdf',
    resumeName: 'Parimala_Dharshini_Resume.pdf', // file name used when visitors download it
  },
  // Profile photo lives at public/profile.jpg. If it fails to load, initials are shown instead.
  photo: `${BASE}profile.jpg`,
  photoAlt: 'Portrait of Parimala Dharshini M in a navy blazer and light blue shirt',
  intro:
    'I am a B.Tech Information Technology student at SRM Institute of Science and Technology, interested in machine learning, Generative AI, LLM applications, RAG systems and applied AI research. I build software and AI/ML projects in Python, and my research on spectrum sensing for cognitive radio networks was presented at IEEE QPAIN 2026.',
  openTo: 'Open to AI Engineer, GenAI Developer, Machine Learning Engineer and Software Developer roles and internships.',
  facts: [
    ['Studying', 'B.Tech Information Technology, SRM Institute of Science and Technology, Chennai'],
    ['Graduating', '2027'],
    ['CGPA', '9.13 / 10'],
    ['Research', 'Spectrum sensing paper presented at IEEE QPAIN 2026'],
  ],
};

export const researchLinks = {
  ieee: 'https://ieeexplore.ieee.org/document/11545535',
  scholar:
    'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=NWAR9EMAAAAJ&citation_for_view=NWAR9EMAAAAJ:u5HHmVD_uO8C',
  files: 'https://drive.google.com/drive/folders/1_dQ8r_T4CzY0ZMs7hbGQE4levcXjk6gS?usp=sharing',
};

export const nav = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['research', 'Research'],
  ['certifications', 'Certifications'],
  ['contact', 'Contact'],
];

export const about = {
  paragraphs: [
    'I am a B.Tech Information Technology student at SRM Institute of Science and Technology, Chennai. I work mostly in Python, and my projects range from retrieval-augmented chatbots and LLM API integrations to full-stack web apps and deep learning research.',
    'I have completed three internships in Generative AI, machine learning and prompt engineering. I use AI coding assistants (GitHub Copilot, ChatGPT, Claude, Gemini) for coding, debugging and testing, and I check their output before using it.',
  ],
  beyond: [
    'Team leader for academic projects; Marketing Team Member, Project Club.',
    'Participated in ImpactX 3.0, a 24-hour SDG hackathon at St. Joseph’s Institute of Technology, where I presented the spectrum sensing project as part of a team.',
    'Practised data structures and algorithms on GeeksforGeeks.',
  ],
  languages: 'English (professional working), Tamil (native), Hindi (basic)',
};

// Only skills that appear in the existing portfolio or resume. No proficiency scores on purpose.
export const skills = [
  { group: 'Programming', items: ['Python', 'C++', 'C', 'JavaScript', 'SQL', 'HTML', 'CSS'] },
  {
    group: 'Machine learning',
    items: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'PySpark', 'Feature engineering', 'Cross-validation', 'Hyperparameter tuning', 'NLP text classification', 'OpenCV', 'MediaPipe'],
  },
  {
    group: 'Generative AI and LLMs',
    items: ['LLMs', 'Prompt engineering', 'LLM evaluation', 'LLM APIs (Cohere, Gemini)', 'RAG', 'Embeddings', 'Semantic search', 'LangChain', 'LlamaCpp', 'ChromaDB', 'SentenceTransformers'],
    note: 'Currently exploring AI agents, tool and function calling, and MCP.',
  },
  { group: 'Frameworks', items: ['Flask', 'FastAPI', 'React', 'Vite', 'Streamlit', 'REST and API integration'] },
  { group: 'Databases', items: ['MySQL', 'SQL (CRUD, JOINs, GROUP BY, aggregates)', 'Relational design', 'Normalization'] },
  { group: 'Tools and practices', items: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'Matplotlib', 'Plotly', 'Debugging', 'Testing', 'Documentation'] },
];

export const experience = [
  {
    role: 'Machine Learning Intern',
    org: 'Innomatics Research Labs (Remote)',
    dates: 'Nov 2025 – Mar 2026',
    // Three separate repositories, each with its own link.
    repos: [
      { label: 'Innomatics repository', href: 'https://github.com/Parimala-15/Innomatics' },
      { label: 'MLflow assignment repository', href: 'https://github.com/Parimala-15/Innomatics_MLFlow-ass' },
    ],
    points: [
      'Built end-to-end ML pipelines in Python covering data preprocessing, feature engineering, model training and evaluation.',
      'Tuned models with hyperparameter search and cross-validation to improve performance.',
      'Implemented NLP text-classification workflows in Scikit-learn: text preprocessing, vectorization and classification.',
    ],
  },
  {
    role: 'Generative AI Intern',
    org: 'Infosys Springboard (Remote)',
    dates: 'Dec 2025 – Feb 2026',
    // Mapping inferred from the repo name earlier: confirm this is the Infosys project.
    repos: [{ label: 'GitHub repository', href: 'https://github.com/Parimala-15/Cover-letter-generator-final' }],
    points: [
      'Developed an LLM-based personalized cover letter generator in which structured user inputs drive engineered prompts to produce tailored letters.',
      'Improved relevance and response quality through prompt optimization and comparative LLM evaluation.',
      'Designed reusable workflows for automated AI-driven content generation.',
    ],
  },
  {
    role: 'AI-Powered Data Insights & Prompt Engineering Intern',
    org: 'Excelerate (Remote)',
    dates: 'Apr 2025 – May 2025',
    // Mapping inferred from the repo name earlier: confirm this is the Excelerate work.
    repos: [{ label: 'GitHub repository', href: 'https://github.com/Parimala-15/AI-powered-Data-Insights' }],
    points: [
      'Compared Claude and Cohere through prompt engineering experiments, scoring responses on accuracy, usability, scalability and cost, and refined prompts from the results.',
      'Internship work: built a supervised ML model in Python (Scikit-learn, PySpark) to predict student dropout risk: 88% accuracy and a 20% F1-score improvement through feature engineering and hyperparameter tuning.',
      'Led project work with engineering, data, sales and marketing teams on real customer use cases.',
      'Built dashboards and data visualizations and documented findings.',
    ],
  },
];

// Card fields: problem (one sentence), contributions, stack, optional result,
// repos (GitHub), demo (a real deployment only), docs (other links).
// There are no live demos: set `demo` only when a deployed URL really exists.
export const projects = [
  {
    id: 'cardio-bot',
    title: 'Cardio-Bot',
    category: 'Generative AI',
    kind: 'RAG-based heart-health chatbot',
    problem:
      'Answer heart-health questions from a medical knowledge base, so replies are grounded in retrieved context instead of relying on the model alone.',
    contributions: [
      'Built the retrieval-augmented generation flow in Streamlit: SentenceTransformers embeddings stored in ChromaDB, then an LLM call through LangChain.',
      'Enabled similarity search across 1,000+ medical documents.',
      'Supported both a hosted LLM API (Cohere) and a local LlamaCpp model.',
      'Tested with predefined and representative queries, validated responses for relevance and correctness, and debugged retrieval and prompt issues.',
    ],
    result: {
      text: '35% fewer observed hallucinations and 90% response relevance after refining retrieval and prompts, observed on predefined and representative test queries.',
      verified: false,
      note: 'Neither figure appears in the public Cardio-Bot README. Be ready to explain how hallucinations and relevance were counted (how many queries, who judged them).',
    },
    stack: ['Python', 'Streamlit', 'LangChain', 'LlamaCpp', 'ChromaDB', 'SentenceTransformers', 'Cohere API'],
    github: 'https://github.com/Parimala-15/Cardio-Bot',
    demo: null,
  },
  {
    id: 'xeno-crm',
    title: 'Xeno CRM',
    category: 'Full-stack with AI',
    kind: 'CRM web application with an AI Copilot',
    problem:
      'A CRM web application organised into Dashboard, Customers, Campaigns, Analytics, AI Copilot and History modules.',
    contributions: [
      'Developed the React/Vite frontend and the Python FastAPI backend backed by MySQL.',
      'Integrated the Google Gemini API into the AI Copilot module to provide AI-assisted functionality within the CRM workflow.',
    ],
    stack: ['React', 'Vite', 'FastAPI', 'Python', 'MySQL', 'Gemini API'],
    github: 'https://github.com/Parimala-15/xeno-crm',
    demo: null,
  },
  {
    id: 'spectrum-sensing',
    title: 'Spectrum Sensing for Cognitive Radio Networks',
    category: 'Research',
    kind: 'Deep learning, IEEE QPAIN 2026',
    problem: 'Classify signals in noisy wireless data for cognitive radio networks.',
    contributions: [
      'Designed and trained a CNN, Bi-LSTM and Squeeze-and-Excitation attention model (CLDNN with attention) in TensorFlow.',
      'Applied a 4-stage cumulative SNR curriculum so training moves from cleaner to noisier signals.',
      'Trained and evaluated on RadioML 2016.10a across SNR −20 to +18 dB.',
      'Presented the work at IEEE QPAIN 2026, Bangladesh.',
    ],
    result: SPECTRUM_RESULT,
    stack: ['Python', 'TensorFlow', 'CNN', 'Bi-LSTM', 'Attention', 'Curriculum learning'],
    github: null,
    demo: null,
    docs: [
      { label: 'View Project Files', href: researchLinks.files, icon: 'folder' },
      { label: 'Research summary', href: '#research', icon: 'book' },
    ],
  },
  {
    id: 'dropout-prediction',
    title: 'Student Dropout Prediction',
    category: 'Machine learning',
    kind: 'OULAD dataset, Big Data Essentials course project, Nov 2025',
    problem:
      'Predict student dropout from the Open University Learning Analytics Dataset (OULAD). This is separate from the dropout-risk model listed under my Excelerate internship.',
    contributions: [
      'Merged the OULAD tables into a 213,166-record dataset.',
      'Labelled dropout as students with a “Withdrawn” final result (30,622 dropouts).',
      'Trained a Logistic Regression classifier on Spark and evaluated it with cross-validation and ROC-AUC.',
    ],
    result: {
      text: '78.28% cross-validated accuracy and 0.65 ROC-AUC.',
      verified: false,
      note: 'Consistent across your resumes; confirm against your notebook. Kept separate from the Excelerate 88% model.',
    },
    stack: ['Python', 'PySpark', 'Logistic Regression'],
    github: 'https://github.com/Parimala-15/OULAD-Dropout',
    demo: null,
  },
  {
    id: 'timetable',
    title: 'Timetable Management System',
    category: 'Full-stack',
    kind: 'Flask and MySQL web application',
    problem: 'Generate and manage timetables, with a relational database behind SQL-driven CRUD operations.',
    contributions: [
      'Designed the relational database tables and built the Flask application on MySQL.',
      'Used JOINs, GROUP BY and aggregate functions (COUNT, SUM, AVG) to retrieve, organize and analyze timetable data.',
      'Automated timetable generation.',
      'Built an interactive Streamlit dashboard for timetable management.',
    ],
    result: {
      text: 'A 70% reduction in manual scheduling effort.',
      verified: false,
      note: 'Not in the public README. Decide how it was measured (for example time to build a timetable by hand vs with the tool) or remove it. Also confirm the Streamlit dashboard: the repo README lists HTML/CSS/JS as the frontend.',
    },
    stack: ['Python', 'Flask', 'MySQL', 'SQL', 'Streamlit'],
    github: 'https://github.com/Parimala-15/Timetable-Management-System',
    demo: null,
  },
  {
    id: 'cover-letter',
    title: 'Cover Letter Generator',
    category: 'Generative AI',
    kind: 'Infosys Springboard internship project',
    problem: 'Produce personalized cover letters from structured user inputs by driving engineered prompts.',
    contributions: [
      'Developed an LLM-based personalized cover letter generator in which structured user inputs drive engineered prompts to produce tailored letters.',
      'Improved relevance and response quality through prompt optimization and comparative LLM evaluation.',
    ],
    stack: ['LLMs', 'Prompt engineering', 'LLM evaluation'],
    // Mapping inferred from the repo name: confirm this is the Infosys project.
    github: 'https://github.com/Parimala-15/Cover-letter-generator-final',
    demo: null,
  },
  {
    id: 'innomatics-ml',
    title: 'Innomatics machine learning projects',
    category: 'Machine learning',
    kind: 'Machine Learning internship, Innomatics Research Labs',
    problem: 'End-to-end ML pipelines and NLP text classification built during the internship.',
    contributions: [
      'Built end-to-end ML pipelines covering preprocessing, feature engineering, training and evaluation.',
      'Tuned models with hyperparameter search and cross-validation.',
      'Implemented NLP text-classification workflows in Scikit-learn: preprocessing, vectorization and classification.',
    ],
    stack: ['Python', 'Scikit-learn', 'Feature engineering', 'Cross-validation', 'Hyperparameter tuning', 'NLP text classification'],
    repos: [
      { label: 'Innomatics repository', href: 'https://github.com/Parimala-15/Innomatics' },
      { label: 'MLflow assignment repository', href: 'https://github.com/Parimala-15/Innomatics_MLFlow-ass' },
    ],
    demo: null,
  },
];

export const moreProjects = [
  {
    id: 'muththamizh',
    title: 'Muththamizh',
    category: 'NLP',
    kind: 'Tamil NLP chatbot',
    problem: 'A Tamil-language chatbot with English–Tamil translation and Tamil literature queries.',
    contributions: [
      'Built the chatbot interface in Streamlit.',
      'Added text-to-speech, text summarization and word search across PDF and DOCX files.',
    ],
    stack: ['Python', 'NLP', 'Streamlit'],
    github: 'https://github.com/Parimala-15/muththamizh-chatbot',
    demo: null,
  },
  {
    id: 'eye-tracker',
    title: 'Eye Tracker and Blink Detection',
    category: 'Computer vision',
    kind: 'Hands-free input',
    problem: 'Track the eyes in real time from a webcam and use blinks as mouse clicks.',
    contributions: [
      'Built the real-time eye-tracking and blink-detection pipeline with OpenCV and MediaPipe.',
      'Mapped blinks to mouse clicks for hands-free computer interaction.',
    ],
    stack: ['Python', 'OpenCV', 'MediaPipe'],
    github: null, // no repository URL supplied
    demo: null,
  },
];

export const research = {
  title: 'Efficient Spectrum Sensing for Cognitive Radio Networks Using Curriculum Learning-Based CLDNN with Attention',
  venue: 'IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence and Networking (QPAIN 2026), Bangladesh',
  status: 'Conference paper, presented',
  problem: 'Classify signals in noisy wireless data for cognitive radio networks, across signal-to-noise ratios from −20 to +18 dB.',
  approach: [
    'A model that combines a CNN, a Bi-LSTM and Squeeze-and-Excitation attention (CLDNN with attention), implemented in TensorFlow.',
    'A 4-stage cumulative SNR curriculum, so training moves from cleaner to noisier signals.',
    'Trained and evaluated on RadioML 2016.10a.',
  ],
  result: SPECTRUM_RESULT,
  links: [
    { type: 'ieee', label: 'View IEEE Publication', href: researchLinks.ieee },
    { type: 'scholar', label: 'View Google Scholar Record', href: researchLinks.scholar },
    { type: 'files', label: 'View Spectrum Sensing Project Files', href: researchLinks.files },
  ],
  filesNote: 'The project files open in Google Drive.',
};

export const certifications = [
  { title: 'Generative AI', issuer: 'GUVI', link: null },
  { title: 'Machine Learning Specialization', issuer: 'Coursera', link: null },
  { title: 'Database Management Systems', issuer: 'NPTEL', link: null },
  { title: 'Career Edge – Young Professional', issuer: 'TCS iON', link: null },
];
