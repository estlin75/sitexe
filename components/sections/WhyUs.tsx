"use client"
import { motion } from "motion/react"

const WHY_US_POINTS = [
  {
    title: "1. ZERO_SCHEMATOW",
    description: "Dostarczamy czysty i zoptymalizowany kod. Bez gotowych szablonow, tylko wydajne rozwiazania tworzone pod klienta.",
  },
  {
    title: "2. SPRAWNA_REALIZACJA",
    description: "Pracujemy szybko i metodycznie, dlatego dostarczamy projekty w krotkim czasie bez kompromisow dla jakosci.",
  },
  {
    title: "3. STABILNOSC_I_BEZPIECZENSTWO",
    description: "Nasze strony i aplikacje wdrazamy zgodnie z aktualnymi standardami bezpieczenstwa i praktykami produkcyjnymi.",
  },
  {
    title: "4. PELNA_KOMUNIKACJA",
    description: "Jestes na biezaco z kazdym krokiem realizacji. Otwarty kanal kontaktu, regularne aktualizacje i bezposredni dostep do zespolu.",
  },
]

const COMMAND_TEXT = "dlaczego_my.txt"

export default function WhyUs() {
  return (
    <section id="why-us" className="w-full py-20 bg-[#050505] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,255,159,0.08),transparent_55%)]" />
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-md border border-matrix/35 bg-black overflow-hidden shadow-[0_0_60px_rgba(0,255,159,0.12)]"
        >
          {/* Terminal Header */}
          <div className="bg-gradient-to-r from-gray-900 via-[#0c1320] to-gray-900 border-b border-matrix/30 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 font-mono text-xs text-matrix/70">root@sitexe:~#</span>
          </div>
          
          {/* Terminal Body */}
          <div className="relative p-6 md:p-7 font-mono text-sm md:text-base leading-relaxed text-gray-200">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,255,159,0.04),transparent_35%)]" />
            <motion.div
              initial={{ top: "0%", opacity: 0 }}
              whileInView={{ top: "100%", opacity: [0, 0.42, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 2.1, ease: "easeInOut" }}
              className="pointer-events-none absolute inset-x-0 h-10 bg-gradient-to-b from-matrix/30 via-matrix/15 to-transparent"
            />

            <motion.p
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="mb-4 relative"
            >
              <span className="text-matrix">user:~$</span> <span className="text-white">cat</span>{" "}
              <span className="text-white">
                {COMMAND_TEXT.split("").map((char, index) => (
                  <motion.span
                    key={`${char}-${index}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.03, duration: 0.05 }}
                    className="inline-block whitespace-pre"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </motion.p>

            {WHY_US_POINTS.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.14 }}
              >
                <p className="mb-2 text-cyan font-bold tracking-wide">{point.title}</p>
                <p className="mb-4 pl-4 text-gray-300">{point.description}</p>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.95, duration: 0.25 }}
              className="mt-6"
            >
              <span className="text-matrix">user:~$</span>{" "}
              <motion.span
                animate={{ opacity: [1, 0.15, 1] }}
                transition={{ duration: 0.9, repeat: Number.POSITIVE_INFINITY }}
                className="text-white"
              >
                _
              </motion.span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}