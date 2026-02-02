'use client'

import { useEffect, useRef, useState } from 'react'

type ReelProps = {
  src: string
}

export default function Reel({ src }: ReelProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [inFocus, setInFocus] = useState(false)
  const [progress, setProgress] = useState(0)

  // Scroll-based focus detection
  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInFocus(entry.intersectionRatio > 0.6)
      },
      {
        threshold: [0, 0.6, 1],
      }
    )

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  const togglePlay = () => {
    if (!videoRef.current) return

    // Pause other videos
    document.querySelectorAll('video').forEach((v) => {
      if (v !== videoRef.current) v.pause()
    })

    if (videoRef.current.paused) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
  }

  return (
    <div
      ref={containerRef}
      className={`reel ${inFocus ? 'reel-focus' : 'reel-blur'}`}
    >
      <video
        ref={videoRef}
        src={src}
        playsInline
        muted
        preload="none"
        onClick={togglePlay}
        onTimeUpdate={() => {
          if (!videoRef.current) return
          const value =
            videoRef.current.currentTime / videoRef.current.duration
          setProgress(value || 0)
        }}
      />
      <div className="reel-progress">
        <span style={{ width: `${progress * 100}%` }} />
      </div>
    </div>
  )
}
