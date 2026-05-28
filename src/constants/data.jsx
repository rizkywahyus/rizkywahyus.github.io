// ─── Site Configuration ───
export const SITE_CONFIG = {
  name: "rzxyws.dev_v1.0",
  copyright: "©2026 RIZKY WAHYU S",
  tagline: "ENGINEERING_EXCELLENCE",
};

// ─── Navigation Links ───
export const NAV_LINKS = [
  { label: "About", href: "#hero", isActive: true },
  { label: "Projects", href: "#internal-projects", isActive: false },
  { label: "Experience", href: "#experience", isActive: false },
  { label: "Contact", href: "#contact", isActive: false },
];

// ─── Hero Content ───
export const HERO_CONTENT = {
  headlinePre: "Build",
  headlineHighlight: "Innovations",
  headlinePost: "People Love",
  description:
    "👋 Hello! I'm Rizky, an Engineering Leader and Mobile Apps Expert with over 8 years of experience crafting high-performance cross-platform applications and robust enterprise ecosystems. I specialize in orchestrating technical excellence to deliver impactful digital solutions.",
  ctaPrimary: "View Projects",
  ctaSecondary: "Get in Touch",
  sectionNumber: "01",
};

// ─── Tech Stack ───
export const TECH_STACK = [
  { name: "Flutter", icon: "devices", iconFill: true, colorClass: "bg-[#02569B] text-white" },
  { name: "React", icon: "code", iconFill: true, colorClass: "bg-[#61DAFB] text-black" },
  { name: "Node.js", icon: "terminal", iconFill: true, colorClass: "bg-[#339933] text-white" },
  { name: "GCP & Firebase", icon: "cloud", iconFill: true, colorClass: "bg-[#FFCA28] text-black" },
  { name: "IoT & BLE", icon: "bluetooth", iconFill: true, colorClass: "bg-[#0082FC] text-white" },
  { name: "Payment Gateway", icon: "payments", iconFill: true, colorClass: "bg-[#00C853] text-black" },
  { name: "SQL & NoSQL", icon: "database", iconFill: true, colorClass: "bg-[#336791] text-white" },
  { name: "Docker", icon: "directions_boat", iconFill: true, colorClass: "bg-[#2496ED] text-white" },
];

