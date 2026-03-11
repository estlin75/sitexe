"use client"
import { motion } from "motion/react"
import { fadeInUp, staggerContainer } from "@/lib/animations"
import NeonGlitchCTA from "../common/NeonGlitchCTA"
import HeroCanvas from "../three/HeroCanvas"
import { SITE_CONFIG } from "@/lib/constants"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <HeroCanvas />
      
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center"
      >
        <motion.div variants={fadeInUp} className="mb-6 inline-block max-w-full px-4">
          <span className="font-mono text-[10px] sm:text-xs md:text-sm text-cyan bg-cyan/10 border border-cyan/30 px-3 py-1 uppercase tracking-widest whitespace-nowrap block text-center">
            Uplink established // Connection secure
          </span>
        </motion.div>
        
        <motion.h1 
          variants={fadeInUp}
          className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6"
        >
          Kujemy <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-matrix to-cyan text-glow-matrix">
            cyfrową przyszłość
          </span>
        </motion.h1>
        
        <motion.p 
          variants={fadeInUp}
          className="font-mono text-gray-400 max-w-2xl text-sm md:text-base mb-10 leading-relaxed"
        >
          {"// "}{SITE_CONFIG.tagline} <br/>
          Tworzymy strony, aplikacje webowe i mobilne (iOS &amp; Android) – od prostych wizytówek po skalowalne systemy SaaS i rozwiązania AI.
        </motion.p>
        
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
          <NeonGlitchCTA text="ROZPOCZNIJ_PROJEKT" href="#contact" color="matrix" />
          <NeonGlitchCTA text="ZOBACZ_PORTFOLIO" href="#portfolio" color="cyan" />
        </motion.div>
      </motion.div>

      {/* Data Stream Effect - Animated background data flows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 font-mono text-xs text-matrix animate-data-stream">
          &gt; INITIALIZING_NEURAL_NETWORK...
        </div>
        <div className="absolute top-1/3 right-1/4 font-mono text-xs text-cyan animate-data-stream" style={{ animationDelay: "1s" }}>
          &lt; LOADING_CORE_SYSTEMS...
        </div>
        <div className="absolute bottom-1/3 left-1/3 font-mono text-xs text-matrix/50 animate-data-stream" style={{ animationDelay: "2s" }}>
          &gt; SYNC_STATUS: 99.7%
        </div>
        <div className="absolute bottom-1/4 right-1/3 font-mono text-xs text-cyan/50 animate-data-stream" style={{ animationDelay: "1.5s" }}>
          &lt; EXECUTING_PROTOCOLS...
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-xs text-gray-600 animate-bounce">
        PRZEWIŃ_W_DÓŁ [↓]
      </div>

      {/* Smooth fade gradient transition - MatrixRain gracefully fades to background */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
    </section>
  )
}