"use client"

import Link from "next/link"
import { Breadcrumb } from "@/components/breadcrumb"
import { NewsletterForm } from "@/components/newsletter-form"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Briefing",
    price: "Free",
    detail: "The weekday morning email.",
    features: ["Daily headlines", "One long read", "Cancel any time"],
  },
  {
    name: "Digital",
    price: "€6 / month",
    detail: "The newsroom, without the noise.",
    features: ["All stories", "Live blog", "Subscriber newsletters", "Fewer ads"],
    highlight: true,
  },
  {
    name: "Digital + Weekend",
    price: "€9 / month",
    detail: "For people who read on Sunday too.",
    features: ["Everything in Digital", "Weekend magazine", "Invites to subscriber Q&As"],
  },
]

export default function SubscribePage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Subscribe", href: "/subscribe" }]} />
      <div className="max-w-4xl mx-auto mt-8">
        <h1 className="font-serif text-4xl text-white mb-3 text-center">Support independent European news</h1>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Start with the free briefing. Upgrade when you want the full site. This preview stores your email in the
          browser only.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border p-6 ${plan.highlight ? "border-red-700 bg-red-950/20" : "border-blue-900/40 bg-blue-950/30"}`}
            >
              <h2 className="font-display uppercase tracking-wide text-white mb-1">{plan.name}</h2>
              <p className="text-2xl font-serif text-white mb-1">{plan.price}</p>
              <p className="text-sm text-gray-400 mb-4">{plan.detail}</p>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              {plan.name === "Briefing" ? (
                <NewsletterForm compact />
              ) : (
                <Link
                  href="/signin"
                  className="block text-center bg-red-700 hover:bg-red-600 text-white font-semibold py-2.5 rounded-md"
                >
                  Continue
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
