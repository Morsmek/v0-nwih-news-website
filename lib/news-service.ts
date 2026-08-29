import type { Article } from "./types"
import { articles as allArticles } from "./articles-data"

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

interface GetNewsParams {
  category?: string
  region?: string
  count?: number
  featured?: boolean
  breaking?: boolean
}

function matchesCategory(article: Article, category: string) {
  return article.category.toLowerCase() === category.toLowerCase()
}

export async function getNews({
  category,
  region,
  count = 10,
  featured,
  breaking,
}: GetNewsParams = {}): Promise<Article[]> {
  await delay(40)

  let filtered = [...allArticles]

  if (featured) {
    filtered = filtered.filter((article) => article.featured)
  }

  if (breaking) {
    filtered = filtered.filter((article) => article.breaking)
  }

  if (category && category !== "general") {
    filtered = filtered.filter((article) => matchesCategory(article, category))
  }

  if (region === "europe") {
    filtered = filtered.filter(
      (article) =>
        article.category === "Europe" ||
        article.tags?.includes("europe") ||
        article.content.toLowerCase().includes("european") ||
        article.content.toLowerCase().includes("europe"),
    )
  }

  filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return filtered.slice(0, count)
}

export async function getArticle(id: string): Promise<Article | null> {
  await delay(40)
  return allArticles.find((article) => article.id === id) ?? null
}

export async function getRelatedNews(category: string, count: number, excludeId?: string): Promise<Article[]> {
  await delay(40)

  const related = allArticles.filter((article) => article.category === category && article.id !== excludeId)

  related.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return related.slice(0, count)
}

export async function getMostRead(count = 5): Promise<Article[]> {
  await delay(20)
  return [...allArticles].sort((a, b) => (b.views ?? 0) - (a.views ?? 0)).slice(0, count)
}

export async function searchNews(query: string): Promise<Article[]> {
  await delay(180)

  if (!query.trim()) return []

  const searchTerms = query.toLowerCase().split(/\s+/).filter(Boolean)

  const results = allArticles.filter((article) => {
    const haystack = `${article.title} ${article.description} ${article.content} ${article.category} ${article.author}`.toLowerCase()
    return searchTerms.some((term) => haystack.includes(term))
  })

  results.sort((a, b) => getRelevanceScore(b, searchTerms) - getRelevanceScore(a, searchTerms))

  return results
}

export function getArticleIds() {
  return allArticles.map((article) => article.id)
}

function getRelevanceScore(article: Article, searchTerms: string[]): number {
  let score = 0

  searchTerms.forEach((term) => {
    const safe = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    const re = new RegExp(safe, "g")
    score += (article.title.toLowerCase().match(re) || []).length * 3
    score += (article.description.toLowerCase().match(re) || []).length * 2
    score += (article.content.toLowerCase().match(re) || []).length
  })

  return score
}
