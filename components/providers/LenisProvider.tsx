"use client"
import { useEffect, ReactNode } from 'react'
import Lenis from 'lenis'

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const isMobile = window.innerWidth < 768

    const lenis = new Lenis({
      lerp: isMobile ? 0.1 : 0.08,
      wheelMultiplier: 1.1,
      smoothWheel: true,
      touchMultiplier: isMobile ? 1.0 : 1.5,
      syncTouch: false,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    })

    // Store Lenis instance globally for other components to access
    ;(window as any).__lenis = lenis

    let animationFrameId: number

    function raf(time: number) {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }

    animationFrameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
      delete (window as any).__lenis
    }
  }, [])

  return <>{children}</>
}
