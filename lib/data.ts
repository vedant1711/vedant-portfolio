export const profile = {
  name: "Vedant Somani",
  first: "Vedant",
  initials: "VS",
  role: "Text Mining Research Analyst",
  roleShort: "ML / NLP Engineer",
  org: "UW eScience Institute",
  location: "Seattle, WA",
  email: "vedants0@uw.edu",
  status: "Open to 2027 new-grad and internship roles",
  available: true,
  tagline:
    "I turn large, messy text into working software: NLP pipelines, agentic AI systems, and the full-stack products around them.",
  intro:
    "I am a machine learning and NLP engineer at the University of Washington. Most of my work sits where research questions meet software that actually ships.",
  links: {
    github: "https://github.com/vedant1711",
    linkedin: "https://www.linkedin.com/in/vedant-somani17/",
    escience: "https://escience.washington.edu/member/vedant-somani/",
    researchgate: "https://www.researchgate.net/profile/Vedant-Somani-4",
  },
  facts: [
    { k: "Role", v: "ML / NLP Engineer" },
    { k: "Focus", v: "Text mining · Agentic AI" },
    { k: "Based in", v: "Seattle, WA" },
    { k: "Status", v: "Open to 2027 roles" },
  ],
  stats: [
    { value: "3+", label: "Years building" },
    { value: "15+", label: "Projects shipped" },
    { value: "2", label: "IEEE publications" },
    { value: "4.0", label: "GPA at UW" },
  ],
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
  resumeDrive:
    "https://drive.google.com/drive/folders/1Y0njxZw_-NLnMY0unBbHS5VUX8fT75W_",
  about: [
    "I am a Master's student in Information Management at the University of Washington, where I hold a 4.0 GPA, and a text mining specialist at the eScience Institute. I use machine learning and data science to pull structure and meaning out of large, messy text, and I care most about solutions that ship and hold up at scale.",
    "Before Seattle I spent a few years across machine learning and full-stack engineering, building systems end to end: collecting data, processing it, training models, and putting them into production. These days I am most drawn to agentic AI and how it can take slow, manual research work and make it fast, structured, and repeatable.",
  ],
};

