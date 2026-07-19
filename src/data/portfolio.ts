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
  role: "Aspiring Software Engineer",
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
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ajitabh-kumar-jha-476546283" },
  { label: "LeetCode", href: "https://leetcode.com/u/ajitabhjha13/" },
  { label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/ajitabhd87y" },
];

export const stats: { value: number; suffix: string; label: string; decimals?: number }[] = [
  { value: 2, suffix: "+", label: "Projects built" },
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
  "MERN Stack",
  "Core Java",
  "DSA",
  "Git",
  "Maven & Gradle",
  "JUnit",
  "JDBC",
  "Servlets & JSP",
  "REST APIs",
  "Hibernate",
  "Spring Framework",
  "Spring Boot",
  "Spring Security",
  "JWT & OAuth2",
  "MongoDB",
  "Docker",
  "Cloud Deployment",
  "Microservices",
  "Kafka",
  "Linux",
  "Jenkins",
  "Terraform",
  "Spring AI",
];

export const currentFocus =
  "Building real-world projects, strengthening my DSA and Java fundamentals, and exploring how AI tools and cloud deployment fit into modern software development.";

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
      "A full-stack online food ordering platform where customers browse a category-filtered menu, manage a real-time cart, and place orders, while restaurant admins manage menu items and update order status (Received → Preparing → Ready → Delivered) through a dedicated dashboard.",
    stack: ["Node.js", "Express.js", "MongoDB / MySQL", "JWT Auth", "Bootstrap 5"],
    highlight: "Solo project · Full-stack",
    // TODO: add github/live once pushed and deployed, and an /images screenshot once ready
  },
  {
    index: "02",
    title: "AR Classroom Seating & Attendance",
    year: "2026",
    description:
      "A web-based classroom seating and attendance system with real-time updates and an AR-style 3D room visualization. Includes an admin dashboard with a live seat map and CSV export, a student check-in portal, and QR-code-based check-in — all synced live via Socket.io.",
    stack: ["Node.js", "Express", "Socket.io", "A-Frame (WebXR)", "JavaScript"],
    github: "https://github.com/Ajitabhjha13/ar-classroom-attendance",
    highlight: "Real-time · AR/WebXR",
    // TODO: add a live link once deployed, and an /images screenshot once ready
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
