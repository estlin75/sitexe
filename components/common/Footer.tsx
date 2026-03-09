import { SITE_CONFIG } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#020202] border-t border-matrix/20 py-12">
      <div className="container mx-auto px-6 font-mono flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <div className="mb-4 md:mb-0">
          <p className="text-matrix mb-1">SYSTEM STATUS: ONLINE</p>
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. ALL RIGHTS RESERVED.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="hover:text-cyan transition-colors">[ GITHUB ]</a>
          <a href="#" className="hover:text-cyan transition-colors">[ TWITTER / X ]</a>
          <a href="#" className="hover:text-cyan transition-colors">[ LINKEDIN ]</a>
        </div>
      </div>
    </footer>
  )
}