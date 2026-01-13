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
      author: "arghya",
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
      author: "arghya",
      featured: true,
      readTime: "17 min read",
      thumbnail: "/thumbnails/nextjs-portfolio-templates.jpg",
      category: "Next.js Development"
    },
  },
  {
    slug: "react-animation-libraries",
    data: {
      title: "13 Awesome React Animation Libraries To Elevate Your Design Projects",
      description: "Transform your React applications with these powerful animation libraries that make creating smooth, engaging user experiences effortless.",
      date: "2024-11-25",
      tags: ["UI Frameworks", "React", "Animation"],
      author: "arghya",
      featured: false,
      readTime: "14 min read",
      thumbnail: "/thumbnails/react-animation-libraries.jpg",
      category: "React Development"
    },
  },
];

export const meta = docs;
