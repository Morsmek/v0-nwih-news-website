"use client"

import { Facebook, Twitter, Linkedin, Mail, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const fullUrl = `${typeof window !== "undefined" ? window.location.origin : ""}${url}`

  const shareLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-4 w-4" />,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-4 w-4" />,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`,
    },
    {
      name: "Email",
      icon: <Mail className="h-4 w-4" />,
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(fullUrl)}`,
    },
  ]

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl)
      toast.success("Link copied to clipboard")
    } catch {
      toast.error("Could not copy link")
    }
  }

  return (
    <div className="flex flex-wrap gap-2 items-center mt-6">
      <span className="text-sm font-medium text-gray-400 mr-1">Share</span>

      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-blue-900/50 text-gray-400 hover:text-white hover:border-red-600 hover:bg-red-700/20"
          aria-label={`Share on ${link.name}`}
        >
          {link.icon}
        </a>
      ))}

      <Button
        variant="outline"
        size="sm"
        onClick={copyToClipboard}
        className="inline-flex items-center text-sm border-blue-900/50 text-gray-300 hover:bg-blue-900/30 hover:text-white bg-transparent"
      >
        <LinkIcon className="h-4 w-4 mr-2" />
        Copy link
      </Button>
    </div>
  )
}
