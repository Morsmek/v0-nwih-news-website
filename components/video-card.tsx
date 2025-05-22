import Link from "next/link"
import Image from "next/image"
import { Play } from "lucide-react"
import { formatDate, formatViews } from "@/lib/utils"
import type { VideoNews } from "@/lib/types"

interface VideoCardProps {
  video: VideoNews
  featured?: boolean
}

export function VideoCard({ video, featured = false }: VideoCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg bg-blue-900/20 border border-blue-900/30 hover:bg-blue-900/30 transition-colors ${
        featured ? "col-span-full md:col-span-2" : ""
      }`}
    >
      <Link href={`/videos/${video.id}`} className="block">
        <div className={`relative ${featured ? "h-[300px] md:h-[400px]" : "h-[180px]"} w-full`}>
          <Image
            src={video.thumbnailUrl || "/placeholder.svg"}
            alt={video.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/40 to-transparent" />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-red-700/80 rounded-full p-3 transform transition-transform group-hover:scale-110">
              <Play className="h-8 w-8 text-white" fill="white" />
            </div>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {video.duration}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-block bg-red-700 text-white text-xs font-semibold px-2 py-1 rounded">
            {video.category}
          </span>
          <span className="text-xs text-gray-400">{formatDate(video.publishedAt)}</span>
        </div>

        <Link href={`/videos/${video.id}`}>
          <h3
            className={`${featured ? "text-xl" : "text-base"} font-bold mb-2 text-white hover:text-red-400 line-clamp-2`}
          >
            {video.title}
          </h3>
        </Link>

        {featured && <p className="text-gray-300 line-clamp-2 mb-3">{video.description}</p>}

        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>By {video.author}</span>
          <span>{formatViews(video.views)} views</span>
        </div>
      </div>
    </div>
  )
}
