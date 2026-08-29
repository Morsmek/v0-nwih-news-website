import Link from "next/link"
import { FeaturedArticle } from "@/components/featured-article"
import { NewsSection } from "@/components/news-section"
import { BreakingNews } from "@/components/breaking-news"
import { VideoSection } from "@/components/video-section"
import { getMostRead, getNews } from "@/lib/news-service"
import { getVideos } from "@/lib/video-service"
import { WeatherWidget } from "@/components/weather-widget"
import { MarketsWidget } from "@/components/markets-widget"
import { NewsletterForm } from "@/components/newsletter-form"
import { formatRelativeTime } from "@/lib/utils"

export const revalidate = 60

export default async function Home() {
  const [featuredList, latestNews, europeNews, sportsNews, techNews, businessNews, healthNews, scienceNews, lifestyleNews, worldNews, featuredVideos, mostRead] =
    await Promise.all([
      getNews({ featured: true, count: 1 }),
      getNews({ category: "general", count: 12 }),
      getNews({ category: "europe", count: 6 }),
      getNews({ category: "sports", count: 4 }),
      getNews({ category: "technology", count: 4 }),
      getNews({ category: "business", count: 4 }),
      getNews({ category: "health", count: 3 }),
      getNews({ category: "science", count: 3 }),
      getNews({ category: "lifestyle", count: 3 }),
      getNews({ category: "world", count: 4 }),
      getVideos({ featured: true, count: 3 }),
      getMostRead(5),
    ])

  const hero = featuredList[0] ?? latestNews[0]
  const secondary = latestNews.filter((a) => a.id !== hero?.id).slice(0, 4)
  const breakingStories = latestNews.filter((a) => a.breaking)
  const breaking = (breakingStories.length ? breakingStories : latestNews).slice(0, 5)

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <BreakingNews news={breaking} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        <div className="lg:col-span-8 space-y-6">
          {hero && <FeaturedArticle article={hero} />}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {secondary.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.id}`}
                className="group rounded-lg border border-blue-900/30 bg-blue-900/10 p-4 hover:bg-blue-900/20 transition-colors"
              >
                <div className="text-[10px] uppercase tracking-wider text-red-400 font-semibold mb-1">
                  {article.category} · {formatRelativeTime(article.publishedAt)}
                </div>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-red-400 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2 line-clamp-2">{article.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <WeatherWidget />
          <MarketsWidget />

          <div className="p-4 bg-blue-950/50 text-white rounded-lg border border-blue-900/40">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider mb-4">Most read</h2>
            <ol className="space-y-3">
              {mostRead.map((article, index) => (
                <li key={article.id} className="pb-3 border-b border-blue-900/40 last:border-0 last:pb-0 flex gap-3">
                  <span className="font-display text-2xl text-red-700 font-bold leading-none w-6">{index + 1}</span>
                  <Link href={`/article/${article.id}`} className="hover:text-red-400 text-sm leading-snug">
                    {article.title}
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          <div className="p-4 bg-blue-900/30 rounded-lg border border-blue-900/50">
            <h2 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2">Morning briefing</h2>
            <p className="text-gray-400 mb-4 text-sm">Europe&apos;s essential stories, five days a week.</p>
            <NewsletterForm />
          </div>
        </aside>
      </div>

      <div className="mb-12">
        <VideoSection title="Video news" videos={featuredVideos} viewAllLink="/videos" featured />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-3">
          <NewsSection title="Europe" articles={europeNews} viewAllLink="/category/europe" featured />
        </div>
        <div>
          <NewsSection title="World" articles={worldNews} viewAllLink="/category/world" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <NewsSection title="Sports" articles={sportsNews} viewAllLink="/category/sports" />
        <NewsSection title="Technology" articles={techNews} viewAllLink="/category/technology" />
        <NewsSection title="Business" articles={businessNews} viewAllLink="/category/business" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
        <NewsSection title="Lifestyle" articles={lifestyleNews} viewAllLink="/category/lifestyle" />
        <NewsSection title="Health" articles={healthNews} viewAllLink="/category/health" />
        <NewsSection title="Science" articles={scienceNews} viewAllLink="/category/science" />
      </div>
    </div>
  )
}
