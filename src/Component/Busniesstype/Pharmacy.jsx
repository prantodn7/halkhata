import React, { useEffect } from 'react';
;
import Image from 'next/image';
import { Link } from '@/compat/react-router-dom';
import { FaBox, FaChartLine, FaUserMd, FaChartBar, FaSms, FaShoppingCart, FaUsersCog } from 'react-icons/fa';
import { IoCheckmarkCircle, IoCloseCircle } from 'react-icons/io5';
import photo from '../../assets/Busniess/pharmecy.jpeg'
import { useSettings } from '../../context/SettingsContext'

const Pharmacy = () => {
    const { downloadUrl } = useSettings();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const problems = [
        {
            title: "এক্সপায়ারি ওষুধ পড়ে থাকে",
            description: "সময়মতো এক্সপায়ার ডেট জানার সিস্টেম না থাকায় ওষুধ নষ্ট হয়ে যায়, ক্ষতি বাড়ে।"
        },
        {
            title: "কাগজে হিসাব রেখে ভুল হয়",
            description: "বিক্রি, বাকি বা খরচ মেলানো কঠিন হয়; ভুলের কারণে ব্যবসায় ক্ষতি হয়।"
        },
        {
            title: "লাভ-লোকসান বোঝা যায় না",
            description: "কোন ওষুধে বেশি লাভ হচ্ছে বা কোথায় খরচ বাড়ছে তা স্পষ্টভাবে বোঝা যায় না।"
        },
        {
            title: "আয় সীমিত",
            description: "শুধু ওষুধ বিক্রি থেকে আয় নির্ভর; বাড়তি ইনকামের সুযোগ সীমিত।"
        }
    ];

    const solutions = [
        {
            title: "এক্সপায়ারি অ্যালার্ট সিস্টেম",
            description: "এক্সপায়ারি ডেট মোবাইলে ট্র্যাক করুন এবং সময়মতো অ্যালার্ট পান — ওষুধ নষ্ট হওয়ার ঝুঁকি কমান।"
        },
        {
            title: "সঠিক হিসাব একজায়গায়",
            description: "বিক্রি, ক্রয়, বাকি এবং খরচের হিসাব মোবাইলে সহজে রাখুন — ১০০% সঠিক হিসাব নিশ্চিত করুন।"
        },
        {
            title: "লাভ-লোকসান বিশ্লেষণ সহজে বুঝুন",
            description: "প্রতিটি পণ্যের লাভ, খরচ ও রিপোর্ট দেখুন দিনে-দিনে — সিদ্ধান্ত নিন তথ্য দেখে।"
        },
        {
            title: "বাড়তি আয়ের সুযোগ",
            description: "টপআপ, বিল পেমেন্ট, অনলাইন ডাক্তার বুকিং এবং বাড়তি পুঁজি ছাড়াই প্রয়োজনীয় ওষুধ বিক্রির মাধ্যমে আয় বাড়ান।"
        }
    ];

    const features = [
        {
            icon: <FaBox className="text-2xl text-orange-500" />,
            iconBg: "bg-orange-100",
            title: "এক্সপায়ারি ও স্টক এখন থাকবে ১০০% কন্ট্রোলে",
            description: "ফার্মেসিতে কোন ওষুধ কবে শেষ হচ্ছে, কোন পণ্য স্টকে শেষ হয়ে যাচ্ছে—সব আগে থেকেই জানবেন। ফলে বিক্রি মিস বা এক্সপায়ারি ওষুধের ক্ষতি কমবে।",
            checklist: [
                "এক্সপায়ারি ডেট ট্র্যাক",
                "অটো অ্যালার্ট",
                "রিয়েল-টাইম স্টক হিসাব",
                "স্টক ফিনিশ অ্যালার্ট"
            ]
        },
        {
            icon: <FaChartLine className="text-2xl text-teal-500" />,
            iconBg: "bg-teal-100",
            title: "লাভ-লোকসান ও খরচ থাকবে স্পষ্ট বিশ্লেষণে",
            description: "কোন ওষুধ বা ক্যাটাগরি থেকে বেশি লাভ আসছে, কোথায় খরচ হচ্ছে—সব রিপোর্টে পাবেন। সহজ হবে সিদ্ধান্ত নেওয়া, বাড়বে আয়।",
            checklist: [
                "বিক্রি ও খরচ রিপোর্ট",
                "লাভ/লোকসান বিশ্লেষণ",
                "মাসিক ও দৈনিক রিপোর্ট",
                "ক্যাটাগরি ও ব্র্যান্ডভিত্তিক বিশ্লেষণ"
            ]
        },
        {
            icon: <FaUserMd className="text-2xl text-green-500" />,
            iconBg: "bg-green-100",
            title: "বাড়তি আয়ের সুযোগ, দোকানেই অনলাইন ডাক্তার সার্ভিস",
            titleHighlight: true,
            description: "অনলাইন ডাক্তারের দেখানো ফিচার থেকে বাড়তি কমিশন ইনকাম, দেশি-বিদেশি ওষুধ বিক্রি ও সরবরাহ করুন কোনো রকম বাড়তি পুঁজি ছাড়া। যে ফিচারগুলো এই সুবিধা দেবে:",
            checklist: [
                "অনলাইনে ব্যবসা বাড়ানোর সুযোগ",
                "বিভিন্ন নাম্বার কমিশনে ভিত্তিক টপআপ সুবিধা",
                "অনলাইন ডাক্তার বুকিং (নতুন)",
                "দেশি-বিদেশি ওষুধ বিক্রি ও সরবরাহ সুবিধা (কোনো বাড়তি পুঁজি ছাড়া)"
            ]
        }
    ];

    const smartFeatures = [
        {
            icon: <FaChartBar className="text-2xl text-purple-500" />,
            iconBg: "bg-purple-100",
            title: "ব্যবসার নিয়মিত হিসাব রাখুন",
            description: "দিন, সপ্তাহ, মাস ধরে কেনা-বেচা ও খরচের বিস্তারিত হিসাব পেয়ে যান, ব্যবসার পারফরম্যান্স ভালোভাবে বুঝতে পারেন।"
        },
        {
            icon: <FaSms className="text-2xl text-teal-500" />,
            iconBg: "bg-teal-100",
            title: "এসএমএস মার্কেটিং দিয়ে প্রচার বাড়ান",
            description: "কাস্টমারদের কাছে অফার বা মেডিসিন রিমাইন্ডার পাঠিয়ে বিক্রি বাড়ান"
        },
        {
            icon: <FaShoppingCart className="text-2xl text-red-500" />,
            iconBg: "bg-red-100",
            title: "ব্যবসাকে ডিজিটালি উপস্থাপন করুন",
            description: "আপনার ফার্মেসির নিজস্ব অ্যাপ/ওয়েবসাইট তৈরি করে আধুনিক বাজারে প্রবেশ করুন"
        },
        {
            icon: <FaUsersCog className="text-2xl text-gray-500" />,
            iconBg: "bg-gray-100",
            title: "অ্যাক্সেস ম্যানেজমেন্ট",
            description: "আপনি ঠিক করবেন কে কী দেখতে পারবে বা কোন ফিচার ব্যবহার করতে পারবে"
        }
    ];

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
                            <span className='text-green-600'>আপনার ফার্মেসির জন্য ১০০%</span> সঠিক হিসাব ও বাড়তি আয়ের স্মার্ট সমাধান
                        </h1>
                        <p className='text-gray-700 text-lg leading-relaxed anim-fade-up delay-100'>
                            বিক্রি-ক্রয়, স্টক, এক্সপায়ারি অ্যালার্ট, খরচ — সবকিছু একসাথে মোবাইলে। হিসাবের ভুল নয়, বরং আয় বাড়ান — SMS রিমাইন্ডার, কমিশন ভিত্তিক সার্ভিস, ও অনলাইন ডাক্তার বুকিং সার্ভিস থেকে।
                        </p>
                        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 anim-fade-up delay-200'>
                            <a href={downloadUrl} download className='bg-green-600 hover:bg-green-600 transition-colors duration-300 py-3 px-8 rounded-lg text-white font-semibold shadow-md hover:shadow-lg w-full sm:w-auto text-center'>
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
                        <Image src={photo} alt="Pharmacy Management" className='rounded-xl shadow-xl w-full h-auto' priority sizes="(min-width: 768px) 50vw, 100vw" />
                    </div>
                </div>

                {/* Pharmacy Features Section */}
                <div className='py-20'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 anim-fade-up'>
                            ফার্মেসি ব্যবসার জন্য <span className='text-green-600'>হালখাতাতে যা থাকছে</span>
                        </h2>
                        <p className='text-gray-700 text-lg mt-4 max-w-3xl mx-auto anim-fade-up delay-100'>ব্যবসায় লাভ, গুছানো হিসাব আর বাড়তি আয়ের সুযোগ — সব এক অ্যাপে</p>
                    </div>

                    {/* Feature Cards */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {features.map((feature, index) => (
                            <div key={index} className={`border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-green-400 transition-all duration-300 bg-white group anim-fade-up ${index === 0 ? 'delay-200' : index === 1 ? 'delay-300' : 'delay-400'}`}>
                                {/* Icon */}
                                <div className='flex justify-center mb-6'>
                                    <div className={`${feature.iconBg} w-20 h-20 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                        {feature.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className={`text-xl font-bold text-center mb-4 leading-snug ${feature.titleHighlight ? 'text-green-600' : 'text-gray-900'}`}>
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className='text-gray-700 text-center mb-6 text-sm leading-relaxed'>
                                    {feature.description}
                                </p>

                                {/* Checklist */}
                                <ul className='space-y-3'>
                                    {feature.checklist.map((item, idx) => (
                                        <li key={idx} className='flex items-start gap-3'>
                                            <IoCheckmarkCircle className='text-green-600 mt-0.5 flex-shrink-0 text-lg' />
                                            <span className='text-gray-800 text-sm font-medium'>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Pharmacy Business Problems & Solutions Section */}
                <div className='py-20'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-xl'>
                        {/* Problems Column */}
                        <div className='bg-gradient-to-br from-red-50 to-red-100 p-10 md:p-12 anim-fade-left'>
                            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-red-700 mb-10'>
                                ফার্মেসি ব্যবসায় এই সমস্যা?
                            </h2>
                            <ul className='space-y-7'>
                                {problems.map((problem, index) => (
                                    <li key={index} className='flex items-start gap-4 bg-white/50 p-4 rounded-lg'>
                                        <IoCloseCircle className='text-red-500 text-2xl mt-1 flex-shrink-0' />
                                        <div>
                                            <h3 className='font-bold text-red-700 text-lg mb-2'>{problem.title}</h3>
                                            <p className='text-gray-700 text-sm leading-relaxed'>{problem.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Solutions Column */}
                        <div className='bg-gradient-to-br from-green-50 to-green-100 p-10 md:p-12 anim-fade-right'>
                            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-green-700 mb-10'>
                                হালখাতার স্মার্ট সলিউশন!
                            </h2>
                            <ul className='space-y-7'>
                                {solutions.map((solution, index) => (
                                    <li key={index} className='flex items-start gap-4 bg-white/50 p-4 rounded-lg'>
                                        <IoCheckmarkCircle className='text-green-600 text-2xl mt-1 flex-shrink-0' />
                                        <div>
                                            <h3 className='font-bold text-green-800 text-lg mb-2'>{solution.title}</h3>
                                            <p className='text-gray-700 text-sm leading-relaxed'>{solution.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Pharmacy Smart Features Section */}
                <div className='py-20 pb-24'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 anim-fade-up'>
                            আরও যে <span className='text-green-600'>স্মার্ট ফিচার</span> পাবেন
                        </h2>
                    </div>

                    {/* Smart Feature Cards */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {smartFeatures.map((feature, index) => (
                            <div key={index} className={`text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 anim-scale ${index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : index === 2 ? 'delay-300' : 'delay-400'}`}>
                                {/* Icon */}
                                <div className='flex justify-center mb-5'>
                                    <div className={`${feature.iconBg} w-20 h-20 rounded-full flex items-center justify-center shadow-sm`}>
                                        {feature.icon}
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className='text-xl font-bold text-gray-900 mb-3 leading-snug'>
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className='text-gray-600 text-sm leading-relaxed'>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Pharmacy;
