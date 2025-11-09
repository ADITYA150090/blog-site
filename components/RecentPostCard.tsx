import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { BlogPost } from "@/db/posts"

interface RecentPostCardProps {
  post: BlogPost
}

export function RecentPostCard({ post }: RecentPostCardProps) {
  return (
    <article className="group flex flex-col gap-2 rounded-lg border bg-card p-4 transition-colors hover:bg-accent sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-2 flex-1">
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-1">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {post.date}
          </span>
          <span>{post.readTime}</span>
        </div>
      </div>
      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline sm:ml-4"
      >
        Read
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  )
}
