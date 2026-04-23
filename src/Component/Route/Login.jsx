import React, { useState, useCallback, useEffect } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff, FiLoader, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { Link, useNavigate, useLocation } from '@/compat/react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { supabase } from '../../config/supabaseClient';
import halkhataLogo from '../../assets/halkhata.png';

/**
 * Professional Login Component
 * Features:
 * - Remember Me functionality
 * - Form validation with visual feedback
 * - Loading states with animations
 * - Bilingual support (English/Bangla)
 * - Accessible form controls
 * - Social login placeholders
 */
const Login = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    // Form state
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    // Field-specific validation states
    const [fieldErrors, setFieldErrors] = useState({
        email: '',
        password: ''
    });

    const texts = {
        title: language === 'bangla' ? 'স্বাগতম ফিরে' : 'Welcome Back',
        subtitle: language === 'bangla' ? 'আপনার হালখাতা অ্যাকাউন্টে লগইন করুন' : 'Login to your Halkhata account',
        email: language === 'bangla' ? 'ইমেইল' : 'Email',
        password: language === 'bangla' ? 'পাসওয়ার্ড' : 'Password',
        login: language === 'bangla' ? 'লগইন করুন' : 'Login',
        loggingIn: language === 'bangla' ? 'লগইন হচ্ছে...' : 'Logging In...',
        forgotPassword: language === 'bangla' ? 'পাসওয়ার্ড ভুলে গেছেন?' : 'Forgot Password?',
        noAccount: language === 'bangla' ? 'অ্যাকাউন্ট নেই?' : "Don't have an account?",
        register: language === 'bangla' ? 'নিবন্ধন করুন' : 'Register',
        rememberMe: language === 'bangla' ? 'মনে রাখুন' : 'Remember me',
        emailPlaceholder: language === 'bangla' ? 'আপনার ইমেইল লিখুন' : 'Enter your email',
        passwordPlaceholder: language === 'bangla' ? 'আপনার পাসওয়ার্ড লিখুন' : 'Enter your password',
        errorInvalid: language === 'bangla' ? 'ইমেইল বা পাসওয়ার্ড ভুল' : 'Invalid email or password',
        errorNotConfirmed: language === 'bangla' ? 'অনুগ্রহ করে আপনার ইমেইল নিশ্চিত করুন' : 'Please confirm your email first',
        errorGeneric: language === 'bangla' ? 'লগইন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।' : 'Login failed. Please try again.',
        errorEmailRequired: language === 'bangla' ? 'ইমেইল আবশ্যক' : 'Email is required',
        errorEmailInvalid: language === 'bangla' ? 'সঠিক ইমেইল ঠিকানা দিন' : 'Please enter a valid email',
        errorPasswordRequired: language === 'bangla' ? 'পাসওয়ার্ড আবশ্যক' : 'Password is required',
        sideTitle: language === 'bangla' ? 'ব্যবসা পরিচালনা করুন সহজে' : 'Manage Your Business with Ease',
        sideSubtitle: language === 'bangla' ? 'ডিজিটাল হালখাতা - আপনার ব্যবসার সম্পূর্ণ সমাধান' : 'Digital Halkhata - Complete solution for your business',
        sideFeature1: language === 'bangla' ? 'হিসাব ব্যবস্থাপনা' : 'Account Management',
        sideFeature2: language === 'bangla' ? 'ব্যবসায়িক রিপোর্ট' : 'Business Reports',
        sideFeature3: language === 'bangla' ? 'স্টক ট্র্যাকিং' : 'Stock Tracking'
    };

    // Load saved credentials on mount
    useEffect(() => {
        const savedCredentials = localStorage.getItem('halkhata_remember');
        if (savedCredentials) {
            try {
                const { email, remember } = JSON.parse(savedCredentials);
                if (remember) {
                    setFormData(prev => ({
                        ...prev,
                        email,
                        rememberMe: true
                    }));
                }
            } catch (e) {
                console.error('Error loading saved credentials:', e);
            }
        }
    }, []);

    // Email validation
    const validateEmail = useCallback((email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }, []);

    // Field validation
    const validateField = (name, value) => {
        switch (name) {
            case 'email':
                if (!value) return texts.errorEmailRequired;
                if (!validateEmail(value)) return texts.errorEmailInvalid;
                return '';
            case 'password':
                if (!value) return texts.errorPasswordRequired;
                return '';
            default:
                return '';
        }
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData(prev => ({
            ...prev,
            [name]: newValue
        }));

        // Validate field on change
        if (name !== 'rememberMe') {
            const fieldError = validateField(name, newValue);
            setFieldErrors(prev => ({
                ...prev,
                [name]: fieldError
            }));
        }

        // Clear general error when user types
        if (error) setError('');
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const fieldError = validateField(name, value);
        setFieldErrors(prev => ({
            ...prev,
            [name]: fieldError
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all fields
        const emailError = validateField('email', formData.email);
        const passwordError = validateField('password', formData.password);

        setFieldErrors({
            email: emailError,
            password: passwordError
        });

        if (emailError || passwordError) {
            return;
        }

        setLoading(true);
        setError('');

        try {
            const { error: signInError } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password
            });

            if (signInError) {
                if (signInError.message.includes('Email not confirmed')) {
                    setError(texts.errorNotConfirmed);
                } else if (signInError.message.includes('Invalid login credentials')) {
                    setError(texts.errorInvalid);
                } else {
                    setError(signInError.message);
                }
                setLoading(false);
                return;
            }

            // Handle Remember Me
            if (formData.rememberMe) {
                localStorage.setItem('halkhata_remember', JSON.stringify({
                    email: formData.email,
                    remember: true
                }));
            } else {
                localStorage.removeItem('halkhata_remember');
            }

            // Redirect to the page they tried to visit, or home
            const from = location.state?.from?.pathname || '/';
            navigate(from, { replace: true });

        } catch (err) {
            setError(texts.errorGeneric);
            console.error('Login error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='min-h-screen flex flex-col lg:flex-row bg-slate-50'>
            {/* Left Side Panel - Halkhata Branding */}
            <div className='lg:w-1/2 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 min-h-[300px] lg:min-h-screen relative overflow-hidden flex items-center justify-center p-8 lg:p-16'>
                {/* Animated decorative circles */}
                <div className='absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse'></div>
                <div className='absolute top-1/3 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-pulse' style={{ animationDuration: '3s' }}></div>
                <div className='absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse' style={{ animationDuration: '4s' }}></div>
                <div className='absolute top-1/4 left-1/3 w-24 h-24 bg-white/20 rounded-full animate-bounce' style={{ animationDuration: '5s' }}></div>
                <div className='absolute bottom-1/3 right-1/4 w-16 h-16 bg-white/15 rounded-full animate-ping' style={{ animationDuration: '4s' }}></div>

                {/* Content */}
                <div className='relative z-10 text-center'>
                    {/* Halkhata Logo */}
                    {/* <div className='mb-8'>
                        <img
                            src={halkhataLogo}
                            alt='হালখাতা - Halkhata'
                            className='w-64 md:w-80 mx-auto drop-shadow-2xl transition-transform hover:scale-105 duration-300'
                        />
                    </div> */}

                    
                    {/* Title and subtitle */}
                    <h2 className='text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg'>
                        {texts.sideTitle}
                    </h2>
                    <p className='text-white/80 text-base md:text-lg max-w-md mx-auto mb-8'>
                        {texts.sideSubtitle}
                    </p>

                    {/* Features list */}
                    <div className='flex flex-col gap-3 max-w-xs mx-auto'>
                        {[
                            { icon: '📊', text: texts.sideFeature1 },
                            { icon: '📈', text: texts.sideFeature2 },
                            { icon: '📦', text: texts.sideFeature3 }
                        ].map((feature, idx) => (
                            <div key={idx} className='flex items-center justify-center gap-3 text-white/90 bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm'>
                                <span className='text-xl'>{feature.icon}</span>
                                <span className='text-sm font-medium'>{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Corner decorations */}
                <div className='absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-white/30 rounded-tl-3xl'></div>
                <div className='absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-white/30 rounded-br-3xl'></div>
            </div>

            {/* Right Side - Login Form */}
            <div className='lg:w-1/2 flex items-center justify-center p-5 py-10 lg:p-16 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden'>
                {/* Background decorations */}
                <div className="absolute top-10 right-10 w-40 h-40 bg-emerald-100/40 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-teal-100/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className='relative w-full max-w-md'>
                    {/* Logo/Brand for mobile only */}
                    <div className='lg:hidden text-center mb-8'>
                        <h1 className='text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2'>
                            {language === 'bangla' ? 'হালখাতা' : 'Halkhata'}
                        </h1>
                        <p className='text-gray-500'>{texts.subtitle}</p>
                    </div>

                    {/* Desktop title */}
                    <div className='hidden lg:block mb-8'>
                        <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                            {texts.title}
                        </h1>
                        <p className='text-gray-500'>{texts.subtitle}</p>
                    </div>

                    {/* Login Form Card */}
                    <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-100'>

                        {/* Error Message */}
                        {error && (
                            <div className='mb-5 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-start gap-2 animate-shake'>
                                <FiAlertCircle className='mt-0.5 flex-shrink-0' />
                                <span>{error}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className='space-y-5' noValidate>
                            {/* Email Field */}
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-2' htmlFor='email'>
                                    {texts.email}
                                </label>
                                <div className='relative'>
                                    <span className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'>
                                        <FiMail />
                                    </span>
                                    <input
                                        id='email'
                                        type='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        placeholder={texts.emailPlaceholder}
                                        className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-emerald-500 transition-all duration-300 ${
                                            fieldErrors.email
                                                ? 'border-red-300 bg-red-50/50 focus:ring-red-500/20 focus:border-red-500'
                                                : 'border-gray-200 focus:ring-emerald-500/20'
                                        }`}
                                        required
                                        disabled={loading}
                                        autoComplete='email'
                                        aria-invalid={fieldErrors.email ? 'true' : 'false'}
                                        aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                                    />
                                    {formData.email && !fieldErrors.email && (
                                        <span className='absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500'>
                                            <FiCheckCircle />
                                        </span>
                                    )}
                                </div>
                                {fieldErrors.email && (
                                    <p id='email-error' className='mt-1.5 text-xs text-red-500 flex items-center gap-1'>
                                        <FiAlertCircle size={12} />
                                        {fieldErrors.email}
                                    </p>
                                )}
                            </div>

                            {/* Password Field */}
                            <div>
                                <label className='block text-sm font-medium text-gray-700 mb-2' htmlFor='password'>
                                    {texts.password}
                                </label>
                                <div className='relative'>
                                    <span className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'>
                                        <FiLock />
                                    </span>
                                    <input
                                        id='password'
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        onBlur={handleBlur}
                                        placeholder={texts.passwordPlaceholder}
                                        className={`w-full pl-12 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:border-emerald-500 transition-all duration-300 ${
                                            fieldErrors.password
                                                ? 'border-red-300 bg-red-50/50 focus:ring-red-500/20 focus:border-red-500'
                                                : 'border-gray-200 focus:ring-emerald-500/20'
                                        }`}
                                        required
                                        disabled={loading}
                                        autoComplete='current-password'
                                        aria-invalid={fieldErrors.password ? 'true' : 'false'}
                                        aria-describedby={fieldErrors.password ? 'password-error' : undefined}
                                    />
                                    <button
                                        type='button'
                                        onClick={() => setShowPassword(!showPassword)}
                                        className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition-colors p-1 rounded-md hover:bg-gray-100'
                                        disabled={loading}
                                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                                    >
                                        {showPassword ? <FiEyeOff /> : <FiEye />}
                                    </button>
                                </div>
                                {fieldErrors.password && (
                                    <p id='password-error' className='mt-1.5 text-xs text-red-500 flex items-center gap-1'>
                                        <FiAlertCircle size={12} />
                                        {fieldErrors.password}
                                    </p>
                                )}
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className='flex items-center justify-between'>
                                <label className='flex items-center gap-2 cursor-pointer group'>
                                    <input
                                        type='checkbox'
                                        name='rememberMe'
                                        checked={formData.rememberMe}
                                        onChange={handleInputChange}
                                        disabled={loading}
                                        className='w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 cursor-pointer disabled:cursor-not-allowed'
                                    />
                                    <span className='text-sm text-gray-600 group-hover:text-gray-800 transition-colors select-none'>
                                        {texts.rememberMe}
                                    </span>
                                </label>
                                <Link
                                    to='/forgot-password'
                                    className='text-sm text-emerald-600 hover:text-emerald-700 transition-colors font-medium hover:underline'
                                >
                                    {texts.forgotPassword}
                                </Link>
                            </div>

                            {/* Submit Button */}
                            <button
                                type='submit'
                                disabled={loading}
                                className='w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30 disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2'
                            >
                                {loading ? (
                                    <>
                                        <FiLoader className='animate-spin text-lg' />
                                        {texts.loggingIn}
                                    </>
                                ) : (
                                    <>
                                        <FiLock size={18} />
                                        {texts.login}
                                    </>
                                )}
                            </button>
                        </form>

                        {/* Register Link */}
                        <p className='text-center text-gray-600 mt-6'>
                            {texts.noAccount}{' '}
                            <Link to='/registration' className='font-semibold text-emerald-600 hover:text-emerald-700 transition-colors hover:underline'>
                                {texts.register}
                            </Link>
                        </p>
                    </div>

                    {/* Footer note */}
                    <p className='text-center text-xs text-gray-400 mt-6'>
                        {language === 'bangla'
                            ? 'লগইন করার মাধ্যমে আপনি আমাদের শর্তাবলী গ্রহণ করছেন'
                            : 'By logging in, you agree to our Terms & Conditions'}
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                .animate-shake {
                    animation: shake 0.3s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default Login;
