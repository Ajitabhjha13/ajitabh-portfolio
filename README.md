<div align="center">

# Ajitabh Kumar Jha · Portfolio

**My personal portfolio site: projects, experience, skills, certifications and a working contact form.**

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)

</div>

---

## Features

- **Single source of truth:** all content (profile, projects, experience, skills, certifications) lives in [`src/data/portfolio.ts`](src/data/portfolio.ts), so updating the site never means touching component code.
- **Smooth, animated UI:** preloader, custom cursor, magnetic buttons, marquee and Lenis smooth scrolling, built with Framer Motion.
- **Contact form that actually sends:** the `/api/contact` route delivers messages by email through [Resend](https://resend.com).
- **View counter:** `/api/views` stores page views in PostgreSQL via Drizzle ORM.
- **Health check:** `/api/health` reports whether the database is reachable.
- **Resume and certificates** served straight from `public/`.

## Tech stack

| Layer | Tools |
|-------|-------|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling & motion | Tailwind CSS, Framer Motion, Lenis, Lucide icons |
| Data | PostgreSQL, Drizzle ORM |
| Email | Resend |

## Project structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/route.ts   # sends contact-form emails (Resend)
│   │   ├── health/route.ts    # DB health check
│   │   └── views/route.ts     # page-view counter
│   ├── layout.tsx             # metadata, fonts, providers
│   └── page.tsx               # assembles all sections
├── components/                # Hero, About, Skills, Projects, Experience, Contact, ...
├── data/portfolio.ts          # ← edit this to change site content
└── db/                        # Drizzle client and schema
public/                        # images, resume.pdf, certificates
```

## Run it locally

```bash
git clone https://github.com/Ajitabhjha13/ajitabh-portfolio.git
cd ajitabh-portfolio
npm install
```

Create a `.env.local` file:

```env
DATABASE_URL=postgresql://user:password@host:5432/dbname   # needed for the view counter
RESEND_API_KEY=re_xxxxxxxxx                                # needed for the contact form
```

Then start the dev server:

```bash
npm run dev        # http://localhost:3000
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`, `npm run typecheck`.

## Contact

- LinkedIn: [ajitabh-kumar-jha](https://www.linkedin.com/in/ajitabh-kumar-jha-476546283)
- LeetCode: [ajitabhjha13](https://leetcode.com/u/ajitabhjha13/)
- GeeksforGeeks: [ajitabhd87y](https://www.geeksforgeeks.org/profile/ajitabhd87y)

## License

[MIT](LICENSE) © 2026 Ajitabh Kumar Jha
