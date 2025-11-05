# Spawnlabs Front-End Template

[![Next.js](https://img.shields.io/badge/Next.js-15.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

A Next.js starter template with TypeScript, Tailwind CSS, and professional UI components. Built for developers who want to ship fast without compromising on quality.

---

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [UI Components](#ui-components)
- [Tech Stack](#tech-stack)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## Features

### Core

- **Next.js 15** - Latest App Router with React Server Components
- **React 19** - Cutting-edge React features and optimizations
- **TypeScript** - Full type safety and better developer experience
- **Tailwind CSS v4** - Utility-first CSS framework with modern features

### UI & Design

- **Responsive Design** - Mobile-first approach, works on all devices
- **Dark Mode Ready** - Easy theme switching implementation
- **Radix UI** - Accessible, unstyled component primitives
- **Professional Components** - Pre-built, customizable UI components
- **Clean Design** - Modern, minimal styling that looks great

### Developer Experience

- **ESLint** - Code linting and quality checks
- **TypeScript Strict Mode** - Enhanced type checking
- **Clean Architecture** - Organized folder structure
- **Component Library** - Reusable, accessible components
- **Utility Functions** - Helper functions with `cn()` class merging

### Performance

- **Optimized Images** - Next.js Image optimization
- **Code Splitting** - Automatic code splitting for faster loads
- **CSS Optimization** - Tailwind CSS purging and minification
- **Fast Refresh** - Instant feedback during development

---

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

Clone the repository:

```bash
git clone https://github.com/TryTools/front-end.git my-project
cd my-project
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

---

## Project Structure

```
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles and design system
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── button.tsx    # Button component with variants
│   │   │   └── card.tsx      # Card component with effects
│   │   └── navigation.tsx    # Navigation bar component
│   └── lib/                   # Utility functions
│       └── utils.ts           # Helper functions (cn, etc.)
├── public/                    # Static assets
├── package.json              # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration
└── eslint.config.mjs        # ESLint configuration
```

---

## UI Components

### Button Component

Multiple variants for different use cases:

```tsx
import { Button } from "@/components/ui/button"

<Button variant="default">Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="lg">Large Button</Button>
```

**Available Variants:**

- `default` - Primary action button
- `outline` - Secondary action button
- `ghost` - Tertiary/subtle action
- `link` - Text link style

**Available Sizes:**

- `sm` - Small (36px height)
- `default` - Medium (40px height)
- `lg` - Large (48px height)
- `icon` - Square icon button

### Card Component

Feature cards with hover effects and animations:

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

### Navigation Component

Responsive navigation bar with mobile menu:

- Desktop navigation with links
- Mobile hamburger menu
- Smooth transitions
- Glass morphism effect
- Fully accessible

---

## Tech Stack

### Frontend Framework

- **Next.js 15.4** - React framework for production
- **React 19.1** - JavaScript library for user interfaces

### Language

- **TypeScript 5** - Typed superset of JavaScript

### Styling

- **Tailwind CSS v4** - Utility-first CSS framework
- **PostCSS** - CSS transformation tool

### UI Components

- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Beautiful icon library
- **class-variance-authority** - Component variant management
- **tailwind-merge** - Utility for merging Tailwind classes

### Development Tools

- **ESLint 9** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting

---

## Customization

### Update Branding

**1. Change Logo and Name**

Edit `src/components/navigation.tsx`:

```tsx
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60">
  YourLogo
</div>
<span>Your Brand</span>
```

**2. Update Metadata**

Edit `src/app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Your App Name",
  description: "Your app description",
  // ... other metadata
}
```

### Customize Colors

Edit `src/app/globals.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.147 0.004 49.25);
  --primary: oklch(0.216 0.006 56.043);
  /* Add your custom colors */
}
```

### Add New Pages

Create new routes in `src/app/`:

```bash
src/app/about/page.tsx
src/app/blog/page.tsx
src/app/contact/page.tsx
```

Each page automatically gets its own route based on the folder structure.

### Create New Components

Add components in `src/components/`:

```tsx
// src/components/my-component.tsx
export function MyComponent() {
  return <div>My Component</div>
}
```

---

## Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TryTools/front-end)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com).

**Steps:**

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will detect Next.js and configure automatically
4. Your site will be live in seconds

### Other Platforms

This template works with any platform that supports Next.js:

**Cloud Platforms:**

- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [Railway](https://railway.app)
- [Render](https://render.com)

**Self-Hosted:**

- Docker containers
- Node.js server
- Static export (for static sites)

### Environment Variables

Create a `.env.local` file for local development:

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow the existing code style
- Use TypeScript for all new files
- Add comments for complex logic
- Ensure all tests pass
- Update documentation as needed

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Support

### Community

- **GitHub Issues** - [Report bugs or request features](https://github.com/TryTools/front-end/issues)
- **Discussions** - [Ask questions and share ideas](https://github.com/TryTools/front-end/discussions)

### Professional Support

- **Email** - support@spawnlabs.ai
- **Twitter** - [@tryspawnlabs](https://twitter.com/tryspawnlabs)
- **Website** - [spawnlabs.ai](https://spawnlabs.ai)

---

## Acknowledgments

Built with modern web technologies:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)

---

<div align="center">

**Built by [Spawnlabs](https://spawnlabs.ai)**

Start building amazing web applications today.

[Get Started](https://github.com/TryTools/front-end) · [Documentation](https://github.com/TryTools/front-end/wiki) · [Report Bug](https://github.com/TryTools/front-end/issues)

</div>
