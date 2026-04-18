import { useState, useEffect, useRef } from 'react'

/**
 * Custom hook to detect when an element enters the viewport
 * Uses Intersection Observer API for optimal performance
 */
function useOnScreen(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce && node) {
            observer.unobserve(node)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(node)

    return () => {
      if (node) observer.unobserve(node)
    }
  }, [threshold, rootMargin, triggerOnce])

  return [ref, isVisible]
}

export default useOnScreen
