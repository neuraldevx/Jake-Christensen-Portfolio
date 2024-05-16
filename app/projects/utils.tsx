import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ProjectMetadata {
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
}

export interface Project {
  slug: string;
  metadata: ProjectMetadata;
  content: string;
}

export function getProjects(): Project[] {
  const projectDir = path.join(process.cwd(), 'content/projects');
  const filenames = fs.readdirSync(projectDir);

  const projects = filenames.map((filename) => {
    const filePath = path.join(projectDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: filename.replace(/\.mdx$/, ''),
      metadata: data as ProjectMetadata,
      content,
    };
  });

  return projects;
}
