"use client"
import { useEffect, useRef, useState } from "react"

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || isMobile) return // Disable on mobile

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~".split("")
    const fontSize = 14
    const columnSpacing = 2
    const columns = Math.floor(canvas.width / (fontSize * columnSpacing))
    const drops: number[] = []

    for (let x = 0; x < columns; x++) {
      drops[x] = 1
    }

    const draw = () => {
      ctx.fillStyle = "rgba(5, 5, 5, 0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        
        // Alternate between matrix green and cyan for visual intensity
        const isGlitch = Math.random() > 0.85
        if (isGlitch) {
          ctx.fillStyle = "#00f0ff" // Cyan glitch
          ctx.globalAlpha = 0.6
        } else {
          ctx.fillStyle = "#00ff9f" // Matrix green
          ctx.globalAlpha = Math.random() > 0.7 ? 1 : 0.8
        }
        
        ctx.fillText(text, i * fontSize * columnSpacing, drops[i] * fontSize)
        ctx.globalAlpha = 1

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 60)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [isMobile])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 opacity-20 pointer-events-none"
    />
  )
}