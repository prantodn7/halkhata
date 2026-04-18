import React from 'react'
import useOnScreen from '../../hooks/useOnScreen'

/**
 * AnimatedWrapper - A wrapper component that triggers animations on scroll
 * Simple, lightweight, doesn't break layouts
 */
function AnimatedWrapper({
  children,
  animation = 'fade',
  delay = 0,
  className = '',
  threshold = 0.1,
  triggerOnce = true,
  ...props
}) {
  const [ref, isVisible] = useOnScreen({ threshold, triggerOnce })

  // Animation variants - only transform and opacity for performance
  const getAnimationStyle = () => {
    const baseStyle = {
      transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)`,
      transitionDelay: `${delay}ms`
    }

    if (isVisible) {
      return { ...baseStyle, opacity: 1, transform: 'translate3d(0, 0, 0) scale(1)' }
    }

    // Initial states based on animation type
    switch (animation) {
      case 'slide-left':
        return { ...baseStyle, opacity: 0, transform: 'translate3d(-30px, 0, 0)' }
      case 'slide-right':
        return { ...baseStyle, opacity: 0, transform: 'translate3d(30px, 0, 0)' }
      case 'scale':
        return { ...baseStyle, opacity: 0, transform: 'translate3d(0, 0, 0) scale(0.95)' }
      case 'reveal':
        return { ...baseStyle, opacity: 0, transform: 'translate3d(0, 40px, 0)' }
      default: // fade
        return { ...baseStyle, opacity: 0, transform: 'translate3d(0, 20px, 0)' }
    }
  }

  return (
    <div ref={ref} style={getAnimationStyle()} className={className} {...props}>
      {children}
    </div>
  )
}

/**
 * FadeIn - Simple fade with slight upward motion
 */
function FadeIn({ children, delay = 0, className = '', ...props }) {
  return (
    <AnimatedWrapper animation="fade" delay={delay} className={className} {...props}>
      {children}
    </AnimatedWrapper>
  )
}

/**
 * SlideLeft - Slide from left
 */
function SlideLeft({ children, delay = 0, className = '', ...props }) {
  return (
    <AnimatedWrapper animation="slide-left" delay={delay} className={className} {...props}>
      {children}
    </AnimatedWrapper>
  )
}

/**
 * SlideRight - Slide from right
 */
function SlideRight({ children, delay = 0, className = '', ...props }) {
  return (
    <AnimatedWrapper animation="slide-right" delay={delay} className={className} {...props}>
      {children}
    </AnimatedWrapper>
  )
}

/**
 * ScaleIn - Subtle scale animation
 */
function ScaleIn({ children, delay = 0, className = '', ...props }) {
  return (
    <AnimatedWrapper animation="scale" delay={delay} className={className} {...props}>
      {children}
    </AnimatedWrapper>
  )
}

/**
 * RevealUp - Reveal from bottom
 */
function RevealUp({ children, delay = 0, className = '', ...props }) {
  return (
    <AnimatedWrapper animation="reveal" delay={delay} className={className} {...props}>
      {children}
    </AnimatedWrapper>
  )
}

/**
 * AnimateItems - Wraps items with individual delays
 * Use this by mapping manually for better control
 */
function AnimateItems({ children, staggerDelay = 100, className = '' }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1, triggerOnce: true })

  const childrenArray = React.Children.toArray(children)

  return (
    <div ref={ref} className={className}>
      {childrenArray.map((child, index) => {
        if (React.isValidElement(child)) {
          return (
            <div
              key={child.key || index}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
                transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s`,
                transitionDelay: `${index * staggerDelay}ms`
              }}
            >
              {child}
            </div>
          )
        }
        return child
      })}
    </div>
  )
}

export {
  AnimatedWrapper,
  FadeIn,
  SlideLeft,
  SlideRight,
  ScaleIn,
  RevealUp,
  AnimateItems
}
