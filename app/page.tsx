"use client"

import { useState } from "react"
import { Course } from "@/components/course"
import { ComparisonModal } from "@/components/comparison-modal"
import { courses, Course as CourseType } from "@/lib/courses"
import { reviews } from "@/lib/reviews"
import { blogPosts } from "@/lib/blog-posts"
import { providers } from "@/lib/providers"
import { ReviewCard } from "@/components/review-card"
import { BlogPostCard } from "@/components/blog-post-card"
import { ProviderCard } from "@/components/provider-card"
import { Search } from "@/components/search"
import Link from "next/link"

export default function Home() {
  const [selectedCourses, setSelectedCourses] = useState<CourseType[]>([])
  const [isComparisonOpen, setIsComparisonOpen] = useState(false)

  const handleCompare = (course: CourseType) => {
    if (selectedCourses.length < 2) {
      setSelectedCourses([...selectedCourses, course])
    }
    if (selectedCourses.length === 1) {
      setIsComparisonOpen(true)
    }
  }

  const handleCloseComparison = () => {
    setIsComparisonOpen(false)
    setSelectedCourses([])
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">AI Course Comparison</h1>
      <Search />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Course key={course.id} course={course} onCompare={handleCompare} />
        ))}
      </div>
      
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Featured Providers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.slice(0, 3).map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
        <div className="text-center mt-4">
          <Link href="/providers" className="text-blue-500 hover:underline">
            View all providers
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Latest Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className="text-center mt-4">
          <Link href="/reviews" className="text-blue-500 hover:underline">
            View all reviews
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-4">
          <Link href="/blog" className="text-blue-500 hover:underline">
            View all blog posts
          </Link>
        </div>
      </section>
      
      <ComparisonModal
        isOpen={isComparisonOpen}
        onClose={handleCloseComparison}
        courses={selectedCourses}
      />
    </div>
  )
}