// ─── Featured Projects ───
export const PROJECTS = [
  {
    id: "hyperion-ledger",
    badge: "FINTECH_DASHBOARD",
    badgeClass: "text-primary bg-primary-container",
    title: "Hyperion Ledger",
    description:
      "A high-frequency trading visualization tool built with React and WebAssembly for sub-millisecond data rendering.",
    tags: ["REACT", "RUST", "WEBGL"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaXtYMxb3vu0NIYEjLJoKGppW1LppLfMDDWocCW4R1XVkE0Jwzb1OiiaPgcHpNLQlP8ICYkPswVsZR3JpV4TbQWd9MoTYgDeSY5zXNrWWAY4HWjBzcxxsxq1zE-JDFUWLdbZ626VQTbobNaPg9T08fe3fNXmKHRIVQyYIseD2NKz7pYmPeb4yoIJbE_vqYXDlNiOI0lfgtZXme-R392j4p8-yJvZGHZyTOewngMa6baqnHcaR32iYOp2Ylgbhuw1Yqw0kebaMLHp2I",
    imageAlt: "Code editor interface with syntax highlighting",
    reversed: false,
  },
  {
    id: "nexus-core",
    badge: "SAAS_PLATFORM",
    badgeClass: "text-white bg-secondary",
    title: "Nexus Core",
    description:
      "Unified identity management system for enterprise ecosystems, processing 2M+ daily authentications.",
    tags: ["GOLANG", "REDIS", "DOCKER"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgiyLDYnuV8bV-wYWJQRXy_izKhwj77DJxlMEZeGG1nowNNMONpbx7t2G-dlXTGra0_EbFzWw--AiwAWFYD3_yVSxcaVTiGejf4Yo0DHGmK5g1ftZOVBrmdwdBYW-4ClZxqG2PxElAjzC-GHv33ZOCKRFib07dWI9_fPGHJidqBeESuYuAJGXiKk9ChUb2ToCcmOIf6EjTVYO8P5UtOqPU5SvohctKdFAGo9ot8A4AlZOPu8laRHoViuInlc277iWKeKhm1irBX9IN",
    imageAlt: "Abstract futuristic architectural data structures",
    reversed: true,
  },
];


// ─── Experience Timeline ───
export const EXPERIENCE = [
  {
    period: "2024 — 2026",
    role: "Lead Microenterprise",
    company: "INOVASI360",
    companyUrl: "https://inovasi360.id",
    structure: "RenDanHeYi Structure",
    description: "Spearheading end-to-end product strategy and cross-functional operations within a self-governing business unit to deliver high-impact digital solutions for industrial and enterprise sectors.",
    isFirst: true,
  },
  {
    period: "2023 — 2024",
    role: "Lead Tribe",
    company: "BIGIO ID",
    companyUrl: "https://bejana.id",
    structure: "Spotify Structure",
    description: "Orchestrating multiple squads to align product vision and manage complex system integrations while fostering a culture of high-performance innovation in enterprise applications.",
    isFirst: false,
  },
  {
    period: "2022 — 2023",
    role: "Lead Squad",
    company: "BIGIO ID",
    companyUrl: "https://bejana.id",
    structure: "Spotify Structure",
    description: "Leading a multi-disciplinary squad through rapid iterative development and full product lifecycles to ensure stable and scalable hybrid web and mobile architectures.",
    isFirst: false,
  },
  {
    period: "2021 — 2022",
    role: "Lead Chapter Mobile App Engineer",
    company: "BIGIO ID",
    companyUrl: "https://bejana.id",
    structure: "Spotify Structure",
    description: "Standardizing technical excellence and mentoring engineers to establish best practices in mobile development while balancing architectural health with product feature delivery.",
    isFirst: false,
  },
  {
    period: "2020 — 2021",
    role: "Mobile App Engineer",
    company: "BIGIO ID",
    companyUrl: "https://bejana.id",
    description: "Developing high-performance cross-platform mobile applications for banking and professional organizations with a focus on secure API integration and responsive UI/UX.",
    isFirst: false,
  },
  {
    period: "2018 — 2020",
    role: "Web Fullstack Engineer",
    company: "BIGIO ID",
    companyUrl: "https://bejana.id",
    description: "Building and maintaining large-scale web ecosystems and enterprise database systems for government and healthcare sectors across both frontend and backend environments.",
    isFirst: false,
  },
];


// ─── Social Links ───
export const SOCIAL_LINKS = [
  { label: "GITHUB", href: "https://github.com/rizkywahyus" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/rizky-wahyu-setiawan/" },
  { label: "INSTAGRAM", href: "https://instagram.com/rzxyws" },
];

// ─── Internal Projects ───
export const INTERNAL_PROJECTS = [
  {
    year: "2026",
    client: "PT. Bejana Inovasi Global",
    project: "Stori Studio - Photo studio apps",
    tech: ["Flutter", "Sony PTP", "BLE Connection"],
    role: "Mobile Apps Engineer"
  },
  {
    year: "2025",
    client: "PT. Bejana Inovasi Global",
    project: "Dzikra - Islamic habit building apps",
    tech: ["Flutter", "Firebase", "Java"],
    role: "Project Manager"
  },
  {
    year: "2024",
    client: "PT. Gapura Angkasa",
    project: "JOUMPA - Airport assistance service system",
    tech: ["Docker", "Nginx"],
    role: "DevOps Engineer"
  },
  {
    year: "2023",
    client: "PT. Adaro Mining Technologies",
    project: "AWS - Adaro Water Solutions System",
    tech: ["Java", "Spring Boot"],
    role: "Software Engineer"
  },
  {
    year: "2023",
    client: "PT. Bejana Inovasi Global",
    project: "Hifz - Qur'an memorizing apps",
    tech: ["Flutter", "Firebase", "Java"],
    role: "Tech Lead"
  },
  {
    year: "2022",
    client: "PT. Bio Farma",
    project: "CTMS - Clinical Trial Monitoring System for Vaccines",
    tech: ["Docker", "Nginx"],
    role: "DevOps Engineer"
  },
  {
    year: "2021",
    client: "PT. Bio Farma",
    project: "TJSL - Corporate Social Responsibility (CSR) System",
    tech: ["ASP.NET"],
    role: "Software Engineer"
  },
  {
    year: "2021",
    client: "PT. Bejana Inovasi Global",
    project: "Dzikra - Islamic habit building apps",
    tech: ["Flutter", "Firebase", "Java"],
    role: "Mobile Apps Engineer"
  },
  {
    year: "2021",
    client: "Trans Media Group",
    project: "Trans FnB - F&B Retail System",
    tech: ["Flutter"],
    role: "Mobile Apps Engineer"
  },
  {
    year: "2020",
    client: "PT. Bio Farma",
    project: "Production Enterprise - Vaccine Production Support System",
    tech: ["ASP.NET"],
    role: "Software Engineer"
  },
  {
    year: "2020",
    client: "CV. Satria Pangan Prima",
    project: "Point Of Sales (POS) - Restaurant Cashier System",
    tech: ["CodeIgniter"],
    role: "Software Engineer"
  },
  {
    year: "2020",
    client: "CV. Satria Pangan Prima",
    project: "HR Payroll - Employee Payroll System",
    tech: ["Laravel"],
    role: "Software Engineer"
  },
  {
    year: "2020",
    client: "PT. Charoen Pokphand Indonesia Tbk.",
    project: "MOCA - Mobile Customer Acquisition",
    tech: ["Java"],
    role: "Software Engineer"
  },
  {
    year: "2019",
    client: "PT. Bio farma",
    project: "eCRF - Web-based Online Clinical Trial System",
    tech: ["ASP.NET"],
    role: "Software Engineer"
  },
  {
    year: "2019",
    client: "Bank BTN",
    project: "BTN Property - Property Trading Mobile App",
    tech: ["React Native"],
    role: "Mobile Apps Engineer"
  },
  {
    year: "2018",
    client: "Badan Pengawasan Keuangan Republik Indonesia",
    project: "MELATI - IT Facility Complaint System for BPK RI",
    tech: ["ASP.NET"],
    role: "Software Engineer"
  }
];
