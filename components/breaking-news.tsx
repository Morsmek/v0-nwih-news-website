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
    <div className="bg-red-800 text-white py-2 mb-6 rounded-lg border border-red-900/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="font-bold mr-4 whitespace-nowrap">BREAKING:</div>

          <div className="relative flex-1 overflow-hidden">
            <div className="flex items-center">
              <button
                onClick={goToPrevious}
                className="p-1 rounded-full hover:bg-red-900 mr-2"
                aria-label="Previous breaking news"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex-1 overflow-hidden">
                <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                  <Link href={`/article/${news[currentIndex].id}`} className="hover:underline">
                    {news[currentIndex].title}
                  </Link>
                </div>
              </div>

              <button
                onClick={goToNext}
                className="p-1 rounded-full hover:bg-red-900 ml-2"
                aria-label="Next breaking news"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
