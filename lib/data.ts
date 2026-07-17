export const profile = {
  name: "Vedant Somani",
  role: "Text Mining Research Analyst",
  org: "UW eScience Institute",
  location: "Seattle, WA",
  email: "vedants0@uw.edu",
  links: {
    github: "https://github.com/vedant1711",
    linkedin: "https://www.linkedin.com/in/vedant-somani17/",
    escience: "https://escience.washington.edu/member/vedant-somani/",
    researchgate: "https://www.researchgate.net/profile/Vedant-Somani-4",
  },
  resumes: [
    {
      label: "Software Engineering",
      short: "SWE",
      file: "/resume/Vedant_Somani_Resume_SWE.pdf",
    },
    {
      label: "Data Science",
      short: "DS",
      file: "/resume/Vedant_Somani_Resume_DS.pdf",
    },
  ],
  // Google Drive folder with all resume variants; the "All resumes" button
  // (hero + footer) only renders when this is non-empty.
  resumeDrive:
    "https://drive.google.com/drive/folders/1Y0njxZw_-NLnMY0unBbHS5VUX8fT75W_",
  tagline:
    "I build NLP pipelines, agentic AI systems, and full-stack products that turn messy data into working software.",
  about: [
    "I'm a Master's student in Information Management at the University of Washington (4.0 GPA) and a Text Mining Student Specialist at the eScience Institute, where I apply data science and machine learning to extract insights from complex textual data — with an emphasis on practical, scalable solutions.",
    "Before UW, I worked across machine learning and full-stack development, building reliable end-to-end systems: data collection, processing, modeling, and deployment. These days I'm especially excited about agentic AI systems and how they can streamline research workflows — I collaborate with researchers to turn open questions into structured, data-driven approaches and make text mining accessible across disciplines.",
  ],
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  start: string;
  current?: boolean;
  stack: string[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Text Mining Research Analyst",
    company: "UW Libraries & eScience Institute",
    period: "Mar 2026 — Present",
    start: "2026",
    current: true,
    stack: ["spaCy", "BERT", "Haystack", "RAG", "pandas"],
    bullets: [
      "Engineered scalable NLP ingestion pipelines using spaCy and pandas to clean, normalize, and deduplicate 100K+ scholarly documents, reducing downstream preprocessing time by 40%.",
      "Applied BERT models to extract structured entities and semantic relationships from unstructured research corpora, enabling semantic search across 50K+ records.",
      "Integrated Haystack-based retrieval-augmented generation (RAG) to surface contextually relevant passages from large document archives, cutting manual research query time by ~30% for library staff.",
      "Currently building Open IRE with UW Libraries and the Scientific Software Engineering Center (SSEC) — an automated pipeline to collect, rights-classify, and preserve ~400K UW-authored articles in the ResearchWorks institutional repository.",
    ],
  },
  {
    role: "Fullstack Developer Intern",
    company: "OS Technology Service",
    period: "Jan 2025 — Jul 2025",
    start: "2025",
    stack: ["React Native", "Django", "PostgreSQL", "AWS"],
    bullets: [
      "Engineered a cross-platform mobile app (My Dj Live) with real-time event engagement features using React Native and Django, enhancing event interactivity and scalability.",
      "Deployed AWS-based infrastructure (EC2, Fargate, CloudWatch) with CI/CD automation, OTA updates, and integrated analytics tools (Crashlytics, DataDog) to improve reliability and user experience.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Xenon Nation",
    period: "Mar 2024 — Sept 2024",
    start: "2024",
    stack: ["PyTorch", "Hugging Face", "FastAPI", "Docker"],
    bullets: [
      "Improved sentiment analysis F1-score by 18% through fine-tuning BERT models with Hugging Face Transformers using PyTorch on AWS EC2.",
      "Reduced processing latency by 35% (−250 ms) by designing a transformer-based summarization pipeline and deploying scalable FastAPI microservices with Docker on AWS ECS.",
    ],
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "HemansAI",
    period: "Sept 2023 — Feb 2024",
    start: "2023",
    stack: ["Scikit-learn", "Django REST", "PostgreSQL", "Redis"],
    bullets: [
      "Enhanced model accuracy by 15% through feature engineering, cross-validation, and hyperparameter tuning for predictive analytics workflows.",
      "Improved backend inference performance by 20% via optimized Django REST APIs, PostgreSQL indexing, and Redis caching for high-throughput ML serving.",
    ],
  },
  {
    role: "Chairperson — ACM Students Chapter",
    company: "Acropolis Institute of Technology and Research (AITR)",
    period: "2023 — 2025",
    start: "2023",
    stack: ["Leadership", "Hackathons", "Workshops", "IoT"],
    bullets: [
      "Led the AITR ACM Students Chapter, running the institute's flagship technical events and growing a community of student developers, designers, and innovators.",
      "Organized the Prayatna Hackathon — a tech-for-social-good hackathon with 20+ industry mentors and jury members, and chief guests from DigiSparsh and HotWax Systems.",
      "Ran hands-on workshops including SmartSculpt 2.0, an IoT workshop where participants built their own working cars, instructing alongside fellow student speakers.",
    ],
  },
];

export type Project = {
  name: string;
  subtitle: string;
  description: string[];
  stack: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    name: "Open IRE",
    image: "/media/projects/openire.jpg",
    imageAlt: "Suzzallo Library reading room at the University of Washington",
    subtitle: "Open-Access Research Pipeline · UW Libraries × SSEC · ongoing",
    featured: true,
    description: [
      "A UW Libraries initiative I'm currently working on as an SSEC engineer: automatically collecting, rights-classifying, and preserving ~400,000 scholarly articles by UW researchers in the ResearchWorks institutional repository — and building a model other institutions can adopt.",
      "The pipeline harvests publications scattered across federal repositories like PubMed Central and ERIC, classifies each article's rights status (UW open-access policy, Creative Commons, or needs-review), and has collected ~50,000 articles so far, with database schema and architecture designed for the full corpus.",
    ],
    stack: ["Python", "Pixi", "Data Pipelines", "Open Access"],
    live: "https://escience.washington.edu/open-ire-increasing-access-to-published-research/",
  },
  {
    name: "ResolveIQ",
    image: "/media/projects/resolveiq.png",
    imageAlt: "ResolveIQ developer dashboard with ticket analytics and KB drafts",
    subtitle: "AI-Powered Incident Knowledge Management",
    featured: true,
    description: [
      "An event-driven microservices platform that ensures engineering teams never solve the same problem twice — it auto-generates structured Confluence KB articles from resolved Jira tickets by aggregating Slack and Zoom context, eliminating manual documentation overhead.",
      "Semantic retrieval engine (Voyage AI embeddings + Pinecone vector search + GPT-4o) surfaces relevant KB articles inline in Jira, cutting MTTR for recurring issues by ~30%.",
    ],
    stack: ["LangChain", "FastAPI", "Pinecone", "GPT-4o", "Next.js", "Django"],
    github: "https://github.com/vedant1711/ResolveIQ_Project",
    live: "https://resolve-iq-project.vercel.app",
  },
  {
    name: "Vegapunk",
    image: "/media/projects/vegapunk.png",
    imageAlt: "Vegapunk dashboard with seven satellite agents processing a GitHub issue in real time",
    subtitle: "Autonomous AI Code Agent",
    featured: true,
    description: [
      "A fully autonomous GitHub issue-to-PR pipeline: a 7-node LangGraph multi-agent system backed by NVIDIA NIM LLMs resolves issues end-to-end — analyzing code, planning fixes, writing changes, running tests, and opening PRs with self-correcting retry loops on test failure.",
      "Real-time SSE event bus streams 19+ live agent events to a Next.js dashboard, with Docker-sandboxed code execution and baseline-aware pytest comparison so pre-existing failures never block new fixes.",
    ],
    stack: ["LangGraph", "NVIDIA NIM", "FastAPI", "Next.js", "Docker"],
    github: "https://github.com/vedant1711/Vegapunk-Agentic-AI-Code-Agent",
  },
  {
    name: "Atlas",
    image: "/media/projects/atlas.png",
    imageAlt: "Atlas landing page — UW student success assistant",
    subtitle: "Agentic Student Success Portal · iEngage Hackathon Runner-up",
    description: [
      "A unified student portal driven by a Gemini 2.5 AI agent with Salesforce integration and a RAG knowledge base — chat interface with dynamic widget rendering for student services.",
    ],
    stack: ["React", "Django", "Gemini", "Salesforce", "RAG"],
    github: "https://github.com/vedant1711/atlas-compass-buddy",
    live: "https://atlas-compass-buddy.vercel.app",
  },
  {
    name: "Marcus — Market for Campus",
    image: "/media/projects/marcus.png",
    imageAlt: "Marcus landing page — the trust-first campus marketplace",
    subtitle: "AI-Powered Student Marketplace · UW AIMS Runner-up",
    description: [
      "A trust-first, campus-exclusive marketplace where every user is .edu-verified, trust is quantified via portable Trust QR codes, and GPT-powered fair-pricing analysis protects both buyers and sellers.",
    ],
    stack: ["Next.js", "Django", "OpenAI GPT-4o", "PostgreSQL"],
    github: "https://github.com/vedant1711/AIMS-Product-Competition",
    live: "https://aims-product-competition.vercel.app",
  },
  {
    name: "Lumina",
    image: "/media/projects/lumina.png",
    imageAlt: "Lumina e-commerce homepage with dark-themed product catalog",
    subtitle: "AI-Enhanced E-Commerce Platform",
    description: [
      "Full-stack e-commerce with NLP sentiment analysis on reviews, TF-IDF product recommendations, personalized home feeds, Stripe checkout, Redis-backed carts, and a multi-role admin dashboard.",
    ],
    stack: ["Next.js", "FastAPI", "Redis", "Stripe", "NLP"],
    github: "https://github.com/vedant1711/Lumina_ecommerce_project",
    live: "https://lumina-ecommerce-project.vercel.app",
  },
  {
    name: "FarmFit",
    subtitle: "Smart Precision Farming Platform",
    description: [
      "An IoT-ML platform that dynamically adjusts watering and fertilization from real-time sensor data — optimizing irrigation efficiency by 26% and boosting crop yield by 11%.",
      "Predictive fertilizer-recommendation model deployed via Django on AWS, integrated with a React Native dashboard for real-time visualization and remote control. Published at IEEE ACROSET 2025.",
    ],
    stack: ["TensorFlow", "Django", "React Native", "AWS", "IoT"],
    github: "https://github.com/vedant1711/Skitech_FarmFit_Frontend",
  },
];

