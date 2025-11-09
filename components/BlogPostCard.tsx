import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { BlogPost } from "@/db/posts"

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="group flex flex-col gap-3 rounded-lg border bg-card p-6 transition-colors hover:bg-accent">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
          {post.category}
        </span>
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {post.date}
        </span>
      </div>
      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
        {post.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-muted-foreground">{post.readTime}</span>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Read more
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
