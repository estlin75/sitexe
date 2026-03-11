"use client"
import { useRef, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { EffectComposer, Glitch, Bloom, ChromaticAberration } from "@react-three/postprocessing"
import { Vector2 } from "three"
import * as THREE from "three"

function NoGPUToast({ onClose }: { onClose: () => void }) {
  const [visible, setVisible] = useState(false)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    // Wjazd po krótkim opóźnieniu
    const showTimer = setTimeout(() => setVisible(true), 400)
    return () => { clearTimeout(showTimer) }
  }, [])

  function triggerClose() {
    setClosing(true)
    setTimeout(onClose, 400)
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] max-w-sm w-full pointer-events-auto"
      style={{
        transform: visible && !closing ? "translateY(0)" : "translateY(120%)",
        opacity: visible && !closing ? 1 : 0,
        transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease",
      }}
    >
      <div className="relative bg-black border border-matrix/60 font-mono text-xs overflow-hidden"
        style={{ boxShadow: "0 0 20px rgba(0,255,159,0.15), 0 0 40px rgba(0,255,159,0.05)" }}
      >
        {/* Scanline top bar */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-matrix/30 bg-matrix/5">
          <span className="text-matrix tracking-widest uppercase text-[10px]">// SYSTEM_ALERT</span>
          <button
            onClick={triggerClose}
            className="text-gray-600 hover:text-matrix transition-colors leading-none text-base"
            aria-label="Zamknij"
          >
            ×
          </button>
        </div>

        <div className="px-4 py-3 space-y-2">
          <p className="text-matrix/80 leading-relaxed">
            <span className="text-matrix">&gt;</span> Wykryto brak akceleracji sprzętowej GPU.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Włącz akcelerację sprzętową w ustawieniach przeglądarki — strona będzie działać płynniej, szybciej i w pełnej jakości wizualnej.
          </p>
          <p className="text-matrix/50 text-[10px] pt-1 border-t border-matrix/20">
            — Pozdrawiamy, sitexe team_
          </p>
        </div>
      </div>
    </div>
  )
}

async function detectHardwareAcceleration(): Promise<boolean> {
  try {
    const canvas = document.createElement("canvas")
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl")
    if (!gl) return false

    // Próba 1: renderer string (najszybsze)
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info")
    if (debugInfo) {
      const renderer = (gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) as string).toLowerCase()
      const vendor = (gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) as string).toLowerCase()
      const softwareKeywords = [
        "swiftshader", "llvmpipe", "softpipe", "software",
        "mesa offscreen", "vmware", "gdi generic", "microsoft basic render"
      ]
      if (softwareKeywords.some(k => renderer.includes(k) || vendor.includes(k))) return false
      return true
    }

    // Próba 2 (fallback - gdy przeglądarka blokuje debugInfo): timing benchmark
    // readPixels wymusza synchronizację GPU — na CPU-rendered jest DUŻO wolniejszy
    canvas.width = 256
    canvas.height = 256
    const pixels = new Uint8Array(4 * 64 * 64)
    const t0 = performance.now()
    for (let i = 0; i < 8; i++) {
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.readPixels(0, 0, 64, 64, gl.RGBA, gl.UNSIGNED_BYTE, pixels)
    }
    const elapsed = performance.now() - t0
    // Software: zwykle > 80ms, Hardware: < 20ms — próg 40ms
    return elapsed < 40

  } catch {
    return false
  }
}

function CyberShape() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2.5, 1]} />
      <meshBasicMaterial color="#00ff9f" wireframe={true} transparent opacity={0.15} />
    </mesh>
  )
}

export default function HeroCanvas() {
  const [hasHardwareAccel, setHasHardwareAccel] = useState<boolean | null>(null)
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    detectHardwareAcceleration().then((result) => {
      setHasHardwareAccel(result)
      if (!result) setShowToast(true)
    })
  }, [])

  return (
    <>
      {showToast && <NoGPUToast onClose={() => setShowToast(false)} />}

      {hasHardwareAccel && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <Canvas camera={{ position: [0, 0, 6] }}>
            <CyberShape />
            <EffectComposer>
              <Bloom
                luminanceThreshold={0.1}
                luminanceSmoothing={0.9}
                height={300}
                intensity={1.5}
              />
              <Glitch
                delay={new Vector2(2, 5)}
                duration={new Vector2(0.1, 0.3)}
                strength={new Vector2(0.1, 0.5)}
                active
                ratio={0.1}
              />
              <ChromaticAberration offset={new Vector2(0.005, 0.005)} />
            </EffectComposer>
          </Canvas>
        </div>
      )}
    </>
  )
}