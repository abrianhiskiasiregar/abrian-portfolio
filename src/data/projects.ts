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
    subtitle: "Marketplace for Recycled Products",
    description:
      "A web-based UI/UX design for a marketplace platform that connects sellers of creative recycled products with conscious buyers. Features clean product listings, seller profiles, and an eco-impact tracker to encourage sustainable purchasing behavior.",
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
    subtitle: "Daily Focus Target App for Students",
    description:
      "A mobile UI/UX design for a focus and productivity tracker tailored for students. Features a Pomodoro-style timer, daily goal setting, streak tracking, and progress analytics — designed with a clean, distraction-free interface.",
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
    subtitle: "2nd Place – National Graphic Design Competition",
    description:
      "A competition poster design created for COMFTIK Nasional 2025. Crafted with strong visual hierarchy, bold typography, and a compelling social campaign message — earning 2nd Place in the national graphic design competition.",
    type: "Graphic Design",
    tags: ["Canva", "Visual Design", "Competition", "Social Campaign"],
    image: "/images/project-poster.png",
    url: "https://www.canva.com/design/DAG5QdPuvPM/QkI6J8mZJRVEGi6IE0rpiQ/edit?utm_content=DAG5QdPuvPM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    color: "from-orange-900 to-amber-800",
    accent: "#F97316",
  },
];
