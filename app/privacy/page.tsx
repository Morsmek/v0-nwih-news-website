import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = { title: "Privacy policy" }

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy", href: "/privacy" }]} />
      <div className="max-w-3xl mx-auto mt-8 prose prose-invert">
        <h1 className="font-serif text-4xl text-white mb-6">Privacy policy</h1>
        <p className="text-gray-300 leading-relaxed">
          This demonstration site stores a handful of preferences in your browser: newsletter sign-up, a mock sign-in
          session, and nothing else that leaves your device. We do not sell personal data.
        </p>
        <p className="text-gray-300 leading-relaxed">
          If this were a production newsroom we would set out our lawful bases under the GDPR, name our data-protection
          officer, and list the processors who help us send email and measure readership. For this preview, treat any
          address you type as local to your browser.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Questions: <a href="mailto:privacy@nwih.news" className="text-red-400">privacy@nwih.news</a>
        </p>
      </div>
    </div>
  )
}
