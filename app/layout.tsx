import "./globals.css"
import type { Metadata, Viewport } from "next"
import { JetBrains_Mono, Inter } from "next/font/google"
import { Toaster } from "sonner"
import { SITE_CONFIG } from "@/lib/constants"
import { cn } from "@/lib/utils"
import LenisProvider from "@/components/providers/LenisProvider"

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" })
const fontMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
}

export const viewport: Viewport = {
  themeColor: "#050505",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className="dark">
      <body className={cn(
        "min-h-screen bg-cyber-dark font-sans antialiased scanlines",
        fontSans.variable,
        fontMono.variable
      )}>
        <LenisProvider>
          {children}
        </LenisProvider>
        <Toaster theme="dark" toastOptions={{ 
          className: 'bg-black border border-matrix text-matrix font-mono rounded-none',
          duration: 4000
        }} />
      </body>
    </html>
  )
}