"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { useAuth } from "@/components/auth-provider"
import { toast } from "sonner"

export default function SignInPage() {
  const { user, signIn, signOut } = useAuth()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    signIn(email, name)
    toast.success("Signed in")
    router.push("/")
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Sign in", href: "/signin" }]} />
      <div className="max-w-md mx-auto mt-12">
        <h1 className="font-serif text-4xl text-white mb-3">Sign in</h1>
        <p className="text-gray-400 mb-8 text-sm">
          This is a preview account stored only in your browser. Any email will work; there is no password check.
        </p>

        {user ? (
          <div className="border border-blue-900/40 rounded-lg p-6 bg-blue-950/30">
            <p className="text-gray-200 mb-4">
              You are signed in as <span className="font-semibold">{user.name}</span> ({user.email}).
            </p>
            <button
              onClick={() => {
                signOut()
                toast.success("Signed out")
              }}
              className="bg-red-700 hover:bg-red-600 text-white font-semibold px-5 py-2.5 rounded-md"
            >
              Sign out
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-300 mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2.5 bg-blue-950/60 border border-blue-800 text-white rounded-md"
              />
            </div>
            <button type="submit" className="w-full bg-red-700 hover:bg-red-600 text-white font-semibold py-2.5 rounded-md">
              Sign in
            </button>
            <p className="text-xs text-gray-500 text-center">
              Want the briefing instead? <Link href="/subscribe" className="text-red-400">Subscribe</Link>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
