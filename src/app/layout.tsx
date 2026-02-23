import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abrian Hiskia Siregar – UI/UX & Graphic Designer",
  description:
    "Portfolio of Abrian Hiskia Siregar — Informatics Student, UI/UX Designer, and Graphic Design enthusiast based in Medan, Indonesia.",
  keywords: ["UI/UX Design", "Graphic Design", "Portfolio", "Figma", "Informatics"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0F0F0F] text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
