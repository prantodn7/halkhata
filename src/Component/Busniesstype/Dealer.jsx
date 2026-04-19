import React, { useEffect } from 'react';
import Image from 'next/image';
import { Link } from 'react-router-dom';
import photo from '../../assets/Busniess/dealer.jpeg'
import { useSettings } from '../../context/SettingsContext'

const Dealer = () => {
    const { downloadUrl } = useSettings();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='bg-green-50 min-h-screen'>
            <style>{`
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(50px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInLeft {
                    0% { opacity: 0; transform: translateX(-50px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes fadeInRight {
                    0% { opacity: 0; transform: translateX(50px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes scaleIn {
                    0% { opacity: 0; transform: scale(0.8); }
                    100% { opacity: 1; transform: scale(1); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                .anim-fade-up { animation: fadeInUp 1s ease-out forwards; }
                .anim-fade-left { animation: fadeInLeft 1s ease-out forwards; }
                .anim-fade-right { animation: fadeInRight 1s ease-out forwards; }
                .anim-scale { animation: scaleIn 0.8s ease-out forwards; }
                .anim-float { animation: float 3s ease-in-out infinite; }
                .delay-100 { animation-delay: 0.1s; opacity: 0; }
                .delay-200 { animation-delay: 0.2s; opacity: 0; }
                .delay-300 { animation-delay: 0.3s; opacity: 0; }
                .delay-400 { animation-delay: 0.4s; opacity: 0; }
                .delay-500 { animation-delay: 0.5s; opacity: 0; }
                .delay-600 { animation-delay: 0.6s; opacity: 0; }
            `}</style>
            <div className='max-w-[1380px] mx-auto px-5 pt-10 pb-16 md:px-15'>
                {/* Hero Section */}
                <div className='md:flex justify-center items-center gap-10 p-8 md:p-12 mb-16'>
                    <div className='py-6 space-y-5 flex-1 anim-fade-left'>
                        <h2 className='text-3xl md:text-5xl font-bold text-[#111827] leading-tight'>
                            <span className='text-green-600'>আপনার মুদি দোকানের</span> ১০০% সঠিক হিসাব + বাড়তি আয়ের স্মার্ট সমাধান
                        </h2>
                        <p className='text-gray-700 text-lg leading-relaxed'>বাকি, স্টক, বিক্রি-ক্রয় ও খরচ — সবকিছু একসাথে রাখুন ডিজিটালি। হিসাব মিলাতে সময় নষ্ট নয়, বরং আয় বাড়ান SMS ও কমিশন বেইজ TOPUP সহ আরো সুবিধা।</p>
                        <div className='flex flex-col md:flex-row items-start md:items-center gap-4 pt-4'>
                            <a href={downloadUrl} download className='bg-green-600 hover:bg-green-700 transition-all duration-300 py-3 px-8 rounded-lg text-white font-semibold shadow-md hover:shadow-lg transform hover:scale-105 w-full md:w-auto anim-scale delay-200'>
                                এখনই ডাউনলোড করুন
                            </a>
                            <Link to='/support' className='w-full md:w-auto'>
                                <button className='py-3 px-8 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 rounded-lg font-semibold w-full anim-scale delay-300'>
                                    আরো জানতে যোগাযোগ করুন
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='flex-1 mt-8 md:mt-0 anim-fade-right delay-200'>
                        <Image src={photo} alt="Dealer Business" className='rounded-xl shadow-md w-full object-cover' />
                    </div>
                </div>

                {/* Grocery business features */}
                <div className='py-16'>
                    {/* Header Section */}
                    <div className='text-center mb-12 anim-fade-up delay-200'>
                        <h2 className='text-3xl md:text-4xl font-bold text-[#111827]'>
                            মুদি ব্যবসার জন্য <span className='text-green-600'>হালখাতাতে যা থাকছে</span>
                        </h2>
                        <p className='text-gray-700 mt-4 max-w-3xl mx-auto text-lg'>
                            হিসাবে ভুল নয়, ব্যবসায় লাভ নিশ্চিত – সব কিছু এখন হাতে রেখে ব্যবসা বাড়ান সহজে।
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {/* Card 1 */}
                        <div className='bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 anim-fade-up delay-300'>
                            <div className='flex justify-center mb-6'>
                                <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 text-green-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4m0-10L4 7m8 4v10M4 7v10l8 4m0-10L4 7m8 4v10M4 7v10l8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-xl font-bold text-center text-[#111827] mb-4'>
                                সব পাওনা, লেনদেন ও স্টক থাকবে আপনার নজরদারিতে
                            </h3>
                            <p className='text-gray-600 text-center mb-6 leading-relaxed'>
                                কাস্টমারের বাকি টাকা আর ভুলে যাওয়ার ঝামেলা নেই, আর হঠাৎ করে পণ্য শেষ হয়ে বিক্রি মিস হওয়ারও ভয় নেই।
                            </p>
                            <ul className='space-y-3'>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5 flex-shrink-0' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>বাকি হিসাব দেখা</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5 flex-shrink-0' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>SMS রিমাইন্ডার পাঠানো</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5 flex-shrink-0' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>রিয়েল-টাইম স্টক হিসাব</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5 flex-shrink-0' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>স্টক শেষ হলে অ্যালার্ট</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className='bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 anim-fade-up delay-400'>
                            <div className='flex justify-center mb-6'>
                                <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 text-green-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-xl font-bold text-center text-[#111827] mb-4'>
                                লাভ-লোকসান ও খরচ থাকবে এদম স্পষ্ট
                            </h3>
                            <p className='text-gray-600 text-center mb-6 leading-relaxed'>
                                কোন পণ্য বা কাস্টমার বেশি লাভ এনে দিচ্ছে এবং কোথায় খরচ বাড়ছে, তা সহজেই বুঝে ব্যবসায়িক সিদ্ধান্ত নিন।
                            </p>
                            <ul className='space-y-3'>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5 flex-shrink-0' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>বিক্রি ও ক্রয় হিসাব</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5 flex-shrink-0' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>লাভ/লোকসান বিশ্লেষণ</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5 flex-shrink-0' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>কাস্টমার/পণ্যের ডিটেইলে রিপোর্ট</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5 flex-shrink-0' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>মাসিক ও দৈনিক খরচ রিপোর্ট</span>
                                </li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className='bg-white rounded-2xl  shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 anim-fade-up delay-500'>
                            <div className='flex justify-center mb-6'>
                                <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10 text-green-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-xl font-bold text-center text-[#111827] mb-4'>
                                দোকান থেকেই বাড়তি ইনকামের সুযোগ
                            </h3>
                            <p className='text-gray-600 text-center mb-6 leading-relaxed'>
                                মোবাইল রিচার্জ, বা অফার বিক্রি করেও বাড়তি আয় হবে। এছাড়াও পুঁজি বিহীন ব্যবসা বাড়ানোর সুযোগ
                            </p>
                            <ul className='space-y-3'>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5 flex-shrink-0' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>অনলাইনে ব্যবসা বাড়ানোর সুযোগ</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5 flex-shrink-0' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>বিভিন্ন নাম্বার কমিশনে ডিজিটাল টপআপ সুবিধা</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5 flex-shrink-0' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>দেশি-বিদেশি ইলেক্ট্রনিক্স প্রোডাক্ট বিক্রির সুযোগ (বিনা পুঁজিতে)</span>
                                </li>
                                <li className='flex items-center gap-3 text-green-700'>
                                    <svg className='w-5 h-5 flex-shrink-0' fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>কমিশন ভিত্তিক সার্ভিস বিক্রি</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Grocery problems & solutions */}
                <div className='py-16'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16'>
                        {/* Problems Column */}
                        <div className='bg-white rounded-2xl shadow-lg p-8 anim-fade-left delay-300'>
                            <h2 className='text-2xl md:text-3xl font-bold text-red-600 mb-8'>
                                মুদি ব্যবসায় এই সমস্যা?
                            </h2>
                            <div className='space-y-6'>
                                {/* Problem 1 */}
                                <div className='flex gap-4 p-4 bg-red-50 rounded-lg'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-6 h-6 text-red-500' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-[#111827] mb-1'>কাগজে হিসাব রাখলে হারিয়ে যায়</h3>
                                        <p className='text-gray-600 text-sm leading-relaxed'>দোকানের বাকি টাকার হিসাব মেলানো কঠিন হয়, ভুল হওয়ার সম্ভাবনা থাকে।</p>
                                    </div>
                                </div>

                                {/* Problem 2 */}
                                <div className='flex gap-4 p-4 bg-red-50 rounded-lg'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-6 h-6 text-red-500' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-[#111827] mb-1'>বাকি হিসাব ভুলে যাওয়া</h3>
                                        <p className='text-gray-600 text-sm leading-relaxed'>কে কত টাকা বাকি নিয়েছে তা লিখতে ভুলে যাচ্ছেন</p>
                                    </div>
                                </div>

                                {/* Problem 3 */}
                                <div className='flex gap-4 p-4 bg-red-50 rounded-lg'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-6 h-6 text-red-500' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-[#111827] mb-1'>স্টক শেষ হওয়ার খবর দেরিতে জানতে পারা</h3>
                                        <p className='text-gray-600 text-sm leading-relaxed'>স্টক শেষ হয়ে গেলে বুঝতে দেরি হওয়ার কারণে বিক্রি হাতছাড়া হয়।</p>
                                    </div>
                                </div>

                                {/* Problem 4 */}
                                <div className='flex gap-4 p-4 bg-red-50 rounded-lg'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-6 h-6 text-red-500' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-[#111827] mb-1'>খরচ কোথায় বাড়ছে বোঝা যায় না</h3>
                                        <p className='text-gray-600 text-sm leading-relaxed'>খরচের হিসাব ঠিকঠাক না থাকার কারণে লাভ কমে য় এবং অনাকাঙ্ক্ষিত খরচ বৃদ্ধি পায়।</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Solutions Column */}
                        <div className='bg-white rounded-2xl shadow-lg p-8 anim-fade-right delay-400'>
                            <h2 className='text-2xl md:text-3xl font-bold text-green-600 mb-8'>
                                হালখাতার স্মার্ট সলিউশন!
                            </h2>
                            <div className='space-y-6'>
                                {/* Solution 1 */}
                                <div className='flex gap-4 p-4 bg-green-50 rounded-lg'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-6 h-6 text-green-600' fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-[#111827] mb-1'>সঠিক হিসাব একজায়গায়</h3>
                                        <p className='text-gray-600 text-sm leading-relaxed'>সব পাওনা, বিক্রি, ক্রয় এবং খরচের হিসাব মোবাইলে সহজে পাওয়া যাবে।</p>
                                    </div>
                                </div>

                                {/* Solution 2 */}
                                <div className='flex gap-4 p-4 bg-green-50 rounded-lg'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-6 h-6 text-green-600' fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-[#111827] mb-1'>বাকি আদায় দ্রুত হবে</h3>
                                        <p className='text-gray-600 text-sm leading-relaxed'>SMS রিমাইন্ডার পাঠিয়ে বাকি টাকা দ্রুত আদায় করুন, ক্যাশ ফ্লো ঠিক রাখুন।</p>
                                    </div>
                                </div>

                                {/* Solution 3 */}
                                <div className='flex gap-4 p-4 bg-green-50 rounded-lg'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-6 h-6 text-green-600' fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-[#111827] mb-1'>স্টক ম্যানেজমেন্ট</h3>
                                        <p className='text-gray-600 text-sm leading-relaxed'>স্টক শেষ হতে যাওয়ার আগে অ্যালার্ট পাবেন, সময়তো অর্ডার করে বিক্রি বাড়ান।</p>
                                    </div>
                                </div>

                                {/* Solution 4 */}
                                <div className='flex gap-4 p-4 bg-green-50 rounded-lg'>
                                    <div className='flex-shrink-0'>
                                        <svg className='w-6 h-6 text-green-600' fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className='text-lg font-semibold text-[#111827] mb-1'>অতিরিক্ত আয়ের সুযোগ</h3>
                                        <p className='text-gray-600 text-sm leading-relaxed'>মোবাইল রিচার্জ, বিল পেমেন্ট ও লোকাল অফার বিক্রি করে মাসে ৫,০০,০০, দদ০০০ টাকা বাড়তি আয় করুন।</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional smart features */}
                <div className='py-16'>
                    {/* Header */}
                    <div className='text-center mb-12 anim-fade-up delay-400'>
                        <h2 className='text-3xl md:text-4xl font-bold text-[#111827]'>
                            আরও যে <span className='text-green-600'>স্মার্ট ফিচার</span> পাবেন
                        </h2>
                    </div>

                    {/* Feature Cards */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {/* Feature 1 */}
                        <div className='bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 anim-fade-up delay-100'>
                            <div className='flex justify-center mb-4'>
                                <div className='w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 text-purple-500' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-lg font-bold text-[#111827] mb-3'>ব্যবসার নিয়মিত হিসাব রাখুন</h3>
                            <p className='text-gray-600 text-sm leading-relaxed'>
                                দিন, সপ্তাহ, মাস ধরে কেনা-বেচা ও খরচের বিস্তারিত হিসাব পেয়ে যান, ব্যবসার পারফরম্যান্স ভালোভাবে বুঝতে পারেন।
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className='bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 anim-fade-up delay-200'>
                            <div className='flex justify-center mb-4'>
                                <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 text-blue-500' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-lg font-bold text-[#111827] mb-3'>এসএমএস মার্কেটিং দিয়ে প্রচার বাড়ান</h3>
                            <p className='text-gray-600 text-sm leading-relaxed'>
                                বাকি টাকা দায়ের পাশাপাশি কাস্টমারদের কাছে দোকানের প্রোমোশন পাঠিয়ে বিক্রি বাড়ান।
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className='bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 anim-fade-up delay-300'>
                            <div className='flex justify-center mb-4'>
                                <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 text-green-600' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-lg font-bold text-[#111827] mb-3'>ব্যবসাকে ডিজিটালি উপস্থাপন করুন</h3>
                            <p className='text-gray-600 text-sm leading-relaxed'>
                                সহজে অনলাইনে নিজের অ্যাপ ও ওয়েবসাইট তৈরি করে আধুনিক বাজারে পৌঁছান।
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className='bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300 anim-fade-up delay-400'>
                            <div className='flex justify-center mb-4'>
                                <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center'>
                                    <svg className='w-8 h-8 text-blue-600' fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </div>
                            </div>
                            <h3 className='text-lg font-bold text-[#111827] mb-3'>সোশ্যাল মিডিয়ায় শক্ত অবস্থান</h3>
                            <p className='text-gray-600 text-sm leading-relaxed'>
                                ফেসবুক পেজসহ অন্যান্য প্ল্যাটফর্মে ব্যবসার ব্র্যান্ড তৈরি করে কাস্টমারবেজ বাড়ান।
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dealer;
