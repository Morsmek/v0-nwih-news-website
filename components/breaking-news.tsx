"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Article } from "@/lib/types"

interface BreakingNewsProps {
  news: Article[]
}

export function BreakingNews({ news }: BreakingNewsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!news.length) return
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [news.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + news.length) % news.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length)
  }

  if (!news.length) return null

  return (
    <div className="bg-red-800 text-white rounded-md overflow-hidden border border-red-900/60">
      <div className="flex items-stretch">
        <div className="font-display font-bold px-3 sm:px-4 py-2 bg-red-950 flex items-center gap-2 shrink-0 text-xs sm:text-sm tracking-wider">
          <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
          BREAKING
        </div>

        <div className="relative flex-1 overflow-hidden flex items-center px-2">
          <button
            onClick={goToPrevious}
            className="p-1 rounded-full hover:bg-red-900 mr-1 shrink-0"
            aria-label="Previous breaking news"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex-1 overflow-hidden">
            <Link
              href={`/article/${news[currentIndex].id}`}
              className="block whitespace-nowrap overflow-hidden text-ellipsis hover:underline text-sm sm:text-base"
            >
              {news[currentIndex].title}
            </Link>
          </div>

          <button
            onClick={goToNext}
            className="p-1 rounded-full hover:bg-red-900 ml-1 shrink-0"
            aria-label="Next breaking news"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
