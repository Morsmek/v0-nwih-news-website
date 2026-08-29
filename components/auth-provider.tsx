"use client"

import { createContext, useContext, useEffect, useState } from "react"

export type User = { email: string; name: string } | null

type AuthContextValue = {
  user: User
  signIn: (email: string, name?: string) => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  signIn: () => {},
  signOut: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem("nwih-user")
      if (raw) setUser(JSON.parse(raw))
    } catch {
      localStorage.removeItem("nwih-user")
    }
  }, [])

  const signIn = (email: string, name?: string) => {
    const next = { email, name: name || email.split("@")[0] }
    localStorage.setItem("nwih-user", JSON.stringify(next))
    setUser(next)
  }

  const signOut = () => {
    localStorage.removeItem("nwih-user")
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
