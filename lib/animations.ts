import type { Variants } from "framer-motion";

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}as const satisfies Variants;

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

export const glitchAnimation = {
  initial: { x: 0 },
  hover: {
    x: [-2, 2, -2, 2, 0],
    transition: { duration: 0.4, ease: "easeInOut" }
  },
  
}as const satisfies Variants;