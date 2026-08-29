import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"
import { NewsletterForm } from "@/components/newsletter-form"
import { categories, footerCompany, footerLegal, site } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="bg-[#050d18] text-white border-t border-blue-900/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="NWIH - News When It Happens"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">{site.description}</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white" aria-label="X">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-gray-200">Categories</h3>
            <ul className="space-y-2">
              {categories
                .filter((c) => c.name !== "Videos")
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-gray-400 hover:text-white text-sm">
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-gray-200">Company</h3>
            <ul className="space-y-2">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/videos" className="text-gray-400 hover:text-white text-sm">
                  Video news
                </Link>
              </li>
              <li>
                <Link href="/live" className="text-gray-400 hover:text-white text-sm">
                  Live blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider mb-4 text-gray-200">Daily briefing</h3>
            <p className="text-gray-400 mb-4 text-sm">The essential Europe stories, in your inbox each morning.</p>
            <NewsletterForm compact />
          </div>
        </div>

        <div className="border-t border-blue-900/50 mt-12 pt-6 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              © {new Date().getFullYear()} {site.name} — {site.tagline}. All rights reserved.
            </div>
            <div className="flex space-x-4">
              {footerLegal.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-gray-300">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
