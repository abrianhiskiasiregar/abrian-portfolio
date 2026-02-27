export interface Experience {
  id: number;
  role: string;
  company: string;
  type: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  bulletPoints: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "IT & Administrative Support Intern",
    company: "Sekretariat DPRD Provinsi Sumatera Utara",
    type: "Internship",
    period: "Aug 2025 – Sep 2025",
    duration: "2 Months",
    location: "Medan, Indonesia (On-site)",
    description:
      "Contributed to administrative operations and IT support within the Secretariat of DPRD North Sumatra, ensuring efficient daily workflow and technical reliability across departments.",
    bulletPoints: [
      "Assisted in preparing and organizing official administrative and financial documents",
      "Supported digital documentation and data management processes",
      "Performed basic troubleshooting and maintenance for office hardware and software",
      "Collaborated with cross-functional staff to improve operational efficiency",
      "Ensured timely document processing to support internal governance activities",
    ],
    skills: [
      "Administrative Operations",
      "IT Support",
      "Problem Solving",
      "Technical Troubleshooting",
      "Team Collaboration",
      "Time Management",
    ],
  },
];
