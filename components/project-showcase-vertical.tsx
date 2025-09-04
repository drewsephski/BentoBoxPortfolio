import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import Image from "next/image";

export interface Project {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: {
    layout: string;
    pubDate: string;
    title: string;
    description: string;
    category: string;
    image: string;
    tags: string[];
    projectURL?: string;
    repoURL?: string;
  };
}

interface ProjectShowcaseVerticalProps {
  projects: Project[];
}

const ReviewCard = ({ project }: { project: Project }) => {
  const { slug, body, data } = project;
  const { title, image, description, projectURL } = data;

  return (
    <figure
      className={cn(
        "relative h-40 w-full cursor-pointer overflow-hidden rounded-xl border p-4 shadow",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <a href={projectURL || `https://deepseekdrew.com/#projects/${slug}`} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-col">
            <div className="flex items-start gap-2">
              <div className="relative h-8 w-8">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="rounded-lg object-cover shadow"
                />
              </div>
              <figcaption className="text-lg font-medium dark:text-white">
                {title}
              </figcaption>
            </div>
          </div>
        </div>
        <blockquote className="mt-2 text-sm line-clamp-4 dark:text-white font-thin">
          {description}
        </blockquote>
      </a>
    </figure>
  );
};

const ProjectShowcaseVertical = ({
  projects,
}: ProjectShowcaseVerticalProps) => {
  const doubledProjects = [...projects, ...projects]; // Duplicate projects to ensure continuous flow
  const firstRow = doubledProjects.slice(0, Math.ceil(doubledProjects.length / 2));
  const secondRow = doubledProjects.slice(Math.ceil(doubledProjects.length / 2));

  return (
    <div className="relative flex h-full w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-background sm:px-2 md:shadow-xl">
      <Marquee pauseOnHover vertical className="[--duration:30s] w-full">
        {firstRow.map((project) => (
          <ReviewCard key={project.id} project={project} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical
        className="[--duration:30s] w-full"
      >
        {secondRow.map((project) => (
          <ReviewCard key={project.id} project={project} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
};

export default ProjectShowcaseVertical;
