import { Suspense } from "react"
import SearchClient from "./search-client"

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="container mx-auto px-4 py-16 text-center text-gray-400">
          Loading search...
        </div>
      }
    >
      <SearchClient />
    </Suspense>
  )
}
