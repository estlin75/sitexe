"use client"
import { motion } from "motion/react"
import { PROJECTS } from "@/lib/constants"
import { fadeInUp, staggerContainer } from "@/lib/animations"

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full py-32 bg-black">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="font-mono text-3xl md:text-4xl text-white font-bold">
              <span className="text-cyan">SYS.</span>GET_ARCHIVES()
            </h2>
            <div className="w-24 h-1 bg-cyan mt-4 box-glow-cyan" />
          </div>
          <div className="font-mono text-xs text-gray-500 max-w-sm">
            // Baza danych projektów sklasyfikowanych. Wymagany poziom dostępu: publiczny.
          </div>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {PROJECTS.map((project, index) => {
            // Czysta nazwa do wielkiej typografii (usuwamy prefix "Project: ")
            const cleanTitle = project.title.replace("Project: ", "")

            return (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                variants={fadeInUp}
                className={`group relative block hacker-border aspect-video overflow-hidden bg-[#050505] ${index === 2 ? 'md:col-span-2 md:aspect-[21/9]' : ''}`}
              >
                {/* 1. STAN DOMYŚLNY: Wielka typografia na środku (powiększa się i znika na hover) */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none transition-all duration-700">
                  {/* Tło kropek (opcjonalne, dla klimatu) */}
                  <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px] opacity-30 group-hover:opacity-0 transition-opacity duration-700" />
                  
                  {/* Wielki napis */}
                  <h2 className="text-5xl md:text-7xl font-black text-white/10 tracking-tighter uppercase text-center px-4 transition-all duration-700 group-hover:scale-[1.5] group-hover:opacity-0 group-hover:blur-sm">
                    {cleanTitle}
                  </h2>
                </div>
                
                {/* 2. STAN HOVER: Żywy Iframe (pojawia się z pod spodu) */}
                <div className="absolute inset-0 z-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  <div className="absolute inset-0 bg-cyan/10 mix-blend-color z-10 pointer-events-none" />
                  <iframe
                    src={project.link}
                    loading="lazy"
                    tabIndex={-1}
                    className="absolute top-0 left-0 w-[300%] h-[300%] origin-top-left scale-[0.333333] border-none pointer-events-none"
                  />
                </div>
                
                {/* 3. Ciemny gradient na dole (aby dolne teksty zawsze były czytelne) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-all duration-500" />
                
                {/* 4. Małe teksty na dole */}
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="font-mono text-cyan text-xs mb-2">[{project.category}]</div>
                      <h3 className="font-bold text-2xl text-white group-hover:text-glow-cyan transition-all">{project.title}</h3>
                    </div>
                    <div className="font-mono text-matrix opacity-0 group-hover:opacity-100 transition-opacity">
                      [ EXECUTE ]
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}