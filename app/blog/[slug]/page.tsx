import { notFound } from "next/navigation"
import { getPostBySlug, getAllPosts } from "@/db/posts"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="flex flex-col gap-8 max-w-4xl mx-auto">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      {/* Header */}
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {post.category}
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="h-3 w-3" />
            {post.date}
          </span>
          <span className="text-muted-foreground">•</span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="text-xl text-muted-foreground">{post.excerpt}</p>
      </header>

      {/* Separator */}
      <div className="h-px bg-border" />

      {/* Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <div className="text-lg leading-relaxed space-y-4">
          {post.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <div className="space-y-4">
              <p>
                This is a placeholder for the full blog post content. In a real
                application, this would contain the complete article text,
                formatted with markdown or HTML.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Key Takeaways
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>This is a sample blog post structure</li>
                <li>You can add rich content here</li>
                <li>Markdown or HTML can be rendered</li>
                <li>Images, code blocks, and more can be included</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col gap-4 pt-8 border-t">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Posts
        </Link>
      </footer>
    </article>
  )
}
