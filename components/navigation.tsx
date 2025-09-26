"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 h-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="w-40 h-12 bg-gray-300 animate-pulse rounded"></div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative">
              <Image
                src="/images/letagas-logo-light.png"
                alt="LetaGas - Flame on Demand"
                width={160}
                height={60}
                className="h-12 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const fallback = target.nextElementSibling as HTMLElement
                  if (fallback) fallback.style.display = 'block'
                }}
              />
              {/* Fallback text logo */}
              <div className="hidden text-gray-900 text-2xl font-bold">
                LetaGas
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-900 transition-colors font-medium py-2"
              style={{ color: '#1f2937' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#fc7618'}
              onMouseOut={(e) => e.currentTarget.style.color = '#1f2937'}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-900 transition-colors font-medium py-2"
              style={{ color: '#1f2937' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#fc7618'}
              onMouseOut={(e) => e.currentTarget.style.color = '#1f2937'}
            >
              About
            </Link>
            <Link 
              href="/marketplace" 
              className="text-gray-900 transition-colors font-medium py-2"
              style={{ color: '#1f2937' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#fc7618'}
              onMouseOut={(e) => e.currentTarget.style.color = '#1f2937'}
            >
              Marketplace
            </Link>
            <Link 
              href="/faq" 
              className="text-gray-900 transition-colors font-medium py-2"
              style={{ color: '#1f2937' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#fc7618'}
              onMouseOut={(e) => e.currentTarget.style.color = '#1f2937'}
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-900 transition-colors font-medium py-2"
              style={{ color: '#1f2937' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#fc7618'}
              onMouseOut={(e) => e.currentTarget.style.color = '#1f2937'}
            >
              Contact
            </Link>
            <Button asChild className="font-bold px-6 py-2">
              <Link 
                href="/register"
                style={{
                  backgroundColor: '#fc7618',
                  color: '#ffffff'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#e56915'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#fc7618'
                }}
              >
                Register
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-900 hover:bg-gray-100"
              style={{ color: '#1f2937' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#fc7618'}
              onMouseOut={(e) => e.currentTarget.style.color = '#1f2937'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-3 transition-colors font-medium border-b border-gray-100"
                style={{ color: '#1f2937' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fc7618'}
                onMouseOut={(e) => e.currentTarget.style.color = '#1f2937'}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-3 transition-colors font-medium border-b border-gray-100"
                style={{ color: '#1f2937' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fc7618'}
                onMouseOut={(e) => e.currentTarget.style.color = '#1f2937'}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/marketplace"
                className="block px-3 py-3 transition-colors font-medium border-b border-gray-100"
                style={{ color: '#1f2937' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fc7618'}
                onMouseOut={(e) => e.currentTarget.style.color = '#1f2937'}
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link
                href="/faq"
                className="block px-3 py-3 transition-colors font-medium border-b border-gray-100"
                style={{ color: '#1f2937' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fc7618'}
                onMouseOut={(e) => e.currentTarget.style.color = '#1f2937'}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-3 transition-colors font-medium border-b border-gray-100"
                style={{ color: '#1f2937' }}
                onMouseOver={(e) => e.currentTarget.style.color = '#fc7618'}
                onMouseOut={(e) => e.currentTarget.style.color = '#1f2937'}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-4">
                <Button asChild className="w-full font-bold py-3">
                  <Link 
                    href="/register" 
                    style={{
                      backgroundColor: '#fc7618',
                      color: '#ffffff'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#e56915'
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#fc7618'
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}