export type Experience = {
  role: string;
  company: string;
  from: string;
  to: string;
  year: string;
  current?: boolean;
  stack: string[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Text Mining Research Analyst",
    company: "UW Libraries & eScience Institute",
    from: "Mar 2026",
    to: "Present",
    year: "2026",
    current: true,
    stack: ["spaCy", "BERT", "Haystack", "RAG", "pandas"],
    bullets: [
      "Built scalable NLP ingestion pipelines with spaCy and pandas that clean, normalize, and deduplicate more than 100,000 scholarly documents, cutting downstream preprocessing time by 40%.",
      "Used BERT models to extract structured entities and semantic relationships from raw research corpora, making over 50,000 records searchable by meaning rather than keywords.",
      "Wired up Haystack retrieval-augmented generation to surface the most relevant passages from large archives, cutting manual research query time for library staff by roughly 30%.",
      "Currently building Open IRE with UW Libraries and the Scientific Software Engineering Center, an automated pipeline that collects, rights-classifies, and preserves close to 400,000 UW-authored articles in the ResearchWorks repository.",
    ],
  },
  {
    role: "Fullstack Developer Intern",
    company: "OS Technology Service",
    from: "Jan 2025",
    to: "Jul 2025",
    year: "2025",
    stack: ["React Native", "Django", "PostgreSQL", "AWS"],
    bullets: [
      "Built a cross-platform mobile app, My Dj Live, with real-time event engagement features in React Native and Django, making live events more interactive and easier to scale.",
      "Deployed the AWS infrastructure behind it (EC2, Fargate, CloudWatch) with CI/CD automation, over-the-air updates, and Crashlytics and DataDog analytics to keep the app reliable in production.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Xenon Nation",
    from: "Mar 2024",
    to: "Sep 2024",
    year: "2024",
    stack: ["PyTorch", "Hugging Face", "FastAPI", "Docker"],
    bullets: [
      "Improved sentiment-analysis F1 by 18% by fine-tuning BERT models with Hugging Face Transformers and PyTorch on AWS EC2.",
      "Cut processing latency by 35%, about 250 ms, by designing a transformer-based summarization pipeline and serving it as FastAPI microservices with Docker on AWS ECS.",
    ],
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "HemansAI",
    from: "Sep 2023",
    to: "Feb 2024",
    year: "2023",
    stack: ["Scikit-learn", "Django REST", "PostgreSQL", "Redis"],
    bullets: [
      "Raised model accuracy by 15% through feature engineering, cross-validation, and hyperparameter tuning across the predictive-analytics workflow.",
      "Improved inference performance by 20% by optimizing Django REST APIs, adding PostgreSQL indexing, and caching hot paths with Redis.",
    ],
  },
  {
    role: "Chairperson, ACM Students Chapter",
    company: "Acropolis Institute of Technology and Research",
    from: "2023",
    to: "2025",
    year: "2023",
    stack: ["Leadership", "Hackathons", "Workshops", "IoT"],
    bullets: [
      "Led the AITR ACM Students Chapter, running the institute's flagship technical events and growing an active community of student developers, designers, and builders.",
      "Organized Prayatna, a technology-for-social-good hackathon, bringing in more than 20 industry mentors and judges along with chief guests from DigiSparsh and HotWax Systems.",
      "Ran hands-on workshops including SmartSculpt 2.0, an IoT session where students built their own working cars, teaching alongside other student speakers.",
    ],
  },
];

export type Project = {
  name: string;
  subtitle: string;
  status?: string;
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
    subtitle: "Open-access research pipeline · UW Libraries × SSEC",
    status: "In progress",
    featured: true,
    description: [
      "An initiative I am building as an SSEC engineer with UW Libraries. It automatically collects, rights-classifies, and preserves close to 400,000 scholarly articles written by UW researchers in the ResearchWorks repository, designed as a model other universities can adopt.",
      "The pipeline pulls publications scattered across federal repositories like PubMed Central and ERIC, sorts each one by rights status (covered by UW's open-access policy, Creative Commons, or needs review), and has gathered around 50,000 articles so far. The schema and architecture are built to scale to the full collection.",
    ],
    stack: ["Python", "Pixi", "Data Pipelines", "Open Access"],
    live: "https://escience.washington.edu/open-ire-increasing-access-to-published-research/",
  },
  {
    name: "ResolveIQ",
    image: "/media/projects/resolveiq.png",
    imageAlt: "ResolveIQ developer dashboard with ticket analytics and knowledge-base drafts",
    subtitle: "AI incident knowledge management",
    featured: true,
    description: [
      "An event-driven microservices platform so engineering teams never solve the same incident twice. It turns resolved Jira tickets into clean Confluence knowledge-base articles by pulling in the surrounding Slack and Zoom context, which removes the manual write-up step entirely.",
      "A semantic retrieval engine built on Voyage AI embeddings, Pinecone vector search, and GPT-4o surfaces the right article inline in Jira, cutting mean time to resolution for recurring issues by about 30%.",
    ],
    stack: ["LangChain", "FastAPI", "Pinecone", "GPT-4o", "Next.js", "Django"],
    github: "https://github.com/vedant1711/ResolveIQ_Project",
    live: "https://resolve-iq-project.vercel.app",
  },
  {
    name: "Vegapunk",
    image: "/media/projects/vegapunk.png",
    imageAlt: "Vegapunk dashboard with seven agents processing a GitHub issue in real time",
    subtitle: "Autonomous AI code agent",
    featured: true,
    description: [
      "A fully autonomous path from GitHub issue to pull request. A seven-node LangGraph multi-agent system running on NVIDIA NIM models reads the code, plans a fix, writes the change, runs the tests, and opens a PR, correcting itself when tests fail.",
      "A real-time event bus streams more than 19 live agent events to a Next.js dashboard, with code running in a Docker sandbox and a baseline-aware test comparison so pre-existing failures never block a valid fix.",
    ],
    stack: ["LangGraph", "NVIDIA NIM", "FastAPI", "Next.js", "Docker"],
    github: "https://github.com/vedant1711/Vegapunk-Agentic-AI-Code-Agent",
  },
  {
    name: "Atlas",
    image: "/media/projects/atlas.png",
    imageAlt: "Atlas landing page, a UW student success assistant",
    subtitle: "Agentic student success portal · iEngage runner-up",
    description: [
      "A single portal for students, driven by a Gemini 2.5 agent with Salesforce integration and a RAG knowledge base. The chat interface renders live widgets for different campus services as you ask for them.",
    ],
    stack: ["React", "Django", "Gemini", "Salesforce", "RAG"],
    github: "https://github.com/vedant1711/atlas-compass-buddy",
    live: "https://atlas-compass-buddy.vercel.app",
  },
  {
    name: "Marcus",
    image: "/media/projects/marcus.png",
    imageAlt: "Marcus landing page, a trust-first campus marketplace",
    subtitle: "AI campus marketplace · UW AIMS runner-up",
    description: [
      "A trust-first marketplace built only for verified .edu students. Trust is made portable through scannable Trust QR codes, and GPT-powered fair-pricing analysis protects both buyers and sellers.",
    ],
    stack: ["Next.js", "Django", "OpenAI GPT-4o", "PostgreSQL"],
    github: "https://github.com/vedant1711/AIMS-Product-Competition",
    live: "https://aims-product-competition.vercel.app",
  },
  {
    name: "Lumina",
    image: "/media/projects/lumina.png",
    imageAlt: "Lumina e-commerce homepage with a dark product catalog",
    subtitle: "AI-enhanced e-commerce platform",
    description: [
      "A full-stack store with NLP sentiment analysis on reviews, TF-IDF product recommendations, personalized home feeds, Stripe checkout, Redis-backed carts, and a multi-role admin dashboard.",
    ],
    stack: ["Next.js", "FastAPI", "Redis", "Stripe", "NLP"],
    github: "https://github.com/vedant1711/Lumina_ecommerce_project",
    live: "https://lumina-ecommerce-project.vercel.app",
  },
  {
    name: "FarmFit",
    subtitle: "Smart precision farming platform",
    description: [
      "An IoT and machine learning platform that adjusts watering and fertilization from live sensor data, improving irrigation efficiency by 26% and lifting crop yield by 11%.",
      "A predictive fertilizer-recommendation model served through Django on AWS, paired with a React Native dashboard for live monitoring and remote control. Published at IEEE ACROSET 2025.",
    ],
    stack: ["TensorFlow", "Django", "React Native", "AWS", "IoT"],
    github: "https://github.com/vedant1711/Skitech_FarmFit_Frontend",
  },
];

