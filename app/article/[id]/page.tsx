import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { formatDate, formatRelativeTime } from "@/lib/utils"
import { getArticle, getArticleIds, getRelatedNews } from "@/lib/news-service"
import { Breadcrumb } from "@/components/breadcrumb"
import { ShareButtons } from "@/components/share-buttons"
import { RelatedArticles } from "@/components/related-articles"

export const revalidate = 60

interface ArticlePageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return getArticleIds().map((id) => ({ id }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { id } = await params
  const article = await getArticle(id)
  if (!article) return { title: "Story not found" }
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.imageUrl],
      type: "article",
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params
  const article = await getArticle(id)

  if (!article) {
    notFound()
  }

  const relatedArticles = await getRelatedNews(article.category, 4, id)
  const paragraphs = article.content.split("\n\n")

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: article.category, href: `/category/${article.category.toLowerCase()}` },
          { label: article.title, href: `/article/${id}` },
        ]}
      />

      <article className="max-w-3xl mx-auto mt-8">
        <div className="mb-4 flex items-center gap-2 flex-wrap">
          {article.breaking && (
            <span className="inline-flex items-center gap-1.5 bg-red-700 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
              Breaking
            </span>
          )}
          <span className="inline-block bg-blue-900/50 text-blue-100 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-sm">
            {article.category}
          </span>
        </div>

        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-5 text-white leading-tight text-balance">
          {article.title}
        </h1>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">{article.description}</p>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400 mb-6 pb-6 border-b border-blue-900/30">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-red-800 text-white flex items-center justify-center font-bold">
              {article.author.charAt(0)}
            </div>
            <div>
              <div className="text-gray-200 font-medium">By {article.author}</div>
              {article.authorTitle && <div className="text-xs text-gray-500">{article.authorTitle}</div>}
            </div>
          </div>
          <div className="ml-auto text-right">
            <div>{formatDate(article.publishedAt)}</div>
            <div className="text-xs text-gray-500">
              {formatRelativeTime(article.publishedAt)}
              {article.readTime ? ` · ${article.readTime} min read` : ""}
            </div>
          </div>
        </div>

        {article.imageUrl && (
          <figure className="mb-8 relative">
            <Image
              src={article.imageUrl}
              alt={article.title}
              width={1200}
              height={675}
              className="rounded-lg w-full object-cover max-h-[520px]"
              priority
            />
            {article.imageCaption && (
              <figcaption className="text-sm text-gray-500 mt-2 italic">{article.imageCaption}</figcaption>
            )}
          </figure>
        )}

        <div className="prose prose-invert max-w-none mb-8 text-gray-200 text-lg leading-relaxed">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:leading-none first-letter:text-white" : "mb-5"}>
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
