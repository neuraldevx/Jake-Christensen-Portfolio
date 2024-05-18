import { getBlogPosts } from 'app/blog/utils';

export default function handler(req, res) {
  const posts = getBlogPosts();
  res.status(200).json(posts);
}
