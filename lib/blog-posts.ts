export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in Education",
    excerpt: "Exploring how artificial intelligence is transforming the learning experience.",
    author: "Dr. Emily Chen",
    date: "2023-06-15",
    content: "Artificial Intelligence is revolutionizing education in numerous ways. From personalized learning paths to intelligent tutoring systems, AI is enhancing the educational experience for students of all ages. This post explores the current applications of AI in education and looks ahead to future developments that could reshape how we learn and teach.",
    tags: ["AI", "Education", "EdTech"],
  },
  {
    id: "2",
    title: "Choosing the Right AI Course: A Comprehensive Guide",
    excerpt: "Tips and considerations for selecting the best AI course for your career goals.",
    author: "Mark Williams",
    date: "2023-06-10",
    content: "With the growing demand for AI skills, choosing the right course is crucial for your career development. This guide walks you through important factors to consider, such as course content, instructor expertise, hands-on projects, and industry recognition. Whether you're a beginner or looking to advance your AI skills, this post will help you make an informed decision.",
    tags: ["AI Courses", "Career Development", "Learning"],
  },
  {
    id: "3",
    title: "Ethics in AI: What Every Student Should Know",
    excerpt: "An overview of ethical considerations in artificial intelligence and their importance in AI education.",
    author: "Dr. Sophia Rodriguez",
    date: "2023-06-05",
    content: "As AI becomes increasingly prevalent in our society, understanding the ethical implications is crucial. This post discusses key ethical considerations in AI, including bias, privacy, and accountability. We explore why it's essential for AI courses to incorporate ethics into their curriculum and how students can develop a strong ethical framework for working with AI technologies.",
    tags: ["AI Ethics", "AI Education", "Technology"],
  },
];

export function searchBlogPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter((post) =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}

