"use client"
import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { EffectComposer, Glitch, Bloom, ChromaticAberration } from "@react-three/postprocessing"
import { Vector2 } from "three"
import * as THREE from "three"

function CyberShape() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
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
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <CyberShape />
        <EffectComposer>
          <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={300} intensity={1.5} />
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
  )
}