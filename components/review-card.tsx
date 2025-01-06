import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { StarIcon } from 'lucide-react'
import { Review } from "@/lib/reviews"

export function ReviewCard({ review }: { review: Review }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{review.author}</span>
          <span className="flex items-center">
            {review.rating}
            <StarIcon className="w-4 h-4 ml-1 text-yellow-400 fill-current" />
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-2">{review.content}</p>
        <p className="text-xs text-gray-400">{review.date}</p>
      </CardContent>
    </Card>
  )
}

