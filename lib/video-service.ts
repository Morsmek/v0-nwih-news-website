import type { VideoNews } from "./types"

// Mock video data for demonstration purposes
// In a real application, this would be replaced with API calls to a video service
const mockVideos: VideoNews[] = [
  {
    id: "v1",
    title: "EU Leaders Discuss Climate Policy at Brussels Summit",
    description:
      "European Union leaders gathered in Brussels to discuss ambitious new climate targets and policies to combat climate change.",
    thumbnailUrl: "/eu-climate-summit.png",
    videoUrl: "https://example.com/videos/eu-climate-summit.mp4",
    duration: "5:24",
    publishedAt: "2023-05-15T14:30:00Z",
    category: "Europe",
    views: 12450,
    featured: true,
    author: "Emma Johnson",
  },
  {
    id: "v2",
    title: "Tech Giants Face New EU Regulations",
    description:
      "The European Union has introduced new regulations aimed at curbing the market power of tech giants. What does this mean for consumers?",
    thumbnailUrl: "/placeholder.svg?height=720&width=1280&query=EU digital regulation tech companies",
    videoUrl: "https://example.com/videos/eu-tech-regulations.mp4",
    duration: "7:12",
    publishedAt: "2023-05-14T10:15:00Z",
    category: "Technology",
    views: 8320,
    author: "Michael Chen",
  },
  {
    id: "v3",
    title: "Champions League Final Preview",
    description:
      "A comprehensive preview of the upcoming UEFA Champions League final between Real Madrid and Liverpool.",
    thumbnailUrl: "/placeholder.svg?height=720&width=1280&query=Champions League football stadium",
    videoUrl: "https://example.com/videos/champions-league-preview.mp4",
    duration: "8:45",
    publishedAt: "2023-05-13T16:20:00Z",
    category: "Sports",
    views: 15780,
    featured: true,
    author: "David Martinez",
  },
  {
    id: "v4",
    title: "ECB Raises Interest Rates: Economic Impact Explained",
    description:
      "Financial experts explain the implications of the European Central Bank's decision to raise interest rates amid inflation concerns.",
    thumbnailUrl: "/placeholder.svg?height=720&width=1280&query=European Central Bank headquarters",
    videoUrl: "https://example.com/videos/ecb-interest-rates.mp4",
    duration: "6:18",
    publishedAt: "2023-05-12T09:45:00Z",
    category: "Business",
    views: 6240,
    author: "Sophie Dubois",
  },
  {
    id: "v5",
    title: "Mediterranean Diet: Health Benefits Revealed",
    description:
      "New research shows how following a Mediterranean diet could significantly reduce the risk of developing various health conditions.",
    thumbnailUrl: "/placeholder.svg?height=720&width=1280&query=Mediterranean diet healthy food",
    videoUrl: "https://example.com/videos/mediterranean-diet.mp4",
    duration: "4:56",
    publishedAt: "2023-05-11T13:10:00Z",
    category: "Health",
    views: 9870,
    author: "Laura Rossi",
  },
  {
    id: "v6",
    title: "Inside the European Parliament's AI Regulation",
    description:
      "An in-depth look at the European Parliament's landmark legislation to regulate artificial intelligence and its global implications.",
    thumbnailUrl: "/placeholder.svg?height=720&width=1280&query=European Parliament AI technology",
    videoUrl: "https://example.com/videos/eu-ai-regulation.mp4",
    duration: "9:32",
    publishedAt: "2023-05-10T11:25:00Z",
    category: "Technology",
    views: 7430,
    featured: true,
    author: "Thomas Weber",
  },
  {
    id: "v7",
    title: "Paris Fashion Week: Sustainable Luxury Trends",
    description:
      "Highlights from Paris Fashion Week showcasing how designers are embracing sustainability without compromising on luxury.",
    thumbnailUrl: "/placeholder.svg?height=720&width=1280&query=Paris Fashion Week runway models",
    videoUrl: "https://example.com/videos/paris-fashion-week.mp4",
    duration: "7:15",
    publishedAt: "2023-05-09T15:40:00Z",
    category: "Lifestyle",
    views: 11250,
    author: "Isabelle Moreau",
  },
  {
    id: "v8",
    title: "Deep Sea Discoveries in the Mediterranean",
    description:
      "Marine biologists reveal fascinating new species discovered during a deep-sea expedition in the Mediterranean Sea.",
    thumbnailUrl: "/placeholder.svg?height=720&width=1280&query=deep sea marine biology research",
    videoUrl: "https://example.com/videos/mediterranean-discoveries.mp4",
    duration: "6:48",
    publishedAt: "2023-05-08T12:30:00Z",
    category: "Science",
    views: 5680,
    author: "Andreas Dimitriou",
  },
  {
    id: "v9",
    title: "European Tourism Recovery: Post-Pandemic Analysis",
    description:
      "Tourism experts analyze how European destinations have rebounded from the COVID-19 pandemic and what's next for the industry.",
    thumbnailUrl: "/placeholder.svg?height=720&width=1280&query=European tourism Venice gondola",
    videoUrl: "https://example.com/videos/european-tourism.mp4",
    duration: "5:52",
    publishedAt: "2023-05-07T14:15:00Z",
    category: "Travel",
    views: 4920,
    author: "Carlos Mendez",
  },
  {
    id: "v10",
    title: "ESA's Mission to Jupiter's Moons Explained",
    description:
      "A detailed explanation of the European Space Agency's ambitious mission to explore Jupiter's icy moons and search for signs of life.",
    thumbnailUrl: "/placeholder.svg?height=720&width=1280&query=Jupiter icy moons space mission",
    videoUrl: "https://example.com/videos/esa-jupiter-mission.mp4",
    duration: "8:24",
    publishedAt: "2023-05-06T10:50:00Z",
    category: "Science",
    views: 8760,
    author: "Lukas Schmidt",
  },
  {
    id: "v11",
    title: "Breaking: Major Political Developments in Brussels",
    description: "Live coverage of the latest political developments from the heart of the European Union.",
    thumbnailUrl: "/placeholder.svg?height=720&width=1280&query=Brussels European Commission building",
    videoUrl: "https://example.com/videos/brussels-politics.mp4",
    duration: "10:15",
    publishedAt: "2023-05-05T16:20:00Z",
    category: "Politics",
    views: 13580,
    featured: true,
    author: "Jean Dupont",
  },
  {
    id: "v12",
    title: "European Energy Crisis: Solutions and Challenges",
    description:
      "Energy experts discuss the ongoing European energy challenges and potential solutions for a sustainable future.",
    thumbnailUrl: "/placeholder.svg?height=720&width=1280&query=European energy wind turbines solar panels",
    videoUrl: "https://example.com/videos/energy-crisis.mp4",
    duration: "9:48",
    publishedAt: "2023-05-04T13:40:00Z",
    category: "Business",
    views: 7290,
    author: "Klaus Mueller",
  },
  {
    id: "v13",
    title: "Inside Europe's Most Innovative Startups",
    description: "A tour of the most promising and innovative startups across European tech hubs.",
    thumbnailUrl: "/placeholder.svg?height=720&width=1280&query=European tech startup office",
    videoUrl: "https://example.com/videos/european-startups.mp4",
    duration: "7:36",
    publishedAt: "2023-05-03T11:15:00Z",
    category: "Technology",
    views: 6840,
    author: "Sofia Bergman",
  },
  {
    id: "v14",
    title: "Euro 2024: Qualifying Matches Highlights",
    description: "Catch up on all the action from the latest Euro 2024 qualifying matches across the continent.",
    thumbnailUrl: "/placeholder.svg?height=720&width=1280&query=football soccer match stadium",
    videoUrl: "https://example.com/videos/euro-qualifying.mp4",
    duration: "8:52",
    publishedAt: "2023-05-02T19:30:00Z",
    category: "Sports",
    views: 18920,
    author: "Marco Rossi",
  },
  {
    id: "v15",
    title: "Cultural Treasures: Europe's Hidden Museums",
    description:
      "Discover lesser-known but extraordinary museums across Europe that house remarkable cultural treasures.",
    thumbnailUrl: "/placeholder.svg?height=720&width=1280&query=European museum art gallery",
    videoUrl: "https://example.com/videos/european-museums.mp4",
    duration: "6:24",
    publishedAt: "2023-05-01T14:50:00Z",
    category: "Culture",
    views: 5430,
    author: "Helena Kowalski",
  },
]

