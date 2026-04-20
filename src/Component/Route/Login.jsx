import React, { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff, FiLoader } from 'react-icons/fi';
import { Link, useNavigate } from '@/compat/react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { supabase } from '../../config/supabaseClient';
import halkhataLogo from '../../assets/halkhata.png';

const Login = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
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
        emailPlaceholder: language === 'bangla' ? 'আপনার ইমেইল লিখুন' : 'Enter your email',
        passwordPlaceholder: language === 'bangla' ? 'আপনার পাসওয়ার্ড লিখুন' : 'Enter your password',
        errorInvalid: language === 'bangla' ? 'ইমেইল বা পাসওয়ার্ড ভুল' : 'Invalid email or password',
        errorNotConfirmed: language === 'bangla' ? 'অনুগ্রহ করে আপনার ইমেইল নিশ্চিত করুন' : 'Please confirm your email first',
        errorGeneric: language === 'bangla' ? 'লগইন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।' : 'Login failed. Please try again.',
        sideTitle: language === 'bangla' ? 'ব্যবসা পরিচালনা করুন সহজে' : 'Manage Your Business with Ease',
        sideSubtitle: language === 'bangla' ? 'ডিজিটাল হালখাতা - আপনার ব্যবসার সব্জি সমাধান' : 'Digital Halkhata - Complete solution for your business'
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error when user types
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError('');

        try {
            // Sign in with Supabase Auth
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

            // Login successful - redirect to home
            navigate('/');

        } catch (err) {
            setError(texts.errorGeneric);
            console.error('Login error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='min-h-screen flex flex-col lg:flex-row'>
            {/* Left Side Panel - Halkhata Branding */}
            <div className='lg:w-1/2 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 min-h-[300px] lg:min-h-screen relative overflow-hidden flex items-center justify-center p-8 lg:p-16'>
                {/* Decorative circles */}
                <div className='absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl'></div>
                <div className='absolute top-1/3 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl'></div>
                <div className='absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-xl'></div>
                <div className='absolute top-1/4 left-1/3 w-24 h-24 bg-white/20 rounded-full'></div>
                <div className='absolute bottom-1/3 right-1/4 w-16 h-16 bg-white/15 rounded-full'></div>
                <div className='absolute top-1/2 right-10 w-20 h-20 bg-white/10 rounded-full'></div>

                {/* Content */}
                <div className='relative z-10 text-center'>
                    {/* Halkhata Logo/Image */}
                    <div className='mb-8'>
                        <img
                            src={halkhataLogo}
                            alt='হালখাতা - Halkhata'
                            className='w-64 md:w-80 mx-auto drop-shadow-2xl'
                        />
                    </div>

                    {/* Decorative line */}
                    <div className='w-24 h-1 bg-white/60 rounded-full mx-auto mb-6'></div>

                    {/* Title and subtitle */}
                    <h2 className='text-2xl md:text-3xl font-bold text-white mb-3'>
                        {texts.sideTitle}
                    </h2>
                    <p className='text-white/80 text-base md:text-lg max-w-md mx-auto'>
                        {texts.sideSubtitle}
                    </p>

                    {/* Bottom decoration */}
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

            {/* Right Side - Login Form */}
            <div className='lg:w-1/2 flex items-center justify-center p-5 py-10 lg:p-16 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden'>
                {/* Background decorations */}
                <div className="absolute top-10 right-10 w-40 h-40 bg-emerald-100/40 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-teal-100/30 rounded-full blur-2xl"></div>

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

                    {/* Login Form */}
                    <div className='bg-white rounded-2xl shadow-xl p-8'>

                    {/* Error Message */}
                    {error && (
                        <div className='mb-5 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm'>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className='space-y-5'>
                        {/* Email Field */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>{texts.email}</label>
                            <div className='relative'>
                                <span className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'>
                                    <FiMail />
                                </span>
                                <input
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder={texts.emailPlaceholder}
                                    className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300'
                                    required
                                    disabled={loading}
                                    autoComplete='email'
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>{texts.password}</label>
                            <div className='relative'>
                                <span className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'>
                                    <FiLock />
                                </span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name='password'
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder={texts.passwordPlaceholder}
                                    className='w-full pl-12 pr-12 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300'
                                    required
                                    disabled={loading}
                                    autoComplete='current-password'
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition-colors'
                                    disabled={loading}
                                >
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className='text-right'>
                            <Link to='/forgot-password' className='text-sm text-emerald-600 hover:text-emerald-700 transition-colors'>
                                {texts.forgotPassword}
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type='submit'
                            disabled={loading}
                            className='w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2'
                        >
                            {loading ? (
                                <>
                                    <FiLoader className='animate-spin text-lg' />
                                    {texts.loggingIn}
                                </>
                            ) : (
                                texts.login
                            )}
                        </button>
                    </form>

                    {/* Register Link */}
                    <p className='text-center text-gray-600 mt-6'>
                        {texts.noAccount}{' '}
                        <Link to='/registration' className='font-semibold text-emerald-600 hover:text-emerald-700 transition-colors'>
                            {texts.register}
                        </Link>
                    </p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
