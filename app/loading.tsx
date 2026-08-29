export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center text-gray-400">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-white border-r-transparent mr-3" />
      Loading the newsroom...
    </div>
  )
}
