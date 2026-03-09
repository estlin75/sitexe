"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { useLenis } from "lenis/react" // <-- Dodany import
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const lenis = useLenis() // <-- Inicjalizacja Lenis

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // <-- Nowa funkcja obsługująca płynny scroll dla nawigacji
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();

      if (lenis) {
        lenis.scrollTo(href, {
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
          immediate: false,
        });
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    
    // Zamykamy menu po kliknięciu (przydatne na mobile)
    setIsOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled || isOpen ? "bg-black/90 backdrop-blur-md border-matrix/20 py-4" : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        <div className="font-mono text-xl font-bold text-white tracking-tighter">
          <span className="text-matrix">{"{"}</span> {SITE_CONFIG.name} <span className="text-matrix">{"}"}</span>
          <span className="animate-pulse text-matrix">_</span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)} // <-- Dodany event
              className="font-mono text-sm text-gray-400 hover:text-cyan transition-colors hover:text-glow-cyan"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden font-mono text-matrix border border-matrix px-3 py-1 text-sm hover:bg-matrix hover:text-black transition-colors"
        >
          {isOpen ? "[ CLOSE ]" : "[ MENU ]"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full h-screen bg-black/95 backdrop-blur-xl border-t border-matrix/20 md:hidden flex flex-col pt-10 px-6 z-40"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)} // <-- Dodany event
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="font-mono text-xl font-bold text-gray-400 hover:text-cyan py-6 border-b border-gray-900 transition-colors"
              >
                <span className="text-matrix mr-4 text-xs opacity-50">{`0${i + 1}`}</span>
                {link.name}
              </motion.a>
            ))}
            
            <div className="mt-10 font-mono text-xs text-matrix opacity-50 animate-pulse">
              // SYSTEM.WAITING_FOR_INPUT_
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}