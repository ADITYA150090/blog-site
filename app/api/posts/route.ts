import { NextResponse } from "next/server"
import { blogPosts, getFeaturedPosts, getRecentPosts, getAllPosts } from "@/db/posts"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type")
  const limit = searchParams.get("limit")

  try {
    if (type === "featured") {
      const posts = getFeaturedPosts()
      return NextResponse.json({ posts })
    }

    if (type === "recent") {
      const posts = getRecentPosts(limit ? parseInt(limit) : undefined)
      return NextResponse.json({ posts })
    }

    // Return all posts if no type specified
    const posts = getAllPosts()
    return NextResponse.json({ posts })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    )
  }
}
