// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Blog", href: "/blog", hasDropdown: true },
  { label: "Project", href: "/projects", hasDropdown: true },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
] as const;

// Tech Stack
export interface TechItem {
  name: string;
  level: "Advanced" | "Intermediate" | "Beginner";
  color: string;
  icon: string; // SVG path data
}

export const TECH_STACK: TechItem[] = [
  // Languages
  {
    name: "C",
    level: "Intermediate",
    color: "#A8B9CC",
    icon: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 2.25c5.385 0 9.75 4.365 9.75 9.75S17.385 21.75 12 21.75 2.25 17.385 2.25 12 6.615 2.25 12 2.25m-.75 5.25h1.5v4.5h3v1.5h-3v3h-1.5v-3h-3v-1.5h3z",
  },
  {
    name: "HTML5",
    level: "Intermediate",
    color: "#E34C26",
    icon: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75h5.938V9.467H8.979V6.997h7.064v5.528h-5.939v5.733H8.531V9.75zm6.601 0V6.997h5.938v8.868H18.4v4.062h-7.064V9.75h5.936z",
  },
  {
    name: "Java",
    level: "Advanced",
    color: "#f89820",
    icon: "M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149m-.575-2.627s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218m4.84-4.458c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573",
  },
  // Frameworks & Libraries
  {
    name: ".NET",
    level: "Advanced",
    color: "#512BD4",
    icon: "M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z",
  },
  {
    name: "Next.js",
    level: "Advanced",
    color: "#ffffff",
    icon: "M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z",
  },
  {
    name: "Node.js",
    level: "Advanced",
    color: "#339933",
    icon: "M12 0C5.383 0 0 5.383 0 12c0 6.617 5.383 12 12 12s12-5.383 12-12c0-6.617-5.383-12-12-12m0 21.5c-5.238 0-9.5-4.262-9.5-9.5S6.762 2.5 12 2.5s9.5 4.262 9.5 9.5-4.262 9.5-9.5 9.5m3.5-10c0-.828.672-1.5-1.5-1.5h-4v6h4c2.172 0 1.5-.672 1.5-1.5V11.5zm-2 2h-2v-3h2v3z",
  },
  {
    name: "NestJS",
    level: "Intermediate",
    color: "#E0234E",
    icon: "M14.131.047c-.173 0-.334.037-.483.087.316.21.49.49.576.806.007.043.019.074.025.117a.681.681 0 0 1 .013.112c.024.545-.143.614-.26.936-.18.415-.13.861.086 1.22a.74.74 0 0 0 .074.137c-.235-1.568 1.073-1.803 1.314-2.293.019-.428-.334-.713-.613-.911a1.37 1.37 0 0 0-.732-.21z",
  },
  {
    name: "Spring",
    level: "Advanced",
    color: "#6DB33F",
    icon: "M11.426 4.037c-4.157 0-7.537 3.38-7.537 7.537S7.269 18.611 11.426 18.611s7.537-3.38 7.537-7.537-3.38-7.537-7.537-7.537zm1.404 11.36a1.404 1.404 0 1 1 0-2.808 1.404 1.404 0 0 1 0 2.808zm0-3.51a2.106 2.106 0 1 0 0-4.212 2.106 2.106 0 0 0 0 4.212zm-2.809-5.616c.703-.703 1.404-1.406 2.107-2.107.703.701 1.404 1.404 2.107 2.107-.703.703-1.404 1.406-2.107 2.107-.703-.701-1.404-1.404-2.107-2.107zm0 10.933c.703.703 1.404 1.404 2.107 2.107.703-.703 1.404-1.404 2.107-2.107.703.703 1.404 1.406 2.107 2.107-1.406 1.405-2.808 2.81-4.214 4.214-1.406-1.404-2.808-2.809-4.214-4.214.703-.703 1.404-1.404 2.107-2.107z",
  },
  {
    name: "JWT",
    level: "Intermediate",
    color: "#000000",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z",
  },
  {
    name: "NPM",
    level: "Intermediate",
    color: "#CB3837",
    icon: "M1 8h6v6H1V8zm8 0h6v6H9V8zm8 0h2v6h-2V8zM1 1h18v2H1V1zm0 20h18v2H1v-2zm0-5h18v2H1v-2z",
  },
  // Database & Cloud
  {
    name: "MySQL",
    level: "Advanced",
    color: "#4479A1",
    icon: "M16.405 5.501c-.115 0-.193.016-.301.016h-.098c-.195 0-.608-.098-.902-.098-1.206 0-2.428.596-3.223 1.621-.293.396-.553.885-.689 1.472-.097.419-.119 1.395-.119 2.459v2.189h2.347v.936H10.973v8.267h-2.349v-8.267H6.559v-.936h2.065v-2.165c0-1.309.023-2.337.165-2.99.219-.953.687-1.723 1.38-2.189.596-.419 1.289-.596 2.261-.596.419 0 .816.041 1.164.098.205.033.687.098 1.041.132z",
  },
  {
    name: "Prisma",
    level: "Intermediate",
    color: "#0C344B",
    icon: "M2 8l14 14h8V8h-8L2 8zm8 0h8v14l-8 0V8z",
  },
  {
    name: "AWS",
    level: "Advanced",
    color: "#FF9900",
    icon: "M10.608 2.546c0-.28-.231-.512-.513-.512h-5.86c-.282 0-.513.232-.513.512v15.872c0 .28.231.512.513.512h5.86c.282 0 .513-.232.513-.512V2.546zm8.602.512v13.32c0 .28-.231.512-.512.512h-5.86c-.282 0-.513-.232-.513-.512V3.058c0-.28.231-.512.513-.512h5.86c.28 0 .512.232.512.512zm4.307 1.536c-.282 0-.513.232-.513.512v7.296c0 .28.231.512.513.512h.512c.28 0 .512-.232.512-.512V4.606c0-.28-.232-.512-.512-.512h-.512z",
  },
  // Tools & DevOps
  {
    name: "Git",
    level: "Advanced",
    color: "#F1502F",
    icon: "M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.186 0L8.708 2.627l2.76 2.76c.645-.21 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.684.684.684 1.794 0 2.479-.684.684-1.794.684-2.479 0-.512-.512-.675-1.235-.472-1.86l-2.48-2.48v6.52c.167.086.342.161.512.196.684.122 1.386-.122 1.896-.632.684-.684.684-1.794 0-2.479-.684-.684-1.794-.684-2.479 0-.512.512-.675 1.234-.472 1.86l-2.66 2.66c.223.645.078 1.387-.435 1.9-.684.684-1.794.684-2.479 0-.684-.684-.684-1.794 0-2.479.512-.512 1.235-.675 1.86-.472l2.76-2.76-2.627-2.627V5.956c-.167-.086-.342-.161-.512-.196-.684-.122-1.386.122-1.896.632-.684.684-.684 1.794 0 2.479.684.684 1.794.684 2.479 0 .512-.512.675-1.234.472-1.86l2.627-2.627-2.76-2.76L2.45 10.93c-.603.604-.603 1.582 0 2.186l10.479 10.479c.604.603 1.582.603 2.186 0l10.479-10.479c.603-.604.603-1.582 0-2.186z",
  },
  {
    name: "GitHub",
    level: "Advanced",
    color: "#181717",
    icon: "M12 .5C5.73.5 0.5 5.73 0.5 12c0 5.073 3.292 9.374 7.855 10.9.574.106.784-.249.784-.554 0-.273-.01-.998-.015-1.96-3.198.694-3.874-1.54-3.874-1.54-.523-1.329-1.276-1.684-1.276-1.684-1.043-.713.078-.698.078-.698 1.155.082 1.763 1.187 1.763 1.187 1.027 1.759 2.694 1.251 3.354.957.105-.745.402-1.252.731-1.538-2.556-.29-5.24-1.278-5.24-5.685 0-1.256.447-2.283 1.186-3.087-.119-.29-.514-1.456.112-3.035 0 0 .967-.31 3.168 1.18.919-.256 1.903-.384 2.88-.388.977.004 1.961.132 2.88.388 2.2-1.49 3.168-1.18 3.168-1.18.627 1.579.231 2.746.112 3.035.74.804 1.185 1.831 1.185 3.087 0 4.414-2.686 5.393-5.25 5.678.413.355.78 1.055.78 2.128 0 1.537-.014 2.776-.014 3.156 0 .308.207.666.79.554C16.709 21.37 19.5 17.073 19.5 12c0-6.27-5.23-11.5-11.5-11.5z",
  },
  {
    name: "Docker",
    level: "Advanced",
    color: "#2496ED",
    icon: "M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.186.186 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.186.186 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.186.186 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.186.186 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.186.186 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.687 11.687 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.028 12.028 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z",
  },
  {
    name: "Apache Tomcat",
    level: "Intermediate",
    color: "#F8DC75",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z",
  },
  {
    name: "Apache Maven",
    level: "Intermediate",
    color: "#C71C22",
    icon: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m3 11h-6v-4h6v4zm-1 1v4h-4v-4h4z",
  },
];

