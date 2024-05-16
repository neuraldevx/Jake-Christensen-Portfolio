import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getBlogPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: fileName.replace(/\.mdx$/, ''),
      content,
      metadata: data,
    };
  });

  return posts;
}

export function formatDate(dateString: string) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, options);
}
