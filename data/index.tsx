import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdAccountCircle, MdReviews } from "react-icons/md";

// TypeScript interfaces for better type safety
export interface NavItem {
  name: string;
  link: string;
  icon: React.ReactNode;
}

export interface GridItem {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}

export interface TechStack {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'mobile' | 'cloud' | 'ai';
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  category: 'web' | 'mobile' | 'fullstack' | 'ai' | 'tools';
  status: 'completed' | 'in-progress' | 'archived';
  featured: boolean;
  images: {
    thumbnail: string;
    gallery: string[];
  };
  techStack: TechStack[];
  features: ProjectFeature[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  metrics?: {
    users?: string;
    performance?: string;
    uptime?: string;
  };
  timeline: string;
  challenges?: string[];
  learnings?: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar?: string;
  company?: string;
}

export interface Company {
  id: number;
  name: string;
  img: string;
  nameImg: string;
}

export interface WorkExperience {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
}

export interface SocialMedia {
  id: number;
  img: string;
  url: string;
}

export const navItems: NavItem[] = [
  { name: "About", link: "#about", icon: <FaHome /> },
  { name: "Projects", link: "#projects", icon: <GrProjects /> },
  { name: "Testimonials", link: "#clients", icon: <MdReviews /> },
  { name: "Contact", link: "#contact", icon: <MdAccountCircle /> },
];

export const gridItems: GridItem[] = [
  {
    id: 1,
    title: "Collaborating with clients, fostering open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I am constantly improving my skills",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast driven by a passion for creating innovative apps",
    description: "Here for the love of coding",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a finance app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// Enhanced projects data with comprehensive information
export const projects: Project[] = [
  {
    id: 1,
    title: "Anurag Ray - Web3 Tokenomics Portfolio",
    description: "Modern portfolio website for Web3 Tokenomics Architect & Ecosystem Strategist",
    longDescription: "A sophisticated portfolio website showcasing expertise in Web3 tokenomics and ecosystem strategy. Built with cutting-edge technologies including Next.js 15, React 19, and TypeScript, featuring interactive Aceternity UI components, seamless dark/light mode toggle, and mobile-first responsive design. The site includes floating navigation, animated background effects, hover cards, and smooth scrolling for an exceptional user experience.",
    category: 'web',
    status: 'completed',
    featured: true,
    images: {
      thumbnail: "/p5.png", // You may want to update this with an actual screenshot
      gallery: ["/p5.png"]
    },
    techStack: [
      { name: "Next.js", icon: "/next.svg", category: "frontend" },
      { name: "React", icon: "/re.svg", category: "frontend" },
      { name: "TypeScript", icon: "/ts.svg", category: "frontend" },
      { name: "Tailwind CSS", icon: "/tail.svg", category: "frontend" },
      { name: "CSS3", icon: "/css.svg", category: "frontend" }
    ],
    features: [
      { title: "Dark/Light Mode Toggle", description: "Seamless theme switching with system preference detection" },
      { title: "Interactive UI Components", description: "Aceternity UI components with floating navigation and animations" },
      { title: "Mobile-First Design", description: "Responsive design optimized for all screen sizes" },
      { title: "Smooth Animations", description: "Framer Motion powered animations and transitions" },
      { title: "Background Effects", description: "Animated SVG background beams and hover effects" },
      { title: "Contact Integration", description: "Direct links to email, Telegram, and LinkedIn" }
    ],
    links: {
      live: "https://anurag-portfolio-amber.vercel.app",
      github: "https://github.com/mangeshkchauhan/anurag-portfolio"
    },
    metrics: {
      performance: "Mobile-first responsive design",
      uptime: "99.9% uptime on Vercel"
    },
    timeline: "2 months",
    challenges: [
      "Implementing smooth theme transitions and system preference detection",
      "Creating responsive layouts that work across all device sizes",
      "Integrating complex UI animations while maintaining performance"
    ],
    learnings: [
      "Advanced Next.js 15 and React 19 features",
      "Modern UI component libraries and design systems",
      "Performance optimization for animation-heavy interfaces"
    ]
  },
  {
    id: 2,
    title: "smartGPT - AI Document Chat Platform",
    description: "Intelligent PDF document analysis with conversational AI interface",
    longDescription: "smartGPT revolutionizes document interaction by enabling natural language conversations with PDF documents. Built with cutting-edge AI technology, it allows users to upload documents and ask questions, receiving intelligent, contextual responses. The platform features advanced document parsing, semantic search, and multi-document analysis capabilities.",
    features: [
      { title: "PDF Document Upload", description: "Seamlessly upload and process PDF documents of any size" },
      { title: "AI-Powered Chat", description: "Natural language interface for document queries" },
      { title: "Context-Aware Responses", description: "Intelligent responses based on document content" },
      { title: "Multi-Document Support", description: "Chat with multiple documents simultaneously" },
      { title: "Secure Authentication", description: "Protected user sessions with Kinde Auth" }
    ],
    category: 'ai',
    status: 'in-progress',
    featured: true,
    learnings: [
      "Advanced integration with OpenAI APIs",
      "Document processing optimization techniques",
      "Real-time data streaming implementation"
    ],
    images: {
      thumbnail: "/p4.png",
      gallery: ["/p4.png", "/p4.svg"]
    },
    techStack: [
      { name: "Next.js", icon: "/next.svg", category: "frontend" },
      { name: "TypeScript", icon: "/ts.svg", category: "frontend" },
      { name: "Tailwind CSS", icon: "/tail.svg", category: "frontend" },
      { name: "Kinde Auth", icon: "/kinde.svg", category: "backend" },
      { name: "OpenAI API", icon: "/next.svg", category: "ai" }
    ],
    links: {
      live: "https://smart-gpt-phi.vercel.app/",
      github: "https://github.com/mangeshkchauhan/smartGPT"
    },
    metrics: {
      users: "500+ active users",
      performance: "Sub-second response time",
      uptime: "99.9% uptime"
    },
    timeline: "3 months",
    challenges: [
      "Implementing efficient PDF parsing and text extraction",
      "Optimizing AI response times for large documents",
      "Managing context windows for long conversations"
    ],
  },
  {
    id: 3,
    title: "Cryptonics - Advanced Cryptocurrency Tracker",
    description: "Modern, feature-rich cryptocurrency tracking platform with real-time data and interactive charts",
    longDescription: "Cryptonics is a sophisticated cryptocurrency tracking platform built with Next.js 14, TypeScript, and modern web technologies. Features real-time price tracking for thousands of cryptocurrencies, interactive Chart.js visualizations, multi-currency support (USD, EUR, INR), exchange listings, and a beautiful dark theme with glass morphism effects. Utilizes React Query for efficient data caching and CoinGecko API integration for comprehensive market data.",
    category: 'web',
    status: 'completed',
    featured: true,
    images: {
      thumbnail: "/p6.png",
      gallery: ["/p6.png"]
    },
    techStack: [
      { name: "Next.js", icon: "/next.svg", category: "frontend" },
      { name: "React", icon: "/re.svg", category: "frontend" },
      { name: "TypeScript", icon: "/ts.svg", category: "frontend" },
      { name: "Tailwind CSS", icon: "/tail.svg", category: "frontend" },
      { name: "Chart.js", icon: "/css.svg", category: "frontend" },
      { name: "Framer Motion", icon: "/css.svg", category: "frontend" }
    ],
    features: [
      { title: "Real-time Cryptocurrency Data", description: "Live prices, market caps, and 24h changes from CoinGecko API" },
      { title: "Interactive Price Charts", description: "Professional-grade Chart.js visualizations with multiple timeframes" },
      { title: "Multi-currency Support", description: "Track prices in USD, EUR, and INR with dynamic conversion" },
      { title: "Exchange Listings", description: "Comprehensive cryptocurrency exchange data with trust scores" },
      { title: "Modern UI/UX", description: "Dark theme with glass morphism effects and smooth animations" },
      { title: "Advanced Search & Pagination", description: "Efficient coin discovery with intelligent caching via React Query" },
      { title: "Responsive Design", description: "Optimized experience across desktop, tablet, and mobile devices" },
      { title: "Performance Optimized", description: "Next.js 14 App Router with Turbopack for lightning-fast builds" }
    ],
    links: {
      live: "https://cryptonics.vercel.app/",
      github: "https://github.com/mangeshkchauhan/cryptonics"
    },
    metrics: {
      users: "2000+ active users",
      performance: "Sub-second page loads with caching",
      uptime: "99.9% uptime on Vercel"
    },
    timeline: "5 months",
    challenges: [
      "Migrating from Create React App to Next.js 14 for better performance and SEO",
      "Implementing efficient data caching with React Query to reduce API calls",
      "Creating responsive chart visualizations that work across all device sizes",
      "Managing complex state with TypeScript for type safety",
      "Optimizing performance for real-time cryptocurrency data updates"
    ],
    learnings: [
      "Advanced Next.js 14 App Router architecture and server components",
      "Professional data visualization with Chart.js and React Chart.js 2",
      "Modern state management using React Query for server state",
      "TypeScript best practices for large-scale applications",
      "Performance optimization techniques for data-heavy applications",
      "Modern UI design with glass morphism and smooth animations"
    ]
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Exceptional work! The delivery was incredibly fast and the design is absolutely stunning. The attention to detail and modern UI components exceeded my expectations. Highly professional and reliable developer.",
    name: "Anurag Ray",
    title: "Web3 Tokenomics Architect",
  },
  {
    quote: "Working with him was fantastic. His technical skills and quick problem-solving impressed me. He is reliable and delivers quality work on time. Highly recommend him.",
    name: "Amit Sharma",
    title: "Software Developer",
  },
  {
    quote: "I had a great experience collaborating with him. He is very organized and always ensures everything is on track. His attention to detail made our project successful.",
    name: "Himani Arya",
    title: "Project Manager",
  },
  {
    quote: "He is an excellent developer. He communicates clearly and works efficiently.",
    name: "Rahul Nair",
    title: "Backend Engineer",
  },
  {
    quote: "I highly recommend working with him. He is creative and always comes up with innovative solutions. His work has significantly improved our website's performance.",
    name: "Deepak Gupta",
    title: "UX Designer",
  },
  {
    quote: "He is very knowledgeable and easy to work with. He understood our requirements perfectly and delivered outstanding results. We will definitely work with him again.",
    name: "Arush Mehta",
    title: "Marketing Specialist",
  },
];

export const companies: Company[] = [
  {
    id: 1,
    name: "Epsilon",
    img: "/epsilonlogo.jpg",
    nameImg: "/epsilonfull.svg",
  },
  {
    id: 2,
    name: "Byjus",
    img: "/byjuslogo.png",
    nameImg: "/byjusfull.png",
  },
  {
    id: 3,
    name: "Fountane",
    img: "/fountanelogo.jpg",
    nameImg: "/fountanefulll.png",
  },
  {
    id: 4,
    name: "StayNow",
    img: "/staynowlogo.jpg",
    nameImg: "/staynowfull.png",
  },
];

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: "Senior Frontend Engineer - StayNow",
    desc: "Spearheading end-to-end product development in high-velocity, cross-functional teams. Optimized performance by resolving bottlenecks, reducing JS thread workload, and improving UI thread animations.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer I/II - Fountane Makerspace",
    desc: "Led StayNow's mobile app development using React Native for iOS/Android. Built interactive 3D design division landing page and hotel booking platform. Enhanced performance with Redux Toolkit, integrated secure payment gateways, and implemented SSR with Next.js.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineer I - BYJU'S",
    desc: "Built dynamic React/Redux UI modules for BYJU'S Tuition Centers, automated deployment workflows, and designed custom recording solution POC reducing infrastructure costs by 75%.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Software Engineer Intern - Epsilon",
    desc: "Delivered pixel-accurate UIs conforming to brand style guides for enterprise campaigns. Crafted responsive and accessible components using modern SCSS, Flexbox, and CSS Grid.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/mangeshkchauhan",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://twitter.com/mangeshkchauhan",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/mangeshkchauhan/",
  },
];

// Project categories for filtering
export const projectCategories = [
  { id: 'all', name: 'All Projects', count: projects.length },
  { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
  { id: 'ai', name: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
  { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
  { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
];

// Tech stack categories for better organization
export const techCategories = [
  'frontend',
  'backend', 
  'database',
  'tools',
  'mobile',
  'cloud',
  'ai'
] as const;
