import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    FaUserPlus,
    FaHandshake,
    FaWallet,
    FaChartLine,
    FaCheckCircle,
    FaChevronDown,
    FaChevronUp,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt
} from 'react-icons/fa';

const Growthpartner = () => {
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const features = [
        {
            id: 1,
            icon: <FaUserPlus />,
            gradient: 'from-indigo-500 to-purple-600',
            bgColor: 'bg-indigo-50',
            title: 'সহজে রেজিস্ট্রেশন করুন',
            description: 'যে কোনো সময়ে অনলাইনে সহজে রেজিস্ট্রেশন করে গ্রোথ পার্টনার হিসেবে যুক্ত হতে পারবেন। কোনো জটিলতা নেই — সম্পূর্ণ ফ্রি।'
        },
        {
            id: 2,
            icon: <FaWallet />,
            gradient: 'from-amber-500 to-orange-600',
            bgColor: 'bg-amber-50',
            title: 'উচ্চ কমিশন উপার্জনের সুযোগ',
            description: 'প্রতি হালখাতা সাবস্ক্রিপশনে সর্বোচ্চ ৮০% পর্যন্ত কমিশন পাবেন। নিয়মিত আয়ের সুযোগ।'
        },
        {
            id: 3,
            icon: <FaChartLine />,
            gradient: 'from-emerald-500 to-teal-600',
            bgColor: 'bg-emerald-50',
            title: 'দীর্ঘমেয়াদি আয়ের সুযোগ',
            description: 'একবার যুক্ত হওয়া গ্রাহকের সাবস্ক্রিপশন রিনিউ হলে সেখান থেকেও আয়ের সুযোগ পাবেন।'
        },
        {
            id: 4,
            icon: <FaHandshake />,
            gradient: 'from-rose-500 to-pink-600',
            bgColor: 'bg-rose-50',
            title: 'ক্যারিয়ার গড়ার সুযোগ',
            description: 'হালখাতা গ্রোথ পার্টনার প্রোগ্রামের মাধ্যমে আপনার দক্ষতা বৃদ্ধি করে ভবিষ্যতে বড় সুযোগ তৈরি করতে পারবেন।'
        }
    ];

    const steps = [
        {
            number: '০১',
            icon: <FaUserPlus />,
            title: 'রেজিস্ট্রেশন করুন',
            description: 'রেজিস্ট্রেশন করে যুক্ত হয়ে যান হালখাতা গ্রোথ পার্টনার প্রোগ্রামে',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            number: '০২',
            icon: <FaHandshake />,
            title: 'প্রোমোট করুন',
            description: 'আপনার এলাকার ছোট ব্যবসায়ীদের হালখাতা শেয়ার করুন—ব্যবসা বাড়াতে হালখাতা স্মার্ট টুলস ব্যবহার করে ও হালখাতা সাবস্ক্রিপশন লিংক উপস্থাপন করুন',
            gradient: 'from-amber-500 to-orange-500'
        },
        {
            number: '০৩',
            icon: <FaWallet />,
            title: 'আয় করুন',
            description: 'আপনাকে দেওয়া লিংকটি ব্যবহার করে হালখাতা সাবস্ক্রিপশন ক্রয় করলে আপনি পেয়ে যাবেন সাবস্ক্রিপশন মূল্যের ৮০% পর্যন্ত কমিশন!',
            gradient: 'from-emerald-500 to-teal-500'
        }
    ];

    const faqs = [
        {
            question: 'হিসাব যোগ পদ্ধতি হতে কি কোনো টাকা লাগে?',
            answer: 'না, হিসাব যোগ পদ্ধতি হওয়ার জন্য কোনো ধরনের টাকা বা নিবন্ধনের প্রয়োজন নেই। আপনার একাউন্টের নিবন্ধনের প্রক্রিয়াটি সম্পূর্ণ ফ্রি।'
        },
        {
            question: 'আমি কত কমিশন পাবো?',
            answer: 'আপনার বিক্রয় পরিমাণ অনুযায়ী আপনি ১০% থেকে শুরু করে সর্বোচ্চ ৩০% পর্যন্ত কমিশন পেতে পারেন। ব্র্যান্ড অনুযায়ী ভিন্ন ভিন্ন কমিশন হার হতে পারে।'
        },
        {
            question: 'আমি কীভাবে কাস্টমার রেফার করবো?',
            answer: 'আপনার নির্দিষ্ট রেফারেল লিংক ব্যবহার করে আপনি কাস্টমার রেফার করতে পারবেন। কোনো কাস্টমার আপনার রেফার লিংকে ক্লিক করে সাইন আপ করলে সেই কাস্টমার আপনার একাউন্টের সাথে যুক্ত হবে।'
        },
        {
            question: 'আমি কীভাবে বুঝবো আমার রেফার করা কাস্টমার অ্যাপ ব্যবহার করছে কিনা?',
            answer: 'আপনার "ড্যাশবোর্ড" বা "স্ট্যাটাস" অপশনে গিয়ে আপনি দেখতে পারবেন আপনার রেফার করা কাস্টমার সক্রিয় আছে কিনা। এছাড়া নিয়মিত রিপোর্টের মাধ্যমে আপনাকে জানানো হবে।'
        }
    ];

    return (
        <>
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
        <div className="relative bg-gradient-to-b from-emerald-50 via-green-50 to-teal-50 min-h-screen overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-green-200/40 to-emerald-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-teal-200/40 to-cyan-200/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-amber-200/30 to-orange-200/20 rounded-full blur-3xl translate-y-1/3"></div>

            {/* Floating Shapes */}
            <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-green-300/40 to-emerald-400/30 rounded-3xl rotate-12 backdrop-blur-sm anim-float"></div>
            <div className="absolute top-40 left-32 w-16 h-16 bg-gradient-to-br from-teal-300/40 to-cyan-400/30 rounded-2xl -rotate-6 backdrop-blur-sm anim-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-32 right-40 w-12 h-12 bg-gradient-to-br from-amber-300/40 to-orange-400/30 rounded-full backdrop-blur-sm anim-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-60 left-20 w-14 h-14 bg-gradient-to-br from-emerald-300/40 to-green-400/30 rounded-lg rotate-12 backdrop-blur-sm anim-float" style={{ animationDelay: '1.5s' }}></div>

            <div className="relative max-w-[1380px] mx-auto px-5 md:px-10 lg:px-16 py-12 md:py-16">
                {/* Hero Section */}
                <div className="relative mb-20 md:mb-28">
                    <div className="md:flex items-center gap-12 lg:gap-16">
                        {/* Left Content */}
                        <div className="flex-1 space-y-8">
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm border border-emerald-100 anim-fade-up">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                আপনার আয় শুরু করুন আজই
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight anim-fade-up delay-100">
                                প্রথম ইনকাম, প্রথম অভিজ্ঞতা — দুটোই একসাথে শুরু হোক
                                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mt-2">
                                    হালখাতা গ্রোথ পার্টনার হিসাবে
                                </span>
                            </h1>

                            <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-xl anim-fade-up delay-200">
                                আমাদের অ্যাফিলিয়েট প্রোগ্রামে যোগাযোগ করুন এবং প্রতিটি সফল রেফারেলের জন্য ১৫%-২০% কমিশন অর্জন করুন।
                            </p>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 anim-fade-up delay-300">
                                <button className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 py-4 px-8 lg:px-10 rounded-xl text-white font-semibold shadow-lg shadow-emerald-900/20 hover:shadow-xl hover:shadow-emerald-900/30 hover:-translate-y-1 w-full sm:w-auto text-center flex items-center justify-center gap-2">
                                    <FaHandshake className="text-lg" />
                                    পার্টনার হয়ে যান
                                </button>
                                <Link to="/support" className="w-full sm:w-auto">
                                    <button className="group py-4 px-8 lg:px-10 border-2 border-emerald-200 hover:border-emerald-400 rounded-xl font-semibold text-gray-800 hover:bg-white transition-all duration-300 w-full text-center shadow-sm hover:shadow-md hover:-translate-y-1">
                                        আরো জানতে যোগাযোগ করুন
                                    </button>
                                </Link>
                            </div>

                          
                        </div>

                        {/* Right Content - Hero Card */}
                        <div className="flex-1 mt-12 md:mt-0">
                            <div className="relative anim-scale delay-200">
                                <div className="absolute -inset-4 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl blur-2xl opacity-20"></div>
                                <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-emerald-900/10">
                                    <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-center mb-6">
                                        <div className="text-5xl md:text-6xl mb-3">🚀</div>
                                        <h3 className="text-white text-xl font-bold">আজই শুরু করুন</h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl">
                                            <FaCheckCircle className="text-emerald-500 text-xl flex-shrink-0" />
                                            <span className="text-gray-700">কোনো বিনিয়োগ ছাড়া আয় শুরু</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl">
                                            <FaCheckCircle className="text-emerald-500 text-xl flex-shrink-0" />
                                            <span className="text-gray-700">নিজের কাজ সময় মত করুন</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl">
                                            <FaCheckCircle className="text-emerald-500 text-xl flex-shrink-0" />
                                            <span className="text-gray-700">দীর্ঘমেয়াদি প্যাসিভ ইনকাম</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What is Growth Partner Section */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="relative inline-block anim-scale delay-100">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur-lg opacity-30"></div>
                        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl px-8 md:px-12 py-8 md:py-10 shadow-xl">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                গ্রোথ পার্টনার প্রোগ্রাম কি?
                            </h2>
                            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                                পড়াশোনা বা কাজের ফাঁকে আপনার এলাকার ছোট ব্যবসাগুলোকে ডিজিটাল হতে সাহায্য করুন — আর প্রতিটি সাবস্ক্রিপশন থেকে নিশ্চিত আয় করুন।
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3 Steps Section */}
                <div className="mb-16 md:mb-24">
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm border border-emerald-100 anim-fade-up">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                            সহজ প্রক্রিয়া
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 anim-fade-up delay-100">
                            সহজ ৩টি ধাপে শুরু করুন!
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto anim-fade-up delay-200">
                            আমরা বিভিন্ন ধরনের পণ্য তৈরি করেছি যা আপনার ব্যবসাকে সাহায্য করবে। আমরা সেরা থেকে আরও সেরা হতে সর্বদা চেষ্টা করি।
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative group anim-scale ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : 'delay-300'}`}
                            >
                                {/* Connector Line */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-16 left-full w-8 border-t-2 border-dashed border-emerald-300"></div>
                                )}

                                <div className="relative h-[300px] bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-emerald-900/5 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 hover:-translate-y-2 border border-emerald-100/50">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <span className="text-3xl text-white">{step.icon}</span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits Grid */}
                <div className="mb-16 md:mb-24">
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm border border-emerald-100 anim-fade-up">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                            কেন যোগ দেবেন?
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 anim-fade-up delay-100">
                            গ্রোথ পার্টনার হিসাবে সুবিধাসমূহ
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                className={`group bg-white/80 backdrop-blur-sm rounded-3xl p-7 border border-emerald-100/50 shadow-lg shadow-emerald-900/5 hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 hover:-translate-y-2 anim-scale ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : index === 2 ? 'delay-300' : 'delay-400'}`}
                            >
                                {/* Icon */}
                                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <span className="text-2xl text-white">{feature.icon}</span>
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-12 md:mb-16">
                    <div className="text-center mb-10 md:mb-12">
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm border border-emerald-100 anim-fade-up">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                            সহায়তা
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 anim-fade-up delay-100">
                            সর্বাধিক জিজ্ঞাসিত প্রশ্ন
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-emerald-900/5 border border-emerald-100/50 overflow-hidden transition-all duration-300 anim-fade-up ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : index === 2 ? 'delay-300' : 'delay-400'}`}
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-emerald-50/50 transition-colors"
                                >
                                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                    <span className="flex-shrink-0 text-emerald-600">
                                        {openFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                                    </span>
                                </button>
                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 pb-5' : 'max-h-0'}`}
                                >
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="relative mb-12">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-30"></div>
                    <div className="relative bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white anim-scale delay-200">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                            আজই শুরু করুন আপনার আয়ের যাত্রা
                        </h2>
                        <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                            রেজিস্ট্রেশন করে হালখাতা গ্রোথ পার্টনার হিসেবে যুক্ত হয়ে নিশ্চিত করুন আপনার আয়।
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="bg-white text-emerald-700 hover:bg-emerald-50 transition-colors duration-300 py-4 px-8 rounded-xl font-semibold shadow-lg w-full sm:w-auto">
                                এখনই রেজিস্ট্রার করুন
                            </button>
                            <Link to="/support" className="w-full sm:w-auto">
                                <button className="bg-transparent border-2 border-white/50 hover:bg-white/10 transition-colors duration-300 py-4 px-8 rounded-xl font-semibold w-full">
                                    যোগাযোগ করুন
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-emerald-900/5 border border-emerald-100/50 anim-scale delay-100">
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <FaPhone className="text-xl text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">ফোন</h3>
                        <p className="text-gray-600">+8809649 132 132</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-emerald-900/5 border border-emerald-100/50 anim-scale delay-200">
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <FaEnvelope className="text-xl text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">ইমেইল</h3>
                        <p className="text-gray-600">Halkhata.grow@gmail.com</p>
                    </div>
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg shadow-emerald-900/5 border border-emerald-100/50 anim-scale delay-300">
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <FaMapMarkerAlt className="text-xl text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">ঠিকানা</h3>
                        <p className="text-gray-600">মৌলভীবাজার, সিলেট, বাংলাদেশ</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Growthpartner;
