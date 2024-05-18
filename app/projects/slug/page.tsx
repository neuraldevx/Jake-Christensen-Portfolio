import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { Metadata } from 'next';

type ProjectPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const projectsDirectory = path.join(process.cwd(), 'content/projects');
  const filenames = fs.readdirSync(projectsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
  const projectsDirectory = path.join(process.cwd(), 'content/projects');
  const filePath = path.join(projectsDirectory, `${params.slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);

  let { title, publishedAt: publishedTime, summary: description, image } = data;
  let ogImage = image ? image : `/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `/projects/${params.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Project({ params }: ProjectPageProps) {
  if (!params || !params.slug) {
    notFound();
  }

  const projectsDirectory = path.join(process.cwd(), 'content/projects');
  const filePath = path.join(projectsDirectory, `${params.slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: data.title,
            datePublished: data.publishedAt,
            dateModified: data.publishedAt,
            description: data.summary,
            image: data.image ? data.image : `/og?title=${encodeURIComponent(data.title)}`,
            url: `/projects/${params.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">{data.title}</h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{new Date(data.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}</p>
      </div>
      <article className="prose">
        <CustomMDX source={mdxSource} />
      </article>
    </section>
  );
}
