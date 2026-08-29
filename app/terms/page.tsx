import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = { title: "Terms of service" }

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms", href: "/terms" }]} />
      <div className="max-w-3xl mx-auto mt-8 prose prose-invert">
        <h1 className="font-serif text-4xl text-white mb-6">Terms of service</h1>
        <p className="text-gray-300 leading-relaxed">
          Content on NWIH is for personal, non-commercial use unless we agree otherwise in writing. Headlines, copy and
          images remain our copyright or that of licensed partners. You may share links; you may not scrape the site for
          a competing product.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Accounts (when offered) must not be shared for publication behind a paywall. We may suspend access that looks
          like abuse. These terms are a demonstration and should not be treated as legal advice.
        </p>
      </div>
    </div>
  )
}
