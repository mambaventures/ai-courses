"use client"

import { useState } from "react"
import { providers } from "@/lib/providers"
import { courses } from "@/lib/courses"
import { reviews } from "@/lib/reviews"
import { blogPosts } from "@/lib/blog-posts"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ReviewCard } from "@/components/review-card"
import { BlogPostCard } from "@/components/blog-post-card"
import { StarIcon } from 'lucide-react'

export default function ProviderProfilePage({ params }: { params: { id: string } }) {
  const provider = providers.find((p) => p.id === params.id)

  if (!provider) {
    notFound()
  }

  const providerCourses = courses.filter((course) => provider.coursesOffered.includes(course.name))
  const providerReviews = reviews.filter((review) => providerCourses.some((course) => course.id === review.courseId))
  const relatedBlogPosts = blogPosts.filter((post) => post.tags.includes(provider.name))

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Form submitted:", { name, email, message })
    // Reset form
    setName("")
    setEmail("")
    setMessage("")
    alert("Message sent successfully!")
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <Image src={provider.logo} alt={provider.name} width={100} height={100} className="rounded-full" />
        <div>
          <h1 className="text-3xl font-bold">{provider.name}</h1>
          <div className="flex items-center mt-2">
            <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 font-semibold">{provider.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">About {provider.name}</h2>
          <p className="text-gray-600 mb-4">{provider.description}</p>
          <div className="text-sm">
            <p><strong>Founded:</strong> {provider.foundedYear}</p>
            <p><strong>Headquarters:</strong> {provider.headquarters}</p>
            <p><strong>Website:</strong> <a href={provider.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{provider.website}</a></p>
          </div>
          <h3 className="text-xl font-semibold mt-4 mb-2">Specializations</h3>
          <div className="flex flex-wrap gap-2">
            {provider.specializations.map((spec, index) => (
              <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">{spec}</span>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Courses Offered</h2>
          <div className="space-y-4">
            {providerCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <CardTitle>{course.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{course.description}</p>
                  <div className="mt-2 text-sm">
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Level:</strong> {course.level}</p>
                    <p><strong>Price:</strong> {course.price}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">User Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providerReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Related Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedBlogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Contact {provider.name}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </section>
      
      <div className="mt-8">
        <Link href="/providers" className="text-blue-500 hover:underline">
          &larr; Back to all providers
        </Link>
      </div>
    </div>
  )
}

