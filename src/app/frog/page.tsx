'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Eye from './eyes'

type EyePos = { x: number; y: number; id: string }

export default function Page() {
  const EYE_COUNT = 50

  // Random static positions for each eye
  const [positions, setPositions] = useState<EyePos[]>([])
  useEffect(() => {
    const pts: EyePos[] = []
    for (let i = 0; i < EYE_COUNT; i++) {
      pts.push({
        id: `eye-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
      })
    }
    setPositions(pts)
  }, [])

  // Device tilt angles
  const [tilt, setTilt] = useState({ beta: 0, gamma: 0 })

  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      // beta: front-to-back (tilt up/down)
      // gamma: left-to-right (tilt left/right)
      const beta = typeof e.beta === 'number' ? e.beta : 0
      const gamma = typeof e.gamma === 'number' ? e.gamma : 0
      setTilt({
        beta: Math.max(-30, Math.min(30, beta)),   // clamp to [-30,30]
        gamma: Math.max(-30, Math.min(30, gamma)), // clamp to [-30,30]
      })
    }
    window.addEventListener('deviceorientation', handleOrientation)
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation)
    }
  }, [])

  // Factor controlling how much the eyes move
  const MOVE_FACTOR = 0.5 // px per degree

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white dark:bg-black">
      {/* Frog centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* <Image
          src="/frog111.png"
          alt=""
          width={380}
          height={300}
          className="object-cover"
        /> */}
      </div>

      {/* Eyes */}
      {positions.map(({ x, y, id }) => {
        // calculate offset
        const offsetX = tilt.gamma * MOVE_FACTOR
        const offsetY = tilt.beta * MOVE_FACTOR

        return (
          <div
            key={id}
            className="absolute"
            style={{
              top: `${y}%`,
              left: `${x}%`,
              transform: `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <Eye id={id} />
          </div>
        )
      })}

      <style jsx>{`
        /* fallback float animation in case no gyro */
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}
