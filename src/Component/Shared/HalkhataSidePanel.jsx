import React from 'react';
import halkhataLogo from '../../assets/halkhata.png';

/**
 * HalkhataSidePanel - Reusable side panel component with Halkhata branding
 * Use this for Login, Registration, and other auth pages
 *
 * @param {string} title - Main title text
 * @param {string} subtitle - Subtitle/description text
 * @param {string} variant - Color theme: 'default' (emerald-teal-cyan), 'blue', 'purple', 'orange'
 * @param {boolean} showLogo - Whether to show the Halkhata logo image
 * @param {string} className - Additional CSS classes
 * @param {ReactNode} children - Extra content to display below subtitle
 */
function HalkhataSidePanel({
    title,
    subtitle,
    variant = 'default',
    showLogo = true,
    className = '',
    children
}) {
    const variants = {
        default: 'from-emerald-600 via-teal-600 to-cyan-600',
        blue: 'from-blue-600 via-indigo-600 to-purple-600',
        purple: 'from-purple-600 via-fuchsia-600 to-pink-600',
        orange: 'from-orange-500 via-amber-500 to-yellow-500',
        dark: 'from-gray-800 via-gray-900 to-black'
    };

    return (
        <div className={`lg:w-1/2 bg-gradient-to-br ${variants[variant]} min-h-[300px] lg:min-h-screen relative overflow-hidden flex items-center justify-center p-8 lg:p-16 ${className}`}>
            {/* Decorative circles - background layer */}
            <div className='absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl'></div>
            <div className='absolute top-1/3 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl'></div>
            <div className='absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-xl'></div>
            <div className='absolute top-1/4 left-1/3 w-24 h-24 bg-white/20 rounded-full'></div>
            <div className='absolute bottom-1/3 right-1/4 w-16 h-16 bg-white/15 rounded-full'></div>
            <div className='absolute top-1/2 right-10 w-20 h-20 bg-white/10 rounded-full'></div>

            {/* Animated floating circles */}
            <div className='absolute top-20 left-20 w-12 h-12 bg-white/20 rounded-full animate-pulse'></div>
            <div className='absolute bottom-32 right-16 w-8 h-8 bg-white/25 rounded-full animate-pulse' style={{ animationDelay: '1s' }}></div>
            <div className='absolute top-1/2 left-16 w-6 h-6 bg-white/15 rounded-full animate-pulse' style={{ animationDelay: '2s' }}></div>

            {/* Main Content */}
            <div className='relative z-10 text-center'>
                {/* Halkhata Logo/Image */}
                {showLogo && (
                    <div className='mb-8'>
                        <img
                            src={halkhataLogo}
                            alt='হালখাতা - Halkhata'
                            className='w-56 md:w-72 mx-auto drop-shadow-2xl'
                        />
                    </div>
                )}

                {/* Decorative line */}
                <div className='w-24 h-1 bg-white/60 rounded-full mx-auto mb-6'></div>

                {/* Title */}
                {title && (
                    <h2 className='text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg'>
                        {title}
                    </h2>
                )}

                {/* Subtitle */}
                {subtitle && (
                    <p className='text-white/80 text-base md:text-lg max-w-md mx-auto'>
                        {subtitle}
                    </p>
                )}

                {/* Extra content (children) */}
                {children && (
                    <div className='mt-6'>
                        {children}
                    </div>
                )}

                {/* Bottom decorative dots */}
                <div className='flex justify-center gap-3 mt-8'>
                    <div className='w-3 h-3 bg-white/40 rounded-full animate-pulse'></div>
                    <div className='w-3 h-3 bg-white/60 rounded-full animate-pulse' style={{ animationDelay: '0.2s' }}></div>
                    <div className='w-3 h-3 bg-white/40 rounded-full animate-pulse' style={{ animationDelay: '0.4s' }}></div>
                </div>
            </div>

            {/* Corner decorations */}
            <div className='absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-white/30 rounded-tl-3xl'></div>
            <div className='absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-white/30 rounded-br-3xl'></div>
        </div>
    );
}

/**
 * HalkhataAuthLayout - Complete auth page layout with side panel
 * Wraps your form content with the branded side panel
 */
function HalkhataAuthLayout({
    sidePanelTitle,
    sidePanelSubtitle,
    sidePanelVariant = 'default',
    children
}) {
    return (
        <div className='min-h-screen flex flex-col lg:flex-row'>
            {/* Left Side Panel */}
            <HalkhataSidePanel
                title={sidePanelTitle}
                subtitle={sidePanelSubtitle}
                variant={sidePanelVariant}
            />

            {/* Right Side - Form Content */}
            <div className='lg:w-1/2 flex items-center justify-center p-5 py-10 lg:p-16 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden'>
                {/* Background decorations */}
                <div className="absolute top-10 right-10 w-40 h-40 bg-emerald-100/40 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-teal-100/30 rounded-full blur-2xl"></div>

                <div className='relative w-full max-w-md'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export { HalkhataSidePanel, HalkhataAuthLayout };
export default HalkhataSidePanel;
