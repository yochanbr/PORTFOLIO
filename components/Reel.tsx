'use client'

import { useEffect, useRef, useState } from 'react'

type ReelProps = {
  src: string
}

export default function Reel({ src }: ReelProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)

  // Auto play / pause on focus
  useEffect(() => {
    if (!containerRef.current || !videoRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return

        if (entry.intersectionRatio > 0.65) {
          videoRef.current.play().catch(() => {})
          setIsFocused(true)
        } else {
          videoRef.current.pause()
          setIsFocused(false)
        }
      },
      { threshold: [0, 0.65, 1] }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  // Tap to toggle (mobile friendly)
  const togglePlay = () => {
    if (!videoRef.current) return

    if (videoRef.current.paused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }

  return (
    <div
      ref={containerRef}
      className={`reel ${isFocused ? 'reel-focus' : 'reel-dim'}`}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="none"
        onClick={togglePlay}
      />
    </div>
  )
}
