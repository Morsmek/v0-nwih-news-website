import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "About us",
  description: "Who we are and how NWIH reports the news.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />
      <div className="max-w-3xl mx-auto mt-8 prose prose-invert">
        <h1 className="font-serif text-4xl text-white mb-6">About NWIH</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          NWIH — News When It Happens — is a pan-European digital newsroom. We report politics, markets, sport, science
          and culture as stories break, with bureaux in Brussels, Berlin, Paris, Rome, Madrid, London and Stockholm.
        </p>
        <p className="text-gray-300 leading-relaxed">
          We are independent of any government or political party. Our job is to tell you what happened, who did it, and
          why it matters — without dressing it up as a crusade. Correspondents file under their own names. Corrections
          are published promptly and kept on the story.
        </p>
        <h2 className="font-display text-2xl text-white mt-10 mb-4 uppercase tracking-wide">How we work</h2>
        <p className="text-gray-300 leading-relaxed">
          Editors in Brussels set the daily list. Video, data and investigations sit alongside the breaking desk. We do
          not accept payment for coverage. Sponsored content, when we run it, is labelled. Our{" "}
          <a href="/ethics" className="text-red-400">
            ethics policy
          </a>{" "}
          is public.
        </p>
        <h2 className="font-display text-2xl text-white mt-10 mb-4 uppercase tracking-wide">Contact</h2>
        <p className="text-gray-300 leading-relaxed">
          News tips: <a href="mailto:tips@nwih.news" className="text-red-400">tips@nwih.news</a>
          <br />
          Press: <a href="mailto:press@nwih.news" className="text-red-400">press@nwih.news</a>
          <br />
          Or use our{" "}
          <a href="/contact" className="text-red-400">
            contact form
          </a>
          .
        </p>
      </div>
    </div>
  )
}
