import Link from "next/link"
import { SITE_CONFIG } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#020202] border-t border-matrix/20 py-12">
      <div className="container mx-auto px-6 font-mono flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <div className="mb-4 md:mb-0">
          <p className="text-matrix mb-1">STATUS SYSTEMU: ONLINE</p>
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. WSZYSTKIE PRAWA ZASTRZEŻONE.</p>
        </div>

        <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest">
          <Link href="/polityka-prywatnosci" className="text-gray-400 transition-colors hover:text-cyan">
            [ POLITYKA_PRYWATNOŚCI ]
          </Link>
        </div>

        {/*
          Ukryte odnośniki do uzupełnienia:
          GitHub: https://github.com/twoj-profil
          LinkedIn: https://www.linkedin.com/in/twoj-profil
          Twitter: https://x.com/twoj-profil
        */}
      </div>
    </footer>
  )
}