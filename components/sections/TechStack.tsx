"use client"
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"

// TODO: Zmień logo technologii na własne (możesz uzyć SVG lub fontów ikonowych)
const TECH = ["Next.js", "React 19", "TypeScript", "Tailwind v4", "Node.js", "Python", "PyTorch", "AWS", "Docker", "WebGL"]

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false)

  useEffect(() => {
    if (hasEnteredViewport) return

    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setHasEnteredViewport(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [hasEnteredViewport])

  return (
    <section ref={sectionRef} id="tech" className="w-full py-20 bg-[#030303] border-y border-matrix/10 overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <h2 className="font-mono text-sm text-gray-500 uppercase tracking-widest text-center">
          [ Obslugiwane Technologie ]
        </h2>
      </div>

      <div className="relative flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        {hasEnteredViewport ? (
          <motion.div
            className="flex items-center justify-center md:justify-start [&>div]:mx-8"
            animate={{ x: [0, -1035] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {[...TECH, ...TECH].map((tech, i) => (
              <div key={i} className="font-mono text-xl md:text-3xl font-black text-white/20 hover:text-cyan transition-colors whitespace-nowrap">
                {tech}
              </div>
            ))}
          </motion.div>
        ) : (
          <div className="flex items-center justify-center md:justify-start [&>div]:mx-8">
            {TECH.map((tech) => (
              <div key={tech} className="font-mono text-xl md:text-3xl font-black text-white/10 whitespace-nowrap">
                {tech}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}