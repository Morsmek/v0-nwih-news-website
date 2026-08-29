import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <p className="text-red-500 font-display font-bold tracking-widest uppercase mb-3">404</p>
      <h1 className="font-serif text-4xl text-white mb-4">This story has moved on</h1>
      <p className="text-gray-400 mb-8 max-w-md mx-auto">
        We could not find that page. It may have been archived, renamed, or never filed.
      </p>
      <Link href="/" className="inline-block bg-red-700 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md">
        Back to the homepage
      </Link>
    </div>
  )
}
