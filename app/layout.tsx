import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Manshi Kumari | Cloud Computing & AI Engineer",
  description:
    "Portfolio of Manshi Kumari - Engineering student specializing in Cloud Computing, DevOps, and AI-based systems. Aspiring cloud professional seeking internships.",
  keywords: [
    "Manshi Kumari",
    "Cloud Computing",
    "AI Engineer",
    "Portfolio",
    "DevOps",
    "AWS",
    "Python",
  ],
}

export const viewport: Viewport = {
  themeColor: "#faf5f2",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
