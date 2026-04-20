import React, { useEffect } from 'react';
;
import { Link } from 'react-router-dom';
import photo from '../../assets/Busniess/hardware.jpeg'
import { useSettings } from '../../context/SettingsContext'

const Hardware = () => {
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
                <div className='md:flex justify-between items-center gap-8 py-12'>
                    <div className='flex-1 space-y-6'>
                        <h1 className='text-3xl md:text-5xl font-bold text-gray-900 leading-tight anim-fade-up'>
                            <span className='text-green-600'>আপনার হার্ডওয়্যার দোকানের</span> ১০০% সঠিক হিসাব + বাড়তি আয়ের স্মার্ট সমাধান
                        </h1>
                        <p className='text-gray-700 text-lg leading-relaxed anim-fade-up delay-100'>
                            বাকি, স্টক, বিক্রি-ক্রয় ও খরচ — সবকিছু একসাথে রাখুন ডিজিটালি। টুলস থেকে বিল্ডিং ম্যাটেরিয়াল সব সামলান সহজে এবং আয় বাড়ান।
                        </p>
                        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 anim-fade-up delay-200'>
                            <a href={downloadUrl} download className='bg-green-600 hover:bg-green-700 transition-colors duration-300 py-3 px-8 rounded-lg text-white font-semibold shadow-md hover:shadow-lg w-full sm:w-auto text-center'>
                                এখনই ডাউনলোড করুন
                            </a>
                            <Link to='/support' className='w-full sm:w-auto'>
                                <button className='py-3 px-8 border-2 border-gray-400 hover:border-gray-600 rounded-lg font-semibold text-gray-800 hover:bg-white transition-all duration-300 w-full text-center'>
                                    আরো জানতে যোগাযোগ করুন
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex-1 mt-8 md:mt-0 anim-scale delay-300'>
                        <Image src={photo} alt="Hardware Store Management" className='rounded-xl shadow-xl w-full' />
                    </div>
                </div>

                {/* Hardware Business Features */}
                <div className='py-20'>
                    {/* Header Section */}
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 anim-fade-up'>
                            হার্ডওয়্যার ব্যবসার জন্য <span className='text-green-600'>হালখাতাতে যা থাকছে</span>
                        </h2>
                        <p className='text-gray-700 text-lg mt-4 max-w-3xl mx-auto anim-fade-up delay-100'>
                            শক্তিশালী হিসাব, মজবুত ব্যবসা — আপনার হার্ডওয়্যার দোকানকে আরো সাজানো ও লাভজনক করুন।
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {/* Card 1 */}
                        <div className='bg-white rounded-2xl shadow-md p-8 hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-green-400 group anim-fade-up delay-200'>
                            <div className='flex justify-center mb-6'>
                                <div className='w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 text-orange-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-xl font-bold text-center text-gray-900 mb-4 leading-snug'>
                                সব প্রোডাক্ট ও স্টক থাকবে গোছানো
                            </h3>
                            <p className='text-gray-700 text-center mb-6 leading-relaxed'>
                                সিমেন্ট, রড, টুলস, পেইন্ট সব প্রোডাক্টের স্টক আলাদা রাখুন। কোনটা শেষ হলে তাৎক্ষণিক নোটিফিকেশন পান।
                            </p>
                            <ul className='space-y-3'>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>প্রোডাক্ট ক্যাটাগরি ভিত্তিক স্টক</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>রিয়েল-টাইম ইনভেন্টরি ট্র্যাকিং</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>বাকি হিসাব ও SMS রিমাইন্ডার</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>স্টক লো হওয়ার অ্যালার্ট</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className='bg-white rounded-2xl shadow-md p-8 hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-green-400 group anim-fade-up delay-300'>
                            <div className='flex justify-center mb-6'>
                                <div className='w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 text-blue-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-xl font-bold text-center text-gray-900 mb-4 leading-snug'>
                                কন্ট্রাক্টর ও কাস্টমারের হিসাব সহজে
                            </h3>
                            <p className='text-gray-700 text-center mb-6 leading-relaxed'>
                                কোন কন্ট্রাক্টর বা প্রজেক্টে কত মাল গেছে, কত বাকি আছে সব রিপোর্ট এক জায়গায় দেখুন।
                            </p>
                            <ul className='space-y-3'>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>কাস্টমার ভিত্তিক বিক্রি রিপোর্ট</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>লাভ/লোকসান বিশ্লেষণ</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>প্রজেক্ট ভিত্তিক হিসাব</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>মাসিক ও দৈনিক রিপোর্ট</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className='bg-white rounded-2xl shadow-md p-8 hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-green-400 group anim-fade-up delay-400'>
                            <div className='flex justify-center mb-6'>
                                <div className='w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 text-teal-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-xl font-bold text-center text-gray-900 mb-4 leading-snug'>
                                বাড়তি আয় ও ডিজিটাল সুবিধা
                            </h3>
                            <p className='text-gray-700 text-center mb-6 leading-relaxed'>
                                SMS মার্কেটিং, অনলাইন অর্ডার ও কমিশন ভিত্তিক সেবা দিয়ে আরো আয় বাড়ান।
                            </p>
                            <ul className='space-y-3'>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>অনলাইন প্রোডাক্ট ক্যাটালগ</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>SMS মার্কেটিং ক্যাম্পেইন</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>কমিশন ভিত্তিক সেবা</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className='font-medium'>ডিজিটাল পেমেন্ট সুবিধা</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Hardware Problems & Solutions */}
                <div className='py-20'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl'>
                        {/* Problems Column */}
                        <div className='bg-gradient-to-br from-red-50 to-red-100 p-10 md:p-12 anim-fade-left'>
                            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-red-700 mb-10'>
                                হার্ডওয়্যার ব্যবসায় এই সমস্যা?
                            </h2>
                            <div className='space-y-7'>
                                {/* Problem 1 */}
                                <div className='flex gap-4 bg-white/50 p-4 rounded-lg'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-7 h-7 text-red-500 mt-1' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold text-red-700 mb-2'>অসংখ্য আইটেমের স্টক গুলিয়ে যায়</h3>
                                        <p className='text-gray-700 leading-relaxed'>সিমেন্ট, রড, টুলস, পেইন্ট সব মিলে হাজারো আইটেম। কোনটার কত স্টক তা ট্র্যাক করা কঠিন হয়।</p>
                                    </div>
                                </div>

                                {/* Problem 2 */}
                                <div className='flex gap-4 bg-white/50 p-4 rounded-lg'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-7 h-7 text-red-500 mt-1' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold text-red-700 mb-2'>কন্ট্রাক্টরদের বাকির হিসাব জটিল</h3>
                                        <p className='text-gray-700 leading-relaxed'>প্রজেক্ট ভিত্তিক বাকি হিসাব রাখা এবং মেলানো অনেক সময়সাপেক্ষ ও জটিল।</p>
                                    </div>
                                </div>

                                {/* Problem 3 */}
                                <div className='flex gap-4 bg-white/50 p-4 rounded-lg'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-7 h-7 text-red-500 mt-1' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold text-red-700 mb-2'>দামের পরিবর্তন মনে রাখা কঠিন</h3>
                                        <p className='text-gray-700 leading-relaxed'>বাজার অনুযায়ী দাম বদলায়। সব প্রোডাক্টের আপডেট দাম মনে রাখা সম্ভব না।</p>
                                    </div>
                                </div>

                                {/* Problem 4 */}
                                <div className='flex gap-4 bg-white/50 p-4 rounded-lg'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-7 h-7 text-red-500 mt-1' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold text-red-700 mb-2'>সঠিক লাভ-ক্ষতি বোঝা যায় না</h3>
                                        <p className='text-gray-700 leading-relaxed'>কোন প্রোডাক্ট বা কাস্টমার থেকে আসল লাভ হচ্ছে তা স্পষ্ট না হওয়ায় সিদ্ধান্ত নিতে সমস্যা।</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Solutions Column */}
                        <div className='bg-gradient-to-br from-green-50 to-green-100 p-10 md:p-12 anim-fade-right'>
                            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-10'>
                                হালখাতার স্মার্ট সলিউশন!
                            </h2>
                            <div className='space-y-7'>
                                {/* Solution 1 */}
                                <div className='flex gap-4 bg-white/50 p-4 rounded-lg'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-7 h-7 text-green-600 mt-1' fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold text-green-800 mb-2'>ক্যাটাগরি ভিত্তিক স্মার্ট স্টক ম্যানেজমেন্ট</h3>
                                        <p className='text-gray-700 leading-relaxed'>প্রতিটি ক্যাটাগরি আলাদা করে ট্র্যাক করুন। কোনটা শেষ হলে অটো নোটিফিকেশন পান এবং সময়মত অর্ডার করুন।</p>
                                    </div>
                                </div>

                                {/* Solution 2 */}
                                <div className='flex gap-4 bg-white/50 p-4 rounded-lg'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-7 h-7 text-green-600 mt-1' fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold text-green-800 mb-2'>কাস্টমার ও প্রজেক্ট ভিত্তিক হিসাব</h3>
                                        <p className='text-gray-700 leading-relaxed'>প্রতিটি কন্ট্রাক্টর বা প্রজেক্টের জন্য আলাদা হিসাব রাখুন এবং সহজে বাকি টাকা আদায় করুন।</p>
                                    </div>
                                </div>

                                {/* Solution 3 */}
                                <div className='flex gap-4 bg-white/50 p-4 rounded-lg'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-7 h-7 text-green-600 mt-1' fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold text-green-800 mb-2'>দাম আপডেট সহজ ও দ্রুত</h3>
                                        <p className='text-gray-700 leading-relaxed'>বাজার দর পরিবর্তন হলে এক ক্লিকে সব প্রোডাক্টের দাম আপডেট করুন। পুরাতন দামের রেকর্ড থাকবে।</p>
                                    </div>
                                </div>

                                {/* Solution 4 */}
                                <div className='flex gap-4 bg-white/50 p-4 rounded-lg'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-7 h-7 text-green-600 mt-1' fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-bold text-green-800 mb-2'>বিস্তারিত লাভ-লোকসান রিপোর্ট</h3>
                                        <p className='text-gray-700 leading-relaxed'>কোন প্রোডাক্ট বা কাস্টমার থেকে কত লাভ হচ্ছে সব রিপোর্টে দেখুন এবং সঠিক সিদ্ধান্ত নিন।</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hardware Additional Features */}
                <div className='py-20 pb-24'>
                    {/* Header */}
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 anim-fade-up'>
                            আরও যে <span className='text-green-600'>স্মার্ট ফিচার</span> পাবেন
                        </h2>
                    </div>

                    {/* Feature Cards */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {/* Feature 1 */}
                        <div className='text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 anim-scale delay-100'>
                            <div className='flex justify-center mb-5'>
                                <div className='w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center shadow-sm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 text-orange-500' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-xl font-bold text-gray-900 mb-3 leading-snug'>প্রোডাক্ট ও সাপ্লায়ার ম্যানেজমেন্ট</h3>
                            <p className='text-gray-600 text-sm leading-relaxed'>
                                প্রতিটি প্রোডাক্ট ও সাপ্লায়ারের বিস্তারিত তথ্য, দাম ও হিসাব এক জায়গায় রাখুন।
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className='text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 anim-scale delay-200'>
                            <div className='flex justify-center mb-5'>
                                <div className='w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center shadow-sm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 text-blue-500' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-xl font-bold text-gray-900 mb-3 leading-snug'>SMS মার্কেটিং ও প্রমোশন</h3>
                            <p className='text-gray-600 text-sm leading-relaxed'>
                                নতুন প্রোডাক্ট, অফার বা প্রাইস আপডেট এর SMS পাঠিয়ে কাস্টমার ধরে রাখুন।
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className='text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 anim-scale delay-300'>
                            <div className='flex justify-center mb-5'>
                                <div className='w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center shadow-sm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 text-teal-500' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-xl font-bold text-gray-900 mb-3 leading-snug'>অনলাইন প্রোডাক্ট ক্যাটালগ</h3>
                            <p className='text-gray-600 text-sm leading-relaxed'>
                                নিজের ওয়েবসাইট বা অ্যাপে প্রোডাক্ট লিস্ট শেয়ার করুন এবং অনলাইন অর্ডার নিন।
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className='text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 anim-scale delay-400'>
                            <div className='flex justify-center mb-5'>
                                <div className='w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center shadow-sm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 text-purple-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-xl font-bold text-gray-900 mb-3 leading-snug'>প্রফেশনাল ইনভয়েস ও কোটেশন</h3>
                            <p className='text-gray-600 text-sm leading-relaxed'>
                                ব্র্যান্ডেড ইনভয়েস, কোটেশন ও চালান তৈরি করে প্রফেশনাল দেখান।
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Hardware;
