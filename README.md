# Alberto Hamuyela | Full-Stack Developer Portfolio

A modern, responsive portfolio built with Next.js 16, TypeScript, and Framer Motion.

## 🚀 Tech Stack

- **Framework**: Next.js 16.2.3 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans + Geist Mono

## 📁 Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Header.tsx       # Navigation header with mobile menu
│   ├── Hero.tsx         # Hero section with CTA
│   ├── SocialLinks.tsx  # Social media links
│   ├── ProjectsCarousel.tsx  # Projects carousel
│   ├── AboutSection.tsx # About me + skills grid
│   ├── ExperienceSection.tsx # Work experience timeline
│   └── Footer.tsx       # Contact footer
├── data/                # Static data (projects, skills, experience)
├── types/               # TypeScript interfaces
├── utils/               # Utility functions
│   ├── animations.ts    # Framer Motion variants
│   └── date.ts          # Date calculation utilities
├── page.tsx             # Main page assembly
├── layout.tsx           # Root layout with metadata
└── globals.css          # Global styles + CSS variables
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features

- ✅ **Responsive Design** - Works on all screen sizes
- ✅ **Dark/Light Theme** - Toggle with localStorage persistence
- ✅ **Smooth Animations** - Framer Motion for scroll and hover effects
- ✅ **Interactive Carousel** - Circular navigation with project previews
- ✅ **Mobile Menu** - Hamburger menu for small screens
- ✅ **Type-Safe** - Full TypeScript coverage
- ✅ **SEO Optimized** - Open Graph metadata and semantic HTML

## 📝 Customization

### Update Personal Information

Edit `app/data/index.ts`:
- `projects` - Your projects with descriptions and links
- `skills` - Your technical skills by category
- `workExperience` - Your work history
- `socialLinks` - Your social media profiles

### Change Theme Colors

Modify CSS variables in `app/globals.css`:
```css
:root {
  --background: #ffffff;
  --foreground: #111111;
  /* ... */
}
```

### Add New Sections

1. Create component in `app/components/`
2. Import and add to `app/page.tsx`
3. Update navigation links in `app/components/Header.tsx`

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📄 License

MIT © Alberto Hamuyela

## 🤝 Contributing

Found a bug or have a suggestion? Open an issue or submit a PR!

---

Built with ❤️ by Alberto Hamuyela
