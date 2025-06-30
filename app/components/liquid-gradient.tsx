"use client"

import { motion } from "framer-motion"

interface GradientBoxProps {
  colors?: string[]
  animated?: boolean
  noiseLevel?: number
  rounded?: boolean
  width?: number
  height?: number
  className?: string
}

export default function GradientBox({
  colors = ["#0C090B", "#281A11", "#CAD1DD", "#462D1C", "#E0CDC5", "#3A393E", "#B5BED0", "#584436", "#9AAFC5"],
  animated = true,
  noiseLevel = 0.1,
  rounded = true,
  width = 320,
  height = 240,
  className = "",
}: GradientBoxProps) {
  const gradientString = colors.join(", ")

  // Create flowing liquid animation keyframes - works with any number of colors
  const createLiquidFlow = (colors: string[]) => {
    const numColors = colors.length
    const frames = []

    // Generate 4 animation frames
    for (let frame = 0; frame < 4; frame++) {
      const gradients = []

      // Create multiple radial gradients using all available colors
      for (let i = 0; i < Math.max(3, numColors); i++) {
        const colorIndex = i % numColors
        const nextColorIndex = (i + 1) % numColors

        // Vary positions based on frame and color index
        const baseX = (20 + i * 25 + frame * 15) % 100
        const baseY = (10 + i * 20 + frame * 20) % 100
        const sizeX = 120 + i * 30 + frame * 20
        const sizeY = 80 + i * 20 + frame * 15

        gradients.push(
          `radial-gradient(ellipse ${sizeX}% ${sizeY}% at ${baseX}% ${baseY}%, ${colors[colorIndex]} 0%, transparent 50%)`,
        )
      }

      // Add base linear gradient
      const angle = 135 + frame * 90
      gradients.push(`linear-gradient(${angle}deg, ${colors.join(", ")})`)

      frames.push(gradients.join(", "))
    }

    return { background: frames }
  }

  const liquidFlow = createLiquidFlow(colors)

  return (
    <div className="relative">
      <motion.div
        className={`relative overflow-hidden ${rounded ? "rounded-lg" : ""} ${className}`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {/* Base gradient layer */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${gradientString})`,
          }}
          animate={animated ? liquidFlow : {}}
          transition={{
            duration: 12,
            repeat: animated ? Number.POSITIVE_INFINITY : 0,
            ease: "easeInOut",
          }}
        />

        {/* Flowing liquid layer 1 */}
        <motion.div
          className="absolute inset-0 opacity-80"
          animate={
            animated
              ? {
                  background: animated
                    ? (() => {
                        const frames = []
                        for (let frame = 0; frame < 5; frame++) {
                          const gradients = []
                          for (let i = 0; i < colors.length; i++) {
                            const x = (20 + (i * 60) / colors.length + frame * 15) % 100
                            const y = (30 + (i * 40) / colors.length + frame * 20) % 100
                            const size = 280 + i * 20 + frame * 15
                            gradients.push(
                              `radial-gradient(circle ${size}px at ${x}% ${y}%, ${colors[i]}40 0%, transparent 70%)`,
                            )
                          }
                          frames.push(gradients.join(", "))
                        }
                        return frames
                      })()
                    : [],
                }
              : {}
          }
          transition={{
            duration: 10,
            repeat: animated ? Number.POSITIVE_INFINITY : 0,
            ease: "easeInOut",
          }}
        />

        {/* Flowing liquid layer 2 */}
        <motion.div
          className="absolute inset-0 opacity-60"
          animate={
            animated
              ? {
                  background: animated
                    ? (() => {
                        const frames = []
                        for (let frame = 0; frame < 5; frame++) {
                          const gradients = []
                          for (let i = 0; i < colors.length; i++) {
                            const x = (80 - (i * 50) / colors.length + frame * 12) % 100
                            const y = (60 + (i * 30) / colors.length - frame * 18) % 100
                            const sizeX = 350 + i * 25 + frame * 10
                            const sizeY = 200 + i * 15 - frame * 8
                            gradients.push(
                              `radial-gradient(ellipse ${sizeX}px ${sizeY}px at ${x}% ${y}%, ${colors[i]}30 0%, transparent 60%)`,
                            )
                          }
                          frames.push(gradients.join(", "))
                        }
                        return frames
                      })()
                    : [],
                }
              : {}
          }
          transition={{
            duration: 14,
            repeat: animated ? Number.POSITIVE_INFINITY : 0,
            ease: "easeInOut",
          }}
        />

        {/* Glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

        {/* Noise texture overlay - only shows when animated */}
        {animated && noiseLevel > 0 && (
          <div
            className="absolute inset-0 mix-blend-overlay"
            style={{
              opacity: noiseLevel,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "128px 128px",
            }}
          />
        )}
      </motion.div>
    </div>
  )
}
