export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  date: string
  readTime: string
  category: string
  content?: string
  featured?: boolean
}

// Helper function to generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces, underscores, and hyphens with single hyphen
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    slug: "getting-started-with-nextjs-15",
    excerpt: "Learn how to build modern web applications with Next.js 15 and React Server Components.",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
    featured: true,
    content: "Full article content here...",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    slug: "mastering-tailwind-css",
    excerpt: "Discover advanced techniques for building beautiful UIs with Tailwind CSS utility classes.",
    date: "December 10, 2024",
    readTime: "8 min read",
    category: "Design",
    featured: true,
    content: "Full article content here...",
  },
  {
    id: 3,
    title: "TypeScript Best Practices",
    slug: "typescript-best-practices",
    excerpt: "Explore essential TypeScript patterns and practices for writing maintainable code.",
    date: "December 5, 2024",
    readTime: "6 min read",
    category: "Programming",
    featured: true,
    content: "Full article content here...",
  },
  {
    id: 4,
    title: "Building Responsive Layouts",
    slug: "building-responsive-layouts",
    excerpt: "A comprehensive guide to creating responsive designs that work on all devices.",
    date: "November 28, 2024",
    readTime: "4 min read",
    category: "Design",
    featured: false,
    content: "Full article content here...",
  },
  {
    id: 5,
    title: "React Hooks Explained",
    slug: "react-hooks-explained",
    excerpt: "Understanding React Hooks and how to use them effectively in your applications.",
    date: "November 20, 2024",
    readTime: "7 min read",
    category: "Web Development",
    featured: false,
    content: "Full article content here...",
  },
  {
    id: 6,
    title: "CSS Grid vs Flexbox",
    slug: "css-grid-vs-flexbox",
    excerpt: "When to use CSS Grid and when to use Flexbox for your layout needs.",
    date: "November 15, 2024",
    readTime: "5 min read",
    category: "Design",
    featured: false,
    content: "Full article content here...",
  },
  {
    id: 7,
    title: "Introduction to Server Components",
    slug: "introduction-to-server-components",
    excerpt: "Understanding React Server Components and their benefits in Next.js applications.",
    date: "November 10, 2024",
    readTime: "6 min read",
    category: "Web Development",
    featured: false,
    content: "Full article content here...",
  },
  {
    id: 8,
    title: "Modern JavaScript Features",
    slug: "modern-javascript-features",
    excerpt: "Exploring the latest JavaScript features that every developer should know.",
    date: "November 5, 2024",
    readTime: "5 min read",
    category: "Programming",
    featured: false,
    content: "Full article content here...",
  },
]

// Helper functions to filter posts
export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured)
}

export function getRecentPosts(limit?: number): BlogPost[] {
  const posts = blogPosts
    .filter((post) => !post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return limit ? posts.slice(0, limit) : posts
}

export function getPostById(id: number): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return blogPosts
}
