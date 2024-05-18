import { BlogPosts } from 'app/components/posts';

export const metadata = {
  title: 'Blog',
};

export async function getBlogPosts() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/blog-posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  const data = await response.json();
  return data;
}

const BlogPage = async () => {
  const posts = await getBlogPosts();

  return (
    <div>
      <h1>Blog</h1>
      <BlogPosts posts={posts} />
    </div>
  );
};

export default BlogPage;
