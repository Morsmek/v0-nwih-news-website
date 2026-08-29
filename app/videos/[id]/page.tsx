import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { getVideo, getRelatedVideos, getVideoIds } from "@/lib/video-service"
import { VideoPlayer } from "@/components/video-player"
import { Breadcrumb } from "@/components/breadcrumb"
import { formatDate, formatViews } from "@/lib/utils"
import { ShareButtons } from "@/components/share-buttons"

export const revalidate = 60

interface VideoPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return getVideoIds().map((id) => ({ id }))
}

export async function generateMetadata({ params }: VideoPageProps): Promise<Metadata> {
  const { id } = await params
  const video = await getVideo(id)
  if (!video) return { title: "Video not found" }
  return {
    title: video.title,
    description: video.description,
  }
}

export default async function VideoPage({ params }: VideoPageProps) {
  const { id } = await params
  const video = await getVideo(id)

  if (!video) {
    notFound()
  }

  const relatedVideos = await getRelatedVideos(video.category, 6, id)

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Videos", href: "/videos" },
          { label: video.title, href: `/videos/${id}` },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        <div className="lg:col-span-2">
          <div className="mb-6">
            <VideoPlayer src={video.videoUrl} poster={video.thumbnailUrl} title={video.title} />
          </div>

          <p className="text-xs text-gray-500 mb-3">
            Demonstration clip used for playback. Report by {video.author}.
          </p>

          <h1 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-white">{video.title}</h1>

          <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
            <div className="flex items-center text-sm text-gray-400">
              <span>{formatDate(video.publishedAt)}</span>
              <span className="mx-2">•</span>
              <span>{formatViews(video.views)} views</span>
              <span className="mx-2">•</span>
              <span className="capitalize">{video.category}</span>
            </div>

            <ShareButtons url={`/videos/${id}`} title={video.title} />
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2 text-white">Description</h2>
            <p className="text-gray-300 leading-relaxed">{video.description}</p>
          </div>

          <div className="border-t border-blue-900/30 pt-6 mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-red-800 rounded-full h-12 w-12 flex items-center justify-center text-white font-bold">
                {video.author.charAt(0)}
              </div>
              <div className="ml-4">
                <h3 className="font-medium text-white">{video.author}</h3>
                <p className="text-sm text-gray-400">NWIH correspondent</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl font-bold mb-6 text-white border-l-4 border-red-700 pl-3 uppercase tracking-wide">
            Up next
          </h2>
          <div className="space-y-4">
            {relatedVideos.map((relatedVideo) => (
              <div
                key={relatedVideo.id}
                className="flex items-start space-x-3 p-3 rounded-lg bg-blue-900/10 hover:bg-blue-900/20 transition-colors border border-blue-900/20"
              >
                <Link href={`/videos/${relatedVideo.id}`} className="flex-shrink-0 relative">
                  <div className="relative h-20 w-32">
                    <img
                      src={relatedVideo.thumbnailUrl || "/placeholder.svg"}
                      alt={relatedVideo.title}
                      className="object-cover rounded h-full w-full"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                      {relatedVideo.duration}
                    </div>
                  </div>
                </Link>

                <div>
                  <Link href={`/videos/${relatedVideo.id}`}>
                    <h3 className="font-medium text-sm line-clamp-2 text-gray-200 hover:text-red-400">
                      {relatedVideo.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-gray-400 mt-1">{formatViews(relatedVideo.views)} views</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
