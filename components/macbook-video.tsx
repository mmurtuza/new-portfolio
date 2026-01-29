"use client"

import { useEffect, useState, useRef } from "react"

export function MacBookVideo() {
    const [mounted, setMounted] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        const video = videoRef.current
        if (!video) return

        // Slow down playback for a more cinematic feel
        video.playbackRate = 0.5
    }, [mounted])



    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                poster="/macbook-poster.jpg"
            >
                <source src="/macbook.mp4" type="video/mp4" />
            </video>
            {/* Dark blur overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(2px)',
                    WebkitBackdropFilter: 'blur(2px)'
                }}
            />
        </div>
    )
}
