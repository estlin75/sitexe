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
    const globalLenis = (window as WindowWithLenis).__lenis
    if (globalLenis) {
      setLenis(globalLenis)
    }
  }, [])

  return lenis
}