import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = { title: "Cookie policy" }

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cookies", href: "/cookies" }]} />
      <div className="max-w-3xl mx-auto mt-8 prose prose-invert">
        <h1 className="font-serif text-4xl text-white mb-6">Cookie policy</h1>
        <p className="text-gray-300 leading-relaxed">
          This preview uses essential local storage for a mock sign-in and newsletter flag. It does not set advertising
          cookies. A production version would let you reject analytics and remember that choice.
        </p>
      </div>
    </div>
  )
}
