# Spawnlabs Front-End Template

A modern, production-ready **Next.js starter template** with TypeScript, Tailwind CSS, and professional UI components. Built for developers who want to ship fast without compromising on quality.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)

## ✨ Features

- 🚀 **Next.js 15** with App Router
- ⚡ **React 19** with latest features
- 🎨 **Tailwind CSS v4** for styling
- 📘 **TypeScript** for type safety
- 🎭 **Framer Motion** for animations
- 🧩 **Radix UI** components
- 🎯 **Clean Architecture** and folder structure
- 📱 **Fully Responsive** design
- 🌗 **Dark Mode** ready
- ♿ **Accessible** components
- 🔧 **ESLint** configured
- 💅 **Professional UI** components

## 🚀 Quick Start

### Clone this repository

```bash
git clone https://github.com/TryTools/front-end.git my-project
cd my-project
```

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                # Next.js app directory
│   ├── layout.tsx     # Root layout
│   ├── page.tsx       # Home page
│   └── globals.css    # Global styles
├── components/        # React components
│   ├── ui/           # UI components (Button, Card, etc.)
│   └── navigation.tsx # Navigation component
└── lib/              # Utility functions
    └── utils.ts      # Helper functions
```

## 🎨 UI Components

This template includes professionally designed, reusable components:

- **Button** - Multiple variants (default, outline, ghost, etc.)
- **Card** - Feature cards with hover effects
- **Navigation** - Responsive navbar with mobile menu
- **Glass effects** - Modern glassmorphism styling
- **Animations** - Smooth transitions with Framer Motion

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Lucide Icons](https://lucide.dev/) - Beautiful icons

## 📝 Customization

### Update Branding

1. Change the logo and name in `src/components/navigation.tsx`
2. Update metadata in `src/app/layout.tsx`
3. Modify colors in `src/app/globals.css`

### Add Pages

Create new pages in the `src/app` directory:

```bash
src/app/about/page.tsx
src/app/blog/page.tsx
```

### Styling

The template uses Tailwind CSS with a custom design system. Modify variables in `globals.css`:

```css
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.147 0.004 49.25);
  /* Add your custom colors */
}
```

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/TryTools/front-end)

### Other Platforms

This template works with any platform that supports Next.js:

- **Netlify**
- **AWS Amplify**
- **Cloudflare Pages**
- **Railway**

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

MIT License - feel free to use this template for your projects!

## 💬 Support

- 📧 Email: support@spawnlabs.ai
- 🐦 Twitter: [@Spawnlabs](https://twitter.com/Spawnlabs)
- 🌐 Website: [spawnlabs.ai](https://spawnlabs.ai)

---

**Built with ❤️ by Spawnlabs**

Start building amazing web applications today! 🚀
