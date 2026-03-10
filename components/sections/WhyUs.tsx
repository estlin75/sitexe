"use client"
import { motion } from "motion/react"

export default function WhyUs() {
  return (
    <section id="why-us" className="w-full py-20 bg-[#050505]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-md border border-gray-800 bg-black overflow-hidden shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="bg-gray-900 border-b border-gray-800 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 font-mono text-xs text-gray-500">root@testforge:~#</span>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm md:text-base leading-relaxed text-gray-300">
            <p className="mb-4"><span className="text-matrix">user:~$</span> cat dlaczego_my.txt</p>
            <p className="mb-2 text-cyan">1. ZERO_SCHEMATOW</p>
            <p className="mb-4 pl-4 text-gray-500">Dostarczamy czysty i zoptymalizowany kod. Bez gotowych szablonow, tylko wydajne rozwiazania tworzone pod klienta.</p>
            
            <p className="mb-2 text-cyan">2. SPRAWNA_REALIZACJA</p>
            <p className="mb-4 pl-4 text-gray-500">Pracujemy szybko i metodycznie, dlatego dostarczamy projekty w krotkim czasie bez kompromisow dla jakosci.</p>
            
            <p className="mb-2 text-cyan">3. STABILNOSC_I_BEZPIECZENSTWO</p>
            <p className="mb-4 pl-4 text-gray-500">Nasze strony i aplikacje wdrazamy zgodnie z aktualnymi standardami bezpieczenstwa i praktykami produkcyjnymi.</p>
            
            <p className="mt-6 animate-pulse"><span className="text-matrix">user:~$</span> _</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}