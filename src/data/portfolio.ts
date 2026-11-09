/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — SINGLE SOURCE OF TRUTH
 *  Edit everything in this file to make the site yours.
 *  No need to touch any component code.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Ajitabh Kumar Jha",
  firstName: "Ajitabh",
  lastName: "Kumar Jha",
  role: "Full Stack Developer",
  tagline: "Final-year CS student ready to learn fast and build real things.",
  location: "Vadodara, India",
  email: "ajitabhjha13@gmail.com",
  phone: "+91 6201707027",
  availability: "Open to SDE roles · 2026",
  bio: [
    "I build with the MERN stack and Core Java, drawn to the craft of turning logic into interfaces people actually enjoy using.",
    "I'm steadily expanding into the broader Java ecosystem — from Spring Boot, Hibernate, and REST APIs to security, databases, and cloud deployment — while staying curious about how AI fits into modern software.",
  ],
  resumeUrl: "/resume.pdf", // drop your resume in /public
  portrait: "/images/portrait.png",
  // TODO: once your second photo is ready, save it as /public/images/about-portrait.png
  // and change the line below to "/images/about-portrait.png"
  aboutPortrait: "/images/portrait.png",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/Ajitabhjha13" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ajitabhjha13" },
  { label: "LeetCode", href: "https://leetcode.com/u/ajitabhjha13/" },
  { label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/ajitabhd87y" },
];

export const stats: { value: number; suffix: string; label: string; decimals?: number }[] = [
  { value: 5, suffix: "", label: "Projects built" },
  { value: 1, suffix: "", label: "Internship" },
];

export const aboutTags = [
  "Java & DSA",
  "Web Development",
  "AI/ML Curious",
  "Open to Internships",
];

// The full spread of tools/tech you're building familiarity with — shown as compact
// chips in the About section so it stays crisp instead of a long paragraph.
export const techStack = [
  "React + TypeScript",
  "MERN Stack",
  "Core Java",
  "FastAPI",
  "PostgreSQL",
  "DSA",
  "Git",
  "REST APIs",
  "MongoDB",
  "Spring Boot",
];

export const currentFocus =
  "Building real-world projects, strengthening my DSA and Java fundamentals, and exploring how AI tools and cloud deployment fit into modern software development.";

export const certifications = [
  { name: "AWS Academy Graduate — Cloud Foundations", org: "AWS Academy", year: "2025", file: "/certificates/aws-cloud-foundations.pdf" },
  { name: "CCNA: Switching, Routing & Enterprise Security", org: "Cisco Networking Academy", year: "2024", file: "/certificates/cisco-ccna.pdf" },
  { name: "AI Fundamentals with IBM SkillsBuild", org: "IBM / Cisco Networking Academy", year: "2025", file: "/certificates/ibm-ai-fundamentals.pdf" },
  { name: "Data Analytics Job Simulation", org: "Deloitte, via Forage", year: "2026", file: "/certificates/deloitte-data-analytics.pdf" },
];

export const marqueeItems = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Python",
  "Docker",
  "AWS",
  "GraphQL",
  "Tailwind",
];

export type SkillGroup = {
  title: string;
  blurb: string;
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    blurb: "Still sharpening the details, but comfortable building real UI",
    skills: [
      { name: "React.js", level: 62 },
      { name: "JavaScript / TypeScript", level: 58 },
      { name: "Tailwind CSS", level: 65 },
      { name: "HTML / CSS", level: 72 },
    ],
  },
  {
    title: "Backend",
    blurb: "Building APIs and learning how real systems are put together",
    skills: [
      { name: "Node.js / Express", level: 55 },
      { name: "Core Java", level: 58 },
      { name: "Spring Boot", level: 45 },
      { name: "REST APIs", level: 60 },
    ],
  },
  {
    title: "CS Core",
    blurb: "The fundamentals I practice consistently",
    skills: [
      { name: "Data Structures & Algorithms", level: 65 },
      { name: "DBMS", level: 60 },
      { name: "Operating Systems", level: 55 },
      { name: "Computer Networks", level: 50 },
    ],
  },
  {
    title: "Tools & Databases",
    blurb: "Early days, but getting hands-on",
    skills: [
      { name: "Git / GitHub", level: 55 },
      { name: "MongoDB / MySQL", level: 50 },
      { name: "Docker", level: 35 },
      { name: "Linux / Bash", level: 40 },
    ],
  },
];

export type Project = {
  index: string;
  title: string;
  year: string;
  description: string;
  stack: string[];
  image?: string;
  github?: string;
  live?: string;
  highlight: string;
};

