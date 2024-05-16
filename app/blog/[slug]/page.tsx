import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { formatDate, getBlogPosts } from 'app/blog/utils';
import { baseUrl } from 'app/sitemap';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { Metadata } from 'next';

type BlogPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  let ogImage = image ? image : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
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

async function fetchPostContent(slug: string) {
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, { scope: data });

  return { content: mdxSource, metadata: data };
}

export default async function Blog({ params }: BlogPageProps) {
  if (!params || !params.slug) {
    notFound();
  }

  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  const { content, metadata } = await fetchPostContent(params.slug);

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: metadata.title,
            datePublished: metadata.publishedAt,
            dateModified: metadata.publishedAt,
            description: metadata.summary,
            image: metadata.image
              ? `${baseUrl}${metadata.image}`
              : `/og?title=${encodeURIComponent(metadata.title)}`,
            url: `${baseUrl}/blog/${params.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">{metadata.title}</h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{formatDate(metadata.publishedAt)}</p>
      </div>
      <article className="prose">
        <CustomMDX source={content} />
      </article>
    </section>
  );
}
