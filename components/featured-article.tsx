import Image from "next/image"
import Link from "next/link"
import { formatRelativeTime } from "@/lib/utils"
import type { Article } from "@/lib/types"

interface FeaturedArticleProps {
  article: Article
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-blue-900/20 border border-blue-900/30 group">
      <Link href={`/article/${article.id}`} className="block">
        <div className="relative h-[360px] md:h-[480px] w-full">
          <Image
            src={article.imageUrl || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/55 to-transparent" />
        </div>
      </Link>

      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 text-white">
        <div className="mb-3 flex items-center gap-2 flex-wrap">
          {article.breaking && (
            <span className="inline-flex items-center gap-1.5 bg-red-700 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Breaking
            </span>
          )}
          <span className="inline-block bg-white/10 backdrop-blur text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-sm">
            {article.category}
          </span>
          <span className="text-sm text-gray-300">{formatRelativeTime(article.publishedAt)}</span>
        </div>

        <Link href={`/article/${article.id}`}>
          <h2 className="font-serif text-2xl md:text-4xl font-bold mb-3 leading-tight hover:text-red-400 transition-colors text-balance">
            {article.title}
          </h2>
        </Link>

        <p className="text-gray-300 mb-4 line-clamp-2 md:line-clamp-3 max-w-3xl">{article.description}</p>

        <Link
          href={`/article/${article.id}`}
          className="inline-flex items-center text-white font-semibold hover:text-red-400 text-sm"
        >
          Read full story
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
