import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "LetaGas - Gas Delivery Made Simple",
  description:
    "Fast, safe, and reliable gas delivery at your fingertips. Order LPG gas cylinders and get them delivered to your doorstep.",
  generator: "v0.app",
  icons: {
    icon: "/images/letagas-logo-light.png",
    shortcut: "/images/letagas-logo-light.png",
    apple: "/images/letagas-logo-light.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
