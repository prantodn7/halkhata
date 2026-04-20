import React from 'react'
import halkhataImage from '../../assets/halkhata.png'

/**
 * HalkhataTitle - A decorative side title component featuring the Halkhata brand
 * Can be used as a sidebar element or decorative title section
 */
function HalkhataTitle({
  variant = 'default',
  size = 'md',
  showTagline = true,
  className = ''
}) {
  const sizeClasses = {
    sm: 'w-32 md:w-40',
    md: 'w-40 md:w-56',
    lg: 'w-56 md:w-72'
  }

  const variantStyles = {
    default: 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200',
    dark: 'bg-gradient-to-br from-emerald-800 to-teal-900 border-emerald-700',
    minimal: 'bg-white border-gray-200',
    gradient: 'bg-gradient-to-br from-emerald-600 to-teal-600 border-transparent'
  }

  const textColors = {
    default: 'text-gray-800',
    dark: 'text-white',
    minimal: 'text-gray-800',
    gradient: 'text-white'
  }

  return (
    <div className={`relative ${className}`}>
      {/* Main Title Card */}
      <div className={`
        ${sizeClasses[size]}
        ${variantStyles[variant]}
        border-2 rounded-2xl p-6 md:p-8
        shadow-lg hover:shadow-xl
        transition-all duration-300
        transform hover:scale-105
        relative overflow-hidden
      `}>
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-24 h-24 bg-current rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-current rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>

        {/* Halkhata Logo/Image */}
        <div className="relative z-10">
          <img
            src={halkhataImage}
            alt="হালখাতা - Halkhata"
            className="w-full h-auto"
          />
        </div>

        {/* Decorative line */}
        <div className={`relative z-10 w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-4`}></div>

        {/* Tagline */}
        {showTagline && (
          <p className={`relative z-10 ${textColors[variant]} text-xs md:text-sm mt-4 text-center font-medium`}>
            {variant === 'gradient' ? 'ব্যবসা সহজ করুন' : 'Your Business Partner'}
          </p>
        )}

        {/* Corner decorations */}
        <div className={`absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 ${variant === 'gradient' ? 'border-white/50' : 'border-emerald-400'} rounded-tl-lg`}></div>
        <div className={`absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 ${variant === 'gradient' ? 'border-white/50' : 'border-emerald-400'} rounded-br-lg`}></div>
      </div>

      {/* Floating decoration */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full shadow-lg animate-pulse"></div>
      <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-teal-400 rounded-full shadow-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
    </div>
  )
}

/**
 * VerticalSideTitle - For sidebar usage with vertical orientation
 */
function VerticalSideTitle({
  position = 'left',
  variant = 'default'
}) {
  const positionClasses = {
    left: 'left-4 top-1/2 -translate-y-1/2',
    right: 'right-4 top-1/2 -translate-y-1/2'
  }

  return (
    <div className={`hidden lg:block fixed ${positionClasses[position]} z-40`}>
      <div className={`
        ${variant === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'}
        backdrop-blur-sm border-2 border-emerald-200
        rounded-2xl p-4 shadow-xl
        transform hover:scale-105 transition-all duration-300
        cursor-pointer
      `}>
        <img
          src={halkhataImage}
          alt="হালখাতা - Halkhata"
          className="w-24 h-auto"
        />
        <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2"></div>
      </div>
    </div>
  )
}

export { HalkhataTitle, VerticalSideTitle }
export default HalkhataTitle
