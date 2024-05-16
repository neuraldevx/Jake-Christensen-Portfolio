import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the types for the blog posts
export interface BlogPostMetadata {
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
}

export interface BlogPost {
  slug: string;
  metadata: BlogPostMetadata;
  content: string;
}

// Function to get all blog posts
export function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(blogDir);

  const posts = filenames.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: filename.replace(/\.mdx$/, ''),
      metadata: data as BlogPostMetadata,
      content,
    };
  });

  return posts;
}

// Function to format the date
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
