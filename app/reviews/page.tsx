"use client"

import { useState } from "react"
import { reviews } from "@/lib/reviews"
import { ReviewCard } from "@/components/review-card"
import { ReviewForm } from "@/components/review-form"
import { Pagination } from "@/components/pagination"
import Link from "next/link"

const ITEMS_PER_PAGE = 6

export default function ReviewsPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(reviews.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentReviews = reviews.slice(startIndex, endIndex)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Course Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentReviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Submit a Review</h2>
        <ReviewForm />
      </div>
      <div className="mt-8">
        <Link href="/" className="text-blue-500 hover:underline">
          &larr; Back to home
        </Link>
      </div>
    </div>
  )
}

