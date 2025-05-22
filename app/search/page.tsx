"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { NewsGrid } from "@/components/news-grid"
import { searchNews } from "@/lib/news-service"
import { Breadcrumb } from "@/components/breadcrumb"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [searchQuery, setSearchQuery] = useState(query)
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (query) {
      performSearch(query)
    }
  }, [query])

  const performSearch = async (searchTerm: string) => {
    setLoading(true)
    try {
      const results = await searchNews(searchTerm)
      setResults(results)
    } catch (error) {
      console.error("Error searching news:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.history.pushState({}, "", `/search?q=${encodeURIComponent(searchQuery)}`)
      performSearch(searchQuery)
    }
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Search", href: "/search" },
        ]}
      />

      <div className="max-w-2xl mx-auto mt-8 mb-12">
        <h1 className="text-3xl font-bold mb-6 text-white">Search News</h1>

        <form onSubmit={handleSearch} className="flex gap-2 mb-8">
          <Input
            type="search"
            placeholder="Search for news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-blue-900/20 border-blue-900/50 text-white placeholder:text-gray-500"
          />
          <Button type="submit" className="bg-red-700 hover:bg-red-800 text-white">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-white border-r-transparent"></div>
            <p className="mt-4 text-gray-400">Searching for news...</p>
          </div>
        ) : (
          <>
            {query && (
              <h2 className="text-xl font-semibold mb-6 text-gray-200">
                {results.length} results for "{query}"
              </h2>
            )}

            {results.length > 0 ? (
              <NewsGrid articles={results} />
            ) : query ? (
              <div className="text-center py-12">
                <p className="text-gray-300">No results found for "{query}"</p>
                <p className="mt-2 text-gray-400">Try different keywords or browse our categories</p>
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  )
}
