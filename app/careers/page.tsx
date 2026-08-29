import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { jobs } from "@/lib/live-data"

export const metadata: Metadata = {
  title: "Careers",
  description: "Work at NWIH.",
}

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
      />
      <div className="max-w-3xl mx-auto mt-8">
        <h1 className="font-serif text-4xl text-white mb-4">Work with us</h1>
        <p className="text-gray-400 mb-10 leading-relaxed">
          We hire reporters, editors, video journalists, designers and engineers who care about getting the story right
          and getting it out. EU work authorisation required unless noted. To apply, send a CV and three links to{" "}
          <a href="mailto:jobs@nwih.news" className="text-red-400">
            jobs@nwih.news
          </a>
          .
        </p>
        <div className="space-y-4">
          {jobs.map((job) => (
            <article key={job.id} className="border border-blue-900/40 rounded-lg p-5 bg-blue-950/30">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h2 className="font-serif text-xl text-white">{job.title}</h2>
                <span className="text-xs uppercase tracking-wider text-red-400">{job.type}</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">
                {job.location} · {job.team}
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">{job.summary}</p>
            </article>
          ))}
        </div>
        <p className="text-gray-500 text-sm mt-8">
          Questions? <Link href="/contact" className="text-red-400">Contact the newsroom</Link>.
        </p>
      </div>
    </div>
  )
}