// Generate more mock videos for different categories
const generateMoreVideos = (): VideoNews[] => {
  const baseVideos = [...mockVideos]
  const categories = ["Europe", "World", "Business", "Technology", "Sports", "Lifestyle", "Health", "Science"]

  // Generate additional videos for each category
  categories.forEach((category) => {
    for (let i = 0; i < 3; i++) {
      const id = `v${baseVideos.length + 1}`
      baseVideos.push({
        id,
        title: `${category} Video Report ${i + 1}`,
        description: `This is a sample description for a ${category.toLowerCase()} video news report.`,
        thumbnailUrl: `/placeholder.svg?height=720&width=1280&query=${category} news report`,
        videoUrl: `https://example.com/videos/${category.toLowerCase()}-report-${i + 1}.mp4`,
        duration: `${Math.floor(Math.random() * 10) + 2}:${Math.floor(Math.random() * 60)
          .toString()
          .padStart(2, "0")}`,
        publishedAt: new Date(Date.now() - Math.floor(Math.random() * 14 * 24 * 60 * 60 * 1000)).toISOString(),
        category,
        views: Math.floor(Math.random() * 15000) + 1000,
        author: "NWIH Video Team",
      })
    }
  })

  return baseVideos
}

const allVideos = generateMoreVideos()

