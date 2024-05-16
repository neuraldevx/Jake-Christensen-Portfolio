import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type Project = {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
  };
  content: string;
};

export function getProjects(): Project[] {
  const projectsDirectory = path.join(process.cwd(), 'content/projects');
  const filenames = fs.readdirSync(projectsDirectory);

  const projects = filenames.map((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: filename.replace(/\.mdx$/, ''),
      metadata: data,
      content,
    } as Project;
  });

  return projects;
}
