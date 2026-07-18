import { FeaturedVideo } from "@/components/featured-video"
import { VideoCard } from "@/components/video-card"
import { getVideos } from "@/lib/video-service"
import { Breadcrumb } from "@/components/breadcrumb"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const runtime = "edge"
export const revalidate = 3600 // Revalidate every hour

export default async function VideosPage() {
  const featuredVideo = await getVideos({ featured: true, count: 1 })
  const latestVideos = await getVideos({ count: 12 })

  // Get videos by category
  const europeVideos = await getVideos({ category: "Europe", count: 6 })
  const sportsVideos = await getVideos({ category: "Sports", count: 6 })
  const techVideos = await getVideos({ category: "Technology", count: 6 })
  const businessVideos = await getVideos({ category: "Business", count: 6 })

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Videos", href: "/videos" },
        ]}
      />

      <h1 className="text-3xl font-bold mt-6 mb-8 text-white border-l-4 border-red-700 pl-4">Video News</h1>

      {/* Featured Video */}
      <div className="mb-12">{featuredVideo.length > 0 && <FeaturedVideo video={featuredVideo[0]} />}</div>

      {/* Video Categories */}
      <div className="mb-12">
        <Tabs defaultValue="latest" className="w-full">
          <TabsList className="bg-blue-900/30 border border-blue-900/50 mb-6">
            <TabsTrigger value="latest" className="data-[state=active]:bg-red-700">
              Latest
            </TabsTrigger>
            <TabsTrigger value="europe" className="data-[state=active]:bg-red-700">
              Europe
            </TabsTrigger>
            <TabsTrigger value="sports" className="data-[state=active]:bg-red-700">
              Sports
            </TabsTrigger>
            <TabsTrigger value="technology" className="data-[state=active]:bg-red-700">
              Technology
            </TabsTrigger>
            <TabsTrigger value="business" className="data-[state=active]:bg-red-700">
              Business
            </TabsTrigger>
          </TabsList>

          <TabsContent value="latest">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="europe">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {europeVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sports">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sportsVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="technology">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="business">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
