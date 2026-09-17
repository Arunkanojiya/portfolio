import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Resolves static asset paths correctly against Vite's base path
 * for development, production, and GitHub Pages subpaths.
 */
export function getAssetUrl(path: string): string {
  if (!path) return ''
  if (/^(https?:|\/\/|data:|mailto:|tel:)/i.test(path)) {
    return path
  }
  const base = import.meta.env.BASE_URL || '/'
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`
}

