"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/app/components/ui/button"

type Theme = "dark" | "light"

const STORAGE_KEY = "theme"

function applyTheme(theme: Theme) {
  const root = document.documentElement
  if (theme === "dark") root.classList.add("dark")
  else root.classList.remove("dark")
}

function getStoredTheme(): Theme | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY)
    return v === "light" || v === "dark" ? v : null
  } catch {
    return null
  }
}

function storeTheme(theme: Theme) {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // ignore
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<Theme>("dark")

  React.useEffect(() => {
    const stored = getStoredTheme()
    const initial = stored ?? "dark"
    setTheme(initial)
    applyTheme(initial)
  }, [])

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark"
    setTheme(next)
    applyTheme(next)
    storeTheme(next)
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  )
}

