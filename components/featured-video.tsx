import Link from "next/link"
import Image from "next/image"
import { Play } from "lucide-react"
import { formatDate, formatViews } from "@/lib/utils"
import type { VideoNews } from "@/lib/types"

interface FeaturedVideoProps {
  video: VideoNews
}

export function FeaturedVideo({ video }: FeaturedVideoProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-blue-900/20 border border-blue-900/30">
      <Link href={`/videos/${video.id}`} className="block group">
        <div className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src={video.thumbnailUrl || "/placeholder.svg"}
            alt={video.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/60 to-transparent" />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-700/80 rounded-full p-4 transform transition-transform group-hover:scale-110">
              <Play className="h-12 w-12 text-white" fill="white" />
            </div>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
            {video.duration}
          </div>
        </div>
      </Link>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="mb-2">
          <span className="inline-block bg-red-700 text-white text-xs font-semibold px-2 py-1 rounded mr-2">
            {video.category}
          </span>
          <span className="text-sm text-gray-300">{formatDate(video.publishedAt)}</span>
        </div>

        <Link href={`/videos/${video.id}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 hover:text-red-400">{video.title}</h2>
        </Link>

        <p className="text-gray-300 mb-4 line-clamp-2 md:line-clamp-3">{video.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-300">By {video.author}</span>
          <span className="text-sm text-gray-300">{formatViews(video.views)} views</span>
        </div>
      </div>
    </div>
  )
}
