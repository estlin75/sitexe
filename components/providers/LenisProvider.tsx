"use client"
import { useEffect, ReactNode } from 'react'
import Lenis from 'lenis'

type WindowWithLenis = Window & {
  __lenis?: Lenis
}

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    // Na mobilnych natywny scroll jest płynny i szybki — Lenis tylko przeszkadza
    if (isMobile) return

    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1.0,
      smoothWheel: true,
      touchMultiplier: 1.2,
      syncTouch: true,
      autoRaf: false,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    })

    // Store Lenis instance globally for other components to access
    ;(window as WindowWithLenis).__lenis = lenis

    let animationFrameId: number

    function raf(time: number) {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }

    animationFrameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
      delete (window as WindowWithLenis).__lenis
    }
  }, [])

  return <>{children}</>
}
