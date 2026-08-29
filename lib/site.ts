import type { NavItem } from "./types"

export const site = {
  name: "NWIH",
  tagline: "News When It Happens",
  description: "Independent reporting from Europe and around the world, as it happens.",
  url: "https://nwih.news",
}

export const categories: NavItem[] = [
  { name: "Europe", href: "/category/europe" },
  { name: "World", href: "/category/world" },
  { name: "Business", href: "/category/business" },
  { name: "Technology", href: "/category/technology" },
  { name: "Sports", href: "/category/sports" },
  { name: "Lifestyle", href: "/category/lifestyle" },
  { name: "Health", href: "/category/health" },
  { name: "Science", href: "/category/science" },
  { name: "Videos", href: "/videos" },
]

export const footerCompany: NavItem[] = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Careers", href: "/careers" },
  { name: "Advertise", href: "/advertise" },
  { name: "Ethics Policy", href: "/ethics" },
]

export const footerLegal: NavItem[] = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
]
