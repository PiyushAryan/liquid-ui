"use client"

import React, { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export type MagneticCardProps = {
  title?: string
  description?: string
  accentColor?: "emerald" | "indigo" | "rose" | "violet"
  tiltStrength?: number
  magneticStrength?: number
  className?: string
}

export function MagneticCard({
  title = "Magnetic Gravity",
  description = "A glassmorphic card reacting to cursor gravity.",
  accentColor = "emerald",
  tiltStrength = 15,
  magneticStrength = 0.2,
  className = "",
}: MagneticCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Motion values for coordinates
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring animations for 3D tilt
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 }
  const xSpring = useSpring(mouseX, springConfig)
  const ySpring = useSpring(mouseY, springConfig)

  // Map mouse positions to 3D rotation angles
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [tiltStrength, -tiltStrength])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-tiltStrength, tiltStrength])

  // Map mouse positions to parallax translation offsets
  const parallaxX = useTransform(xSpring, [-0.5, 0.5], [magneticStrength * 40, -magneticStrength * 40])
  const parallaxY = useTransform(ySpring, [-0.5, 0.5], [magneticStrength * 40, -magneticStrength * 40])

  // Radial gradient glow coordinates
  const [glowX, setGlowX] = useState(0)
  const [glowY, setGlowY] = useState(0)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // Set absolute coordinates for radial gradient glow
    setGlowX(x)
    setGlowY(y)

    // Set normalized motion values (-0.5 to 0.5) for rotations
    mouseX.set((x / width) - 0.5)
    mouseY.set((y / height) - 0.5)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  // Glow color presets mapping
  const glows = {
    emerald: "rgba(16, 185, 129, 0.12)",
    indigo: "rgba(99, 102, 241, 0.12)",
    rose: "rgba(244, 63, 94, 0.12)",
    violet: "rgba(139, 92, 246, 0.12)",
  }

  const selectedGlow = glows[accentColor] || glows.emerald

  // Ring/border colors mapping
  const borderColors = {
    emerald: "hover:border-emerald-500/30 dark:hover:border-emerald-500/40",
    indigo: "hover:border-indigo-500/30 dark:hover:border-indigo-500/40",
    rose: "hover:border-rose-500/30 dark:hover:border-rose-500/40",
    violet: "hover:border-violet-500/30 dark:hover:border-violet-500/40",
  }

  const selectedBorder = borderColors[accentColor] || borderColors.emerald

  return (
    <div className="flex items-center justify-center p-4">
      {/* 3D Perspective Wrapper */}
      <div style={{ perspective: 1000 }} className="w-full max-w-sm">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: "preserve-3d",
          }}
          className={`group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-50/40 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 dark:border-zinc-800/80 dark:bg-zinc-950/20 ${selectedBorder} ${className}`}
        >
          {/* Dynamic Radial Glow Reflection Overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(280px circle at ${glowX}px ${glowY}px, ${selectedGlow}, transparent 80%)`,
            }}
          />

          {/* Ambient light ring on top */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent opacity-50" />

          {/* Card Content with Parallax shifts */}
          <div style={{ transform: "translateZ(30px)" }} className="relative z-10 space-y-4">
            {/* Top decorative badge */}
            <motion.div
              style={{ x: parallaxX, y: parallaxY }}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400"
            >
              <span className={`h-1.5 w-1.5 rounded-full bg-current ${
                accentColor === "emerald" ? "text-emerald-500" :
                accentColor === "indigo" ? "text-indigo-500" :
                accentColor === "rose" ? "text-rose-500" : "text-violet-500"
              }`} />
              Magnetic Card
            </motion.div>

            {/* Title */}
            <motion.h3
              style={{ x: parallaxX, y: parallaxY }}
              className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50"
            >
              {title}
            </motion.h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              {description}
            </p>

            {/* Footer Interactive Hint */}
            <div className="flex items-center gap-2 pt-2 text-xs font-medium text-zinc-400 dark:text-zinc-500">
              <span>Hover your cursor across the card</span>
              <motion.span
                animate={isHovered ? { x: [0, 4, 0] } : {}}
                transition={{ repeat: Infinity, duration: 1 }}
              >
                →
              </motion.span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MagneticCard
