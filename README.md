# Professional MERN Stack Developer Portfolio

A sleek, modern, recruiter-focused personal portfolio website engineered with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **TanStack Query**.

Designed with a premium dark SaaS aesthetic, subtle purple/fuchsia glows, smooth responsive typography, and an **infinite horizontal photo strip slider** with interactive pause and drag.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Open your browser at `http://localhost:5173/` (or the port indicated in your terminal).

### 3. Production Build & Verification
```bash
npm run typecheck   # Runs TypeScript checks (tsc --noEmit)
npm run build       # Bundles optimized production assets into dist/
```

---

## ✏️ How to Personalize Your Information

All your personal data, skills, projects, and photo configurations live in **one single file**:

👉 **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**

Open this file to customize:
- **Your Name**: Change `"Arun Kumar"` to your full name.
- **Your Title & Tagline**: MERN Stack Developer, bio, and availability status.
- **Your Location**: Currently set to `"Surat, Gujarat, India"`.
- **Contact Info & Socials**: Email address, GitHub URL, LinkedIn URL.
- **Projects**: Live Demo URLs and GitHub repository links for **Taskly**, **Ssphere**, and **Travel Diary**.
- **Experience & Education**: Degrees, graduation year, and work history.

---

## 🖼️ How to Add Your Own Photos & Screenshots

All images have dedicated placeholders ready to be swapped anytime:

### 1. Profile Avatar
- Place your photo in: `public/images/avatar.jpg`
- In `src/data/portfolioData.ts`, update:
  ```ts
  avatarImage: "/images/avatar.jpg",
  ```
  *(Default is an SVG developer avatar fallback).*

### 2. Project Mockups
- Place your project screenshots into:
  - `public/images/projects/taskly.jpg`
  - `public/images/projects/ssphere.jpg`
  - `public/images/projects/travel-diary.jpg`
- Update the image path in `src/data/portfolioData.ts` under each project's `image` field.

### 3. Auto-Sliding Photo Strip
- 9 photos are already placed in `public/images/photos/` (`photo-1.jpg` to `photo-9.jpg`).
- To use your own workspace/life photos, simply overwrite `photo-1.jpg` through `photo-9.jpg` in `public/images/photos/` with your own images!
- The auto-sliding strip continuously loops seamlessly without interruption, pauses on hover/touch, and supports smooth dragging.

---

## 📁 Project Structure

```text
portfolio-2/
├── public/
│   └── images/
│       ├── avatar.svg            # Profile avatar fallback
│       ├── photos/               # 9 photos for the infinite sliding strip
│       │   ├── photo-1.jpg ... photo-9.jpg
│       └── projects/             # Mockups for Taskly, Ssphere, Travel Diary
│           ├── taskly.svg
│           ├── ssphere.svg
│           └── travel-diary.svg
├── src/
│   ├── components/
│   │   ├── About.tsx             # Narrative, Surat location, live IST clock
│   │   ├── Contact.tsx           # Form with validation, copy email, social cards
│   │   ├── Experience.tsx        # Work experience & education timeline
│   │   ├── Footer.tsx            # Navigation, credits, smooth back-to-top
│   │   ├── Hero.tsx              # High-impact typography, badges, CTAs
│   │   ├── Icons.tsx             # Custom GitHub & LinkedIn SVG icons
│   │   ├── Navbar.tsx            # Sticky header with glassmorphism & mobile drawer
│   │   ├── PhotoStrip.tsx        # Infinite auto-sliding tilted photo gallery
│   │   ├── Projects.tsx          # Taskly, Ssphere, Travel Diary showcase
│   │   ├── Skills.tsx            # Categorized MERN tech stack cards with filters
│   │   └── Toast.tsx             # Copy notification & feedback system
│   ├── data/
│   │   └── portfolioData.ts      # Central configuration for all content
│   ├── lib/
│   │   └── utils.ts              # Utility class merging
│   ├── App.tsx                   # Main layout with TanStack Query provider
│   ├── index.css                 # Tailwind CSS v4 & custom glassmorphism styles
│   └── main.tsx                  # React 19 root mount
├── index.html                    # SEO metadata, Google Fonts (Plus Jakarta Sans)
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── vite.config.ts                # Vite 6 configuration
```

---

## 📬 Contact Form (EmailJS)

The contact form is powered by **EmailJS**, forwarding messages directly to your Gmail (`arun18.dev@gmail.com`):
- **Service ID**: `service_dywi9et` (Connected to Gmail)
- **Template ID**: `template_vwsvv5s`
- **Public Key**: `XrmZAtlfSdppsfPTM`

These credentials are saved in `.env` and loaded automatically via `import.meta.env`.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 6](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State & Async**: [TanStack Query](https://tanstack.com/query)
- **Email Service**: [@emailjs/browser](https://www.emailjs.com/)
- **Animation**: [Motion](https://motion.dev/) (Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
