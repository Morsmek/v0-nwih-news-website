import Link from "next/link"
import Image from "next/image"
import { formatRelativeTime } from "@/lib/utils"
import type { Article } from "@/lib/types"

interface NewsSectionProps {
  title: string
  articles: Article[]
  viewAllLink: string
  featured?: boolean
}

export function NewsSection({ title, articles, viewAllLink, featured = false }: NewsSectionProps) {
  if (!articles.length) return null

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-xl font-bold text-white border-l-4 border-red-700 pl-3 uppercase tracking-wide">
          {title}
        </h2>
        <Link href={viewAllLink} className="text-sm font-medium text-red-400 hover:text-red-300">
          View all
        </Link>
      </div>

      {featured ? (
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-lg bg-blue-900/20 border border-blue-900/30 group">
            <Link href={`/article/${articles[0].id}`}>
              <div className="relative h-[280px] w-full">
                <Image
                  src={articles[0].imageUrl || "/placeholder.svg"}
                  alt={articles[0].title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/90 via-[#07111f]/30 to-transparent" />
              </div>
            </Link>

            <div className="p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="inline-block bg-red-700 text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-sm">
                  {articles[0].category}
                </span>
                <span className="text-sm text-gray-400">{formatRelativeTime(articles[0].publishedAt)}</span>
              </div>

              <Link href={`/article/${articles[0].id}`}>
                <h3 className="font-serif text-xl font-bold mb-2 text-white hover:text-red-400">{articles[0].title}</h3>
              </Link>

              <p className="text-gray-300 line-clamp-2 text-sm">{articles[0].description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {articles.slice(1, 5).map((article) => (
              <div
                key={article.id}
                className="flex items-start space-x-3 p-3 rounded-lg bg-blue-900/10 hover:bg-blue-900/20 transition-colors border border-blue-900/20"
              >
                <Link href={`/article/${article.id}`} className="flex-shrink-0">
                  <div className="relative h-20 w-24">
                    <Image
                      src={article.imageUrl || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                </Link>

                <div>
                  <Link href={`/article/${article.id}`}>
                    <h3 className="font-medium line-clamp-2 text-gray-200 hover:text-red-400 text-sm leading-snug">
                      {article.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">{formatRelativeTime(article.publishedAt)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {articles.map((article) => (
            <div
              key={article.id}
              className="flex items-start space-x-3 p-3 rounded-lg bg-blue-900/10 hover:bg-blue-900/20 transition-colors border border-blue-900/20"
            >
              <Link href={`/article/${article.id}`} className="flex-shrink-0">
                <div className="relative h-20 w-20">
                  <Image
                    src={article.imageUrl || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </Link>

              <div>
                <Link href={`/article/${article.id}`}>
                  <h3 className="font-medium line-clamp-2 text-gray-200 hover:text-red-400 text-sm">{article.title}</h3>
                </Link>
                <p className="text-xs text-gray-500 mt-1">{formatRelativeTime(article.publishedAt)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
