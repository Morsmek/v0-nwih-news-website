import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
            <p className="text-gray-400 mb-4">
              Delivering the latest news from Europe and around the world as it happens.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-200">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/europe" className="text-gray-400 hover:text-white">
                  Europe
                </Link>
              </li>
              <li>
                <Link href="/category/world" className="text-gray-400 hover:text-white">
                  World
                </Link>
              </li>
              <li>
                <Link href="/category/business" className="text-gray-400 hover:text-white">
                  Business
                </Link>
              </li>
              <li>
                <Link href="/category/technology" className="text-gray-400 hover:text-white">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/category/sports" className="text-gray-400 hover:text-white">
                  Sports
                </Link>
              </li>
              <li>
                <Link href="/category/lifestyle" className="text-gray-400 hover:text-white">
                  Lifestyle
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-200">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/advertise" className="text-gray-400 hover:text-white">
                  Advertise
                </Link>
              </li>
              <li>
                <Link href="/ethics" className="text-gray-400 hover:text-white">
                  Ethics Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-gray-200">Subscribe</h3>
            <p className="text-gray-400 mb-4">Get the latest news delivered to your inbox</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2 bg-blue-900/50 border border-blue-800 text-white placeholder:text-gray-500 rounded"
              />
              <button className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-12 pt-6 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} NWIH - News When It Happens. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-gray-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
