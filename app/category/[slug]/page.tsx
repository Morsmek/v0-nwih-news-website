import type { Metadata } from "next"
import { NewsGrid } from "@/components/news-grid"
import { getNews } from "@/lib/news-service"
import { Breadcrumb } from "@/components/breadcrumb"
import { categories } from "@/lib/site"

export const revalidate = 60

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return categories
    .filter((c) => c.href.startsWith("/category/"))
    .map((c) => ({ slug: c.href.replace("/category/", "") }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1)
  return {
    title: `${categoryName} news`,
    description: `Latest ${categoryName.toLowerCase()} stories from NWIH.`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1)

  const isEurope = slug.toLowerCase() === "europe"
  const news = await getNews({
    category: isEurope ? "europe" : slug,
    count: 24,
  })

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: categoryName, href: `/category/${slug}` },
        ]}
      />

      <div className="mt-6 mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-white border-l-4 border-red-700 pl-4 uppercase tracking-wide">
          {categoryName}
        </h1>
        <p className="text-gray-400 mt-2 ml-5">The latest {categoryName.toLowerCase()} stories from the NWIH newsroom.</p>
      </div>

      <NewsGrid articles={news} />
    </div>
  )
}
