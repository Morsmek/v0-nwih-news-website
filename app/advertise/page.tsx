import type { Metadata } from "next"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Advertise",
  description: "Advertise with NWIH.",
}

export default function AdvertisePage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Advertise", href: "/advertise" },
        ]}
      />
      <div className="max-w-3xl mx-auto mt-8">
        <h1 className="font-serif text-4xl text-white mb-4">Advertise with NWIH</h1>
        <p className="text-gray-300 leading-relaxed mb-8">
          Our readers are decision-makers in Brussels, national capitals and European business. We offer homepage
          takeovers, newsletter sponsorships, and branded explainers that are always labelled as such.
        </p>
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {[
            { title: "Homepage", body: "A 24-hour billboard next to the day's lead story." },
            { title: "Briefing", body: "Sponsorship of the weekday morning email." },
            { title: "Video pre-roll", body: "Fifteen seconds before our correspondent packages." },
          ].map((item) => (
            <div key={item.title} className="border border-blue-900/40 rounded-lg p-5 bg-blue-950/30">
              <h2 className="font-display uppercase tracking-wide text-white mb-2">{item.title}</h2>
              <p className="text-sm text-gray-400">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-400">
          Media kit and rates:{" "}
          <a href="mailto:advertise@nwih.news" className="text-red-400">
            advertise@nwih.news
          </a>
        </p>
      </div>
    </div>
  )
}
