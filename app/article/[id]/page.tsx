import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { getArticle, getRelatedNews } from "@/lib/news-service"
import { Breadcrumb } from "@/components/breadcrumb"
import { ShareButtons } from "@/components/share-buttons"
import { RelatedArticles } from "@/components/related-articles"

export const runtime = "edge"
export const revalidate = 3600 // Revalidate every hour

interface ArticlePageProps {
  params: {
    id: string
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = params
  const article = await getArticle(id)
  const relatedArticles = await getRelatedNews(article.category, 4, id)

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: article.category, href: `/category/${article.category.toLowerCase()}` },
          { label: article.title, href: `/article/${id}` },
        ]}
      />

      <article className="max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{article.title}</h1>

        <div className="flex items-center text-sm text-gray-400 mb-6">
          <div>By {article.author}</div>
          <div className="mx-2">•</div>
          <div>{formatDate(article.publishedAt)}</div>
          <div className="mx-2">•</div>
          <div className="capitalize">{article.category}</div>
        </div>

        {article.imageUrl && (
          <div className="mb-6 relative">
            <Image
              src={article.imageUrl || "/placeholder.svg"}
              alt={article.title}
              width={900}
              height={500}
              className="rounded-lg w-full object-cover"
            />
            {article.imageCaption && <div className="text-sm text-gray-400 mt-2 italic">{article.imageCaption}</div>}
          </div>
        )}

        <div className="prose prose-invert max-w-none mb-8 text-gray-300">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        <ShareButtons url={`/article/${id}`} title={article.title} />

        <div className="mt-12 pt-8 border-t border-blue-900/30">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </article>
    </div>
  )
}
