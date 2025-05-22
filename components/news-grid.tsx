import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import type { Article } from "@/lib/types"

interface NewsGridProps {
  articles: Article[]
}

export function NewsGrid({ articles }: NewsGridProps) {
  if (!articles.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No articles found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <div
          key={article.id}
          className="border border-blue-900/30 bg-blue-900/10 rounded-lg overflow-hidden hover:bg-blue-900/20 transition-colors"
        >
          <Link href={`/article/${article.id}`}>
            <div className="relative h-48 w-full">
              <Image
                src={article.imageUrl || "/placeholder.svg?height=200&width=400&query=news"}
                alt={article.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
            </div>
          </Link>

          <div className="p-4">
            <div className="mb-2">
              <span className="inline-block bg-blue-900/50 text-blue-100 text-xs font-semibold px-2 py-1 rounded mr-2">
                {article.category}
              </span>
              <span className="text-sm text-gray-400">{formatDate(article.publishedAt)}</span>
            </div>

            <Link href={`/article/${article.id}`}>
              <h3 className="text-lg font-bold mb-2 line-clamp-2 text-white hover:text-red-400">{article.title}</h3>
            </Link>

            <p className="text-gray-300 text-sm line-clamp-3 mb-4">{article.description}</p>

            <div className="flex items-center text-sm">
              <span className="text-gray-400">By {article.author}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
