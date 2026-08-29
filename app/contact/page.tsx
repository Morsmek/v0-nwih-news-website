"use client"

import type React from "react"
import { useState } from "react"
import { Breadcrumb } from "@/components/breadcrumb"
import { toast } from "sonner"

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    toast.success("Message received. A desk editor will be in touch.")
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />
      <div className="max-w-xl mx-auto mt-8">
        <h1 className="font-serif text-4xl text-white mb-3">Contact the newsroom</h1>
        <p className="text-gray-400 mb-8">
          Tips, corrections, partnership enquiries and reader mail. We read everything; we cannot reply to everything.
        </p>

        {sent ? (
          <div className="border border-emerald-800 bg-emerald-950/40 text-emerald-300 rounded-lg p-6">
            Thank you. Your message is with the desk.
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                required
                className="w-full p-2.5 bg-blue-950/60 border border-blue-800 text-white rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full p-2.5 bg-blue-950/60 border border-blue-800 text-white rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1" htmlFor="subject">
                Subject
              </label>
              <select
                id="subject"
                className="w-full p-2.5 bg-blue-950/60 border border-blue-800 text-white rounded-md"
              >
                <option>News tip</option>
                <option>Correction</option>
                <option>Press enquiry</option>
                <option>Advertising</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                className="w-full p-2.5 bg-blue-950/60 border border-blue-800 text-white rounded-md"
              />
            </div>
            <button type="submit" className="bg-red-700 hover:bg-red-600 text-white font-semibold px-6 py-2.5 rounded-md">
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
