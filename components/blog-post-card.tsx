import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogPost } from "@/lib/blog-posts"
import Link from "next/link"

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-2">{post.excerpt}</p>
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
        <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
          Read more
        </Link>
      </CardContent>
    </Card>
  )
}

