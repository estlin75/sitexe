"use client"
import { motion } from "motion/react"
import { Globe, Smartphone, CreditCard, Database, Server, Palette, type LucideIcon } from "lucide-react"
import { SERVICES } from "@/lib/constants"
import { fadeInUp, staggerContainer } from "@/lib/animations"

const icons: Record<string, LucideIcon> = { Globe, Smartphone, CreditCard, Database, Server, Palette }

export default function Services() {
  const coreServices = SERVICES.find((group) => group.group === "CORE_SERVICES")?.items ?? []
  const extendedServices = SERVICES.find((group) => group.group === "EXTENDED_SERVICES")?.items ?? []

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
            <span className="text-magenta">&gt;</span> ./uruchom_usługi.sh
          </h2>
          <div className="w-24 h-1 bg-magenta mt-4 box-glow-magenta" />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 hacker-border px-4 py-2">
            <span className="font-mono text-xs text-cyan">GŁÓWNE</span>
            <span className="font-mono text-xs text-gray-500">KLUCZOWE_USŁUGI</span>
          </div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {coreServices.map((service) => {
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

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 mb-8"
        >
          <div className="inline-flex items-center gap-2 hacker-border px-4 py-2">
            <span className="font-mono text-xs text-magenta">DODATKOWE</span>
            <span className="font-mono text-xs text-gray-500">INFRASTRUKTURA_I_WSPARCIE</span>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {extendedServices.map((service) => {
            const Icon = icons[service.icon]
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="hacker-border p-6 group"
              >
                <div className="text-cyan mb-5 group-hover:text-matrix transition-colors">
                  <Icon size={30} strokeWidth={1.5} />
                </div>
                <div className="font-mono text-xs text-gray-500 mb-2">ID: {service.id}</div>
                <h3 className="text-lg font-bold text-white mb-3 uppercase">{service.title}</h3>
                <p className="text-gray-400 text-sm font-mono leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}