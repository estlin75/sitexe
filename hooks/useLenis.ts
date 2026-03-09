"use client"
import { useEffect } from 'react'
import Lenis from 'lenis'

export const useLenis = () => {
  useEffect(() => {
    // ELITARNE USTAWIENIA (Awwwards Smoothness)
    const lenis = new Lenis({
      lerp: 0.08,             // 0.08 to idealny "złoty środek" masła i precyzji
      wheelMultiplier: 1.1,   // Lekkie podbicie prędkości, żeby nie trzeba było machać rolką jak szalony
      smoothWheel: true,      // Główny silnik gładkości dla myszek
      touchMultiplier: 1.5,   // Telefony dotykowe potrzebują trochę więcej dynamiki
      syncTouch: true,        // Synchronizuje fizyczny dotyk palca z renderowaniem klatek
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    })

    let animationFrameId: number;

    // Zoptymalizowana pętla renderująca (używa wbudowanego czasu rAF dla max FPS)
    function raf(time: number) {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }

    animationFrameId = requestAnimationFrame(raf)

    // Czyste odpięcie przy zmianie podstrony / zamknięciu komponentu
    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
    }
  }, [])
}