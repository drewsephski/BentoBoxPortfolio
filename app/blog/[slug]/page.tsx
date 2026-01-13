import { docs, type BlogPost } from "@/.source";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAuthor } from "@/lib/authors";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ComparisonTable } from "@/components/comparison-table";
import { serialize } from "next-mdx-remote/serialize";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;

  if (!slug || slug.length === 0) {
    notFound();
  }

  const post = docs.find((p: BlogPost) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const author = getAuthor(post.data.author as any);

  // Read the MDX file content
  const filePath = path.join(process.cwd(), 'blog', 'content', `${slug}.mdx`);
  
  let content = "";
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { content: mdxContent } = matter(fileContents);
    content = mdxContent;
  } catch (error) {
    console.error(`Error reading MDX file for ${slug}:`, error);
    notFound();
  }

  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute top-0 left-0 z-0 w-full h-[300px] [mask-image:linear-gradient(to_top,transparent_25%,black_95%)]">
        <FlickeringGrid
          className="absolute top-0 left-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.2}
          flickerChance={0.05}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:px-8">
        <div className="mb-12">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <header className="mb-16">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link href="/blog" className="hover:text-foreground transition-colors">
                Blog
              </Link>
              <span>/</span>
              <span className="text-foreground">Article</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-tight break-words">
              {post.data.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-12 p-6 bg-muted/30 rounded-lg border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-base font-semibold">
                    {author.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">{author.name}</div>
                  <div className="text-sm">{formatDate(new Date(post.data.date))}</div>
                </div>
              </div>
              {post.data.readTime && (
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{post.data.readTime}</span>
                </div>
              )}
            </div>

            {post.data.description && (
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed border-l-4 border-primary pl-6 italic break-words">
                {post.data.description}
              </p>
            )}

            {post.data.tags && post.data.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-12">
                {post.data.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-10 border shadow-sm">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <MDXRemote 
                source={content} 
                components={{
                  Accordion,
                  AccordionContent,
                  AccordionItem,
                  AccordionTrigger,
                  ComparisonTable,
                }} 
              />
            </div>
          </div>
        </article>

        <div className="mt-20 pt-10 border-t">
          <Link href="/blog">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
