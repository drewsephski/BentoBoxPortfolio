export type AuthorKey = "drew";

export interface Author {
  name: string;
  avatar?: string;
  bio?: string;
  position?: string;
  website?: string;
  twitter?: string;
  github?: string;
}

export const authors: Record<AuthorKey, Author> = {
  drew: {
    name: "Drew Sepeczi",
    avatar: "/images/drew-avatar.png",
    position: "Software Engineer",
    bio: "Software engineer & open-source contributor focused on generative AI and modern web development.",
    website: "https://drewsepeczi.xyz",
    twitter: "drewsephski",
    github: "drewsephski",
  },
};

export function getAuthor(key: AuthorKey): Author {
  return authors[key];
}

export function isValidAuthor(key: string): key is AuthorKey {
  return key in authors;
}
