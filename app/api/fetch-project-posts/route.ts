export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: Request) {
  const projects = [
    {
      id: "voxflow",
      slug: "voxflow",
      body: "An AI voice and workflow orchestration platform designed to automate calls, actions, and downstream processes.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "VoxFlow",
        description: "An AI voice and workflow orchestration platform designed to automate calls, actions, and downstream processes.",
        category: "projects",
        image: "/images/voxflow.png",
        tags: ["LLMs", "Voice AI", "Automation", "APIs"],
        projectURL: "https://voxflow.netlify.app",
        repoURL: null
      }
    },
    {
      id: "codecypher",
      slug: "codecypher",
      body: "An AI-powered React component generator focused on coding, refactoring, and developer leverage.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "CodeCypher",
        description: "An AI-powered React component generator focused on coding, refactoring, and developer leverage.",
        category: "projects",
        image: "/images/cypher.png",
        tags: ["AI Agents", "TypeScript", "Developer Tools", "LLMs"],
        projectURL: "https://codecypher.lol",
        repoURL: null
      }
    },
    {
      id: "phoenix-scraper",
      slug: "phoenix-scraper",
      body: "A resilient web scraping and data extraction system built for automation, scale, and structured outputs.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "Phoenix Scraper",
        description: "A resilient web scraping and data extraction system built for automation, scale, and structured outputs.",
        category: "projects",
        image: "/images/phoenix-scraper.png",
        tags: ["Node.js", "Automation", "Data Pipelines", "Scraping"],
        projectURL: "https://phoenix-scraper.vercel.app",
        repoURL: null
      }
    },
    {
      id: "astra",
      slug: "astra",
      body: "Modern boilerplate/template for SaaS products with Stripe checkout and Clerk auth",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "Astra",
        description: "Modern boilerplate/template for SaaS products with Stripe checkout and Clerk auth",
        category: "projects",
        image: "/images/astra.png",
        tags: ["Stripe", "Clerk", "Next.js", "SaaS"],
        projectURL: "https://astra.motorcycles",
        repoURL: null
      }
    },
    {
      id: "clerk-billing",
      slug: "clerk-billing",
      body: "A reference SaaS implementation showcasing authentication, subscriptions, and billing with clean integration.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "Clerk Billing",
        description: "A reference SaaS implementation showcasing authentication, subscriptions, and billing with clean integration.",
        category: "projects",
        image: "/images/clerk.png",
        tags: ["Clerk", "Stripe", "Next.js", "SaaS"],
        projectURL: "https://clerkbilling.netlify.app",
        repoURL: null
      }
    },
    {
      id: "pixel-mint",
      slug: "pixel-mint",
      body: "A visually refined web experience exploring branding, motion, and modern image and video generation.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "Pixel Mint",
        description: "A visually refined web experience exploring branding, motion, and modern image/video generation.",
        category: "projects",
        image: "/images/pixel-mint.png",
        tags: ["Next.js", "Tailwind CSS", "Motion", "Design"],
        projectURL: "https://pixel-mint-sigma.vercel.app",
        repoURL: null
      }
    },
    {
      id: "getcracked",
      slug: "getcracked",
      body:"A high-conversion SaaS full stack starter kit for an AI-powered subscription-based service.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "Get Cracked",
        description: "A high-conversion SaaS full stack starter kit for an AI-powered subscription-based service.",
        category: "projects",
        image: "/images/getcracked.png",
        tags: ["Next.js", "Tailwind CSS", "Shadcn", "SaaS"],
        projectURL: "https://getcracked.lol",
        repoURL: null
      }
    },
    {
      id: "roastmyui",
      slug: "roastmyui",
      body: "A design-focused AI agent that audits website UI/UX and provides actionable roasts.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "RoastMyUI",
        description: "A design-focused AI agent that audits website UI/UX and provides actionable roasts.",
        category: "projects",
        image: "/images/roast.png",
        tags: ["Next.js", "Tailwind CSS", "Shadcn", "UX Systems"],
        projectURL: "https://roastmyui.me",
        repoURL: null
      }
    },
    {
      id: "ai-voice-platform",
      slug: "ai-voice-platform",
      body: "A production-ready AI voice agent platform handling calls, bookings, and workflows for small businesses.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "AI Voice Platform",
        description: "A production-ready AI voice agent platform handling calls, bookings, and workflows for small businesses.",
        category: "projects",
        image: "/images/voxflow.png",
        tags: ["LLMs", "Voice Agents", "Speech AI", "Automation"],
        projectURL: "https://founderscope.fit",
        repoURL: null
      }
    },

    {
      id: "hyper-ai",
      slug: "hyper-ai",
      body: "An AI-powered web application delivering fast, intuitive task flows with a strong focus on usability and execution.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "Hyper AI",
        description: "An AI-powered web application delivering fast, intuitive task flows with a strong focus on usability and execution.",
        category: "projects",
        image: "/images/hyper.png",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn"],
        projectURL: "https://hyper-ai.netlify.app",
        repoURL: null
      }
    },
    {
      id: "easy-ui",
      slug: "easy-ui",
      body: "A production-grade UI component system designed to ship polished, consistent interfaces without friction.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "Easy UI",
        description: "A production-grade UI component system designed to ship polished, consistent interfaces without friction.",
        category: "projects",
        image: "/images/ez-ui.png",
        tags: ["React", "TypeScript", "Vite", "Motion"],
        projectURL: "https://ez-ui.netlify.app",
        repoURL: null
      }
    },
    {
      id: "ufc-predict",
      slug: "ufc-predict",
      body: "An ML-assisted UFC prediction engine using curated features and lightweight models for interpretable insights.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "UFC Predict",
        description: "An ML-assisted UFC prediction engine using curated features and lightweight models for interpretable insights.",
        category: "projects",
        image: "/images/ufc.png",
        tags: ["Python", "TensorFlow", "Flask", "Shadcn"],
        projectURL: "https://ufc-predict.netlify.app",
        repoURL: null
      }
    },
    {
      id: "linkify",
      slug: "linkify",
      body: "An agentic content system that researches, drafts, styles, and publishes long-form articles autonomously.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "Linkify",
        description: "An agentic content system that researches, drafts, styles, and publishes long-form articles autonomously.",
        category: "projects",
        image: "/images/linkify.png",
        tags: ["LLMs", "Node.js", "MongoDB", "Agents"],
        projectURL: "https://linkify.wiki",
        repoURL: null
      }
    },
    {
      id: "physician-ai",
      slug: "physician-ai",
      body: "An AI analytics platform for clinicians that surfaces patterns, trends, and decision-support insights.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "Physician AI",
        description: "An AI analytics platform for clinicians that surfaces patterns, trends, and decision-support insights.",
        category: "projects",
        image: "/images/physician.png",
        tags: ["Python", "TensorFlow", "Flask", "Shadcn"],
        projectURL: "http://physicianai.netlify.app/",
        repoURL: null
      }
    },
    {
      id: "screwfast",
      slug: "screwfast",
      body: "A scalable e-commerce platform built for industrial suppliers with streamlined catalogs and secure checkout.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "Screwfast",
        description: "A scalable e-commerce platform built for industrial suppliers with streamlined catalogs and secure checkout.",
        category: "projects",
        image: "/images/screwfast.png",
        tags: ["React", "TypeScript", "Tailwind CSS", "Shadcn"],
        projectURL: "http://screwfast-indol.vercel.app/",
        repoURL: null
      }
    },
    {
      id: "slotflow",
      slug: "slotflow",
      body: "Sign up genius alternative - a modern appointment scheduling and booking platform.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "SlotFlow",
        description: "Sign up genius alternative - a modern appointment scheduling and booking platform.",
        category: "projects",
        image: "/images/slotflow.png",
        tags: ["Next.js", "Scheduling", "Booking", "SaaS"],
        projectURL: "https://slotflow.fit",
        repoURL: null
      }
    },
    {
      id: "pitchin",
      slug: "pitchin",
      body: "Local donation organization system connecting communities with causes that matter.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "PitchIn",
        description: "Local donation organization system connecting communities with causes that matter.",
        category: "projects",
        image: "/images/pitchit.png",
        tags: ["React", "Donations", "Community", "Non-profit"],
        projectURL: "https://pitchitlist.com",
        repoURL: null
      }
    },
    {
      id: "goalplanner",
      slug: "goalplanner",
      body: "Make goals that turn into actionable steps with AI-powered planning and tracking.",
      collection: "posts",
      data: {
        layout: "default",
        pubDate: new Date().toISOString(),
        title: "GoalPlanner",
        description: "Make goals that turn into actionable steps with AI-powered planning and tracking.",
        category: "projects",
        image: "/images/goalplanner.png",
        tags: ["AI", "Goal Setting", "Productivity", "Planning"],
        projectURL: "https://goalplanner.site",
        repoURL: null
      }
    }
  ];

  return new Response(JSON.stringify({ postsData: projects }), { status: 200 });
}
