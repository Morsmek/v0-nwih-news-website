"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Menu, Search, X, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { WeatherWidget } from "@/components/weather-widget"

const categories = [
  { name: "Europe", href: "/category/europe" },
  { name: "World", href: "/category/world" },
  { name: "Business", href: "/category/business" },
  { name: "Technology", href: "/category/technology" },
  { name: "Sports", href: "/category/sports" },
  { name: "Lifestyle", href: "/category/lifestyle" },
  { name: "Health", href: "/category/health" },
  { name: "Science", href: "/category/science" },
  { name: "Videos", href: "/videos", icon: <Video className="h-4 w-4 mr-1" /> },
]

export default function Header() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearch, setShowSearch] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
      setShowSearch(false)
    }
  }

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <header className="border-b border-blue-900/30">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-blue-900/30">
          <div className="text-gray-400">{currentDate}</div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-blue-900/30">
              Subscribe
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-blue-900/30">
              Sign In
            </Button>
          </div>
        </div>

        {/* Logo and search */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="NWIH - News When It Happens"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex items-center space-x-2">
            {showSearch ? (
              <form onSubmit={handleSearch} className="relative flex items-center">
                <Input
                  type="search"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-64 bg-blue-900/20 border-blue-900/50 text-white placeholder:text-gray-400"
                />
                <Button variant="ghost" size="icon" className="absolute right-0" onClick={() => setShowSearch(false)}>
                  <X className="h-4 w-4 text-gray-400" />
                </Button>
              </form>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)}>
                <Search className="h-5 w-5 text-gray-300" />
              </Button>
            )}

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6 text-gray-300" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-blue-900/95 border-blue-900/50">
                <nav className="flex flex-col gap-4 mt-8">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="text-lg font-medium text-gray-200 hover:text-red-400 flex items-center"
                    >
                      {category.icon && category.icon}
                      {category.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-blue-800">
                  <h3 className="text-sm font-medium mb-3 text-gray-300">Local Weather</h3>
                  <WeatherWidget />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center justify-between py-3 border-t border-blue-900/30">
          <div className="flex items-center space-x-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-sm font-medium text-gray-300 hover:text-red-400 flex items-center"
              >
                {category.icon && category.icon}
                {category.name}
              </Link>
            ))}
          </div>
          <div>
            <Button variant="ghost" size="sm" className="bg-red-700 hover:bg-red-800 text-white">
              Breaking News
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
