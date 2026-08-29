"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu, Search, X, Video, Radio } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { WeatherWidget } from "@/components/weather-widget"
import { LiveClock } from "@/components/live-clock"
import { useAuth } from "@/components/auth-provider"
import { categories } from "@/lib/site"
import { cn } from "@/lib/utils"

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const { user, signOut } = useAuth()
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

  const currentDate = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Europe/Brussels",
  })

  return (
    <header className="sticky top-0 z-50 bg-[#07111f]/95 backdrop-blur-md border-b border-blue-900/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2 text-xs border-b border-blue-900/30">
          <div className="flex items-center gap-4 text-gray-400">
            <span className="hidden sm:inline">{currentDate}</span>
            <LiveClock />
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            {user ? (
              <>
                <span className="hidden sm:inline text-gray-300 mr-2">Hi, {user.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={signOut}
                  className="text-gray-300 hover:text-white hover:bg-blue-900/30"
                >
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-blue-900/30">
                  <Link href="/subscribe">Subscribe</Link>
                </Button>
                <Button asChild variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-blue-900/30">
                  <Link href="/signin">Sign In</Link>
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="NWIH - News When It Happens"
              width={220}
              height={72}
              className="h-11 sm:h-14 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center space-x-2">
            {showSearch ? (
              <form onSubmit={handleSearch} className="relative flex items-center">
                <Input
                  type="search"
                  autoFocus
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-40 sm:w-64 bg-blue-900/20 border-blue-900/50 text-white placeholder:text-gray-400 pr-9"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0"
                  onClick={() => setShowSearch(false)}
                >
                  <X className="h-4 w-4 text-gray-400" />
                </Button>
              </form>
            ) : (
              <Button variant="ghost" size="icon" onClick={() => setShowSearch(true)} aria-label="Search">
                <Search className="h-5 w-5 text-gray-300" />
              </Button>
            )}

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-gray-300" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0b1a30] border-blue-900/50 overflow-y-auto">
                <nav className="flex flex-col gap-3 mt-8">
                  <Link href="/live" className="text-lg font-medium text-red-400 flex items-center">
                    <Radio className="h-4 w-4 mr-2" />
                    Live
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="text-lg font-medium text-gray-200 hover:text-red-400 flex items-center"
                    >
                      {category.name === "Videos" && <Video className="h-4 w-4 mr-2" />}
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

        <nav className="hidden lg:flex items-center justify-between py-2.5 border-t border-blue-900/30">
          <div className="flex items-center space-x-5">
            {categories.map((category) => {
              const active = pathname === category.href || pathname.startsWith(`${category.href}/`)
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className={cn(
                    "text-[13px] font-semibold uppercase tracking-wide flex items-center pb-1 border-b-2 transition-colors",
                    active
                      ? "text-white border-red-600"
                      : "text-gray-300 border-transparent hover:text-red-400 hover:border-red-700/50",
                  )}
                >
                  {category.name === "Videos" && <Video className="h-3.5 w-3.5 mr-1" />}
                  {category.name}
                </Link>
              )
            })}
          </div>
          <Link
            href="/live"
            className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm"
          >
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            Live
          </Link>
        </nav>
      </div>
    </header>
  )
}
