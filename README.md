# 🎨 Abrian Hiskia Siregar — Portfolio Website

Built with **Next.js 14**, **React**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        ← Global styles + Tailwind
│   ├── layout.tsx         ← Root layout (Google Fonts, metadata)
│   └── page.tsx           ← Main page (assembles all sections)
├── components/
│   ├── Hero.tsx           ← Landing hero + navbar
│   ├── About.tsx          ← About me section
│   ├── Skills.tsx         ← Skills & tools (Figma, Canva, etc.)
│   ├── Timeline.tsx       ← Work experience (DPRD internship)
│   ├── Projects.tsx       ← Portfolio projects (ReCraft, DailyFocus, Poster)
│   ├── Certificates.tsx   ← Awards & certifications
│   └── Contact.tsx        ← Contact form + social links
├── data/
│   ├── projects.ts        ← Projects data
│   ├── experiences.ts     ← Work experience data
│   └── certificates.ts    ← Certificates data
└── lib/
    └── utils.ts           ← cn() utility function

public/
└── images/                ← 📸 ADD YOUR IMAGES HERE
    ├── profile.jpg                   ← Your profile photo (1:1 ratio)
    ├── project-recraft.jpg           ← ReCraft UI screenshot
    ├── project-dailyfocus.jpg        ← DailyFocus mobile screenshot
    ├── project-poster.jpg            ← Competition poster
    ├── cert-comftik.jpg              ← COMFTIK certificate
    ├── cert-gdg.jpg                  ← GDG certificate
    ├── cert-codefest.jpg             ← CodeFest certificate
    └── cert-revou.jpg                ← RevoU certificate
```

## 🖼️ Adding Your Images

1. **Profile photo** → `public/images/profile.jpg`
   - Then uncomment the `<Image>` tag in `Hero.tsx`

2. **Project screenshots** → `public/images/project-*.jpg`
   - Update `Projects.tsx` to use `<Image>` instead of the SVG mockup

3. **Certificate images** → `public/images/cert-*.jpg`
   - Cards will display them automatically when files exist

## 🎨 Design System

| Color | Usage |
|-------|-------|
| `#F97316` | Orange — primary brand accent |
| `#0F0F0F` | Near-black — main background |
| `#161616` | Dark gray — card backgrounds |
| `#FB923C` | Light orange — hover states |

**Fonts:**
- **Syne** — Display headings (bold, editorial)
- **Plus Jakarta Sans** — Body text (clean, readable)
- **JetBrains Mono** — Labels & code snippets

## 📦 Key Dependencies

```json
{
  "next": "14.2.0",
  "react": "^18",
  "tailwindcss": "^3.3.0",
  "lucide-react": "^0.263.1",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0"
}
```

## 🌐 Deploy

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
npx vercel
```

---

Made with ❤️ by **Abrian Hiskia Siregar** — Informatics Student, UI/UX & Graphic Design Enthusiast
