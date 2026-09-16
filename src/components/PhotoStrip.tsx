import React, { useCallback, useRef } from 'react'
import { motion, useAnimationFrame, useMotionValue } from 'motion/react'
import { portfolioData } from '../data/portfolioData'

export const PhotoStrip: React.FC = () => {
  const rotations = [
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    '-rotate-2',
    'rotate-2',
    '-rotate-2',
    'rotate-2',
  ]

  const photos = portfolioData.photoShowcase
  const x = useMotionValue(0)
  const stripRef = useRef<HTMLDivElement>(null)
  const paused = useRef(false)
  const speed = 50 // px per second
  const dragging = useRef(false)
  const dragStartX = useRef(0)
  const dragStartMotionX = useRef(0)
  const lastTouchX = useRef(0)
  const touchDragged = useRef(false)

  useAnimationFrame((_, delta) => {
    if (paused.current) return
    const stripWidth = stripRef.current ? stripRef.current.scrollWidth / 2 : 0
    if (stripWidth === 0) return
    const next = x.get() - (delta / 1000) * speed
    x.set(next <= -stripWidth ? next + stripWidth : next)
  })

  const clampX = useCallback((val: number) => {
    const stripWidth = stripRef.current ? stripRef.current.scrollWidth / 2 : 0
    if (stripWidth === 0) return val
    let clamped = val % stripWidth
    if (clamped > 0) clamped -= stripWidth
    if (clamped <= -stripWidth) clamped += stripWidth
    return clamped
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true
    paused.current = true
    dragStartX.current = e.clientX
    dragStartMotionX.current = x.get()
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return
    const delta = e.clientX - dragStartX.current
    x.set(clampX(dragStartMotionX.current + delta))
  }

  const onMouseUp = () => {
    dragging.current = false
    paused.current = false
  }

  const onTouchStart = (e: React.TouchEvent) => {
    lastTouchX.current = e.touches[0].clientX
    dragStartMotionX.current = x.get()
    touchDragged.current = false
    paused.current = true
  }

  const onTouchMove = (e: React.TouchEvent) => {
    const delta = e.touches[0].clientX - lastTouchX.current
    if (Math.abs(delta) > 4) touchDragged.current = true
    lastTouchX.current = e.touches[0].clientX
    x.set(clampX(x.get() + delta))
  }

  const onTouchEnd = () => {
    if (!touchDragged.current) {
      paused.current = !paused.current
    } else {
      paused.current = false
    }
  }

  const items = [...photos, ...photos]

  return (
    <div
      className="mt-12 sm:mt-16 overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => {
        if (!dragging.current) paused.current = true
      }}
      onMouseLeave={() => {
        dragging.current = false
        paused.current = false
      }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="-my-4 py-4">
        <motion.div
          ref={stripRef}
          className="flex gap-5 sm:gap-8"
          style={{ width: 'max-content', x }}
        >
          {items.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className={`relative w-44 flex-none overflow-hidden rounded-xl bg-muted sm:w-72 sm:rounded-2xl ${
                rotations[index % rotations.length]
              }`}
            >
              <div className="aspect-[9/10]">
                <img
                  src={item.src}
                  alt={item.alt || ''}
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.onerror = null
                    target.src = '/images/avatar.png'
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
