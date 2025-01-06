import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Course } from "@/lib/courses"
import { StarIcon } from 'lucide-react'

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: Course[];
}

export function ComparisonModal({ isOpen, onClose, courses }: ComparisonModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Course Comparison</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              {courses.map((course) => (
                <TableHead key={course.id}>{course.name}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-semibold">Provider</TableCell>
              {courses.map((course) => (
                <TableCell key={course.id}>{course.provider}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Duration</TableCell>
              {courses.map((course) => (
                <TableCell key={course.id}>{course.duration}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Level</TableCell>
              {courses.map((course) => (
                <TableCell key={course.id}>{course.level}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Price</TableCell>
              {courses.map((course) => (
                <TableCell key={course.id}>{course.price}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Rating</TableCell>
              {courses.map((course) => (
                <TableCell key={course.id} className="flex items-center">
                  {course.rating}
                  <StarIcon className="w-4 h-4 ml-1 text-yellow-400 fill-current" />
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-semibold">Description</TableCell>
              {courses.map((course) => (
                <TableCell key={course.id}>{course.description}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  )
}

