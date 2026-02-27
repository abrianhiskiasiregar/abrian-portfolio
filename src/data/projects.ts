export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  type: "UI/UX Web" | "UI/UX Mobile" | "Graphic Design";
  tags: string[];
  image: string;
  url: string;
  color: string;
  accent: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ReCraft",
    subtitle: "Sustainable Marketplace Platform",
    description:
      "ReCraft is a web-based marketplace concept designed to bridge eco-conscious buyers with creators of recycled and upcycled products. The problem addressed was the lack of visibility and trust in sustainable micro-businesses. I designed a clean product discovery flow, structured seller profiles, and an eco-impact tracker that visualizes environmental contribution per purchase. The platform encourages responsible consumption while improving user trust and engagement through transparency-focused design.",
    type: "UI/UX Web",
    tags: ["Figma", "Web Design", "Marketplace", "Sustainability"],
    image: "/images/project-recraft.png",
    url: "https://www.figma.com/proto/VvoD48mq0qIbBrVrs3oOus/Comftik?page-id=126%3A637&node-id=445-1298&p=f&t=A4tSDuCGRAwBkxIB-0&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=445%3A1298&hide-ui=1",
    color: "from-green-900 to-emerald-800",
    accent: "#34D399",
  },
  {
    id: 2,
    title: "DailyFocus",
    subtitle: "Student Productivity & Focus App",
    description:
      "DailyFocus is a mobile productivity application designed to help students manage distractions and build consistent study habits. The core issue addressed was low task completion and lack of structured focus routines. The solution integrates a Pomodoro-based timer, goal tracking, streak visualization, and performance analytics within a minimal, distraction-free interface. The design emphasizes clarity, motivation loops, and habit reinforcement to support long-term productivity growth.",
    type: "UI/UX Mobile",
    tags: ["Figma", "Mobile Design", "Productivity", "Students"],
    image: "/images/project-dailyfocus.png",
    url: "https://www.figma.com/proto/OIaEJMBe6X5l3jTrNkoB7X/FInalProject?page-id=&node-id=21-11&p=f&t=45mTyHvwESWhR69F-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3",
    color: "from-blue-900 to-indigo-800",
    accent: "#818CF8",
  },
  {
    id: 3,
    title: "Poster Digital COMFTIK",
    subtitle: "2nd Place – National Design Competition",
    description:
      "A nationally recognized poster created for COMFTIK Nasional 2025, addressing a social campaign theme through strong visual storytelling and persuasive hierarchy. The challenge was to communicate urgency and awareness within a single impactful frame. By combining bold typography, strategic color contrast, and structured composition, the design successfully delivered clarity and emotional engagement — earning 2nd Place at the national level.",
    type: "Graphic Design",
    tags: ["Canva", "Visual Design", "Competition", "Social Campaign"],
    image: "/images/project-poster.png",
    url: "https://www.canva.com/design/DAG5QdPuvPM/QkI6J8mZJRVEGi6IE0rpiQ/edit?utm_content=DAG5QdPuvPM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    color: "from-orange-900 to-amber-800",
    accent: "#F97316",
  },
];