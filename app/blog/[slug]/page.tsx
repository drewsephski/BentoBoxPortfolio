import { docs, type BlogPost } from "@/.source";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getAuthor } from "@/lib/authors";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

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

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 md:px-0">
        <div className="mb-8">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
              {post.data.title}
            </h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-medium">
                    {author.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">{author.name}</div>
                  <div className="text-sm">{formatDate(new Date(post.data.date))}</div>
                </div>
              </div>
            </div>

            {post.data.description && (
              <p className="text-xl text-muted-foreground mb-8">
                {post.data.description}
              </p>
            )}

            {post.data.tags && post.data.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.data.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border">
            <div className="text-center text-muted-foreground">
              <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
              <p className="mb-4">
                This blog post is currently being written. The full content will be available soon.
              </p>
              <p className="text-sm">
                In the meantime, feel free to check out other posts on the{" "}
                <Link href="/blog" className="text-primary hover:underline">
                  blog page
                </Link>
                .
              </p>
            </div>
          </div>
        </article>

        <div className="mt-16 pt-8 border-t">
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
