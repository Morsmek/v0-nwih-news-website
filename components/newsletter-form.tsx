"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Check } from "lucide-react"
import { toast } from "sonner"
import { cn } from "@/lib/utils"

export function NewsletterForm({
  compact = false,
  className,
}: {
  compact?: boolean
  className?: string
}) {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address")
      return
    }
    const list: string[] = JSON.parse(localStorage.getItem("nwih-subs") || "[]")
    if (!list.includes(email)) {
      list.push(email)
      localStorage.setItem("nwih-subs", JSON.stringify(list))
    }
    setDone(true)
    toast.success("You're on the daily briefing list")
  }

  if (done) {
    return (
      <div className={cn("flex items-center gap-2 text-sm text-emerald-400", className)}>
        <Check className="h-4 w-4" />
        Subscribed. Watch your inbox tomorrow morning.
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-2", className)}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="w-full p-2.5 bg-blue-950/60 border border-blue-800/80 text-white placeholder:text-gray-500 rounded-md outline-none focus:border-red-600"
      />
      <button
        type="submit"
        className="w-full bg-red-700 hover:bg-red-600 text-white font-semibold py-2.5 px-4 rounded-md flex items-center justify-center transition-colors"
      >
        <Mail className="h-4 w-4 mr-2" />
        {compact ? "Subscribe" : "Get the briefing"}
      </button>
    </form>
  )
}
