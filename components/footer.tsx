import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Linkedin, Smartphone, Apple } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#20235b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-5 bg-white p-4 rounded-lg"> {/* Changed to solid white background */}
              <Image
                src="/images/letagas-logo-light.png"
                alt="LetaGas Logo"
                width={260} 
                height={100}
                className="h-20 w-auto"
              />
            </div>

            <p className="text-gray-200 mb-6 max-w-md text-pretty">
              Kenya's leading gas delivery service bringing convenience and reliability to your doorstep. Fast, safe,
              and professional service when you need it most.
            </p>

            {/* App Download Buttons */}
            <div className="mb-6">
              <h4 className="font-medium mb-3 text-gray-100">Get our app</h4>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://i.diawi.com/SyBi6L"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-white px-4 py-2 rounded-lg transition-all duration-200 text-sm"
                >
                  <Apple className="h-4 w-4" />
                  App Store
                </Link>
                <Link
                  href="https://i.diawi.com/SyBi6L"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-white px-4 py-2 rounded-lg transition-all duration-200 text-sm"
                >
                  <Smartphone className="h-4 w-4" />
                  Google Play
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/letagas_ke?igsh=cWtkdXE3dnZieXEw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#fc7618] transition-colors p-2 rounded-lg"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@letagas_ke?_t=ZM-8zTJAhOaqIC&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#fc7618] transition-colors p-2 rounded-lg"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/letagas-energies/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#fc7618] transition-colors p-2 rounded-lg"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#fc7618] transition-colors block py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#fc7618] transition-colors block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sustainable" className="text-gray-300 hover:text-[#fc7618] transition-colors block py-1">
                  Sustainable
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#fc7618] transition-colors block py-1">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-[#fc7618] transition-colors block py-1">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-[#fc7618] transition-colors block py-1">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#fc7618] transition-colors block py-1">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-[#fc7618] transition-colors block py-1">
                  Become a Vendor
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-[#fc7618] transition-colors block py-1">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-5 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="bg-[#fc7618]/20 p-2 rounded-lg mt-0.5">
                  <Phone className="h-4 w-4 text-[#fc7618]" />
                </div>
                <div>
                  <span className="text-gray-300 block">020 2444100</span>
                  <span className="text-gray-400 text-sm">Available 24/7</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-[#fc7618]/20 p-2 rounded-lg mt-0.5">
                  <Mail className="h-4 w-4 text-[#fc7618]" />
                </div>
                <div>
                  <span className="text-gray-300 block">info@leta-gas.com</span>
                  <span className="text-gray-400 text-sm">We respond quickly</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-[#fc7618]/20 p-2 rounded-lg mt-0.5">
                  <MapPin className="h-4 w-4 text-[#fc7618]" />
                </div>
                <div>
                  <span className="text-gray-300 block">Nationwide Coverage</span>
                  <span className="text-gray-400 text-sm">Across Kenya</span>
                </div>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="font-medium mb-3 text-white">Stay updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border border-white/20 text-white placeholder-gray-300 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#fc7618]"
                />
                <Button 
                  className="rounded-l-none rounded-r-lg px-4 bg-[#fc7618] hover:bg-[#e56915] text-white"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm text-center md:text-left">
            © {currentYear} LetaGas. All rights reserved. | Flame on Demand.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
            <Link href="/privacy" className="text-gray-300 hover:text-[#fc7618] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-[#fc7618] text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/safety" className="text-gray-300 hover:text-[#fc7618] text-sm transition-colors">
              Safety Guidelines
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}