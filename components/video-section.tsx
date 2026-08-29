import Link from "next/link"
import { VideoCard } from "@/components/video-card"
import type { VideoNews } from "@/lib/types"

interface VideoSectionProps {
  title: string
  videos: VideoNews[]
  viewAllLink: string
  featured?: boolean
}

export function VideoSection({ title, videos, viewAllLink, featured = false }: VideoSectionProps) {
  if (!videos.length) return null

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-xl font-bold text-white border-l-4 border-red-700 pl-3 uppercase tracking-wide">{title}</h2>
        <Link href={viewAllLink} className="text-sm font-medium text-red-400 hover:text-red-300">
          View All Videos
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoCard key={video.id} video={video} featured={featured && index === 0} />
        ))}
      </div>
    </section>
  )
}
