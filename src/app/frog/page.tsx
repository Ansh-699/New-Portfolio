'use client'

import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'
import Eye from './eyes'

type EyePos = { x: number; y: number; id: string }

gsap.registerPlugin(Draggable, InertiaPlugin)

export default function Page() {
  const EYE_COUNT = 50

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

  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>('.eye-fly')
    const draggables: any[] = []

    elements.forEach(el => {
      gsap.to(el, {
        xPercent: 'random(-20,20)',
        yPercent: 'random(-20,20)',
        duration: gsap.utils.random(2, 5),
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 0.5,
          from: 'random',
        },
        ease: 'sine.inOut',
        delay: gsap.utils.random(0, 2),
      })

      const [draggableInstance] = Draggable.create(el, {
        bounds: window,
        inertia: true,
        onPress() {
          gsap.killTweensOf(el)
        },
        onRelease() {
          gsap.to(el, {
            xPercent: 'random(-20,20)',
            yPercent: 'random(-20,20)',
            duration: gsap.utils.random(2, 5),
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          })
        },
      })
      draggables.push(draggableInstance)
    })

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      elements.forEach(el => {
        const rect = el.getBoundingClientRect()
        const dx = rect.left + rect.width / 2 - clientX
        const dy = rect.top + rect.height / 2 - clientY
        const dist = Math.hypot(dx, dy)
        const minDist = 100
        if (dist < minDist) {
          const angle = Math.atan2(dy, dx)
          const throwDist = (minDist - dist) * 0.5
          gsap.to(el, {
            x: `+=${Math.cos(angle) * throwDist}`,
            y: `+=${Math.sin(angle) * throwDist}`,
            duration: 0.3,
            ease: 'power2.out',
          })
        }
      })
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      draggables.forEach(d => d.kill())
      gsap.killTweensOf(elements)
    }
  }, [positions])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white dark:bg-darkbg">
      {positions.map(({ x, y, id }) => (
        <div
          key={id}
          className="absolute eye-fly touch-none"
          style={{
            top: `${y}%`,
            left: `${x}%`,
            transform: 'translate(-50%, -50%)',
            cursor: 'grab',
          }}
        >
          <Eye id={id} />
        </div>
      ))}
    </div>
  )
}