// Stats
export const STATS = [
  { value: "3rd", label: "Year IT Student" },
  { value: "10+", label: "Academic Projects" },
  { value: "8+", label: "Core Technologies" },
  { value: "100%", label: "Passion for Coding" },
];

// About Cards
export const ABOUT_CARDS = [
  {
    icon: "Eye",
    tag: "Pixel-Perfect",
    title: "Visual Memory & Observation",
    description:
      "Strong visual memory and keen attention to detail. I can quickly spot UI inconsistencies and debug complex code patterns at a glance.",
  },
  {
    icon: "Zap",
    tag: "Fast Reflexes",
    title: "Agile Problem Solving",
    description:
      "Quick thinking and rapid adaptation to new challenges. Able to troubleshoot bugs efficiently and handle high-pressure situations.",
  },
  {
    icon: "FileText",
    tag: "High Proficiency",
    title: "Microsoft Word Mastery",
    description:
      "Expert-level skills in Microsoft Word. Highly proficient in fast typing, advanced text formatting, and efficient information processing.",
  },
  {
    icon: "Layers",
    tag: "Robust Systems",
    title: "End-to-End Testing",
    description:
      "Combining my observation skills with testing methodologies to ensure software quality, reliability, and seamless user experiences.",
  },
];

// Typewriter Roles
export const TYPEWRITER_ROLES = [
  "Tester Intern",
  "Software Tester",
  "Automation Testing Enthusiast",
  "Bug Hunter & Problem Solver",
  "Quality Assurance Engineer",
];

