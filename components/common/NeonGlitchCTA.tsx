"use client"
import { motion } from "motion/react"
import { useLenis } from "lenis/react"
import { glitchAnimation } from "../../lib/animations"

interface Props {
  text: string
  href?: string
  onClick?: () => void
  color?: "matrix" | "cyan" | "magenta"
}

export default function NeonGlitchCTA({ text, href, onClick, color = "matrix" }: Props) {
  const lenis = useLenis();

  const colorMap = {
    matrix: "border-matrix text-matrix shadow-[0_0_15px_rgba(0,255,159,0.3)] hover:bg-matrix hover:text-black",
    cyan: "border-cyan text-cyan shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:bg-cyan hover:text-black",
    magenta: "border-magenta text-magenta shadow-[0_0_15px_rgba(255,0,170,0.3)] hover:bg-magenta hover:text-white"
  }

  const handleClick = (e: React.MouseEvent) => {
    if (href?.startsWith("#")) {
      e.preventDefault();

      if (lenis) {
        lenis.scrollTo(href, {
          duration: 1.0, // Skrócone dla lepszej responsywności
          easing: (t) => 1 - Math.pow(1 - t, 4), // Szybszy, konkretny koniec
          immediate: false,
          force: true, // Przerywa poprzednie animacje
        });
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }

    if (onClick) onClick();
  };

  const commonClass = `relative inline-flex items-center justify-center px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest transition-all duration-300 border bg-transparent cursor-pointer w-full sm:w-auto ${colorMap[color]}`;

  const Content = (
    <>
      <span className="absolute left-0 top-0 w-[5px] h-[5px] border-t border-l border-white/50" />
      <span className="absolute right-0 bottom-0 w-[5px] h-[5px] border-b border-r border-white/50" />
      {text}
    </>
  );

  if (!href) {
    return (
      <motion.button onClick={handleClick} variants={glitchAnimation} whileHover="hover" className={commonClass}>
        {Content}
      </motion.button>
    )
  }

  return (
    <motion.a href={href} onClick={handleClick} variants={glitchAnimation} whileHover="hover" className={commonClass}>
      {Content}
    </motion.a>
  )
}