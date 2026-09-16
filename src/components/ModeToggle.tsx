import React, { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export const ModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check initial state
    const isDarkMode = document.documentElement.classList.contains('dark') ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
      localStorage.theme === 'dark'

    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setIsDark(true)
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="group flex h-9 w-9 items-center justify-center rounded-xl bg-background/90 text-foreground shadow-md ring-1 ring-border backdrop-blur-sm transition hover:ring-foreground/20 active:scale-95"
    >
      {isDark ? (
        <Moon className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
      ) : (
        <Sun className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
      )}
    </button>
  )
}
