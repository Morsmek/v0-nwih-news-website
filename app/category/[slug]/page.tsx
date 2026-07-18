import { NewsGrid } from "@/components/news-grid"
import { getNews } from "@/lib/news-service"
import { Breadcrumb } from "@/components/breadcrumb"

export const runtime = "edge"
export const revalidate = 3600 // Revalidate every hour

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1)

  // Special case for Europe
  const isEurope = slug.toLowerCase() === "europe"
  const news = await getNews({
    category: isEurope ? "general" : slug,
    region: isEurope ? "europe" : undefined,
    count: 20,
  })

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: categoryName, href: `/category/${slug}` },
        ]}
      />

      <h1 className="text-3xl font-bold mt-6 mb-8 text-white border-l-4 border-red-700 pl-4">{categoryName} News</h1>

      <NewsGrid articles={news} />
    </div>
  )
}