interface GetVideosParams {
  category?: string
  featured?: boolean
  count?: number
}

export async function getVideos({ category, featured, count = 10 }: GetVideosParams = {}): Promise<VideoNews[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  let filteredVideos = [...allVideos]

  if (category) {
    filteredVideos = filteredVideos.filter((video) => video.category.toLowerCase() === category.toLowerCase())
  }

  if (featured) {
    filteredVideos = filteredVideos.filter((video) => video.featured === true)
  }

  // Sort by date (newest first)
  filteredVideos.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return filteredVideos.slice(0, count)
}

export async function getVideo(id: string): Promise<VideoNews | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  const video = allVideos.find((video) => video.id === id)
  return video || null
}

export async function getRelatedVideos(category: string, count: number, excludeId?: string): Promise<VideoNews[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  const relatedVideos = allVideos.filter(
    (video) => video.category === category && (!excludeId || video.id !== excludeId),
  )

  // Sort by date (newest first)
  relatedVideos.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return relatedVideos.slice(0, count)
}

export async function searchVideos(query: string): Promise<VideoNews[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  if (!query.trim()) return []

  const searchTerms = query.toLowerCase().split(" ")

  const results = allVideos.filter((video) => {
    const titleMatch = searchTerms.some((term) => video.title.toLowerCase().includes(term))
    const descriptionMatch = searchTerms.some((term) => video.description.toLowerCase().includes(term))
    const categoryMatch = searchTerms.some((term) => video.category.toLowerCase().includes(term))

    return titleMatch || descriptionMatch || categoryMatch
  })

  // Sort by relevance (simple algorithm: count occurrences of search terms)
  results.sort((a, b) => {
    const scoreA = getRelevanceScore(a, searchTerms)
    const scoreB = getRelevanceScore(b, searchTerms)
    return scoreB - scoreA
  })

  return results
}

function getRelevanceScore(video: VideoNews, searchTerms: string[]): number {
  let score = 0

  searchTerms.forEach((term) => {
    // Title matches are weighted higher
    const titleMatches = (video.title.toLowerCase().match(new RegExp(term, "g")) || []).length
    score += titleMatches * 3

    // Description matches
    const descMatches = (video.description.toLowerCase().match(new RegExp(term, "g")) || []).length
    score += descMatches * 2

    // Category matches
    if (video.category.toLowerCase().includes(term)) {
      score += 1
    }
  })

  return score
}
