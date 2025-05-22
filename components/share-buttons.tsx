"use client"

import { Facebook, Twitter, Linkedin, Mail, LinkIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  const fullUrl = `${typeof window !== "undefined" ? window.location.origin : ""}${url}`

  const shareLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="h-4 w-4 mr-2" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-4 w-4 mr-2" />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4 mr-2" />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`,
    },
    {
      name: "Email",
      icon: <Mail className="h-4 w-4 mr-2" />,
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(fullUrl)}`,
    },
  ]

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullUrl).then(() => {
      toast({
        title: "Link copied",
        description: "The article link has been copied to your clipboard",
      })
    })
  }

  return (
    <div className="flex flex-wrap gap-2 items-center mt-6">
      <span className="text-sm font-medium text-gray-400 mr-2">Share:</span>

      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-gray-400 hover:text-red-400"
        >
          {link.icon}
          <span className="sr-only">{link.name}</span>
        </a>
      ))}

      <Button
        variant="outline"
        size="sm"
        onClick={copyToClipboard}
        className="inline-flex items-center text-sm border-blue-900/50 text-gray-300 hover:bg-blue-900/30 hover:text-white"
      >
        <LinkIcon className="h-4 w-4 mr-2" />
        Copy Link
      </Button>
    </div>
  )
}
