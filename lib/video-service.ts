import type { VideoNews } from "./types"
import { videos as allVideos } from "./videos-data"

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

interface GetVideosParams {
  category?: string
  featured?: boolean
  count?: number
}

export async function getVideos({ category, featured, count = 10 }: GetVideosParams = {}): Promise<VideoNews[]> {
  await delay(40)

  let filtered = [...allVideos]

  if (category) {
    filtered = filtered.filter((video) => video.category.toLowerCase() === category.toLowerCase())
  }

  if (featured) {
    filtered = filtered.filter((video) => video.featured)
  }

  filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return filtered.slice(0, count)
}

export async function getVideo(id: string): Promise<VideoNews | null> {
  await delay(40)
  return allVideos.find((video) => video.id === id) ?? null
}

export async function getRelatedVideos(category: string, count: number, excludeId?: string): Promise<VideoNews[]> {
  await delay(40)

  const related = allVideos.filter((video) => video.category === category && video.id !== excludeId)

  related.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return related.slice(0, count)
}

export async function searchVideos(query: string): Promise<VideoNews[]> {
  await delay(180)

  if (!query.trim()) return []

  const searchTerms = query.toLowerCase().split(/\s+/).filter(Boolean)

  const results = allVideos.filter((video) => {
    const haystack = `${video.title} ${video.description} ${video.category}`.toLowerCase()
    return searchTerms.some((term) => haystack.includes(term))
  })

  results.sort((a, b) => getRelevanceScore(b, searchTerms) - getRelevanceScore(a, searchTerms))

  return results
}

export function getVideoIds() {
  return allVideos.map((video) => video.id)
}

function getRelevanceScore(video: VideoNews, searchTerms: string[]): number {
  let score = 0

  searchTerms.forEach((term) => {
    const safe = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    const re = new RegExp(safe, "g")
    score += (video.title.toLowerCase().match(re) || []).length * 3
    score += (video.description.toLowerCase().match(re) || []).length * 2
    if (video.category.toLowerCase().includes(term)) score += 1
  })

  return score
}
