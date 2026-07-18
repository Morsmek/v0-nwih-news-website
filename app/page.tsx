import { FeaturedArticle } from "@/components/featured-article"
import { NewsSection } from "@/components/news-section"
import { BreakingNews } from "@/components/breaking-news"
import { VideoSection } from "@/components/video-section"
import { getNews } from "@/lib/news-service"
import { getVideos } from "@/lib/video-service"
import { WeatherWidget } from "@/components/weather-widget"

export const runtime = "edge"
export const revalidate = 3600 // Revalidate every hour

export default async function Home() {
  const topNews = await getNews({ category: "general", count: 1 })
  const europeNews = await getNews({ category: "general", region: "europe", count: 6 })
  const sportsNews = await getNews({ category: "sports", count: 4 })
  const techNews = await getNews({ category: "technology", count: 4 })
  const businessNews = await getNews({ category: "business", count: 4 })
  const latestNews = await getNews({ category: "general", count: 10 })

  // Get featured videos for the video section
  const featuredVideos = await getVideos({ featured: true, count: 3 })

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="lg:col-span-3">
          <BreakingNews news={latestNews.slice(0, 5)} />
        </div>
        <div className="hidden lg:block">
          <WeatherWidget />
        </div>
      </div>

      <div className="mb-12">{topNews.length > 0 && <FeaturedArticle article={topNews[0]} />}</div>

      {/* Video News Section */}
      <div className="mb-12">
        <VideoSection title="Video News" videos={featuredVideos} viewAllLink="/videos" featured />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-3">
          <NewsSection title="Europe" articles={europeNews} viewAllLink="/category/europe" featured />
        </div>
        <div className="space-y-8">
          <div className="p-4 bg-blue-900/30 rounded-lg border border-blue-900/50">
            <h2 className="text-xl font-bold text-white mb-4">Newsletter</h2>
            <p className="text-gray-300 mb-4">Stay updated with our daily news briefing</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 bg-blue-900/50 border border-blue-800 text-white placeholder:text-gray-500 rounded"
              />
              <button className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                Subscribe
              </button>
            </form>
          </div>
          <div className="p-4 bg-blue-950 text-white rounded-lg border border-blue-900/50">
            <h2 className="text-xl font-bold mb-4">Most Read</h2>
            <ul className="space-y-3">
              {latestNews.slice(0, 5).map((article, index) => (
                <li key={index} className="pb-2 border-b border-blue-900/50">
                  <a href={`/article/${article.id}`} className="hover:text-red-400">
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div>
          <NewsSection title="Sports" articles={sportsNews} viewAllLink="/category/sports" />
        </div>
        <div>
          <NewsSection title="Technology" articles={techNews} viewAllLink="/category/technology" />
        </div>
        <div>
          <NewsSection title="Business" articles={businessNews} viewAllLink="/category/business" />
        </div>
      </div>
    </div>
  )
}
