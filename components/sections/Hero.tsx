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
          Tworzymy aplikacje internetowe – od prostych stron firmowych i wizytówek po skalowalne systemy SaaS i rozwiązania AI.
        </motion.p>
        
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
          <NeonGlitchCTA text="ROZPOCZNIJ_PROJEKT" href="#contact" color="matrix" />
          <NeonGlitchCTA text="ZOBACZ_PORTFOLIO" href="#portfolio" color="cyan" />
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-xs text-gray-600 animate-bounce">
        PRZEWIŃ_W_DÓŁ [↓]
      </div>
    </section>
  )
}