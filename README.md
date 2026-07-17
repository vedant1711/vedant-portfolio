# Vedant Somani — Portfolio

Personal portfolio for [Vedant Somani](https://github.com/vedant1711) — Text Mining Research Analyst at the UW eScience Institute, software developer, and data scientist.

Built with **Next.js 16** (App Router), **Tailwind CSS v4**, and **Framer Motion**. Fully static — no server or database required.

## Highlights

- NER-annotation-styled hero (a nod to spaCy/displaCy and text mining)
- Light & dark themes (system-aware, with a manual toggle persisted in localStorage)
- Experience rendered as a vertical timeline
- Projects pulled from GitHub with live-demo links
- Skill grid with real technology logos (devicon / Simple Icons, served locally)

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy

The easiest path is [Vercel](https://vercel.com):

1. Push this folder to a GitHub repository.
2. In Vercel, **Add New → Project**, import the repo, and deploy — zero config needed.

Any platform that runs Next.js (Netlify, Cloudflare, Render, etc.) works too.

## Editing content

All copy lives in one place: [`lib/data.ts`](lib/data.ts) — profile, experience, projects, skills, achievements, and education. Photos are in `public/media/`, skill logos in `public/logos/`.
