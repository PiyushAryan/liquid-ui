"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"

export type LiquidButtonProps = {
  label?: string
  variant?: "default" | "emerald" | "violet" | "rose"
  gooSpeed?: number
  gooIntensity?: number
  className?: string
  onClick?: () => void
}

export function LiquidButton({
  label = "Liquid Morph",
  variant = "default",
  gooSpeed = 4,
  gooIntensity = 10,
  className = "",
  onClick,
}: LiquidButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Color theme definitions
  const themes = {
    default: {
      btn: "bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950",
      blob: "bg-zinc-900 dark:bg-zinc-50",
    },
    emerald: {
      btn: "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-zinc-950",
      blob: "bg-emerald-600 dark:bg-emerald-500",
    },
    violet: {
      btn: "bg-violet-600 text-white dark:bg-violet-500 dark:text-zinc-950",
      blob: "bg-violet-600 dark:bg-violet-500",
    },
    rose: {
      btn: "bg-rose-600 text-white dark:bg-rose-500 dark:text-zinc-950",
      blob: "bg-rose-600 dark:bg-rose-500",
    },
  }

  const selectedTheme = themes[variant] || themes.default

  // Define unique filter ID to avoid conflicts if multiple buttons are on the page
  const filterId = `liquid-goo-${variant}-${gooIntensity}`

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Hidden SVG Gooey Filter */}
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation={gooIntensity} result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <button
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative cursor-pointer overflow-visible px-7 py-3 font-semibold transition-transform active:scale-95 bg-transparent border-0 outline-none"
      >
        {/* Gooey Background Container - Filter is applied here */}
        <div
          className="absolute inset-0 z-0"
          style={{ filter: `url(#${filterId})` }}
        >
          {/* Main Button Pill */}
          <div className={`absolute inset-0 rounded-full ${selectedTheme.btn} transition-all duration-300`} />

          {/* Floating Liquid Blobs */}
          <motion.div
            animate={isHovered ? { x: [-15, 10, -5], y: [-5, -15, 5], scale: [1, 1.3, 0.9] } : { x: 0, y: 0, scale: 1 }}
            transition={{
              duration: gooSpeed,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className={`absolute -left-1 -top-1 size-6 rounded-full ${selectedTheme.blob}`}
          />
          <motion.div
            animate={isHovered ? { x: [15, -10, 5], y: [5, 15, -5], scale: [1, 1.2, 0.85] } : { x: 0, y: 0, scale: 1 }}
            transition={{
              duration: gooSpeed * 1.2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className={`absolute -right-1 -bottom-1 size-6 rounded-full ${selectedTheme.blob}`}
          />
          <motion.div
            animate={isHovered ? { x: [-10, 15, -8], y: [10, -10, 8], scale: [1, 1.4, 0.95] } : { x: 0, y: 0, scale: 0 }}
            transition={{
              duration: gooSpeed * 0.8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className={`absolute left-1/3 -bottom-2 size-5 rounded-full ${selectedTheme.blob}`}
          />
          <motion.div
            animate={isHovered ? { x: [8, -12, 10], y: [-12, 8, -5], scale: [1, 1.25, 0.9] } : { x: 0, y: 0, scale: 0 }}
            transition={{
              duration: gooSpeed * 1.1,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className={`absolute right-1/3 -top-2 size-5 rounded-full ${selectedTheme.blob}`}
          />
        </div>

        {/* Button Content (Unfiltered, to stay razor sharp) */}
        <span className="relative z-10 flex items-center justify-center gap-2 select-none">
          {label}
        </span>
      </button>
    </div>
  )
}

export default LiquidButton
