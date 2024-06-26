import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

// Define and export the Project type
export interface Project {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
  };
}

export function getProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Ensure metadata is correctly typed
    const metadata: { title: string; publishedAt: string } = {
      title: matterResult.data.title,
      publishedAt: matterResult.data.publishedAt,
    };

    return {
      slug,
      metadata,
    };
  });

  return allProjectsData;
}
