"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Course } from "@/components/course"
import { ReviewCard } from "@/components/review-card"
import { BlogPostCard } from "@/components/blog-post-card"
import { searchCourses, Course as CourseType } from "@/lib/courses"
import { searchReviews, Review } from "@/lib/reviews"
import { searchBlogPosts, BlogPost } from "@/lib/blog-posts"

export function Search() {
  const [query, setQuery] = useState("")
  const [courses, setCourses] = useState<CourseType[]>([])
  const [reviews, setReviews] = useState<Review[]>([])
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  const handleSearch = () => {
    setCourses(searchCourses(query))
    setReviews(searchReviews(query))
    setBlogPosts(searchBlogPosts(query))
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Search courses, reviews, and blog posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>
      {courses.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course) => (
              <Course key={course.id} course={course} onCompare={() => {}} />
            ))}
          </div>
        </div>
      )}
      {reviews.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      )}
      {blogPosts.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

