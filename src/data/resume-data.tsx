import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Aadarsh Sharma",
  initials: "AS",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune,+Maharashtra/@18.6438906,73.5833727,230925m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2c04f3cd1de43:0x72c037ba0dc336e7!8m2!3d18.6832564!4d74.0300122!16zL20vMDhzemI0?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "Jr. Software Engineer with strong problem-solving abilities and a proven track record in delivering high-quality solutions. Adept at working in collaborative teams to solve complex technical challenges and optimize performance.",
  avatarUrl: "https://avatars.githubusercontent.com/u/96333496?s=400&u=f182875df67ce0c42352814b0eeca1fa3f4c8a0b&v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "adarsharma56763@gmail.com",
    tel: "+918484896899",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aadarsharma",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aadarsh-sharma/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/aadarsh_tw",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Savitribai Phule Pune University",
      degree: "Bachelor's of Engineering in Artificial Intelligence & Data Science",
      start: "2021",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Bluestock Fintech",
      link: "https://bluestock.in/",
      badges: [],
      title: "Software Development Engineering Intern",
      logo: NSNLogo,
      start: "Jan 2024",
      end: "May 2024",
      description: "Led the full development of a real-world web application using the MERN stack (MongoDB, Express.js, React, Node.js), optimizing user experience. Improved UI with React for better interactions and coordinated with cross-functional teams to meet project goals on time, promoting a culture of innovation.",
    },
  ],
  skills: [
    "C/C++",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Data Structures & Algorithms",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "HTML/CSS",
  ],
  projects: [
    {
      title: "Transafer",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "Next.js",
        "Mono Repo",
        "Prisma",
        "PostgreSQL",
        "Express.js",
        "Tailwind CSS",
        "Docker"
      ],
      description:
        "A secure Next.js digital wallet app with bank transfers, P2P transfers, and transaction management.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/aadarsharma/Transafer",
      },
    }
  ],
} as const;
