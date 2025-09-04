// ProjectPosts.tsx

"use client";
 
import { useEffect, useState } from "react";
import { fetchProjects } from "@/lib/fetchers";
import ProjectShowcaseVertical, { type Project } from "@/components/project-showcase-vertical";

const ProjectPosts = () => {
  const [posts, setPosts] = useState<any | null>(null);
  const [files, setFiles] = useState<Project[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsData = await fetchProjects();
      if (postsData) {
        setFiles(postsData.postsData.slice(0, 10));
      }
      setPosts(postsData);
    };

    getPosts();
  }, []);

  return <ProjectShowcaseVertical projects={files} />;
};

export default ProjectPosts;
