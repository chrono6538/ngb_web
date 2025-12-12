import Link from "next/link";
import { BlogPost } from "@/lib/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col rounded-lg border bg-white p-4 shadow-sm">
      <div className="h-40 bg-gray-100 text-xs text-gray-400">
        <div className="flex h-full items-center justify-center">
          {post.heroImage}
        </div>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-primary">{post.title}</h3>
      <p className="mt-2 text-xs text-gray-500">
        {post.author} • {post.date} • {post.readTimeMinutes} min read
      </p>
      <p className="mt-2 text-sm text-secondary">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-3 text-sm font-semibold text-accent hover:underline"
      >
        Read more →
      </Link>
    </article>
  );
}
