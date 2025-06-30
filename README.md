# Modern Portfolio Website

A sleek, responsive portfolio website built with Next.js, featuring modern animations, interactive components, and a comprehensive project showcase.

![Portfolio Preview](public/preview.png)

## 🚀 Features

### ✨ Recent Major Improvements (Latest Update)

#### **Enhanced Projects Section**
- **Advanced Project Cards**: Modern card design with hover effects, status badges, and featured project highlighting
- **Detailed Project Modals**: Comprehensive project information including tech stack, features, challenges, and learnings
- **Smart Filtering**: Category-based project filtering with animated transitions
- **Rich Project Data**: Enhanced data structure with metrics, timelines, and detailed descriptions
- **Responsive Design**: Optimized for all device sizes with smooth animations

#### **Improved User Experience**
- **Enhanced Navigation**: Scroll-based visibility, active section highlighting, and mobile-responsive menu
- **Modern Animations**: Framer Motion animations throughout the site for smooth user interactions
- **Better Performance**: Optimized images with Next.js Image component and lazy loading
- **Interactive Elements**: Hover effects, micro-interactions, and engaging visual feedback

#### **Professional Design System**
- **TypeScript Integration**: Comprehensive type safety with proper interfaces
- **Consistent Styling**: Enhanced CSS utilities and custom animations
- **Accessible Design**: ARIA labels, keyboard navigation, and screen reader support
- **Modern UI Components**: Glassmorphism effects, backdrop blur, and gradient overlays

### 🎯 Core Features

- **Responsive Design**: Seamlessly adapts to all screen sizes
- **Modern Animations**: Smooth transitions and interactive elements using Framer Motion
- **Project Showcase**: Detailed portfolio with filtering and modal views
- **Contact Integration**: Direct email links and social media connections
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Ready**: Optimized for search engines with proper meta tags
- **Dark Theme**: Modern dark theme with purple accent colors

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Icons** - Popular icon library

### UI Components
- **Custom Components** - Reusable UI components
- **3D Effects** - Interactive 3D pin components
- **Canvas Animations** - Canvas-based reveal effects
- **Spotlight Effects** - Dynamic lighting effects

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Bun** - Fast package manager and runtime

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and utilities
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx          # Home page
│   └── provider.tsx      # Context providers
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── 3d-pin.tsx   # 3D pin container
│   │   ├── FloatingNav.tsx # Navigation component
│   │   ├── MagicButton.tsx # Custom button component
│   │   └── ...          # Other UI components
│   ├── Hero.tsx         # Hero section
│   ├── RecentProjects.tsx # Projects showcase
│   ├── Footer.tsx       # Footer component
│   └── ...              # Other sections
├── data/                 # Data and configuration
│   └── index.tsx        # Site data and types
├── public/              # Static assets
│   ├── images/         # Project images
│   ├── icons/          # Icon assets
│   └── ...            # Other static files
├── utils/              # Utility functions
│   └── cn.ts          # Tailwind class utilities
└── ...                # Config files
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Bun (recommended) or npm/yarn/pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mangeshkchauhan/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   bun install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   bun dev
   # or
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
bun run build
# or
npm run build
```

## 🎨 Customization

### Updating Project Data
Edit `data/index.tsx` to update:
- Personal information
- Project details
- Work experience
- Skills and technologies
- Contact information

### Styling
- Global styles: `app/globals.css`
- Component styles: Individual component files
- Theme colors: `tailwind.config.ts`

### Adding New Projects
```typescript
// In data/index.tsx
{
  id: 5,
  title: "Your Project Name",
  description: "Brief description",
  longDescription: "Detailed description...",
  category: 'web', // web | mobile | fullstack | ai | tools
  status: 'completed', // completed | in-progress | archived
  featured: true,
  images: {
    thumbnail: "/your-image.jpg",
    gallery: ["/image1.jpg", "/image2.jpg"]
  },
  techStack: [
    { name: "React", icon: "/react.svg", category: "frontend" }
  ],
  features: [
    { title: "Feature Name", description: "Feature description" }
  ],
  links: {
    live: "https://your-site.com",
    github: "https://github.com/username/repo"
  }
}
```

## 📊 Performance Features

- **Image Optimization**: Next.js Image component with lazy loading
- **Bundle Optimization**: Tree shaking and code splitting
- **Caching**: Static generation and caching strategies
- **Core Web Vitals**: Optimized for Google's performance metrics

## 🔧 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms
```bash
bun run build
bun start
```

## 📈 Recent Updates

### Version 2.0 (Latest)
- ✅ Complete projects section overhaul
- ✅ Enhanced TypeScript integration
- ✅ Improved responsive design
- ✅ Advanced animations and interactions
- ✅ Better performance optimization
- ✅ Enhanced accessibility features
- ✅ Modern UI components with glassmorphism
- ✅ Smart navigation with scroll detection
- ✅ Comprehensive footer with contact info

### Planned Features
- [ ] Blog section integration
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Analytics dashboard
- [ ] Contact form with backend
- [ ] Project gallery carousel

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mangesh Kumar Chauhan**
- Website: [Portfolio](https://your-portfolio-url.com)
- Email: mangeshkrm123@gmail.com
- LinkedIn: [@mangeshkchauhan](https://linkedin.com/in/mangeshkchauhan)
- GitHub: [@mangeshkchauhan](https://github.com/mangeshkchauhan)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for beautiful animations
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library
- Design inspiration from modern portfolio websites

---

⭐ **Star this repository if you find it helpful!**
