import { blogPosts } from "@/lib/blog-posts"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="text-sm text-gray-600 mb-8">
        <span>{post.author}</span> | <span>{post.date}</span>
      </div>
      <div className="prose max-w-none">
        <p>{post.content}</p>
      </div>
      <div className="mt-8">
        <Link href="/blog" className="text-blue-500 hover:underline">
          &larr; Back to all posts
        </Link>
      </div>
    </div>
  )
}

