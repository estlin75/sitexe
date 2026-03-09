"use client"
import { motion } from "motion/react"
import { BrainCircuit, Network, Cpu } from "lucide-react"
import { SERVICES } from "@/lib/constants"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const icons: Record<string, any> = { BrainCircuit, Network, Cpu }

export default function Services() {
  return (
    <section id="services" className="relative w-full py-32 bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="font-mono text-3xl md:text-4xl text-white font-bold">
            <span className="text-magenta">&gt;</span> ./execute_services.sh
          </h2>
          <div className="w-24 h-1 bg-magenta mt-4 box-glow-magenta" />
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => {
            const Icon = icons[service.icon]
            return (
              <motion.div 
                key={service.id}
                variants={fadeInUp}
                className="hacker-border p-8 group"
              >
                <div className="text-cyan mb-6 group-hover:text-matrix transition-colors">
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                <div className="font-mono text-xs text-gray-500 mb-2">ID: {service.id}</div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase">{service.title}</h3>
                <p className="text-gray-400 text-sm font-mono leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}