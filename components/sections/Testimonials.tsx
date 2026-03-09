"use client"
import { motion } from "motion/react"

const REVIEWS = [
  { text: "-", author: "-" },
  { text: "-", author: "-" },
]

export default function Testimonials() {
  return (
    <section className="w-full py-24 bg-[#030303]">
      <div className="container mx-auto px-6">
        <h2 className="font-mono text-matrix text-sm mb-12 uppercase tracking-widest text-center">
          /// Intercepted_Transmissions (Klient Feedback)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {REVIEWS.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-800 bg-black/50 backdrop-blur-sm relative"
            >
              <div className="absolute top-2 right-2 text-gray-800 text-xs font-mono">ENCRYPTED</div>
              <p className="font-mono text-gray-300 text-sm mb-4 leading-relaxed italic">
                "{rev.text}"
              </p>
              <div className="font-mono text-cyan text-xs font-bold">
                -- {rev.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}