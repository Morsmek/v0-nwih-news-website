import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { liveUpdates } from "@/lib/live-data"

export const metadata: Metadata = {
  title: "Live",
  description: "Live updates from the NWIH newsroom.",
}

export default function LivePage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Live", href: "/live" },
        ]}
      />

      <div className="max-w-3xl mx-auto mt-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-flex items-center gap-2 bg-red-700 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            Live
          </span>
          <span className="text-sm text-gray-400">Brussels newsroom</span>
        </div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">As it happens</h1>
        <p className="text-gray-400 mb-10">
          Running updates on the EU climate summit, the Mediterranean heatwave, markets and the DMA case.{" "}
          <Link href="/article/eu-2040-climate" className="text-red-400 hover:underline">
            Read the main climate story
          </Link>
          .
        </p>

        <ol className="relative border-l border-blue-900/60 space-y-8 ml-2">
          {liveUpdates.map((update) => (
            <li key={update.id} className="ml-6">
              <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-red-600 border-2 border-[#07111f]" />
              <div className="flex items-center gap-3 mb-1">
                <time className="text-sm tabular-nums text-gray-400">{update.time}</time>
                {update.tag && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">{update.tag}</span>
                )}
              </div>
              <h2 className="font-serif text-xl text-white mb-2">{update.title}</h2>
              <p className="text-gray-300 leading-relaxed">{update.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
