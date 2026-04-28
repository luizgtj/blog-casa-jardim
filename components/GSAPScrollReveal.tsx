'use client'

import { ReactNode, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface GSAPScrollRevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
}

export default function GSAPScrollReveal({
  children,
  delay = 0,
  duration = 1,
  y = 50
}: GSAPScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    const ctx = gsap.context(() => {
      gsap.fromTo(element,
        {
          opacity: 0,
          y: y
        },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          delay: delay,
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          ease: 'power3.out'
        }
      )
    })

    return () => ctx.revert()
  }, [delay, duration, y])

  return <div ref={elementRef}>{children}</div>
}