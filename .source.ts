// Simple blog posts data based on existing MDX files
export interface BlogPost {
  slug: string;
  data: {
    title: string;
    description: string;
    date: string;
    tags: string[];
    author: string;
    featured?: boolean;
    readTime?: string;
    thumbnail?: string;
    category?: string;
  };
}

export const docs: BlogPost[] = [
  {
    slug: "21-best-free-react-components",
    data: {
      title: "21 Best Free React Components Libraries To Kickstart Projects",
      description: "Discover the most powerful and popular React component libraries that will accelerate your development workflow and help you build stunning UIs.",
      date: "2024-12-01",
      tags: ["UI Frameworks", "React", "Components"],
      author: "drew",
      featured: true,
      readTime: "16 min read",
      thumbnail: "/thumbnails/react-components-libraries.jpg",
      category: "React Development"
    },
  },
  {
    slug: "nextjs-portfolio-templates",
    data: {
      title: "23 NextJS Portfolio Template Examples For Design Inspiration",
      description: "Explore the best NextJS portfolio templates and examples to showcase your work professionally and stand out from the competition.",
      date: "2024-11-28",
      tags: ["Landing Page Examples"],
      author: "drew",
      featured: true,
      readTime: "17 min read",
      thumbnail: "/thumbnails/nextjs-portfolio-templates.jpg",
      category: "Next.js Development"
    },
  },
  {
    slug: "react-portfolio-templates",
    data: {
      title: "React Portfolio Templates",
      description: "Professional portfolio templates for React developers",
      date: "2025-02-10",
      tags: ["React", "Portfolio", "Templates"],
      author: "drew",
    },
  },
  {
    slug: "voice-ai-comparison",
    data: {
      title: "Voice AI Showdown: ElevenLabs vs Vapi vs Retell vs Bland AI",
      description: "A deep dive comparison of the top Voice AI platforms in 2025. We analyze features, pricing, latency, and use cases for ElevenLabs, Vapi, Retell, and Bland AI.",
      date: "2026-01-13",
      tags: ["Voice AI", "Comparison", "ElevenLabs", "Vapi", "Retell", "Bland AI"],
      author: "drew",
      featured: true,
      readTime: "12 min read",
      category: "Voice AI"
    },
  },
  {
    slug: "voice-ai-agents-overview",
    data: {
      title: "The State of AI Voice Agents in 2026",
      description: "A comprehensive overview of the modern Voice AI Agent landscape. From real-time APIs to multi-modal interactions, discover how Voice AI is transforming industries in 2026.",
      date: "2026-01-13",
      tags: ["Voice AI", "Trends", "2026", "AI Agents"],
      author: "drew",
      featured: true,
      readTime: "15 min read",
      category: "Voice AI"
    },
  },
  {
    slug: "react-animation-libraries",
    data: {
      title: "13 Awesome React Animation Libraries To Elevate Your Design Projects",
      description: "Transform your React applications with these powerful animation libraries that make creating smooth, engaging user experiences effortless.",
      date: "2024-11-25",
      tags: ["UI Frameworks", "React", "Animation"],
      author: "drew",
      featured: false,
      readTime: "14 min read",
      thumbnail: "/thumbnails/react-animation-libraries.jpg",
      category: "React Development"
    },
  },
  {
    slug: "react-landing-page-templates",
    data: {
      title: "21 Best React Landing Page Templates To Inspire Yours",
      description: "Discover stunning React landing page templates and learn the design principles that make them convert visitors into customers.",
      date: "2024-11-22",
      tags: ["Landing Page Examples", "React", "Templates"],
      author: "drew",
      featured: false,
      readTime: "21 min read",
      thumbnail: "/thumbnails/react-landing-page-templates.jpg",
      category: "React Development"
    },
  },
  {
    slug: "react-native-libraries",
    data: {
      title: "21 Best React Native Libraries You Should Know About",
      description: "Explore essential React Native libraries that will streamline your mobile app development and enhance functionality.",
      date: "2024-11-20",
      tags: ["UI Frameworks", "React Native", "Mobile"],
      author: "drew",
      featured: false,
      readTime: "22 min read",
      thumbnail: "/thumbnails/react-native-libraries.jpg",
      category: "Mobile Development"
    },
  },
  {
    slug: "react-portfolio-templates",
    data: {
      title: "Looking For A React Portfolio Template? 19 Best React Portfolio Templates",
      description: "Discover the best React portfolio templates to showcase your work professionally and land your dream job or clients.",
      date: "2024-11-18",
      tags: ["Landing Page Examples", "React", "Portfolio"],
      author: "drew",
      featured: true,
      readTime: "16 min read",
      thumbnail: "/thumbnails/react-portfolio-templates.jpg",
      category: "React Development"
    },
  },
];

export const meta = docs;
