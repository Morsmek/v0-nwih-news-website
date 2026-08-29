import Link from "next/link"
import Image from "next/image"
import { formatRelativeTime } from "@/lib/utils"
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
        <article
          key={article.id}
          className="border border-blue-900/30 bg-blue-900/10 rounded-lg overflow-hidden hover:bg-blue-900/20 hover:border-blue-800/50 transition-colors group"
        >
          <Link href={`/article/${article.id}`}>
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={article.imageUrl || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />
            </div>
          </Link>

          <div className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-block bg-blue-900/50 text-blue-100 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-sm">
                {article.category}
              </span>
              <span className="text-xs text-gray-500">{formatRelativeTime(article.publishedAt)}</span>
            </div>

            <Link href={`/article/${article.id}`}>
              <h3 className="font-serif text-lg font-bold mb-2 line-clamp-2 text-white hover:text-red-400">
                {article.title}
              </h3>
            </Link>

            <p className="text-gray-400 text-sm line-clamp-3 mb-4">{article.description}</p>

            <div className="flex items-center text-xs text-gray-500">
              <span>By {article.author}</span>
              {article.readTime ? <span className="ml-auto">{article.readTime} min read</span> : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
