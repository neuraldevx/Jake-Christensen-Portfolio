import { getProjects, Project } from 'app/projects/utils';

export const baseUrl = 'https://portfolio-blog-starter.vercel.app';

export default async function sitemap() {
  const projects: Project[] = getProjects();
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.metadata.publishedAt,
  }));

  const routes = ['', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...projectUrls]; // Combine all routes and projects
}
