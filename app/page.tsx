import { BookOpen } from "lucide-react"
import { BlogPostCard } from "@/components/BlogPostCard"
import { RecentPostCard } from "@/components/RecentPostCard"
import { getFeaturedPosts, getRecentPosts } from "@/db/posts"

export default function Home() {
  const featuredPosts = getFeaturedPosts()
  const recentPosts = getRecentPosts(3)

  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hey, I&apos;m Aditya 👋
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Frontend Developer & Designer sharing insights on web development, design, and technology.
        </p>
      </div>

      {/* Featured Posts */}
      <section className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          <h2 className="text-2xl font-semibold">Featured Posts</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Recent Posts</h2>
        <div className="flex flex-col gap-4">
          {recentPosts.map((post) => (
            <RecentPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}