export interface Course {
  id: string;
  name: string;
  provider: string;
  duration: string;
  level: string;
  price: string;
  rating: number;
  description: string;
  tags: string[];
}

export const courses: Course[] = [
  {
    id: "1",
    name: "Introduction to Artificial Intelligence",
    provider: "Coursera",
    duration: "8 weeks",
    level: "Beginner",
    price: "$49/month",
    rating: 4.7,
    description: "Learn the fundamentals of AI, including machine learning, neural networks, and deep learning.",
    tags: ["AI", "Machine Learning", "Neural Networks"],
  },
  {
    id: "2",
    name: "Machine Learning Specialization",
    provider: "Stanford Online",
    duration: "3 months",
    level: "Intermediate",
    price: "$79/month",
    rating: 4.9,
    description: "Master machine learning techniques and gain practical experience with real-world projects.",
    tags: ["Machine Learning", "Data Science", "Python"],
  },
  {
    id: "3",
    name: "Deep Learning Nanodegree",
    provider: "Udacity",
    duration: "4 months",
    level: "Advanced",
    price: "$399/month",
    rating: 4.8,
    description: "Dive deep into neural networks, computer vision, and natural language processing.",
    tags: ["Deep Learning", "Computer Vision", "NLP"],
  },
  {
    id: "4",
    name: "AI for Everyone",
    provider: "edX",
    duration: "4 weeks",
    level: "Beginner",
    price: "Free (Certificate: $49)",
    rating: 4.6,
    description: "A non-technical course designed to help you understand AI's implications in various industries.",
    tags: ["AI", "Business", "Ethics"],
  },
  {
    id: "5",
    name: "Applied AI with Deep Learning",
    provider: "IBM",
    duration: "6 weeks",
    level: "Intermediate",
    price: "$39/month",
    rating: 4.5,
    description: "Learn to apply deep learning techniques to solve real-world problems using popular frameworks.",
    tags: ["Deep Learning", "TensorFlow", "Keras"],
  },
];

export function searchCourses(query: string): Course[] {
  const lowercaseQuery = query.toLowerCase();
  return courses.filter((course) =>
    course.name.toLowerCase().includes(lowercaseQuery) ||
    course.provider.toLowerCase().includes(lowercaseQuery) ||
    course.description.toLowerCase().includes(lowercaseQuery) ||
    course.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}

