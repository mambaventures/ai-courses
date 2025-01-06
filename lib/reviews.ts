export interface Review {
  id: string;
  courseId: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    courseId: "1",
    author: "John Doe",
    rating: 4.5,
    content: "Great introduction to AI concepts. The course was well-structured and easy to follow.",
    date: "2023-05-15",
  },
  {
    id: "2",
    courseId: "2",
    author: "Jane Smith",
    rating: 5,
    content: "This machine learning specialization is top-notch. I learned so much and feel ready to apply my skills.",
    date: "2023-06-02",
  },
  {
    id: "3",
    courseId: "3",
    author: "Mike Johnson",
    rating: 4.8,
    content: "The deep learning nanodegree was challenging but incredibly rewarding. Highly recommended for serious AI enthusiasts.",
    date: "2023-05-20",
  },
  {
    id: "4",
    courseId: "4",
    author: "Sarah Lee",
    rating: 4.2,
    content: "AI for Everyone is perfect for non-technical people looking to understand AI's impact. Could use more practical examples.",
    date: "2023-06-10",
  },
  {
    id: "5",
    courseId: "5",
    author: "Chris Taylor",
    rating: 4.7,
    content: "IBM's Applied AI course offers a great balance of theory and practice. The hands-on projects were particularly valuable.",
    date: "2023-05-28",
  },
];

export function searchReviews(query: string): Review[] {
  const lowercaseQuery = query.toLowerCase();
  return reviews.filter((review) =>
    review.author.toLowerCase().includes(lowercaseQuery) ||
    review.content.toLowerCase().includes(lowercaseQuery)
  );
}