export type Skill = {
  name: string;
  icon?: string;
  invert?: boolean;
  darkIcon?: string;
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
    detail: "Investment round finalist, top 40 teams at UW Foster.",
    kind: "award",
    link: "https://www.linkedin.com/posts/vedant-somani17_dempseystartupcompetition-fosterschoolofbusiness-activity-7456029571558268928-tpHZ",
    linkLabel: "Read the story",
  },
  {
    title: "iEngage Hackathon",
    detail: "Runner-up at the Salesforce and Lovable hackathon. Built Atlas, an agentic student success portal.",
    kind: "award",
    link: "https://atlas-compass-buddy.vercel.app",
    linkLabel: "Try the project live",
  },
  {
    title: "UW AIMS Product Competition",
    detail: "Runner-up, Association of Information Management Students at UW.",
    kind: "award",
    link: "https://github.com/vedant1711/AIMS-Product-Competition",
    linkLabel: "View the project",
  },
  {
    title: "IEEE ACROSET 2025",
    detail:
      "PyFao-driven precision irrigation and fertilizer optimization in agriculture.",
    kind: "publication",
    link: "https://www.researchgate.net/profile/Vedant-Somani-4",
    linkLabel: "Read on ResearchGate",
  },
  {
    title: "IEEE ICTBIG 2024",
    detail: "Elderly well-being through volunteer engagement.",
    kind: "publication",
    link: "https://www.researchgate.net/profile/Vedant-Somani-4",
    linkLabel: "Read on ResearchGate",
  },
  {
    title: "Fundamentals of Deep Learning",
    detail: "NVIDIA certification.",
    kind: "certification",
  },
  {
    title: "AWS Academy Graduate",
    detail: "AWS Academy Cloud Architecting.",
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
    title: "Investment round finalist at the Dempsey Startup Competition",
    date: "May 2026",
    description:
      "Our team took ResolveIQ to the investment round, the top 40 teams, at UW Foster's Dempsey Startup Competition run by the Buerk Center for Entrepreneurship. It taught me a lot that goes well beyond building a product and pitching it, alongside Harsh Vardhan, Devika Bhutani, Sanchit Arora, and Sunayana H.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7456029571558268928/",
    images: ["/media/linkedin/dempsey-1.jpeg"],
    imageAlt: "Vedant with his Dempsey Startup Competition team",
    tags: ["Startup", "Pitching", "UW Foster"],
  },
  {
    title: "Runner-up at the UW AIMS Product Competition with Marcus",
    date: "Mar 2026",
    description:
      "We built a working prototype of Marcus, a trust-first campus marketplace with verified identities, TrustScores, and AI-driven fair pricing, in six hours. It was grounded in real user research done on campus rather than conference-room guesses. Marcus is still a prototype, but the thinking behind it is something I want to keep building on.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7434493814901469184/",
    images: ["/media/linkedin/aims-1.jpeg"],
    imageAlt: "Team Forde 102 at the UW AIMS Product Competition",
    tags: ["Product", "User Research", "UW AIMS"],
  },
  {
    title: "Runner-up at the iEngage Salesforce and Lovable hackathon",
    date: "2026",
    description:
      "Built Atlas, an all-in-one student success agent that connects every campus service through a single conversation, at the iEngage hackathon with Salesforce and Lovable. It took runner-up and grew into a full project with a Gemini-powered agent, Salesforce integration, and a RAG knowledge base.",
    link: "https://atlas-compass-buddy.vercel.app",
    linkLabel: "Try Atlas live",
    images: ["/media/linkedin/iengage-1.jpeg", "/media/linkedin/iengage-2.jpeg"],
    imageAlt: "The Atlas team at the iEngage hackathon holding their project poster",
    tags: ["Hackathon", "Agentforce", "Atlas"],
  },
  {
    title: "Judge and mentor at WebSprint, GDG on Campus IET-DAVV",
    date: "Apr 2025",
    description:
      "Judged and mentored at WebSprint, a web-development hackathon with more than 60 teams. Reviewing that many builds in one day sharpened my sense of what separates a good demo from a real product, and it felt good to give back to the student community that got me started.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7314206667166908416/",
    images: ["/media/linkedin/websprint-1.jpeg", "/media/linkedin/websprint-2.jpeg", "/media/linkedin/websprint-3.jpeg"],
    imageAlt: "Judging and mentoring at the WebSprint hackathon",
    tags: ["Mentorship", "Hackathon", "Community"],
  },
  {
    title: "AICTE FDP workshop on AI-enabled structural health monitoring",
    date: "Dec 2024",
    description:
      "Led a week-long hands-on workshop for an AICTE Faculty Development Program on AI-enabled structural health monitoring, covering anomaly-detection models, IoT sensor networks, and real-time data analytics for infrastructure safety, working with faculty and researchers.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7290661793511702528/",
    images: ["/media/linkedin/aicte-1.jpeg", "/media/linkedin/aicte-2.jpeg", "/media/linkedin/aicte-3.jpeg", "/media/linkedin/aicte-4.jpeg"],
    imageAlt: "Delivering the AICTE FDP workshop on AI-enabled structural health monitoring",
    tags: ["AI", "IoT", "Teaching"],
  },
  {
    title: "SmartSculpt 2.0, a hands-on IoT workshop at AITR ACM",
    date: "Apr 2024",
    description:
      "Taught at SmartSculpt 2.0, an IoT workshop run by the AITR ACM chapter where students learned the fundamentals and built their own working cars, alongside fellow speakers Tanay Patil, Somnath Tyagi, and Satwik Tiwari.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7189708621075648512/",
    tags: ["IoT", "Workshop", "ACM"],
  },
  {
    title: "Organizing the Prayatna Hackathon as AITR ACM Chairperson",
    date: "Apr 2024",
    description:
      "Led the AITR ACM Students Chapter in running Prayatna, a hackathon focused on technology for social challenges. It brought developers, designers, and builders together with more than 20 industry mentors and judges, plus chief guests from DigiSparsh and HotWax Systems.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7187376250242383873/",
    images: ["/media/linkedin/prayatna-1.jpeg", "/media/linkedin/prayatna-2.jpeg", "/media/linkedin/prayatna-3.jpeg"],
    imageAlt: "The Prayatna Hackathon organized by the AITR ACM chapter",
    tags: ["Leadership", "Hackathon", "TechForGood"],
  },
  {
    title: "GDG DevFest 2022, Indore",
    date: "2022",
    description:
      "Where a lot of it began. Attending Google Developer Groups' DevFest in Indore, taking in the talks and meeting the community that later shaped my own work running hackathons and workshops.",
    images: ["/media/linkedin/devfest-1.jpeg"],
    imageAlt: "Vedant at the GDG DevFest 2022 sponsor wall in Indore",
    tags: ["Community", "GDG", "DevFest"],
  },
];

export const education = [
  {
    school: "University of Washington, Seattle",
    degree: "M.S. in Information Management",
    period: "Expected June 2027",
    note: "GPA 4.0",
  },
  {
    school: "Acropolis Institute of Technology and Research, India",
    degree: "B.Tech in Computer Science Engineering",
    period: "June 2025",
    note: "",
  },
];
