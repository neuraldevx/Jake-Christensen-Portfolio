import { useRouter } from 'next/router';
import { notFound } from 'next/navigation';
import { getProjects } from 'app/projects/utils';
import { baseUrl } from 'app/config'; // Import the baseUrl

export default function ProjectPage({ params }) {
  const { slug } = params;
  const project = getProjects().find(p => p.slug === slug);

  if (!project) {
    notFound();
    return null;
  }

  return (
    <section>
      <h1>{project.metadata.title}</h1>
      <p>{project.metadata.publishedAt}</p>
      <div>
        {project.content}
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map(project => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = getProjects().find(p => p.slug === params.slug);
  if (!project) return;

  const { title, publishedAt: publishedTime, summary: description, image } = project.metadata;
  const ogImage = image ? `${baseUrl}${image}` : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/projects/${project.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
