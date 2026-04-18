import React, { useEffect } from 'react';
import Image from 'next/image';
import { Link } from '@/compat/react-router-dom';
import photo from '../../assets/Busniess/electronic.jpeg'
import { useSettings } from '../../context/SettingsContext'

const Electronic = () => {
    const { downloadUrl } = useSettings();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        {/* Animation Styles */}
        <style>{`
            @keyframes animFadeUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            @keyframes animFadeLeft {
                from { opacity: 0; transform: translateX(30px); }
                to { opacity: 1; transform: translateX(0); }
            }
            @keyframes animFadeRight {
                from { opacity: 0; transform: translateX(-30px); }
                to { opacity: 1; transform: translateX(0); }
            }
            @keyframes animScale {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
            }
            @keyframes animFloat {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            .anim-fade-up { animation: animFadeUp 0.7s ease-out forwards; opacity: 0; }
            .anim-fade-left { animation: animFadeLeft 0.7s ease-out forwards; opacity: 0; }
            .anim-fade-right { animation: animFadeRight 0.7s ease-out forwards; opacity: 0; }
            .anim-scale { animation: animScale 0.6s ease-out forwards; opacity: 0; }
            .anim-float { animation: animFloat 3s ease-in-out infinite; }
            .delay-100 { animation-delay: 0.1s; }
            .delay-200 { animation-delay: 0.2s; }
            .delay-300 { animation-delay: 0.3s; }
            .delay-400 { animation-delay: 0.4s; }
            .delay-500 { animation-delay: 0.5s; }
        `}</style>
        <div className='bg-green-50 min-h-screen'>
            <div className='max-w-[1380px] mx-auto px-5 md:px-16'>
                {/* Hero Section */}
                <div className='md:flex justify-center items-center py-20'>
                    <div className='space-y-5 md:pr-10'>
                        <h1 className='text-3xl md:text-5xl font-bold text-gray-900 leading-tight anim-fade-up'>
                            <span className='text-green-600'>আপনার ইলেকট্রনিক্স দোকানের জন্য</span> ১০০% সঠিক হিসাব ও বাড়তি আয়ের স্মার্ট সমাধান
                        </h1>
                        <p className='text-lg text-green-600 anim-fade-up delay-100'>
                            বাকি, স্টক, সিরিয়াল ও ওয়ারেন্টি — সবকিছু একসাথে রাখুন ডিজিটালি। হিসাব মিলাতে সময় নষ্ট নয়, বরং আয় বাড়ান SMS ও কমিশন বেইজড সার্ভিস সহ আরো সুবিধা।
                        </p>
                        <div className='flex items-center gap-5 flex-wrap anim-fade-up delay-200'>
                            <a href={downloadUrl} download className='bg-green-600 hover:bg-green-700 transition-colors duration-300 py-3 px-8 rounded-lg text-white font-semibold shadow-md hover:shadow-lg'>
                                এখনই ডাউনলোড করুন
                            </a>
                            <Link to='/support'>
                                <button className='py-3 px-8 border-2 border-green-600 rounded-lg text-green-600 font-semibold hover:bg-green-50 transition-colors duration-300'>
                                    আরো জানতে যোগাযোগ করুন
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='mt-10 md:mt-0 anim-scale delay-300'>
                        <Image src={photo} alt="Electronic Business" className='rounded-2xl shadow-xl' />
                    </div>
                </div>

                {/* Main Features Section */}
                <div className='py-20'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-5xl font-bold text-gray-900 mb-4 anim-fade-up'>
                            ইলেকট্রনিক্স ব্যবসার জন্য <span className='text-green-600'>হালখাতাতে যা থাকছে</span>
                        </h2>
                        <p className='text-green-600 text-lg mt-4 max-w-3xl mx-auto anim-fade-up delay-100'>
                            সিরিয়াল ট্র্যাকিং, ওয়ারেন্টি ম্যানেজমেন্ট, ব্র্যান্ড ভিত্তিক স্টক — সব কিছু এখন হাতের মুঠোয়।
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {/* Card 1 */}
                        <div className='bg-white rounded-2xl border-2 border-green-200 shadow-md p-8 hover:shadow-2xl hover:border-green-400 hover:-translate-y-2 transition-all duration-300 group anim-fade-up delay-200'>
                            <div className='flex justify-center mb-6'>
                                <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 text-green-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-2xl font-bold text-center text-gray-900 mb-4'>
                                সব প্রোডাক্ট ও সিরিয়াল থাকবে সাজানো
                            </h3>
                            <p className='text-green-600 text-center mb-6 leading-relaxed'>
                                মোবাইল, টিভি, ল্যাপটপ, ক্যামেরা — প্রতিটি প্রোডাক্টের সিরিয়াল নাম্বার ও ওয়ারেন্টি ট্র্যাক করুন সহজেই।
                            </p>
                            <ul className='space-y-3'>
                                <li className='flex items-start gap-3 text-green-600'>
                                    <svg className='w-6 h-6 flex-shrink-0 mt-0.5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>সিরিয়াল নাম্বার ট্র্যাকিং</span>
                                </li>
                                <li className='flex items-start gap-3 text-green-600'>
                                    <svg className='w-6 h-6 flex-shrink-0 mt-0.5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>ওয়ারেন্টি ম্যানেজমেন্ট</span>
                                </li>
                                <li className='flex items-start gap-3 text-green-600'>
                                    <svg className='w-6 h-6 flex-shrink-0 mt-0.5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>ব্র্যান্ড ভিত্তিক স্টক ম্যানেজমেন্ট</span>
                                </li>
                                <li className='flex items-start gap-3 text-green-600'>
                                    <svg className='w-6 h-6 flex-shrink-0 mt-0.5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>মডেল ও স্পেসিফিকেশন সেভ</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className='bg-white rounded-2xl border-2 border-purple-200 shadow-md p-8 hover:shadow-2xl hover:border-purple-400 hover:-translate-y-2 transition-all duration-300 group anim-fade-up delay-300'>
                            <div className='flex justify-center mb-6'>
                                <div className='w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 text-purple-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-2xl font-bold text-center text-gray-900 mb-4'>
                                কাস্টমার ও সার্ভিস হিসাব সহজে
                            </h3>
                            <p className='text-green-600 text-center mb-6 leading-relaxed'>
                                কাস্টমারের বাকি, সার্ভিস রেকর্ড, ওয়ারেন্টি ক্লেইম — সব কিছু এক জায়গায় ট্র্যাক করুন।
                            </p>
                            <ul className='space-y-3'>
                                <li className='flex items-start gap-3 text-green-600'>
                                    <svg className='w-6 h-6 flex-shrink-0 mt-0.5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>কাস্টমার বাকি ট্র্যাকিং</span>
                                </li>
                                <li className='flex items-start gap-3 text-green-600'>
                                    <svg className='w-6 h-6 flex-shrink-0 mt-0.5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>সার্ভিস রেকর্ড ম্যানেজমেন্ট</span>
                                </li>
                                <li className='flex items-start gap-3 text-green-600'>
                                    <svg className='w-6 h-6 flex-shrink-0 mt-0.5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>SMS রিমাইন্ডার পাঠানো</span>
                                </li>
                                <li className='flex items-start gap-3 text-green-600'>
                                    <svg className='w-6 h-6 flex-shrink-0 mt-0.5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>ওয়ারেন্টি ক্লেইম ট্র্যাকিং</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className='bg-white rounded-2xl border-2 border-teal-200 shadow-md p-8 hover:shadow-2xl hover:border-teal-400 hover:-translate-y-2 transition-all duration-300 group anim-fade-up delay-400'>
                            <div className='flex justify-center mb-6'>
                                <div className='w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 text-teal-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-2xl font-bold text-center text-gray-900 mb-4'>
                                বাড়তি আয় ও ডিজিটাল সুবিধা
                            </h3>
                            <p className='text-green-600 text-center mb-6 leading-relaxed'>
                                মোবাইল রিচার্জ, বিল পেমেন্ট ও অনলাইন সেলস করে দোকান থেকেই বাড়তি আয় করুন।
                            </p>
                            <ul className='space-y-3'>
                                <li className='flex items-start gap-3 text-green-600'>
                                    <svg className='w-6 h-6 flex-shrink-0 mt-0.5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>মোবাইল রিচার্জ সার্ভিস</span>
                                </li>
                                <li className='flex items-start gap-3 text-green-600'>
                                    <svg className='w-6 h-6 flex-shrink-0 mt-0.5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>বিল পেমেন্ট সুবিধা</span>
                                </li>
                                <li className='flex items-start gap-3 text-green-600'>
                                    <svg className='w-6 h-6 flex-shrink-0 mt-0.5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>অনলাইন প্রোডাক্ট ক্যাটালগ</span>
                                </li>
                                <li className='flex items-start gap-3 text-green-600'>
                                    <svg className='w-6 h-6 flex-shrink-0 mt-0.5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>কমিশন ভিত্তিক আয়</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Problems & Solutions Section */}
                <div className='py-20'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                        {/* Problems Column */}
                        <div className='bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-10 anim-fade-left'>
                            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>
                                ইলেকট্রনিক্স ব্যবসায় এই সমস্যা?
                            </h2>
                            <div className='space-y-6'>
                                {/* Problem 1 */}
                                <div className='flex gap-4 bg-white/50 backdrop-blur rounded-xl p-5'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-7 h-7 text-red-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>সিরিয়াল নাম্বার ট্র্যাক করা কঠিন</h3>
                                        <p className='text-green-600'>প্রতিটি মোবাইল, ল্যাপটপ, টিভির সিরিয়াল নাম্বার মনে রাখা বা খাতায় লিখে রাখা জটিল হয়ে যায়।</p>
                                    </div>
                                </div>

                                {/* Problem 2 */}
                                <div className='flex gap-4 bg-white/50 backdrop-blur rounded-xl p-5'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-7 h-7 text-red-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>ওয়ারেন্টি ম্যানেজমেন্ট জটিল</h3>
                                        <p className='text-green-600'>কোন প্রোডাক্টের ওয়ারেন্টি কবে শেষ হবে তা ভুলে যাওয়ায় কাস্টমার সার্ভিস দুর্বল হয়।</p>
                                    </div>
                                </div>

                                {/* Problem 3 */}
                                <div className='flex gap-4 bg-white/50 backdrop-blur rounded-xl p-5'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-7 h-7 text-red-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>ব্র্যান্ড ও মডেল অনুযায়ী স্টক না থাকা</h3>
                                        <p className='text-green-600'>কোন ব্র্যান্ডের কোন মডেলের কতটা স্টক আছে তা সহজে না জানায় বিক্রি মিস হয়।</p>
                                    </div>
                                </div>

                                {/* Problem 4 */}
                                <div className='flex gap-4 bg-white/50 backdrop-blur rounded-xl p-5'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-7 h-7 text-red-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>দাম পরিবর্তন ট্র্যাক করা সমস্যা</h3>
                                        <p className='text-green-600'>ইলেকট্রনিক্স প্রোডাক্টের দাম দ্রুত পরিবর্তন হয় তাই আপডেট রাখা কঠিন হয়।</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Solutions Column */}
                        <div className='bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-10 anim-fade-right'>
                            <h2 className='text-3xl md:text-4xl font-bold text-green-700 mb-8'>
                                হালখাতার স্মার্ট সলিউশন!
                            </h2>
                            <div className='space-y-6'>
                                {/* Solution 1 */}
                                <div className='flex gap-4 bg-white/50 backdrop-blur rounded-xl p-5'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-7 h-7 text-green-600' fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>অটোমেটিক সিরিয়াল ট্র্যাকিং</h3>
                                        <p className='text-green-600'>প্রতিটি প্রোডাক্টের IMEI/সিরিয়াল নাম্বার সেভ করুন এবং সার্চ করে এক সেকেন্ডে খুঁজে পান।</p>
                                    </div>
                                </div>

                                {/* Solution 2 */}
                                <div className='flex gap-4 bg-white/50 backdrop-blur rounded-xl p-5'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-7 h-7 text-green-600' fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>ওয়ারেন্টি রিমাইন্ডার সিস্টেম</h3>
                                        <p className='text-green-600'>ওয়ারেন্টি শেষ হওয়ার আগেই অ্যালার্ট পাবেন এবং কাস্টমারকে SMS পাঠাতে পারবেন।</p>
                                    </div>
                                </div>

                                {/* Solution 3 */}
                                <div className='flex gap-4 bg-white/50 backdrop-blur rounded-xl p-5'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-7 h-7 text-green-600' fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>ব্র্যান্ড ও মডেল ভিত্তিক স্টক</h3>
                                        <p className='text-green-600'>Samsung, Apple, Sony — প্রতিটি ব্র্যান্ডের মডেল অনুযায়ী স্টক দেখুন এবং ম্যানেজ করুন।</p>
                                    </div>
                                </div>

                                {/* Solution 4 */}
                                <div className='flex gap-4 bg-white/50 backdrop-blur rounded-xl p-5'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-7 h-7 text-green-600' fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-gray-900 mb-2'>দ্রুত দাম আপডেট</h3>
                                        <p className='text-green-600'>যেকোনো প্রোডাক্টের ক্রয় ও বিক্রয় মূল্য এক ক্লিকে আপডেট করুন এবং লাভ-লোকসান দেখুন।</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Features Section */}
                <div className='py-20'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-5xl font-bold text-gray-900 mb-4 anim-fade-up'>
                            আরও যে <span className='text-green-600'>স্মার্ট ফিচার</span> পাবেন
                        </h2>
                    </div>

                    {/* Feature Cards */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {/* Feature 1 */}
                        <div className='text-center bg-white rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl anim-scale delay-100'>
                            <div className='flex justify-center mb-6'>
                                <div className='w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 text-indigo-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-lg font-bold text-gray-900 mb-3'>সাপ্লায়ার ম্যানেজমেন্ট</h3>
                            <p className='text-green-600 text-sm leading-relaxed'>
                                কোন সাপ্লায়ার থেকে কোন ব্র্যান্ডের প্রোডাক্ট নিচ্ছেন এবং পেমেন্ট স্ট্যাটাস ট্র্যাক করুন।
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className='text-center bg-white rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl anim-scale delay-200'>
                            <div className='flex justify-center mb-6'>
                                <div className='w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 text-pink-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-lg font-bold text-gray-900 mb-3'>SMS মার্কেটিং</h3>
                            <p className='text-green-600 text-sm leading-relaxed'>
                                নতুন প্রোডাক্ট লঞ্চ, অফার, ও ওয়ারেন্টি নোটিফিকেশন পাঠিয়ে কাস্টমার ধরে রাখুন।
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className='text-center bg-white rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl anim-scale delay-300'>
                            <div className='flex justify-center mb-6'>
                                <div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 text-orange-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-lg font-bold text-gray-900 mb-3'>অনলাইন ক্যাটালগ</h3>
                            <p className='text-green-600 text-sm leading-relaxed'>
                                আপনার সব প্রোডাক্ট ছবি সহ অনলাইনে শেয়ার করুন এবং অনলাইন অর্ডার নিন।
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className='text-center bg-white rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl anim-scale delay-400'>
                            <div className='flex justify-center mb-6'>
                                <div className='w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 text-cyan-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-lg font-bold text-gray-900 mb-3'>প্রফেশনাল কোটেশন</h3>
                            <p className='text-green-600 text-sm leading-relaxed'>
                                প্রোডাক্ট স্পেসিফিকেশন সহ প্রফেশনাল কোটেশন ও ইনভয়েস তৈরি করুন।
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Electronic;
