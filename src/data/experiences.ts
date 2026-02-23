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
    role: "Intern – Dukungan Administrasi & IT",
    company: "Kantor DPRD Provinsi Sumatera Utara",
    type: "Magang",
    period: "Agu 2025 - Sep 2025",
    duration: "2 bulan",
    location: "Medan, Sumatera Utara, Indonesia · Di lokasi",
    description:
      "Menyelesaikan program magang selama satu bulan di Sekretariat DPRD Provinsi Sumatera Utara.",
    bulletPoints: [
      "Membantu penyusunan dokumen dan laporan administrasi",
      "Mendukung proses administrasi keuangan",
      "Membantu troubleshooting serta pemeliharaan perangkat lunak dan perangkat keras kantor",
      "Berkolaborasi dengan staf untuk memastikan operasional harian berjalan efektif",
    ],
    skills: ["Administrative Assistance", "Time Management", "IT Support"],
  },
];
