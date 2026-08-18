export const profile = {
  name: "Vedant Somani",
  first: "Vedant",
  initials: "VS",
  role: "Text Mining Specialist",
  roleShort: "AI & software engineer",
  org: "UW Libraries & eScience Institute",
  location: "Seattle, WA",
  email: "vedants0@uw.edu",
  status: "Open to 2027 new-grad and internship roles",
  available: true,
  tagline:
    "I build AI systems, data pipelines, and the production software around them — then measure whether they actually work.",
  intro:
    "I am a software and AI engineer at the University of Washington. I build agents, retrieval systems, and data pipelines, ship the full-stack products around them, and hold the results to numbers that survive scrutiny.",
  links: {
    github: "https://github.com/vedant1711",
    linkedin: "https://www.linkedin.com/in/vedant-somani17/",
    escience: "https://escience.washington.edu/member/vedant-somani/",
    researchgate: "https://www.researchgate.net/profile/Vedant-Somani-4",
  },
  facts: [
    { k: "Role", v: "AI & Software Engineer" },
    { k: "Focus", v: "Agents · Data · Backend" },
    { k: "Based in", v: "Seattle, WA" },
    { k: "Status", v: "Open to 2027 roles" },
  ],
  stats: [
    { value: "4+", label: "Years building" },
    { value: "15+", label: "Projects shipped" },
    { value: "2", label: "Publications" },
    { value: "4.0", label: "GPA at UW" },
  ],
  resumes: [
    {
      label: "Software Engineering",
      short: "SWE",
      file: "/resume/Vedant_Somani_Resume_SWE.pdf",
      preview: "/resume/Vedant_Somani_Resume_SWE.png",
    },
    {
      label: "Data Science",
      short: "DS",
      file: "/resume/Vedant_Somani_Resume_DS.pdf",
      preview: "/resume/Vedant_Somani_Resume_DS.png",
    },
  ],
  about: [
    "I am a Master's student in Information Management at the University of Washington, where I hold a 4.0 GPA, and a text mining specialist at UW Libraries and the eScience Institute. My work sits across three things that are really one thing: the AI system, the data underneath it, and the software that has to keep both running.",
    "Before Seattle I spent a few years across machine learning and full-stack engineering, building systems end to end — collecting data, processing it, training models, and putting them into production with the APIs, infrastructure, and CI around them. These days I am most drawn to agentic AI, and to the harder half of it: proving a system got better rather than asserting it did.",
  ],
};

