import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Split a string into an array of words */
export function splitWords(text: string): string[] {
  return text.split(' ')
}

/** Split a string into an array of characters */
export function splitChars(text: string): string[] {
  return text.split('')
}

/** Clamp a number between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/** Map a value from one range to another */
export function mapRange(
  value: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
): number {
  return ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

/** Lerp (linear interpolation) */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t
}

/** Format a number with leading zero */
export function padNumber(n: number): string {
  return n.toString().padStart(2, '0')
}

/** Check if we're on a touch device */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}

/** Check if we're on mobile */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

/** Debounce a function */
export function debounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>
  return function (...args: Parameters<T>) {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}