// Social Links
export const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Han3107",
    icon: "Github",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: "Linkedin",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: "Facebook",
  },
  {
    label: "Email",
    href: "mailto:caothihan05@gmail.com",
    icon: "Mail",
  },
];

// Featured Projects
export const FEATURED_PROJECTS = [
  {
    title: "GGZone-WNC",
    description:
      "A team web project for a gaming-focused platform, featuring user flows, authentication screens, and deployed full-stack delivery.",
    tags: ["Team Project", "Web App", "Full Stack"],
    image: "/images/projects/ggzone.jpg",
    href: "https://github.com/manhhuy140805/GGZone-WNC",
    liveHref: "https://ggzone-kappa.vercel.app/login",
  },
  {
    title: "Quản lý cây xanh Đà Nẵng",
    description:
      "A team project for managing urban green trees in Da Nang, focused on data management, administrative workflows, and practical software delivery.",
    tags: ["Team Project", "Management", "Web App"],
    image: "/images/projects/da-nang-tree-management.jpg",
    href: "https://github.com/NguyenHuuDinh135/225DAPM_Nhom9",
    displayTitle: "Qu\u1ea3n l\u00fd c\u00e2y xanh \u0110\u00e0 N\u1eb5ng",
  },
  {
    title: "Marketplace - Upwork",
    description:
      "A marketplace web application inspired by Upwork, covering freelancer profiles, service discovery, hiring flows, and project collaboration features.",
    tags: ["Marketplace", "Web App", "Full Stack"],
    image: "/images/projects/freelancer-marketplace.jpg",
    href: "https://github.com/manhhuy140805/TMDT-FE",
    githubLinks: [
      { label: "Frontend", href: "https://github.com/manhhuy140805/TMDT-FE" },
      { label: "Backend", href: "https://github.com/manhhuy140805/TMDT-BE" },
    ],
  },
];
