export interface Provider {
  id: string;
  name: string;
  logo: string;
  description: string;
  foundedYear: number;
  headquarters: string;
  website: string;
  coursesOffered: string[];
  specializations: string[];
  rating: number;
}

export const providers: Provider[] = [
  {
    id: "1",
    name: "Coursera",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Coursera is a global online learning platform that offers anyone, anywhere, access to online courses and degrees from leading universities and companies.",
    foundedYear: 2012,
    headquarters: "Mountain View, California, USA",
    website: "https://www.coursera.org",
    coursesOffered: ["Introduction to Artificial Intelligence"],
    specializations: ["Computer Science", "Data Science", "Business"],
    rating: 4.7,
  },
  {
    id: "2",
    name: "Stanford Online",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Stanford Online offers a wide range of professional education opportunities in conjunction with many of the University's schools and departments.",
    foundedYear: 2006,
    headquarters: "Stanford, California, USA",
    website: "https://online.stanford.edu",
    coursesOffered: ["Machine Learning Specialization"],
    specializations: ["Computer Science", "Engineering", "Medicine"],
    rating: 4.9,
  },
  {
    id: "3",
    name: "Udacity",
    logo: "/placeholder.svg?height=100&width=100",
    description: "Udacity is a for-profit educational organization offering massive open online courses. Their mission is to train the world's workforce in the careers of the future.",
    foundedYear: 2011,
    headquarters: "Mountain View, California, USA",
    website: "https://www.udacity.com",
    coursesOffered: ["Deep Learning Nanodegree"],
    specializations: ["Artificial Intelligence", "Data Science", "Programming"],
    rating: 4.6,
  },
  {
    id: "4",
    name: "edX",
    logo: "/placeholder.svg?height=100&width=100",
    description: "edX is a massive open online course provider created by Harvard and MIT. It hosts online university-level courses in a wide range of disciplines to a worldwide student body.",
    foundedYear: 2012,
    headquarters: "Cambridge, Massachusetts, USA",
    website: "https://www.edx.org",
    coursesOffered: ["AI for Everyone"],
    specializations: ["Computer Science", "Data Science", "Business"],
    rating: 4.8,
  },
  {
    id: "5",
    name: "IBM",
    logo: "/placeholder.svg?height=100&width=100",
    description: "IBM offers a wide range of technology and consulting services, including a broad portfolio of cloud computing, artificial intelligence, and other technology services.",
    foundedYear: 1911,
    headquarters: "Armonk, New York, USA",
    website: "https://www.ibm.com",
    coursesOffered: ["Applied AI with Deep Learning"],
    specializations: ["Artificial Intelligence", "Cloud Computing", "Cybersecurity"],
    rating: 4.5,
  },
];

export function searchProviders(query: string): Provider[] {
  const lowercaseQuery = query.toLowerCase();
  return providers.filter((provider) =>
    provider.name.toLowerCase().includes(lowercaseQuery) ||
    provider.description.toLowerCase().includes(lowercaseQuery) ||
    provider.specializations.some((spec) => spec.toLowerCase().includes(lowercaseQuery)) ||
    provider.coursesOffered.some((course) => course.toLowerCase().includes(lowercaseQuery))
  );
}

