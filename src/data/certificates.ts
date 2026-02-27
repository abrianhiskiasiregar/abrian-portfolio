export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  description: string;
  impact?: string;
  image?: string;
  color: string;
  icon: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "2nd Place – Graphic Design Competition COMFTIK Nasional 2025",
    issuer: "Universitas Satya Terra Bhinneka",
    date: "Jan 2026",
    skills: ["Visual Communication", "Creative Strategy", "Branding"],
    description:
      "Achieved 2nd place in a national-level graphic design competition focused on impactful visual storytelling.",
    impact:
      "Strengthened strategic design thinking and the ability to communicate complex ideas through compelling visuals.",
    image: "/images/cert-comftik.jpg",
    color: "from-orange-500 to-amber-400",
    icon: "🏆",
  },
  {
    id: 2,
    title: "3rd Place – Best Project UI/UX Pathway",
    issuer: "Google Developer Group on Campus USU",
    date: "Jan 2026",
    skills: ["User-Centered Design", "Prototyping", "Design Systems"],
    description:
      "Recognized as 3rd Best Project in UI/UX Pathway for delivering a user-focused digital solution.",
    impact:
      "Enhanced collaboration skills and applied structured design thinking to solve real user problems.",
    image: "/images/cert-gdg.png",
    color: "from-blue-500 to-cyan-400",
    icon: "🥉",
  },
  {
    id: 3,
    title: "UI/UX Design Competition – CodeFest 001",
    issuer: "Universitas Sumatera Utara",
    date: "May 2025",
    skills: ["UI/UX Design", "Figma", "Wireframing"],
    description:
      "Participated in a competitive UI/UX challenge focused on usability and innovation.",
    impact:
      "Improved rapid ideation, prototyping, and presenting design solutions under time constraints.",
    image: "/images/cert-codefest.jpg",
    color: "from-purple-500 to-indigo-400",
    icon: "🎖️",
  },
  {
    id: 4,
    title: "Intro to Data Analytics",
    issuer: "RevoU",
    date: "May 2024",
    skills: ["Data Analysis", "Data Visualization", "Analytical Thinking"],
    description:
      "Completed foundational training in data analytics and visualization techniques.",
    impact:
      "Developed data-driven decision-making skills to support product and design improvements.",
    image: "/images/cert-revou.jpg",
    color: "from-green-500 to-teal-400",
    icon: "📊",
  },
];