"use client"
import { motion } from "motion/react"
import { PROCESS_STEPS, PAYMENT_TERMS } from "@/lib/constants"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function Process() {
  return (
    <section className="w-full py-32 bg-black border-y border-matrix/10">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-4 whitespace-nowrap [text-shadow:0_0_10px_rgba(255,255,255,0.22)]">
            [ PRZEBIEG_WSPOLPRACY ]
          </h2>
          <p className="font-mono text-gray-300 text-sm">Protokół realizacji projektów zdefiniowany krok po kroku.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {PROCESS_STEPS.map((step, i) => (
            <motion.div 
              key={step.num}
              variants={fadeInUp}
              className="relative"
            >
              <div className="font-mono text-5xl font-black text-white/30 mb-4 [text-shadow:0_0_14px_rgba(255,255,255,0.16)]">{step.num}</div>
              <div className="w-full h-[1px] bg-gray-700 mb-6 relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="absolute top-0 left-0 h-full bg-matrix"
                />
              </div>
              <h3 className="font-mono font-bold text-white mb-2 [text-shadow:0_0_8px_rgba(255,255,255,0.15)]">{step.title}</h3>
              <p className="text-sm text-gray-200 leading-relaxed font-sans">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14"
        >
          <div className="hacker-border box-glow-cyan bg-cyan/5 p-6 md:p-8">
            <div className="font-mono text-xs text-cyan mb-3">[ BEZPIECZNY_MODEL_PLATNOSCI ]</div>
            <div className="font-mono text-2xl md:text-3xl font-bold text-white leading-tight">
              {PAYMENT_TERMS.upfront}
              <span className="text-cyan"> / </span>
              {PAYMENT_TERMS.final}
            </div>
            <p className="mt-4 text-sm text-gray-300 font-mono">
              Transparentny model rozliczenia: start projektu jest aktywowany po 20%, a finalna platnosc nastepuje dopiero po pelnej akceptacji.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

