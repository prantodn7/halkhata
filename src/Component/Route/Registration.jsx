import React, { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiLock, FiEye, FiEyeOff, FiLoader } from 'react-icons/fi';
import { Link, useNavigate } from '@/compat/react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { supabase } from '../../config/supabaseClient';

const Registration = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const texts = {
        title: language === 'bangla' ? 'নিবন্ধন করুন' : 'Create Account',
        subtitle: language === 'bangla' ? 'আপনার হালখাতা অ্যাকাউন্ট তৈরি করুন' : 'Create your Halkhata account',
        name: language === 'bangla' ? 'নাম' : 'Name',
        email: language === 'bangla' ? 'ইমেইল' : 'Email',
        phone: language === 'bangla' ? 'ফোন নম্বর' : 'Phone Number',
        password: language === 'bangla' ? 'পাসওয়ার্ড' : 'Password',
        signUp: language === 'bangla' ? 'নিবন্ধন করুন' : 'Sign Up',
        signingUp: language === 'bangla' ? 'নিবন্ধন হচ্ছে...' : 'Signing Up...',
        alreadyHave: language === 'bangla' ? 'ইতিমধ্যে অ্যাকাউন্ট আছে?' : 'Already have an account?',
        login: language === 'bangla' ? 'লগইন করুন' : 'Login',
        namePlaceholder: language === 'bangla' ? 'আপনার নাম লিখুন' : 'Enter your name',
        emailPlaceholder: language === 'bangla' ? 'আপনার ইমেইল লিখুন' : 'Enter your email',
        phonePlaceholder: language === 'bangla' ? 'আপনার ফোন নম্বর লিখুন' : 'Enter your phone number',
        passwordPlaceholder: language === 'bangla' ? 'পাসওয়ার্ড তৈরি করুন' : 'Create a password',
        errorWeakPassword: language === 'bangla' ? 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে' : 'Password should be at least 6 characters',
        errorEmailExists: language === 'bangla' ? 'এই ইমেইল দিয়ে ইতিমধ্যে নিবন্ধিত' : 'This email is already registered',
        errorGeneric: language === 'bangla' ? 'নিবন্ধন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।' : 'Registration failed. Please try again.',
        successMessage: language === 'bangla' ? 'নিবন্ধন সফল! ইমেইল যাচাই করুন।' : 'Registration successful! Please check your email.'
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Clear error when user types
        if (error) setError('');
    };

    const validateForm = () => {
        if (formData.password.length < 6) {
            setError(texts.errorWeakPassword);
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        setError('');
        setSuccess('');

        try {
            // Sign up with Supabase Auth
            const { data, error: signUpError } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        name: formData.name,
                        phone: formData.phone
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

            // Check if email confirmation is required
            if (data.session === null) {
                setSuccess(texts.successMessage);
                // Redirect to login after 3 seconds
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            } else {
                // Auto-login successful
                navigate('/');
            }
        } catch (err) {
            setError(texts.errorGeneric);
            console.error('Registration error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex items-center justify-center px-5 py-10'>
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-100/30 to-green-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

            {/* Floating shapes */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 rounded-2xl rotate-12 animate-float"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-green-200/40 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>

            <div className='relative w-full max-w-md'>
                {/* Logo/Brand */}
                <div className='text-center mb-8'>
                    <h1 className='text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2'>
                        {language === 'bangla' ? 'হালখাতা' : 'Halkhata'}
                    </h1>
                    <p className='text-gray-500'>{texts.subtitle}</p>
                </div>

                {/* Registration Form */}
                <div className='bg-white rounded-2xl shadow-xl p-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>{texts.title}</h2>

                    {/* Error Message */}
                    {error && (
                        <div className='mb-5 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm'>
                            {error}
                        </div>
                    )}

                    {/* Success Message */}
                    {success && (
                        <div className='mb-5 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-600 text-sm'>
                            {success}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className='space-y-5'>
                        {/* Name Field */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>{texts.name}</label>
                            <div className='relative'>
                                <span className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'>
                                    <FiUser />
                                </span>
                                <input
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder={texts.namePlaceholder}
                                    className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300'
                                    required
                                    disabled={loading}
                                />
                            </div>
                        </div>

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
                                />
                            </div>
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>{texts.phone}</label>
                            <div className='relative'>
                                <span className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'>
                                    <FiPhone />
                                </span>
                                <input
                                    type='tel'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder={texts.phonePlaceholder}
                                    className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300'
                                    required
                                    disabled={loading}
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

                        {/* Submit Button */}
                        <button
                            type='submit'
                            disabled={loading}
                            className='w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-emerald-500/30 flex items-center justify-center gap-2'
                        >
                            {loading ? (
                                <>
                                    <FiLoader className='animate-spin text-lg' />
                                    {texts.signingUp}
                                </>
                            ) : (
                                texts.signUp
                            )}
                        </button>
                    </form>

                    {/* Login Link */}
                    <p className='text-center text-gray-600 mt-6'>
                        {texts.alreadyHave}{' '}
                        <Link to='/login' className='font-semibold text-emerald-600 hover:text-emerald-700 transition-colors'>
                            {texts.login}
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
