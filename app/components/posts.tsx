// Import necessary libraries and utilities
import React from 'react';
import { formatDate } from 'app/blog/utils';

// Define types for the post metadata and post
interface PostMetadata {
  title: string;
  publishedAt: string;
}

interface Post {
  slug: string;
  metadata: PostMetadata;
}

// Define the BlogPosts component with posts as a prop
export const BlogPosts = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug} className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
            {formatDate(post.metadata.publishedAt)}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            {post.metadata.title}
          </p>
        </div>
      ))}
    </div>
  );
};
