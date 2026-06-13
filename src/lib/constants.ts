// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Blog", href: "/blog", hasDropdown: true },
  { label: "Project", href: "/projects", hasDropdown: true },
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
  {
    name: "React.js",
    level: "Advanced",
    color: "#61DAFB",
    icon: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278z",
  },
  {
    name: "Next.js",
    level: "Advanced",
    color: "#ffffff",
    icon: "M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z",
  },
  {
    name: "NestJS",
    level: "Intermediate",
    color: "#E0234E",
    icon: "M14.131.047c-.173 0-.334.037-.483.087.316.21.49.49.576.806.007.043.019.074.025.117a.681.681 0 0 1 .013.112c.024.545-.143.614-.26.936-.18.415-.13.861.086 1.22a.74.74 0 0 0 .074.137c-.235-1.568 1.073-1.803 1.314-2.293.019-.428-.334-.713-.613-.911a1.37 1.37 0 0 0-.732-.21z",
  },
  {
    name: "TypeScript",
    level: "Advanced",
    color: "#3178C6",
    icon: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z",
  },
  {
    name: "ASP.NET",
    level: "Intermediate",
    color: "#512BD4",
    icon: "M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z",
  },
  {
    name: "C#",
    level: "Intermediate",
    color: "#239120",
    icon: "M12 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm-1.2 5.4h2.4v4.8h4.8v2.4h-4.8v4.8h-2.4v-4.8H6v-2.4h4.8z",
  },
  {
    name: "Java",
    level: "Intermediate",
    color: "#f89820",
    icon: "M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149m-.575-2.627s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218m4.84-4.458c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573",
  },
  {
    name: "Kotlin",
    level: "Intermediate",
    color: "#7F52FF",
    icon: "M24 24H0V0h24L12 12Z",
  },
  {
    name: "TailwindCSS",
    level: "Advanced",
    color: "#06B6D4",
    icon: "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z",
  },
  {
    name: "Docker",
    level: "Intermediate",
    color: "#2496ED",
    icon: "M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.186.186 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.186.186 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.186.186 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.186.186 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.186.186 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.186.186 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.186.186 0 00.185-.185V9.006a.186.186 0 00-.185-.186H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.687 11.687 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.028 12.028 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z",
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
    href: "mailto:contact@hanhan.dev",
    icon: "Mail",
  },
];

// Featured Projects
export const FEATURED_PROJECTS = [
  {
    title: "TreeManagement_Nhom09",
    description:
      "A TypeScript tree management project focused on structured data workflows, interface logic, and practical full-stack development.",
    tags: ["TypeScript", "Management", "Full Stack"],
    image: "/images/projects/tree-management.jpg",
    href: "https://github.com/Han3107/TreeManagement_Nhom09",
  },
  {
    title: "FLAPPY_BIRD",
    description:
      "A C++ game project recreating Flappy Bird mechanics while practicing game loops, collision handling, and interactive logic.",
    tags: ["C++", "Game", "Coursework"],
    image: "/images/projects/flappy-bird.jpg",
    href: "https://github.com/Han3107/FLAPPY_BIRD",
  },
  {
    title: "WEB_BAN_THUOC",
    description:
      "A Java web project for an online medicine store, focused on product browsing, commerce workflows, and practical backend development.",
    tags: ["Java", "Web App", "E-Commerce"],
    image: "/images/projects/ecommerce.jpg",
    href: "https://github.com/Han3107/WEB_BAN_THUOC",
  },
];
