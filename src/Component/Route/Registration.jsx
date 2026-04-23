import React, { useState, useCallback, useEffect } from 'react';
import { FiUser, FiMail, FiPhone, FiLock, FiEye, FiEyeOff, FiLoader, FiCheckCircle, FiAlertCircle, FiShield, FiX, FiCheck } from 'react-icons/fi';
import { Link, useNavigate } from '@/compat/react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { supabase } from '../../config/supabaseClient';
import halkhataLogo from '../../assets/halkhata.png';

/**
 * Professional Registration Component
 * Features:
 * - Real-time password strength indicator
 * - Terms & conditions agreement
 * - Phone number validation (Bangladesh format)
 * - Form validation with visual feedback
 * - Loading states with animations
 * - Bilingual support (English/Bangla)
 * - Accessible form controls
 * - Social login placeholders
 */
const Registration = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();

    // Form state
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [countdown, setCountdown] = useState(3);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        agreeTerms: false
    });

    // Field-specific validation states
    const [fieldErrors, setFieldErrors] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        terms: ''
    });

    // Password strength state
    const [passwordStrength, setPasswordStrength] = useState({
        score: 0,
        feedback: []
    });

    const texts = {
        title: language === 'bangla' ? 'নিবন্ধন করুন' : 'Create Account',
        subtitle: language === 'bangla' ? 'আপনার হালখাতা অ্যাকাউন্ট তৈরি করুন' : 'Create your Halkhata account',
        name: language === 'bangla' ? 'নাম' : 'Full Name',
        email: language === 'bangla' ? 'ইমেইল' : 'Email',
        phone: language === 'bangla' ? 'ফোন নম্বর' : 'Phone Number',
        password: language === 'bangla' ? 'পাসওয়ার্ড' : 'Password',
        signUp: language === 'bangla' ? 'নিবন্ধন করুন' : 'Create Account',
        signingUp: language === 'bangla' ? 'নিবন্ধন হচ্ছে...' : 'Creating Account...',
        alreadyHave: language === 'bangla' ? 'ইতিমধ্যে অ্যাকাউন্ট আছে?' : 'Already have an account?',
        login: language === 'bangla' ? 'লগইন করুন' : 'Login',
        namePlaceholder: language === 'bangla' ? 'আপনার পূর্ণ নাম লিখুন' : 'Enter your full name',
        emailPlaceholder: language === 'bangla' ? 'আপনার ইমেইল লিখুন' : 'Enter your email',
        phonePlaceholder: language === 'bangla' ? '01XXXXXXXXX' : '01XXXXXXXXX',
        passwordPlaceholder: language === 'bangla' ? 'পাসওয়ার্ড তৈরি করুন' : 'Create a strong password',
        agreeTerms: language === 'bangla' ? 'আমি শর্তাবলী ও গোপনীয়তা নীতি মেনে নিচ্ছি' : 'I agree to the Terms & Privacy Policy',
        errorWeakPassword: language === 'bangla' ? 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে' : 'Password must be at least 6 characters',
        errorEmailExists: language === 'bangla' ? 'এই ইমেইল দিয়ে ইতিমধ্যে নিবন্ধিত' : 'This email is already registered',
        errorGeneric: language === 'bangla' ? 'নিবন্ধন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।' : 'Registration failed. Please try again.',
        successMessage: language === 'bangla' ? 'নিবন্ধন সফল! ইমেইল যাচাই করুন।' : 'Registration successful! Please verify your email.',
        redirectingIn: language === 'bangla' ? 'সেকেন্ডে লগইন পৃষ্ঠায় পুনঃনির্দেশিত হচ্ছে...' : 'seconds, redirecting to login...',
        errorNameRequired: language === 'bangla' ? 'নাম আবশ্যক' : 'Name is required',
        errorNameShort: language === 'bangla' ? 'নাম অন্তত ২ অক্ষরের হতে হবে' : 'Name must be at least 2 characters',
        errorEmailRequired: language === 'bangla' ? 'ইমেইল আবশ্যক' : 'Email is required',
        errorEmailInvalid: language === 'bangla' ? 'সঠিক ইমেইল ঠিকানা দিন' : 'Please enter a valid email',
        errorPhoneRequired: language === 'bangla' ? 'ফোন নম্বর আবশ্যক' : 'Phone number is required',
        errorPhoneInvalid: language === 'bangla' ? 'সঠিক ফোন নম্বর দিন (01XXXXXXXXX)' : 'Please enter a valid phone number',
        errorPasswordRequired: language === 'bangla' ? 'পাসওয়ার্ড আবশ্যক' : 'Password is required',
        errorTermsRequired: language === 'bangla' ? 'শর্তাবলী মেনে নিতে হবে' : 'You must agree to the terms',
        passwordStrength: {
            weak: language === 'bangla' ? 'দুর্বল' : 'Weak',
            fair: language === 'bangla' ? 'মোটামুটি' : 'Fair',
            good: language === 'bangla' ? 'ভালো' : 'Good',
            strong: language === 'bangla' ? 'শক্তিশালী' : 'Strong',
        },
        requirements: {
            length: language === 'bangla' ? 'কমপক্ষে ৬ অক্ষর' : 'At least 6 characters',
            uppercase: language === 'bangla' ? 'একটি বড় হাতের অক্ষর' : 'One uppercase letter',
            lowercase: language === 'bangla' ? 'একটি ছোট হাতের অক্ষর' : 'One lowercase letter',
            number: language === 'bangla' ? 'একটি সংখ্যা' : 'One number',
            special: language === 'bangla' ? 'একটি বিশেষ অক্ষর' : 'One special character'
        },
        sideTitle: language === 'bangla' ? 'আজই শুরু করুন আপনার যাত্রা' : 'Start Your Journey Today',
        sideSubtitle: language === 'bangla' ? 'হাজার হাজার ব্যবসায়ী হালখাতা ব্যবহার করছেন' : 'Thousands of businesses trust Halkhata'
    };

    // Email validation
    const validateEmail = useCallback((email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }, []);

    // Phone validation (Bangladesh format)
    const validatePhone = useCallback((phone) => {
        const bdPhoneRegex = /^(?:\+880|01)[1-9]\d{8}$/;
        return bdPhoneRegex.test(phone.replace(/\s/g, ''));
    }, []);

    // Password strength calculator
    const calculatePasswordStrength = useCallback((password) => {
        let score = 0;
        const feedback = [];

        if (password.length >= 6) { score += 1; feedback.push('length'); }
        if (password.length >= 10) { score += 1; }
        if (/[A-Z]/.test(password)) { score += 1; feedback.push('uppercase'); }
        if (/[a-z]/.test(password)) { score += 1; feedback.push('lowercase'); }
        if (/[0-9]/.test(password)) { score += 1; feedback.push('number'); }
        if (/[^A-Za-z0-9]/.test(password)) { score += 1; feedback.push('special'); }

        return { score: Math.min(score, 4), feedback };
    }, []);

    // Field validation
    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                if (!value.trim()) return texts.errorNameRequired;
                if (value.trim().length < 2) return texts.errorNameShort;
                return '';
            case 'email':
                if (!value) return texts.errorEmailRequired;
                if (!validateEmail(value)) return texts.errorEmailInvalid;
                return '';
            case 'phone':
                if (!value) return texts.errorPhoneRequired;
                if (!validatePhone(value)) return texts.errorPhoneInvalid;
                return '';
            case 'password':
                if (!value) return texts.errorPasswordRequired;
                if (value.length < 6) return texts.errorWeakPassword;
                return '';
            case 'terms':
                if (!value) return texts.errorTermsRequired;
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
        if (name !== 'agreeTerms') {
            const fieldError = validateField(name, newValue);
            setFieldErrors(prev => ({
                ...prev,
                [name]: fieldError
            }));
        } else {
            setFieldErrors(prev => ({
                ...prev,
                terms: ''
            }));
        }

        // Calculate password strength
        if (name === 'password') {
            setPasswordStrength(calculatePasswordStrength(newValue));
        }

        // Clear general error when user types
        if (error) setError('');
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (name !== 'agreeTerms') {
            const fieldError = validateField(name, value);
            setFieldErrors(prev => ({
                ...prev,
                [name]: fieldError
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all fields
        const nameError = validateField('name', formData.name);
        const emailError = validateField('email', formData.email);
        const phoneError = validateField('phone', formData.phone);
        const passwordError = validateField('password', formData.password);
        const termsError = validateField('terms', formData.agreeTerms);

        setFieldErrors({
            name: nameError,
            email: emailError,
            phone: phoneError,
            password: passwordError,
            terms: termsError
        });

        if (nameError || emailError || phoneError || passwordError || termsError) {
            return;
        }

        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            // Sign up with Supabase Auth
            const { data, error: signUpError } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        name: formData.name.trim(),
                        phone: formData.phone.trim()
                    }
                }
            });

            if (signUpError) {
                if (signUpError.message.includes('already registered')) {
                    setError(texts.errorEmailExists);
                } else {
                    setError(signUpError.message);
                }
                setLoading(false);
                return;
            }

            // Registration successful
            setSuccess(true);

            // Check if email confirmation is required
            if (data.session === null) {
                // Countdown and redirect to login
                let count = 3;
                setCountdown(count);

                const timer = setInterval(() => {
                    count -= 1;
                    setCountdown(count);
                    if (count <= 0) {
                        clearInterval(timer);
                        navigate('/login');
                    }
                }, 1000);
            } else {
                // Auto-login successful - redirect to home
                setTimeout(() => {
                    navigate('/');
                }, 500);
            }

        } catch (err) {
            setError(texts.errorGeneric);
            console.error('Registration error:', err);
        } finally {
            if (!success) {
                setLoading(false);
            }
        }
    };

    // Get password strength color and text
    const getPasswordStrengthInfo = () => {
        const { score } = passwordStrength;
        switch (score) {
            case 0:
            case 1:
                return { color: 'bg-red-500', text: texts.passwordStrength.weak, width: '25%' };
            case 2:
                return { color: 'bg-orange-500', text: texts.passwordStrength.fair, width: '50%' };
            case 3:
                return { color: 'bg-yellow-500', text: texts.passwordStrength.good, width: '75%' };
            case 4:
                return { color: 'bg-emerald-500', text: texts.passwordStrength.strong, width: '100%' };
            default:
                return { color: 'bg-gray-200', text: '', width: '0%' };
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
                    

                    
                    {/* Title and subtitle */}
                    <h2 className='text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg'>
                        {texts.sideTitle}
                    </h2>
                    <p className='text-white/80 text-base md:text-lg max-w-md mx-auto'>
                        {texts.sideSubtitle}
                    </p>

                    {/* Benefits list */}
                    <div className='flex flex-col gap-3 max-w-xs mx-auto mt-8'>
                        {[
                           
                            { icon: '✓', text: language === 'bangla' ? 'সহজ হিসাব ব্যবস্থাপনা' : 'Easy account management' },
                            { icon: '✓', text: language === 'bangla' ? 'যেকোনো ডিভাইসে ব্যবহার' : 'Access from any device' }
                        ].map((benefit, idx) => (
                            <div key={idx} className='flex items-center justify-center gap-3 text-white/90'>
                                <span className='w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold'>
                                    {benefit.icon}
                                </span>
                                <span className='text-sm'>{benefit.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Corner decorations */}
                <div className='absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-white/30 rounded-tl-3xl'></div>
                <div className='absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-white/30 rounded-br-3xl'></div>
            </div>

            {/* Right Side - Registration Form */}
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

                    {/* Registration Form Card */}
                    <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-100'>

                        {/* Success Message */}
                        {success ? (
                            <div className='text-center py-8'>
                                <div className='w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                    <FiCheckCircle className='text-4xl text-emerald-600' />
                                </div>
                                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                                    {texts.successMessage}
                                </h3>
                                <p className='text-gray-500'>
                                    {countdown} {texts.redirectingIn}
                                </p>
                            </div>
                        ) : (
                            <>
                                {/* Error Message */}
                                {error && (
                                    <div className='mb-5 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-start gap-2 animate-shake'>
                                        <FiAlertCircle className='mt-0.5 flex-shrink-0' />
                                        <span>{error}</span>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className='space-y-4' noValidate>
                                    {/* Name Field */}
                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2' htmlFor='name'>
                                            {texts.name}
                                        </label>
                                        <div className='relative'>
                                            <span className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'>
                                                <FiUser />
                                            </span>
                                            <input
                                                id='name'
                                                type='text'
                                                name='name'
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                placeholder={texts.namePlaceholder}
                                                className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                                                    fieldErrors.name
                                                        ? 'border-red-300 bg-red-50/50 focus:ring-red-500/20 focus:border-red-500'
                                                        : 'border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20'
                                                }`}
                                                required
                                                disabled={loading}
                                                autoComplete='name'
                                                aria-invalid={fieldErrors.name ? 'true' : 'false'}
                                            />
                                            {formData.name && !fieldErrors.name && (
                                                <span className='absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500'>
                                                    <FiCheckCircle />
                                                </span>
                                            )}
                                        </div>
                                        {fieldErrors.name && (
                                            <p className='mt-1.5 text-xs text-red-500 flex items-center gap-1'>
                                                <FiAlertCircle size={12} />
                                                {fieldErrors.name}
                                            </p>
                                        )}
                                    </div>

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
                                                className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                                                    fieldErrors.email
                                                        ? 'border-red-300 bg-red-50/50 focus:ring-red-500/20 focus:border-red-500'
                                                        : 'border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20'
                                                }`}
                                                required
                                                disabled={loading}
                                                autoComplete='email'
                                                aria-invalid={fieldErrors.email ? 'true' : 'false'}
                                            />
                                            {formData.email && !fieldErrors.email && (
                                                <span className='absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500'>
                                                    <FiCheckCircle />
                                                </span>
                                            )}
                                        </div>
                                        {fieldErrors.email && (
                                            <p className='mt-1.5 text-xs text-red-500 flex items-center gap-1'>
                                                <FiAlertCircle size={12} />
                                                {fieldErrors.email}
                                            </p>
                                        )}
                                    </div>

                                    {/* Phone Field */}
                                    <div>
                                        <label className='block text-sm font-medium text-gray-700 mb-2' htmlFor='phone'>
                                            {texts.phone}
                                        </label>
                                        <div className='relative'>
                                            <span className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'>
                                                <FiPhone />
                                            </span>
                                            <input
                                                id='phone'
                                                type='tel'
                                                name='phone'
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                onBlur={handleBlur}
                                                placeholder={texts.phonePlaceholder}
                                                className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                                                    fieldErrors.phone
                                                        ? 'border-red-300 bg-red-50/50 focus:ring-red-500/20 focus:border-red-500'
                                                        : 'border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20'
                                                }`}
                                                required
                                                disabled={loading}
                                                autoComplete='tel'
                                                aria-invalid={fieldErrors.phone ? 'true' : 'false'}
                                            />
                                            {formData.phone && !fieldErrors.phone && (
                                                <span className='absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500'>
                                                    <FiCheckCircle />
                                                </span>
                                            )}
                                        </div>
                                        {fieldErrors.phone && (
                                            <p className='mt-1.5 text-xs text-red-500 flex items-center gap-1'>
                                                <FiAlertCircle size={12} />
                                                {fieldErrors.phone}
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
                                                className={`w-full pl-12 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                                                    fieldErrors.password
                                                        ? 'border-red-300 bg-red-50/50 focus:ring-red-500/20 focus:border-red-500'
                                                        : 'border-gray-200 focus:border-emerald-500 focus:ring-emerald-500/20'
                                                }`}
                                                required
                                                disabled={loading}
                                                autoComplete='new-password'
                                                aria-invalid={fieldErrors.password ? 'true' : 'false'}
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

                                        {/* Password Strength Indicator */}
                                        {formData.password && (
                                            <div className='mt-3'>
                                                <div className='flex items-center justify-between mb-1.5'>
                                                    <span className='text-xs text-gray-500'>
                                                        {language === 'bangla' ? 'পাসওয়ার্ড শক্তি' : 'Password strength'}
                                                    </span>
                                                    <span className={`text-xs font-medium ${
                                                        passwordStrength.score <= 1 ? 'text-red-500' :
                                                        passwordStrength.score === 2 ? 'text-orange-500' :
                                                        passwordStrength.score === 3 ? 'text-yellow-600' :
                                                        'text-emerald-600'
                                                    }`}>
                                                        {getPasswordStrengthInfo().text}
                                                    </span>
                                                </div>
                                                <div className='h-1.5 bg-gray-200 rounded-full overflow-hidden'>
                                                    <div
                                                        className={`h-full ${getPasswordStrengthInfo().color} transition-all duration-300`}
                                                        style={{ width: getPasswordStrengthInfo().width }}
                                                    ></div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Password Requirements */}
                                        {formData.password && (
                                            <div className='mt-3 grid grid-cols-2 gap-1.5'>
                                                {[
                                                    { key: 'length', check: formData.password.length >= 6 },
                                                    { key: 'uppercase', check: /[A-Z]/.test(formData.password) },
                                                    { key: 'lowercase', check: /[a-z]/.test(formData.password) },
                                                    { key: 'number', check: /[0-9]/.test(formData.password) }
                                                ].map((req) => (
                                                    <div key={req.key} className='flex items-center gap-1.5 text-xs'>
                                                        {req.check ? (
                                                            <FiCheck className='text-emerald-500 flex-shrink-0' size={14} />
                                                        ) : (
                                                            <FiX className='text-gray-300 flex-shrink-0' size={14} />
                                                        )}
                                                        <span className={req.check ? 'text-emerald-600' : 'text-gray-400'}>
                                                            {texts.requirements[req.key]}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {fieldErrors.password && (
                                            <p className='mt-1.5 text-xs text-red-500 flex items-center gap-1'>
                                                <FiAlertCircle size={12} />
                                                {fieldErrors.password}
                                            </p>
                                        )}
                                    </div>

                                    {/* Terms & Conditions */}
                                    <div className={`p-3 rounded-lg border transition-colors ${
                                        fieldErrors.terms ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'
                                    }`}>
                                        <label className='flex items-start gap-3 cursor-pointer'>
                                            <input
                                                type='checkbox'
                                                name='agreeTerms'
                                                checked={formData.agreeTerms}
                                                onChange={handleInputChange}
                                                disabled={loading}
                                                className='mt-0.5 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 cursor-pointer disabled:cursor-not-allowed'
                                            />
                                            <span className='text-sm text-gray-600'>
                                                {texts.agreeTerms}{' '}
                                                <Link to='/terms' className='text-emerald-600 hover:underline'>
                                                    {language === 'bangla' ? 'শর্তাবলী' : 'Terms'}
                                                </Link>
                                            </span>
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type='submit'
                                        disabled={loading}
                                        className='w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30 disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2 mt-5'
                                    >
                                        {loading ? (
                                            <>
                                                <FiLoader className='animate-spin text-lg' />
                                                {texts.signingUp}
                                            </>
                                        ) : (
                                            <>
                                                <FiUser size={18} />
                                                {texts.signUp}
                                            </>
                                        )}
                                    </button>
                                </form>

                                {/* Login Link */}
                                <p className='text-center text-gray-600 mt-6'>
                                    {texts.alreadyHave}{' '}
                                    <Link to='/login' className='font-semibold text-emerald-600 hover:text-emerald-700 transition-colors hover:underline'>
                                        {texts.login}
                                    </Link>
                                </p>
                            </>
                        )}
                    </div>

                    {/* Security Note */}
                    {!success && (
                        <div className='flex items-center justify-center gap-2 mt-4 text-xs text-gray-400'>
                            <FiShield size={14} />
                            <span>
                                {language === 'bangla'
                                    ? 'আপনার তথ্য সুরক্ষিত এবং এনক্রিপ্ট করা'
                                    : 'Your data is secure and encrypted'}
                            </span>
                        </div>
                    )}
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

export default Registration;