export type Experience = {
  role: string;
  company: string;
  from: string;
  to: string;
  year: string;
  current?: boolean;
  logo?: string;
  logoAlt?: string;
  stack: string[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Text Mining Specialist",
    company: "UW Libraries & eScience Institute",
    from: "Mar 2026",
    to: "Present",
    year: "2026",
    current: true,
    logo: "/logos/experience_logos/uw-escience.jpeg",
    logoAlt: "University of Washington eScience Institute logo",
    stack: ["Python", "RAG", "Haystack", "NLP", "PostgreSQL", "Pytest"],
    bullets: [
      "Ingested 50,000+ of a 400,000-article target into Open IRE, an automated pipeline I built to collect, rights-classify, and preserve UW-authored articles, owning the database schema and system architecture.",
      "Recovered 6,800+ missing documents by building a custom exponential-backoff retry middleware and fixing a self-duplicate dedup bug behind a scraping pipeline failure, validated with a 295-test end-to-end suite.",
      "Improved recall@5 by 14pp on a 500-query eval set by redesigning RAG chunking from fixed 512-token windows to a sentence-anchored sliding window at 20% overlap, then shipped it as a Haystack service that cut manual research query time roughly 30%.",
      "Instructed at the AI in Practice Summer Institute, teaching applied AI workflows to researchers and library staff.",
    ],
  },
  {
    role: "Fullstack Developer Intern",
    company: "OS Technology Service",
    from: "Jan 2025",
    to: "Jul 2025",
    year: "2025",
    logo: "/logos/experience_logos/os-technology.png",
    logoAlt: "OS Technology Services logo",
    stack: ["React Native", "Django", "PostgreSQL", "WebSocket", "AWS"],
    bullets: [
      "Supported 500+ concurrent users per event over WebSocket at ~200 ms latency and lifted session length 25%, engineering My Dj Live, a cross-platform app with real-time engagement in React Native against a Django REST API.",
      "Held 99.9% uptime and 99.5% crash-free sessions while cutting deploy time 40%, deploying the AWS infrastructure (EC2, Fargate, CloudWatch) with CI/CD automation, over-the-air updates, and Crashlytics and DataDog analytics.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Xenon Nation",
    from: "Mar 2024",
    to: "Sep 2024",
    year: "2024",
    logo: "/logos/experience_logos/xenon-nation.jpeg",
    logoAlt: "Xenon Nation logo",
    stack: ["PyTorch", "ONNX", "FastAPI", "Docker", "AWS ECS"],
    bullets: [
      "Cut inference latency 35%, about 250 ms, by exporting models to ONNX and adding response caching in FastAPI microservices deployed via Docker on AWS ECS.",
      "Boosted sentiment F1 by 18 points, 74% to 87%, fine-tuning cardiffnlp/twitter-roberta-base-sentiment through a custom PyTorch training loop, reaching 89% precision and 85% recall on review data.",
    ],
  },
  {
    role: "Machine Learning Engineer Intern",
    company: "HemansAI",
    from: "Sep 2023",
    to: "Feb 2024",
    year: "2023",
    logo: "/logos/experience_logos/hemansai.svg",
    logoAlt: "HemansAI logo",
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
    logo: "/logos/experience_logos/acm.svg",
    logoAlt: "ACM logo",
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
  liveLabel?: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    name: "Vegapunk",
    image: "/media/projects/vegapunk.png",
    imageAlt:
      "Vegapunk live trace UI streaming a seven-step agent run, with the Best-of-N coder generating three candidate patches",
    subtitle: "Autonomous AI code agent",
    featured: true,
    description: [
      "Give it a GitHub issue URL and it gives you back a pull request. A seven-node LangGraph pipeline clones the repo, classifies the issue, plans the fix, writes the code, runs the tests, self-reviews its own diff, and opens the PR — streaming every step to a live trace UI over Server-Sent Events.",
      "Two mechanics carry it. A tree-sitter code graph ranked by keyword overlap blended with PageRank lifted bug-file localization to 83%, and a Best-of-N coder generates K candidate diffs in parallel, tests each in its own isolated git worktree, and keeps the one that passes. It also ships an MCP server, so Claude Code, Cursor, and Cline can query the repo graph directly.",
    ],
    stack: ["LangGraph", "FastAPI", "Next.js", "tree-sitter", "MCP", "Docker"],
    github: "https://github.com/vedant1711/Vegapunk-Agentic-AI-Code-Agent",
    live: "https://vegapunk-agentic-ai-code-agent.vercel.app",
  },
  {
    name: "AgentGate",
    image: "/media/projects/agentgate.png",
    imageAlt: "AgentGate landing page, a statistical CI gate for LLM agents",
    subtitle: "Statistical CI gate for LLM agents · Open source",
    featured: true,
    description: [
      "Your agent scored 79% this week and 100% last week. Did you break it, or did it have a bad day? AgentGate answers with statistics instead of a guess: paired non-inferiority tests, cluster-robust standard errors, and Benjamini–Hochberg correction across 42 metrics, which cut false regression alarms from about 87% to 5%.",
      "The verdict no threshold rule can give is UNDERPOWERED — reported with the minimum effect the suite could actually have detected, so a small test set gets an honest answer instead of a fake green tick. Benchmarking two open models across 666 runs and 4.5M tokens on τ²-bench exposed a 9× gap between how coherent a model sounds (0.99) and how often it finishes the job (0.11).",
    ],
    stack: ["Python", "SciPy", "LiteLLM", "DuckDB", "OpenTelemetry", "LLM Evals"],
    github: "https://github.com/vedant1711/agentgate",
    live: "https://vedant1711.github.io/agentgate/",
    liveLabel: "Demo",
  },
  {
    name: "NanoScale-LM",
    image: "/media/projects/nanoscale.png",
    imageAlt:
      "NanoScale-LM browser demo generating text and explaining the model's next-token distribution",
    subtitle: "A language model built from scratch, then compressed",
    featured: true,
    description: [
      "A decoder-only language model written from first principles in PyTorch — byte-level BPE, GQA, RoPE, QK-norm, SwiGLU, and Muon's Newton–Schulz orthogonalization — plus the full efficiency stack needed to actually serve it: distillation, GPTQ quantization, and speculative decoding. No high-level trainer library appears anywhere in the source.",
      "Every claim is a measurement from a committed script, stamped with the git SHA and hardware behind it: Muon reaching the target in 53 steps against AdamW's 106 across five seeds, distillation shrinking the model 17.7×, and speculative decoding cutting target forward passes 3× with the output distribution provably unchanged. The results that went the wrong way are written up too.",
    ],
    stack: ["PyTorch", "Transformers", "Quantization", "Distillation", "mypy --strict"],
    github: "https://github.com/vedant1711/nanoscale-lm",
    live: "https://vedant1711.github.io/nanoscale-lm/demo.html",
    liveLabel: "Demo",
  },
  {
    name: "Uplift Retention",
    image: "/media/projects/uplift.png",
    imageAlt:
      "The uplift targeting Streamlit app explaining which customers are worth contacting",
    subtitle: "Causal uplift modeling for retention targeting",
    featured: true,
    description: [
      "Ranking customers by who is likely to buy puts the people you cannot influence at the top. This pipeline estimates the effect of contacting each person instead — five CATE estimators (S, T, X, and DR learners against a response-model baseline) scored by Qini and validated against synthetic data where every customer's true effect is known.",
      "The finding that reframes it: on a real 64,000-customer randomized email campaign the right answer is to contact almost everyone, because an email is nearly free. So the pipeline computes the number that does matter — how expensive an intervention has to get before targeting changes the decision — and an eight-page Streamlit app puts the two assumptions behind sliders.",
    ],
    stack: ["Python", "Causal Inference", "scikit-learn", "MLflow", "Streamlit", "Docker"],
    github: "https://github.com/vedant1711/uplift-retention-project",
    live: "https://uplift-retention-project.streamlit.app",
    liveLabel: "App",
  },
  {
    name: "Open IRE",
    image: "/media/projects/openire.jpg",
    imageAlt: "Suzzallo Library reading room at the University of Washington",
    subtitle: "Open-access research pipeline · UW Libraries × SSEC",
    status: "In progress",
    featured: true,
    description: [
      "An initiative I am building with UW Libraries and the Scientific Software Engineering Center. It automatically collects, rights-classifies, and preserves close to 400,000 scholarly articles written by UW researchers in the ResearchWorks repository, designed as a model other universities can adopt. I own the database schema and system architecture.",
      "The pipeline pulls publications scattered across federal repositories like PubMed Central and ERIC, sorts each one by rights status (covered by UW's open-access policy, Creative Commons, or needs review), and has ingested more than 50,000 articles so far — including 6,800 recovered by custom retry middleware after a scraping failure, all guarded by a 295-test end-to-end suite.",
    ],
    stack: ["Python", "PostgreSQL", "Pixi", "Data Pipelines", "Pytest"],
    live: "https://escience.washington.edu/open-ire-increasing-access-to-published-research/",
    liveLabel: "Read more",
  },
  {
    name: "ResolveIQ",
    image: "/media/projects/resolveiq.png",
    imageAlt: "ResolveIQ developer dashboard with ticket analytics and knowledge-base drafts",
    subtitle: "AI incident knowledge management · Dempsey finalist",
    featured: true,
    description: [
      "An event-driven microservices platform so engineering teams never solve the same incident twice. It turns resolved Jira tickets into clean Confluence knowledge-base articles by pulling in the surrounding Slack and Zoom context, removing about 90% of the manual write-up work.",
      "A semantic retrieval engine built on Voyage AI embeddings, Pinecone vector search, and GPT-4o surfaces the right article inline in Jira, cutting mean time to resolution for recurring issues by an estimated 30%.",
    ],
    stack: ["LangChain", "FastAPI", "Pinecone", "GPT-4o", "Next.js", "Django"],
    github: "https://github.com/vedant1711/ResolveIQ_Project",
    live: "https://resolve-iq-project.vercel.app",
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
    subtitle: "Smart precision farming platform · IEEE ACROSET 2025",
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
      { name: "C#", icon: "csharp" },
      { name: "Java", icon: "java" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "DuckDB", icon: "duckdb", invert: true },
      { name: "Pinecone" },
    ],
  },
  {
    label: "AI & Agents",
    skills: [
      { name: "Claude Code", icon: "anthropic", invert: true },
      { name: "Cursor", icon: "cursor", invert: true },
      { name: "GitHub Copilot", icon: "githubcopilot", invert: true },
      { name: "OpenAI GPT-4o", icon: "openai", invert: true },
      { name: "Gemini", icon: "googlegemini" },
      { name: "NVIDIA NIM", icon: "nvidia" },
      { name: "Ollama", icon: "ollama", invert: true },
      { name: "LangChain", icon: "langchain" },
      { name: "LangGraph", icon: "langgraph" },
      { name: "LangSmith" },
      { name: "LlamaIndex" },
      { name: "CrewAI", icon: "crewai" },
      { name: "AutoGen" },
      { name: "Haystack", icon: "haystack" },
      { name: "MCP", icon: "mcp", invert: true },
      { name: "Hugging Face", icon: "huggingface" },
      { name: "RAG Pipelines" },
      { name: "Multi-Agent Systems" },
      { name: "Tool Calling" },
      { name: "BERT" },
    ],
  },
  {
    label: "Evaluation & Observability",
    skills: [
      { name: "LLM Evals" },
      { name: "RAGAS" },
      { name: "DeepEval" },
      { name: "Phoenix" },
      { name: "OpenTelemetry", icon: "opentelemetry", invert: true },
      { name: "MLflow", icon: "mlflow" },
    ],
  },
  {
    label: "Machine Learning & Data Science",
    skills: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Scikit-learn", icon: "scikitlearn" },
      { name: "XGBoost" },
      { name: "NumPy", icon: "numpy" },
      { name: "Pandas", icon: "pandas" },
      { name: "SciPy", icon: "scipy" },
      { name: "Matplotlib", icon: "matplotlib" },
      { name: "ONNX", icon: "onnx" },
      { name: "OpenCV", icon: "opencv" },
      { name: "Causal Inference" },
      { name: "Apache Spark", icon: "spark" },
      { name: "PySpark", icon: "spark" },
      { name: "Apache Kafka", icon: "kafka", invert: true },
      { name: "Hadoop", icon: "hadoop" },
      { name: "Snowflake", icon: "snowflake" },
      { name: "Scala", icon: "scala" },
      { name: "MATLAB", icon: "matlab" },
      { name: "Streamlit", icon: "streamlit" },
      { name: "Tableau", icon: "tableau", invert: true },
    ],
  },
  {
    label: "Software & Web",
    skills: [
      { name: "FastAPI", icon: "fastapi" },
      { name: "Django", icon: "django", darkIcon: "django-dark" },
      { name: "React", icon: "react" },
      { name: "React Native", icon: "react" },
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
      { name: "Kubernetes", icon: "kubernetes" },
      { name: "Linux", icon: "linux", invert: true },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github", invert: true },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Postman", icon: "postman" },
      { name: "Jira", icon: "jira" },
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
    title: "Instructor, AI in Practice Summer Institute",
    detail:
      "Taught applied AI workflows to researchers and library staff at the University of Washington.",
    kind: "award",
  },
  {
    title: "iEngage Hackathon",
    detail:
      "Runner-up at the Salesforce and Lovable hackathon. Built Atlas, an agentic student success portal.",
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
