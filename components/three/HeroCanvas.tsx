"use client"
import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "motion/react"

export default function HeroCanvas() {
  const reduceMotion = useReducedMotion()
  const [signalDrop, setSignalDrop] = useState(false)

  useEffect(() => {
    if (reduceMotion) return

    let timeoutId: ReturnType<typeof setTimeout> | null = null
    let dropTimeoutId: ReturnType<typeof setTimeout> | null = null

    const scheduleDrop = () => {
      const wait = 4200 + Math.random() * 5200
      timeoutId = setTimeout(() => {
        setSignalDrop(true)

        const dropDuration = 120 + Math.random() * 220
        dropTimeoutId = setTimeout(() => {
          setSignalDrop(false)
          scheduleDrop()
        }, dropDuration)
      }, wait)
    }

    scheduleDrop()

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      if (dropTimeoutId) clearTimeout(dropTimeoutId)
    }
  }, [reduceMotion])

  return (
    <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-150 ${signalDrop ? "opacity-80" : "opacity-100"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,159,0.08),transparent_42%),radial-gradient(circle_at_80%_30%,rgba(0,212,255,0.08),transparent_46%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,159,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,159,0.04)_1px,transparent_1px)] [background-size:64px_64px] opacity-30" />

      {!reduceMotion && signalDrop && (
        <>
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,255,159,0.12)_0px,rgba(0,255,159,0.12)_1px,transparent_1px,transparent_3px)] opacity-25" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,255,159,0.05)_0%,transparent_35%,rgba(0,212,255,0.07)_50%,transparent_75%,rgba(0,255,159,0.05)_100%)]" />
          <motion.div
            className="absolute inset-0"
            initial={{ x: 0 }}
            animate={{ x: [0, -2, 2, -1, 0] }}
            transition={{ duration: 0.18, ease: "linear" }}
          />
        </>
      )}

      <motion.div
        className="absolute -top-24 -left-12 w-72 h-72 rounded-full bg-matrix/15 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 30, -18, 0], y: [0, 18, -12, 0] }}
        transition={reduceMotion ? undefined : { duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-16 w-80 h-80 rounded-full bg-cyan/10 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -24, 18, 0], y: [0, -14, 10, 0] }}
        transition={reduceMotion ? undefined : { duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 left-1/3 w-64 h-64 rounded-full bg-matrix/10 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 10, -16, 0], y: [0, -20, 8, 0] }}
        transition={reduceMotion ? undefined : { duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}