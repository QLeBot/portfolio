"use client"

import { motion } from "framer-motion"
import LiquidGradient from "./liquid-gradient"

interface GradientLoadProps {
  title?: string
  subtitle?: string
  gradientColors?: {
    from: string
    via?: string
    to: string
  }
  liquidColors?: string[]
  liquidWidth?: number
  liquidHeight?: number
}

export default function GradientLoad({ 
  title = "Beautiful Animation",
  subtitle = "Gradient box loads, then text appears",
  gradientColors = {
    from: "black",
    via: "grey", 
    to: "white"
  },
  liquidColors = ["#0C090B", "#281A11", "#CAD1DD", "#462D1C", "#E0CDC5"],
  liquidWidth = 200,
  liquidHeight = 96
}: GradientLoadProps) {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="flex items-center justify-start min-h-screen">
      <div className="flex items-center space-x-6">
        {/* Liquid Gradient Box - Loading from left */}
        <motion.div
          initial={{ width: 0, overflow: "hidden" }}
          animate={{ width: liquidWidth }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
        >
          <LiquidGradient
            colors={liquidColors}
            animated={true}
            width={liquidWidth}
            height={liquidHeight}
            rounded={false}
            className="shadow-lg"
          />
        </motion.div>

        {/* Text - Letter by letter */}
        <motion.div>
          <h2 className="text-2xl font-bold text-gray-800">
            {title.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 1.4 + index * 0.05, // Start after gradient box completes
                  duration: 0.3,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h2>
          <p className="text-gray-600 mt-1">
            {subtitle.split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 1.4 + title.length * 0.05 + 0.2 + index * 0.03, // Start after title completes
                  duration: 0.3,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </div>
    </div>
  )
}
