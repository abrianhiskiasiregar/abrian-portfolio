export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  description: string;
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
    skills: ["Graphic Design", "Creativity and Innovation", "Visual Design"],
    description:
      "Grateful to achieve 2nd Place in the Graphic Design Competition at COMFTIK Nasional 2025. This achievement reflects my passion for visual communication, creativity, and impactful design.",
    image: "/images/cert-comftik.jpg",
    color: "from-orange-500 to-amber-400",
    icon: "🏆",
  },
  {
    id: 2,
    title: "3rd Place – Best Project UI/UX Pathway",
    issuer: "Google Developer Group on Campus Universitas Sumatera Utara",
    date: "Jan 2026",
    skills: ["UI/UX Design", "Prototyping"],
    description:
      "Proud to achieve 3rd Place Best Project in the UI/UX Pathway organized by GDG On Campus USU. This journey enhanced my understanding of user-centered design and collaborative problem solving.",
    image: "/images/cert-gdg.png",
    color: "from-blue-500 to-cyan-400",
    icon: "🥉",
  },
  {
    id: 3,
    title: "UI/UX Design Competition – CodeFest 001",
    issuer: "Universitas Sumatera Utara",
    date: "Mei 2025",
    skills: ["UI/UX", "Figma"],
    description:
      "Honored to receive a Certificate of Appreciation as a participant in the UI/UX Design Competition at CodeFest 001, Universitas Sumatera Utara.",
    image: "/images/cert-codefest.jpg",
    color: "from-purple-500 to-indigo-400",
    icon: "🎖️",
  },
  {
    id: 4,
    title: "Intro to Data Analytics",
    issuer: "RevoU",
    date: "Mei 2024",
    skills: ["Data Analysis", "Data Visualization", "Analytical Thinking"],
    description:
      "Proud to share that I have completed the Intro to Data Analytics program by RevoU. This course strengthened my understanding of data analysis fundamentals and practical skills.",
    image: "/images/cert-revou.jpg",
    color: "from-green-500 to-teal-400",
    icon: "📊",
  },
];