export type Skill = {
  name: string;
  icon?: string; // filename in /logos (without .svg)
  invert?: boolean; // monochrome icon that needs inversion in dark mode
  darkIcon?: string; // alternate file for dark mode
};

export type SkillGroup = { label: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Databases",
    skills: [
      { name: "Python", icon: "python" },
      { name: "C++", icon: "cpp" },
      { name: "Java", icon: "java" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Pinecone" },
    ],
  },
  {
    label: "Machine Learning & Data",
    skills: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "NumPy", icon: "numpy" },
      { name: "Pandas", icon: "pandas" },
      { name: "Matplotlib", icon: "matplotlib" },
      { name: "OpenCV", icon: "opencv" },
      { name: "Apache Spark", icon: "spark" },
      { name: "Apache Kafka", icon: "kafka", invert: true },
      { name: "Hadoop", icon: "hadoop" },
      { name: "Snowflake", icon: "snowflake" },
      { name: "Scala", icon: "scala" },
      { name: "MATLAB", icon: "matlab" },
    ],
  },
  {
    label: "AI & Agents",
    skills: [
      { name: "Claude API", icon: "anthropic", invert: true },
      { name: "OpenAI GPT-4o", icon: "openai", invert: true },
      { name: "LangChain", icon: "langchain" },
      { name: "LangGraph", icon: "langgraph" },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "Haystack", icon: "haystack" },
      { name: "LlamaIndex" },
      { name: "CrewAI", icon: "crewai" },
      { name: "AutoGen" },
      { name: "MCP", icon: "mcp", invert: true },
      { name: "RAG Pipelines" },
      { name: "BERT" },
    ],
  },
  {
    label: "Frameworks & Web",
    skills: [
      { name: "FastAPI", icon: "fastapi" },
      { name: "Django", icon: "django", darkIcon: "django-dark" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs", invert: true },
      { name: "Node.js", icon: "nodejs" },
    ],
  },
  {
    label: "Platforms & Tools",
    skills: [
      { name: "AWS", icon: "aws", darkIcon: "aws-dark" },
      { name: "Azure", icon: "azure" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github", invert: true },
      { name: "Postman", icon: "postman" },
      { name: "Jira", icon: "jira" },
      { name: "Tableau", icon: "tableau", invert: true },
      { name: "Figma", icon: "figma" },
    ],
  },
];

export type Achievement = {
  title: string;
  detail: string;
  kind: "award" | "publication" | "certification";
  link?: string;
  linkLabel?: string;
};

export const achievements: Achievement[] = [
  {
    title: "Dempsey Startup Competition 2026",
    detail: "Investment Round Finalist",
    kind: "award",
    link: "https://www.linkedin.com/posts/vedant-somani17_dempseystartupcompetition-fosterschoolofbusiness-activity-7456029571558268928-tpHZ",
    linkLabel: "Read the story",
  },
  {
    title: "iEngage — Salesforce × Lovable Hackathon",
    detail: "Runner-up — built Atlas, an agentic student success portal",
    kind: "award",
    link: "https://atlas-compass-buddy.vercel.app",
    linkLabel: "Try the project live",
  },
  {
    title: "UW AIMS Product Competition",
    detail: "Runner-up — Association of Information Management Students at UW",
    kind: "award",
    link: "https://github.com/vedant1711/AIMS-Product-Competition",
    linkLabel: "View the project",
  },
  {
    title: "IEEE ACROSET 2025",
    detail:
      "PyFao-Driven Precision Irrigation and Fertilizer Optimization in Agriculture",
    kind: "publication",
    link: "https://www.researchgate.net/profile/Vedant-Somani-4",
    linkLabel: "Read on ResearchGate",
  },
  {
    title: "IEEE ICTBIG 2024",
    detail: "Elderly Well-Being Through Volunteer Engagement",
    kind: "publication",
    link: "https://www.researchgate.net/profile/Vedant-Somani-4",
    linkLabel: "Read on ResearchGate",
  },
  {
    title: "Fundamentals of Deep Learning",
    detail: "NVIDIA Certification",
    kind: "certification",
  },
  {
    title: "AWS Academy Graduate",
    detail: "AWS Academy Cloud Architecting",
    kind: "certification",
  },
];

export type Highlight = {
  title: string;
  date: string;
  description: string;
  link?: string;
  linkLabel?: string;
  tags: string[];
  images?: string[];
  imageAlt?: string;
};

export const highlights: Highlight[] = [
  {
    title: "Investment Round Finalist at the Dempsey Startup Competition",
    date: "May 2026",
    description:
      "Our team took ResolveIQ to the Investment Round — top 40 teams — at UW Foster's Dempsey Startup Competition (Buerk Center for Entrepreneurship). The journey taught me so much beyond just developing a product and pitching it, alongside Harsh Vardhan, Devika Bhutani, Sanchit Arora, and Sunayana H.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7456029571558268928/",
    images: ["/media/linkedin/dempsey-1.jpeg"],
    imageAlt: "Vedant with his Dempsey Startup Competition team",
    tags: ["Startup", "Pitching", "UW Foster"],
  },
  {
    title: "Marcus: runner-up at the UW AIMS Product Competition",
    date: "Mar 2026",
    description:
      "We built a working prototype of Marcus — a trust-first campus marketplace with verified identities, TrustScores, and AI-driven fair pricing — in six hours, grounded in real user research done on campus instead of conference-room assumptions. Marcus might be a prototype, but the thinking behind it is something I'm genuinely excited to keep building on.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7434493814901469184/",
    images: ["/media/linkedin/aims-1.jpeg"],
    imageAlt: "Team Forde 102 at the UW AIMS Product Competition",
    tags: ["Product", "User Research", "UW AIMS"],
  },
  {
    title: "Runner-up at iEngage — the Salesforce × Lovable Hackathon",
    date: "2026",
    description:
      "Built Atlas — an all-in-one student success agent that connects every campus service through one conversation — at the iEngage Hackathon with Salesforce and Lovable, taking home runner-up. Atlas went on to become a full project with a Gemini-powered agent, Salesforce integration, and a RAG knowledge base.",
    link: "https://atlas-compass-buddy.vercel.app",
    linkLabel: "Try Atlas live",
    images: ["/media/linkedin/iengage-1.jpeg", "/media/linkedin/iengage-2.jpeg"],
    imageAlt: "The Atlas team at the iEngage Hackathon holding their project poster",
    tags: ["Hackathon", "Agentforce", "Atlas"],
  },
  {
    title: "Judge & mentor at WebSprint, GDG on Campus IET-DAVV",
    date: "Apr 2025",
    description:
      "Served as a judge and mentor at WebSprint, a web-development mini hackathon with 60+ participating teams. Reviewing that many builds in a day sharpened my eye for what separates a good demo from a great product — and giving back to the student tech community that shaped me meant a lot.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7314206667166908416/",
    images: ["/media/linkedin/websprint-1.jpeg", "/media/linkedin/websprint-2.jpeg", "/media/linkedin/websprint-3.jpeg"],
    imageAlt: "Judging and mentoring at the WebSprint hackathon",
    tags: ["Mentorship", "Hackathon", "Community"],
  },
  {
    title: "AICTE FDP workshop: AI-enabled Structural Health Monitoring",
    date: "Dec 2024",
    description:
      "Delivered a week-long hands-on workshop for an AICTE Faculty Development Program on advancements in AI-enabled structural health monitoring — covering AI-driven anomaly detection models, IoT sensor networks, and real-time data analytics for infrastructure safety, in collaboration with faculty and researchers.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7290661793511702528/",
    images: ["/media/linkedin/aicte-1.jpeg", "/media/linkedin/aicte-2.jpeg", "/media/linkedin/aicte-3.jpeg", "/media/linkedin/aicte-4.jpeg"],
    imageAlt: "Delivering the AICTE FDP workshop on AI-enabled structural health monitoring",
    tags: ["AI", "IoT", "Teaching"],
  },
  {
    title: "SmartSculpt 2.0: hands-on IoT workshop at AITR ACM",
    date: "Apr 2024",
    description:
      "Instructed at SmartSculpt 2.0, an IoT workshop organized by the AITR ACM chapter where participants learned IoT fundamentals and built their own working cars — guiding hands-on projects alongside fellow speakers Tanay Patil, Somnath Tyagi, and Satwik Tiwari.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7189708621075648512/",
    tags: ["IoT", "Workshop", "ACM"],
  },
  {
    title: "Organizing the Prayatna Hackathon as AITR ACM Chairperson",
    date: "Apr 2024",
    description:
      "Led the AITR ACM Students Chapter in organizing Prayatna, a hackathon focused on technology for social challenges — bringing together developers, designers, and innovators with 20+ industry mentors and jury members, and chief guests from DigiSparsh and HotWax Systems.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7187376250242383873/",
    images: ["/media/linkedin/prayatna-1.jpeg", "/media/linkedin/prayatna-2.jpeg", "/media/linkedin/prayatna-3.jpeg"],
    imageAlt: "The Prayatna Hackathon organized by the AITR ACM chapter",
    tags: ["Leadership", "Hackathon", "TechForGood"],
  },
  {
    title: "GDG DevFest 2022, Indore",
    date: "2022",
    description:
      "Where a lot of it started — attending Google Developer Groups' DevFest in Indore, soaking up talks and meeting the developer community that would later shape my own work organizing hackathons and workshops.",
    images: ["/media/linkedin/devfest-1.jpeg"],
    imageAlt: "Vedant at the GDG DevFest 2022 sponsor wall in Indore",
    tags: ["Community", "GDG", "DevFest"],
  },
];

export const education = [
  {
    school: "University of Washington, Seattle",
    degree: "Master of Science — Information Management",
    period: "Expected June 2027",
    note: "GPA: 4.0",
  },
  {
    school: "Acropolis Institute of Technology and Research, India",
    degree: "B.Tech — Computer Science Engineering",
    period: "June 2025",
    note: "",
  },
];
