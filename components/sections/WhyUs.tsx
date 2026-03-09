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
            <p className="mb-4"><span className="text-matrix">user:~$</span> cat why_choose_us.txt</p>
            <p className="mb-2 text-cyan">1. ZERO_BULLSHIT_POLICY</p>
            <p className="mb-4 pl-4 text-gray-500">Dostarczamy czysty, zoptymalizowany kod. Żadnych pre-gotowych szablonów z WP, tylko surowy performance.</p>
            
            <p className="mb-2 text-cyan">2. AI_DRIVEN_DEVELOPMENT</p>
            <p className="mb-4 pl-4 text-gray-500">Korzystamy z najnowszych modeli LLM aby przyspieszyć proces tworzenia o 400% i dowozić projekty przed czasem.</p>
            
            <p className="mb-2 text-cyan">3. ELITE_SECURITY</p>
            <p className="mb-4 pl-4 text-gray-500">Nasze aplikacje są zabezpieczone zgodnie z aktualnymi standardami branżowymi.</p>
            
            <p className="mt-6 animate-pulse"><span className="text-matrix">user:~$</span> _</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}