import { BlogPosts } from 'app/components/posts';

export const metadata = {
  title: 'Blog',
};

// Fetch the blog posts data
async function getBlogPosts() {
  const res = await fetch('/api/blog-posts'); // Adjust the fetch path as necessary
  return res.json();
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