export const projects: Project[] = [
  {
    index: "01",
    title: "Bite Rush",
    year: "2026",
    description:
      "A full-stack food ordering and table booking app. Online payments with Razorpay (test mode) where every price and refund is calculated on the server, table booking with a ₹100 deposit, live order-status updates without a refresh, password reset by email, and an admin panel for orders, menu and reservations. Fixed a stored XSS bug found in a security review and covered the app with 199 automated tests.",
    stack: ["Node.js", "Express.js", "MongoDB Atlas", "Razorpay", "JWT + bcrypt", "Bootstrap 5", "Render"],
    image: "/images/project-bite-rush.jpg",
    github: "https://github.com/Ajitabhjha13/bite-rush",
    live: "https://bite-rush-frontend.onrender.com/",
    highlight: "Solo project · Full-stack",
  },
  {
    index: "02",
    title: "AlgoQuest",
    year: "2026",
    description:
      "An offline-first DSA planner I use every day. A greedy scheduler turns 650+ problems and lecture playlists into a day-by-day plan based on my study hours, and reshapes it when I miss a day. GitHub/Google sign-in with JWT, and progress syncs between laptop and phone with optimistic locking and the last 10 versions kept in the cloud.",
    stack: ["Java 21", "Spring Boot", "Spring Security", "JWT", "TiDB (MySQL)", "Docker", "GitHub Actions"],
    image: "/images/project-algoquest.jpg",
    github: "https://github.com/Ajitabhjha13/algoquest",
    live: "https://ajitabhjha13.github.io/algoquest/",
    highlight: "Solo project · Full-stack",
  },
  {
    index: "03",
    title: "StudyMate AI",
    year: "2026",
    description:
      "An AI study assistant for college students. Ask questions subject by subject, chat with your own PDF notes, take AI-generated quizzes and get personalised revision suggestions based on weak topics, powered by Google Gemini.",
    stack: ["Node.js", "Express", "MySQL", "Gemini API", "JavaScript"],
    image: "/images/project-studymate-ai.jpg",
    github: "https://github.com/Ajitabhjha13/studymate-ai",
    highlight: "AI · Full-stack",
  },
  {
    index: "04",
    title: "AR Classroom Seating & Attendance",
    year: "2026",
    description:
      "A WebXR-based attendance system with real-time 3D seat visualization using A-Frame, replacing manual roll calls. Seat claims sync instantly across devices via Socket.io, with QR-code room anchoring for student check-in and role-based auth (Faculty/Student) across a 10+ endpoint REST API.",
    stack: ["Node.js", "Express", "Socket.io", "A-Frame (WebXR)", "bcrypt", "Render"],
    image: "/images/project-ar-classroom.jpg",
    github: "https://github.com/Ajitabhjha13/ar-classroom-attendance",
    live: "https://ar-classroom-attendance.onrender.com/",
    highlight: "Real-time · AR/WebXR",
  },
];

export type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  type: "work" | "education";
  points: string[];
};

// TODO: double-check the years below match your actual admission/graduation years.
export const experience: ExperienceItem[] = [
  {
    period: "Aug 2026 — Present",
    role: "Full Stack Developer Intern",
    org: "AIValytics",
    type: "work",
    points: [
      "Leading frontend development of AIValytics Careers, a student placement platform with job matching across 31 career roles, an application tracker, and AI resume and interview tools, in a two-person engineering team.",
      "Built 86 pages of a mobile-first React + TypeScript app (Vite, Tailwind CSS, shadcn/ui) on Supabase (PostgreSQL), shipping ~114 pull requests through code review.",
      "Developed ~118 FastAPI REST endpoints for job listings and candidate applications; designed the database schema and React frontend for a Courses Dashboard.",
      "Set up the deployment pipeline (FastAPI on Render, frontend on Vercel, CORS config) and caught secret keys exposed in config before release.",
    ],
  },
  {
    period: "2023 — 2027",
    role: "B.Tech, Computer Science Engineering",
    org: "Parul Institute of Technology",
    type: "education",
    points: [
      "Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Object-Oriented Programming.",
      "Actively preparing for placements with a focus on problem-solving and core CS fundamentals.",
    ],
  },
  {
    period: "2020 — 2022",
    role: "Senior Secondary (Class XII), Science (PCM)",
    org: "Mother Teresa Vidyapeeth",
    type: "education",
    points: ["Completed higher secondary education with Physics, Chemistry, and Mathematics."],
  },
  {
    period: "2018 — 2020",
    role: "Secondary Education (Class X)",
    org: "DAV Public School",
    type: "education",
    points: ["Completed secondary education."],
  },
];

export const links = {
  nav: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};
