import Link from "next/link"
import Image from "next/image"
import { formatRelativeTime } from "@/lib/utils"
import type { Article } from "@/lib/types"

interface RelatedArticlesProps {
  articles: Article[]
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles.length) return null

  return (
    <div>
      <h3 className="font-display text-xl font-bold mb-6 text-white border-l-4 border-red-700 pl-3 uppercase tracking-wide">
        Related
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="border border-blue-900/30 bg-blue-900/10 rounded-lg overflow-hidden hover:bg-blue-900/20 transition-colors"
          >
            <Link href={`/article/${article.id}`}>
              <div className="relative h-36 w-full">
                <Image
                  src={article.imageUrl || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
              </div>
            </Link>

            <div className="p-3">
              <Link href={`/article/${article.id}`}>
                <h4 className="font-medium text-sm line-clamp-2 text-gray-200 hover:text-red-400">{article.title}</h4>
              </Link>

              <p className="text-xs text-gray-500 mt-1">{formatRelativeTime(article.publishedAt)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
