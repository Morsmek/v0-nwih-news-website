import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import type { Article } from "@/lib/types"

interface FeaturedArticleProps {
  article: Article
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-blue-900/20 border border-blue-900/30">
      <div className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src={article.imageUrl || "/placeholder.svg?height=500&width=1000&query=news"}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/60 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="mb-2">
          <span className="inline-block bg-red-700 text-white text-xs font-semibold px-2 py-1 rounded mr-2">
            {article.category}
          </span>
          <span className="text-sm text-gray-300">{formatDate(article.publishedAt)}</span>
        </div>

        <Link href={`/article/${article.id}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 hover:text-red-400">{article.title}</h2>
        </Link>

        <p className="text-gray-300 mb-4 line-clamp-2 md:line-clamp-3">{article.description}</p>

        <Link
          href={`/article/${article.id}`}
          className="inline-flex items-center text-white font-semibold hover:text-red-400"
        >
          Read Full Story
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
