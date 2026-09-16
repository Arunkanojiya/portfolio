/**
 * portfolioData.ts - Single configuration file for your portfolio.
 * Edit this file to easily update your name, bio, social links, skills,
 * projects, and image paths.
 */

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  highlights: string[];
  demoUrl?: string;
  githubUrl?: string;
  image: string;
  category: "Full Stack" | "MERN" | "Web App";
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    iconName?: string;
    level?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details: string;
}

export const portfolioData = {
  // ─── PROFILE DETAILS ────────────────────────────────────────────────────────
  personal: {
    // ✏️ Your real name:
    name: "Arun Kanojiya",
    role: "MERN Stack Developer",
    tagline:
      "Building scalable, high-performance web applications with modern architecture.",
    location: "Surat, Gujarat, India",
    email: "arun18.dev@gmail.com",
    phone: "9737206729",
    availableForHire: true,
    statusText: "Available for full-time & high-impact projects",
    // 🖼️ PROFILE PHOTO: Put your image in public/images/avatar.jpg or replace this path
    avatarImage: "/images/avatar.jpg",
    resumeUrl: "/resume.pdf", // Link to your resume PDF (e.g., "/resume.pdf")
  },

  // ─── EMAILJS / CONTACT FORM CONFIG ──────────────────────────────────────────
  contactConfig: {
    emailjs: {
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "XrmZAtlfSdppsfPTM",
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_dywi9et",
      templateId:
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_vwsvv5s",
    },
  },

  socials: {
    github: "https://github.com/Arunkanojiya",
    linkedin: "https://www.linkedin.com/in/arun-kanojiya-898346369",
    email: "mailto:arun18.dev@gmail.com",
    x: "https://x.com",
    instagram: "https://instagram.com",
  },

  // ─── ABOUT ME ───────────────────────────────────────────────────────────────
  about: {
    heading: "Building practical web applications with clean code & modern UI.",

    paragraphs: [
      "I am a MERN Stack Developer focused on building responsive and user-friendly web applications using React, Tailwind CSS, Node.js, Express, and MongoDB.",
      "I enjoy turning ideas into functional applications with clean and maintainable code. My work includes building RESTful APIs, JWT-based authentication, database-driven features, and integrating third-party services when needed.",
      "From task management systems and e-commerce platforms to applications with real-time features, I focus on creating reliable functionality, intuitive user experiences, and continuously improving my development skills through hands-on projects.",
    ],
    highlights: [
      {
        label: "MERN Stack Specialist",
        desc: "Expert in MongoDB, Express, React, and Node.js ecosystems",
      },
      {
        label: "API & JWT Security",
        desc: "Strong security practices with token auth & role-based access",
      },
      {
        label: "Modern Responsive UI",
        desc: "Pixel-perfect mobile-first designs with Tailwind CSS & Motion",
      },
      {
        label: "DevOps & Tooling",
        desc: "Experience with Docker, GitHub Actions, and Postman API testing",
      },
    ],
    stats: [
      { number: "3+", label: "Production Projects" },
      { number: "17+", label: "Modern Tech Skills" },
      { number: "100%", label: "Responsive & Accessible" },
      { number: "Fast", label: "Optimized Performance" },
    ],
  },

  // ─── SKILLS ────────────────────────────────────────────────────────────────
  skillCategories: [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "TypeScript", level: "Proficient" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
      ],
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "REST APIs", level: "Advanced" },
        { name: "JWT Authentication", level: "Advanced" },
      ],
    },
    {
      title: "Database & Modeling",
      skills: [
        { name: "MongoDB", level: "Advanced" },
        { name: "Mongoose ODM", level: "Advanced" },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "Docker", level: "Familiar" },
        { name: "GitHub Actions", level: "Familiar" },
        { name: "Postman", level: "Advanced" },
      ],
    },
  ] as SkillCategory[],

  // ─── PROJECTS ──────────────────────────────────────────────────────────────
  projects: [
    {
      id: "taskly",
      title: "Taskly",
      subtitle: "Full-Stack Task Management Platform",
      category: "MERN",
      description:
        "A comprehensive MERN stack task management application built with secure authentication, full task CRUD lifecycle, admin controls, role-protected routes, and intuitive workspace management.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
      ],
      highlights: [
        "JWT-based role authentication with secure HTTP-only cookies and protected routes",
        "Complete CRUD lifecycle with real-time status updates and priority categorization",
        "Dedicated administrator dashboard with user management and activity logs",
        "Responsive, high-contrast dashboard with clean sorting and search filtering",
      ],
      demoUrl: "https://example.com/taskly-demo",
      githubUrl: "https://github.com/Arunkanojiya/TASKLY",
      // 🖼️ PROJECT IMAGE PLACEHOLDER: Replace with your screenshot in public/images/projects/
      image: "/images/projects/taskly.svg",
    },
    {
      id: "ssphere",
      title: "Ssphere – Sphere of Styles",
      subtitle: "Fashion E-Commerce Application",
      category: "MERN",
      description:
        "A modern MERN stack fashion e-commerce application featuring seamless authentication, comprehensive product catalog management, persistent cart functionality, order tracking, PayPal payment gateway integration, and administrator portal.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "PayPal",
      ],
      highlights: [
        "Secure PayPal payment gateway checkout flow with automated payment capture",
        "Real-time shopping cart calculation, coupon discounts, and persistent state",
        "Dynamic product catalog with category, price, and size filtering",
        "Admin control suite for inventory tracking, order dispatch, and product editing",
      ],
      demoUrl: "https://example.com/ssphere-demo",
      githubUrl: "https://github.com/Arunkanojiya/Ssphere",
      // 🖼️ PROJECT IMAGE PLACEHOLDER: Replace with your screenshot in public/images/projects/
      image: "/images/projects/ssphere.svg",
    },
    {
      id: "travel-diary",
      title: "Travel Diary",
      subtitle: "Interactive Travel Journal & Memory Board",
      category: "MERN",
      description:
        "A feature-rich MERN stack travel diary application enabling travelers to capture memories with JWT authentication, full CRUD operations, image uploads, favorite story pinning, keyword search, and interactive date-range filtering.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Tailwind CSS",
      ],
      highlights: [
        "Multi-image upload pipeline with preview and responsive gallery presentation",
        "Story pinning feature to keep memorable voyages anchored at top of feed",
        "Instant client-side and server-side search by destination, tag, or title",
        "Date-based timeline filtering to easily revisit travels chronologically",
      ],
      demoUrl: "https://example.com/travel-diary-demo",
      githubUrl: "https://github.com/Arunkanojiya/TravelDiary",
      // 🖼️ PROJECT IMAGE PLACEHOLDER: Replace with your screenshot in public/images/projects/
      image: "/images/projects/travel-diary.svg",
    },
  ] as ProjectItem[],

  // ─── EXPERIENCE & EDUCATION ─────────────────────────────────────────────────
  experience: [
    {
      role: "MERN Stack Developer",
      organization: "Personal & Academic Projects",
      location: "Surat, Gujarat, India",
      period: "2024 - Present",
      description:
        "Building full-stack web applications with MERN stack technologies, REST APIs, and modern responsive frontends.",
      bullets: [
        "Developed end-to-end full-stack web applications using React, Node.js, Express, and MongoDB.",
        "Implemented JWT-based authentication flows with role-based authorization and protected routes.",
        "Built RESTful APIs and structured database schemas using Mongoose.",
        "Created dynamic and responsive UI components with Tailwind CSS.",
      ],
    },
    {
      role: "MERN Stack Developer",
      organization: "Personal & Academic Projects",
      location: "Surat, Gujarat, India",
      period: "2023 - 2024",
      description:
        "Focused on strengthening JavaScript/TypeScript development, asynchronous API handling, database modeling, and state management through hands-on projects.",
      bullets: [
        "Designed MongoDB schemas and worked with database operations using Mongoose.",
        "Conducted API testing and documentation using Postman.",
        "Used Git & GitHub for version control, branching, and project management.",
      ],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "Master of Science in Information Technology (M.Sc. IT)",
      institution: "Dr. Babasaheb Ambedkar Open University",
      location: "Gujarat, India",
      period: "2025 – Present",
      details:
        "Expected Graduation: 2027. Continuing studies in information technology, software development, and computer science.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "C. B. Patel Computer College",
      location: "Surat, Gujarat, India",
      period: "July 2022 – April 2025",
      details:
        "Graduated with CGPA: 7.84 | SGPA: 8.74. Core studies in Data Structures, Database Management Systems, Web Development, and Object-Oriented Programming.",
    },
  ] as EducationItem[],

  // ─── PHOTO SHOWCASE SLIDER ──────────────────────────────────────────────────
  // 🖼️ These 9 images power the infinite auto-sliding strip.
  // You can replace these images in public/images/photos/ or change these paths!
  photoShowcase: [
    { src: "/images/photos/photo-1.jpg", alt: "Developer workspace setup" },
    { src: "/images/photos/photo-2.jpg", alt: "Coding on multi-monitor setup" },
    { src: "/images/photos/photo-3.jpg", alt: "Modern tech setup" },
    { src: "/images/photos/photo-4.jpg", alt: "Keyboard and clean desk" },
    { src: "/images/photos/photo-5.jpg", alt: "Code review & planning" },
    {
      src: "/images/photos/photo-6.jpg",
      alt: "Hardware and development tools",
    },
    {
      src: "/images/photos/photo-7.jpg",
      alt: "Tech conference & collaboration",
    },
    { src: "/images/photos/photo-8.jpg", alt: "Software architecture session" },
    {
      src: "/images/photos/photo-9.jpg",
      alt: "Developer thinking & designing",
    },
  ],
};
