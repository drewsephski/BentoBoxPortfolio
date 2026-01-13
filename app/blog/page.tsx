import { docs, meta, type BlogPost } from "@/.source";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = docs.sort((a: BlogPost, b: BlogPost) => {
    const dateA = new Date(a.data.date);
    const dateB = new Date(b.data.date);
    return dateB.getTime() - dateA.getTime();
  });

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-balance mb-6">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance mb-8">
            Thoughts on React, Next.js, AI, and modern web development practices.
          </p>
          <Link href="/">
            <Button variant="outline" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Back to Portfolio
            </Button>
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map((post: BlogPost, index: number) => (
            <Card 
              key={post.slug} 
              className={`group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm hover:scale-[1.02] hover:border-primary/30 h-full flex flex-col ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full flex flex-col">
                <CardHeader className="pb-4 flex-grow">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <time>{formatDate(new Date(post.data.date))}</time>
                    {post.data.readTime && (
                      <>
                        <span className="text-muted-foreground">•</span>
                        <Clock className="w-4 h-4" />
                        <span>{post.data.readTime}</span>
                      </>
                    )}
                  </div>
                  <CardTitle className={`line-clamp-2 group-hover:text-primary transition-colors ${
                    index === 0 ? 'text-2xl' : 'text-xl'
                  } mb-3`}>
                    {post.data.title}
                  </CardTitle>
                  {post.data.description && (
                    <CardDescription className={`line-clamp-3 text-base break-words ${
                      index === 0 ? 'line-clamp-2' : ''
                    }`}>
                      {post.data.description}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="pt-0 mt-auto">
                  {post.data.tags && post.data.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.data.tags.slice(0, index === 0 ? 4 : 3).map((tag: string) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.data.tags.length > (index === 0 ? 4 : 3) && (
                        <Badge variant="outline" className="text-xs">
                          +{post.data.tags.length - (index === 0 ? 4 : 3)}
                        </Badge>
                      )}
                    </div>
                  )}
                  <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform duration-200">
                    <span className="text-sm font-medium">Read article</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {sortedPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No blog posts found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
