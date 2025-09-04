export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: Request) {
  const projects = [
    {
      "id": "hyper-ai",
      "slug": "hyper-ai",
      "body": "An AI‑powered web app delivering quick, intuitive flows and a seamless UX for everyday tasks and workflows.",
      "collection": "posts",
      "data": {
        "layout": "default",
        "pubDate": new Date().toISOString(),
        "title": "Hyper AI",
        "description": "An AI‑powered web app delivering quick, intuitive flows and a seamless UX for everyday tasks and workflows.",
        "category": "projects",
        "image": "/images/hyper.png", // Assuming images are local
        "tags": ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn"],
        "projectURL": "https://hyper-ai.netlify.app",
        "repoURL": null
      }
    },
    {
      "id": "easy-ui",
      "slug": "easy-ui",
      "body": "A refined UI component system with polished patterns and ready-to-ship elements for crafting premium interfaces, fast.",
      "collection": "posts",
      "data": {
        "layout": "default",
        "pubDate": new Date().toISOString(),
        "title": "Easy UI",
        "description": "A refined UI component system with polished patterns and ready-to-ship elements for crafting premium interfaces, fast.",
        "category": "projects",
        "image": "/images/ez-ui.png",
        "tags": ["React", "TypeScript", "Vite", "Motion"],
        "projectURL": "https://ez-ui.netlify.app",
        "repoURL": null
      }
    },
    {
      "id": "ufc-predict",
      "slug": "ufc-predict",
      "body": "An ML‑assisted predictor for UFC matchups using curated features and lightweight modeling for smart insights.",
      "collection": "posts",
      "data": {
        "layout": "default",
        "pubDate": new Date().toISOString(),
        "title": "UFC Predict",
        "description": "An ML‑assisted predictor for UFC matchups using curated features and lightweight modeling for smart insights.",
        "category": "projects",
        "image": "/images/ufc.png",
        "tags": ["Python", "TensorFlow", "Flask", "Shadcn"],
        "projectURL": "https://ufc-predict.netlify.app",
        "repoURL": null
      }
    },
    {
      "id": "linkify",
      "slug": "linkify",
      "body": "An agentic blog generator that researches, drafts, and styles long‑form posts—then publishes with a single click.",
      "collection": "posts",
      "data": {
        "layout": "default",
        "pubDate": new Date().toISOString(),
        "title": "Linkify",
        "description": "An agentic blog generator that researches, drafts, and styles long‑form posts—then publishes with a single click.",
        "category": "projects",
        "image": "/images/linkify.png",
        "tags": ["Gemini AI", "Node.js", "MongoDB", "Express"],
        "projectURL": "https://linkify.wiki",
        "repoURL": null
      }
    },
    {
      "id": "physician-ai",
      "slug": "physician-ai",
      "body": "Analytics for clinicians powered by AI—surface trends, augment decisions, and present insights with clarity.",
      "collection": "posts",
      "data": {
        "layout": "default",
        "pubDate": new Date().toISOString(),
        "title": "Physician AI",
        "description": "Analytics for clinicians powered by AI—surface trends, augment decisions, and present insights with clarity.",
        "category": "projects",
        "image": "/images/physician.png",
        "tags": ["Python", "TensorFlow", "Flask", "Shadcn"],
        "projectURL": "http://physicianai.netlify.app/",
        "repoURL": null
      }
    },
    {
      "id": "screwfast",
      "slug": "screwfast",
      "body": "A robust e-commerce platform tailored for construction and utility businesses, offering streamlined product listings and secure checkout.",
      "collection": "posts",
      "data": {
        "layout": "default",
        "pubDate": new Date().toISOString(),
        "title": "Screwfast",
        "description": "A robust e-commerce platform tailored for construction and utility businesses, offering streamlined product listings and secure checkout.",
        "category": "projects",
        "image": "/images/screwfast.png",
        "tags": ["React", "TypeScript", "Tailwind CSS", "Shadcn"],
        "projectURL": "http://screwfast-indol.vercel.app/",
        "repoURL": null
      }
    }
  ];

  return new Response(JSON.stringify({ postsData: projects }), { status: 200 });
}
