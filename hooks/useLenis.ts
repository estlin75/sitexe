"use client"
import { useEffect, useState } from 'react'
import type Lenis from 'lenis'

type WindowWithLenis = Window & {
  __lenis?: Lenis
}

export const useLenis = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    // Access the global Lenis instance from LenisProvider
    const checkLenis = () => {
      const globalLenis = (window as WindowWithLenis).__lenis
      if (globalLenis) {
        setLenis(globalLenis)
      }
    }

    // Check immediately and set up a short polling interval
    checkLenis()
    const interval = setInterval(checkLenis, 100)

    // Clean up after 3 seconds
    const timeout = setTimeout(() => clearInterval(interval), 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return lenis
}