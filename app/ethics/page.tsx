import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = { title: "Ethics policy" }

export default function EthicsPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Ethics", href: "/ethics" }]} />
      <div className="max-w-3xl mx-auto mt-8 prose prose-invert">
        <h1 className="font-serif text-4xl text-white mb-6">Ethics policy</h1>
        <p className="text-gray-300 leading-relaxed">
          NWIH journalists do not pay for interviews, do not accept gifts of value, and do not report on companies in
          which they hold a personal financial interest. Political affiliations that could reasonably be seen to colour
          coverage must be declared to the editor.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Anonymous sources are used only when the information is in the public interest and cannot be obtained on the
          record. At least one editor must know the identity of an unnamed source.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Corrections are appended to the story and, for significant errors, noted in a subsequent briefing. Opinion is
          labelled. Advertising is labelled. AI-assisted production, if used for transcripts or first drafts of
          explainers, is edited by a human and never used to invent quotes or facts.
        </p>
      </div>
    </div>
  )
}
