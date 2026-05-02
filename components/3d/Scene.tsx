'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, MeshTransmissionMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

/* ============================================================
   Abstract Glass Geometry — the 3D hero element
   ============================================================ */

function GlassSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const t = clock.getElapsedTime()
    meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.3
    meshRef.current.rotation.y = t * 0.08
    meshRef.current.rotation.z = Math.cos(t * 0.12) * 0.2
  })

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.8}>
      <mesh ref={meshRef} castShadow>
        <torusKnotGeometry args={[1.2, 0.38, 200, 32, 2, 3]} />
        <MeshTransmissionMaterial
          backside
          samples={8}
          resolution={512}
          transmission={1}
          roughness={0.02}
          thickness={1.2}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropy={0.1}
          distortion={0.4}
          distortionScale={0.3}
          temporalDistortion={0.2}
          color="#b8f455"
          attenuationColor="#80c832"
          attenuationDistance={0.8}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  )
}

function AmbientParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 80

  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6
  }

  useFrame(({ clock }) => {
    if (!particlesRef.current) return
    particlesRef.current.rotation.y = clock.getElapsedTime() * 0.015
    particlesRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.008) * 0.1
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#b8f455"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <directionalLight position={[-5, -3, -2]} intensity={0.4} color="#b8f455" />
      <pointLight position={[0, 0, 4]} intensity={0.6} color="#c8f870" distance={10} />
      <Environment preset="city" />

      <GlassSphere />
      <AmbientParticles />
    </>
  )
}

function SceneFallback() {
  return null
}

interface ThreeSceneProps {
  className?: string
}

export default function ThreeScene({ className = '' }: ThreeSceneProps) {
  return (
    <div className={`three-canvas ${className}`}>
      <Suspense fallback={<SceneFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 42 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          dpr={[1, 1.5]}
        >
          <SceneContent />
        </Canvas>
      </Suspense>
    </div>
  )
}
