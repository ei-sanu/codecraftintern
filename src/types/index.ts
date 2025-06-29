export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  sourceCode: string;
}

export interface ContactInfo {
  github: string;
  twitter: string;
  linkedin: string;
}
