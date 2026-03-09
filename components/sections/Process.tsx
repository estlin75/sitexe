"use client"
import { motion } from "motion/react"

const STEPS = [
  { num: "01", title: "RECONNAISSANCE", desc: "Analiza wymagań, mapowanie architektury i dobór stacku." },
  { num: "02", title: "PROTOTYPING", desc: "Tworzenie wireframe'ów i interaktywnych modeli UI/UX w oparciu o Three.js." },
  { num: "03", title: "EXECUTION", desc: "Czyste kodowanie, integracja AI, budowa backendu" },
  { num: "04", title: "DEPLOYMENT", desc: "Testy penetracyjne, CI/CD, uruchomienie na globalnej infrastrukturze AWS/Vercel." },
]

export default function Process() {
  return (
    <section className="w-full py-32 bg-black border-y border-matrix/10">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-mono text-3xl md:text-4xl text-white font-bold mb-4">
            [ OPERATIONAL_WORKFLOW ]
          </h2>
          <p className="font-mono text-gray-500 text-sm">Protokół realizacji projektów zdefiniowany krok po kroku.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {STEPS.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="font-mono text-5xl font-black text-white/5 mb-4">{step.num}</div>
              <div className="w-full h-[1px] bg-gray-800 mb-6 relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="absolute top-0 left-0 h-full bg-matrix"
                />
              </div>
              <h3 className="font-mono font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}