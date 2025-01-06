import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StarIcon } from 'lucide-react'
import { Course as CourseType } from "@/lib/courses"

interface CourseProps {
  course: CourseType;
  onCompare: (course: CourseType) => void;
}

export function Course({ course, onCompare }: CourseProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          <span>{course.name}</span>
          <Badge variant="secondary">{course.level}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex justify-between">
            <span className="font-semibold">Provider:</span>
            <span>{course.provider}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Duration:</span>
            <span>{course.duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Price:</span>
            <span>{course.price}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Rating:</span>
            <span className="flex items-center">
              {course.rating}
              <StarIcon className="w-4 h-4 ml-1 text-yellow-400 fill-current" />
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2">{course.description}</p>
          <Button onClick={() => onCompare(course)} className="mt-4">
            Compare
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

