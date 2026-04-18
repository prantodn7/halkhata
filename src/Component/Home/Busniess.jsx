import React from 'react'
import Image from 'next/image'
import { Link } from '@/compat/react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { FiGrid } from 'react-icons/fi'
import { FadeIn } from '../Animated/AnimatedWrapper'
import { useLanguage } from '../../context/LanguageContext'
import phermecy from '../../assets/phermecy.png'
import grocery from '../../assets/Grocery.png'
import fasion from '../../assets/fasion.png'
import hardware from '../../assets/hardware.png'
import eletronic from '../../assets/electronic.png'
import deler from '../../assets/deler.png'

const businessTypes = [
    {
        id: 1,
        image: phermecy,
        title: 'Pharmacy',
        description: 'Shop for medicines, injections, syrups, first aid and healthcare products',
        link: '/pharmacy',
        gradient: 'from-emerald-500 to-teal-500',
        bgHover: 'hover:border-emerald-200'
    },
    {
        id: 2,
        image: grocery,
        title: 'Grocery',
        description: 'Manage your grocery store inventory, sales and daily transactions efficiently',
        link: '/grocery',
        gradient: 'from-green-500 to-emerald-500',
        bgHover: 'hover:border-green-200'
    },
    {
        id: 3,
        image: eletronic,
        title: 'Electronics',
        description: 'Track electronics inventory, warranties and customer purchases seamlessly',
        link: '/electronics',
        gradient: 'from-blue-500 to-cyan-500',
        bgHover: 'hover:border-blue-200'
    },
    {
        id: 4,
        image: deler,
        title: 'Dealer',
        description: 'Manage wholesale distribution, dealer networks and bulk transactions',
        link: '/dealer',
        gradient: 'from-amber-500 to-orange-500',
        bgHover: 'hover:border-amber-200'
    },
    {
        id: 5,
        image: hardware,
        title: 'Hardware',
        description: 'Track hardware supplies, tools and construction materials inventory',
        link: '/hardware',
        gradient: 'from-slate-500 to-gray-600',
        bgHover: 'hover:border-slate-200'
    },
    {
        id: 6,
        image: fasion,
        title: 'Fashion',
        description: 'Manage clothing, accessories and fashion retail with style',
        link: '/fashion',
        gradient: 'from-pink-500 to-rose-500',
        bgHover: 'hover:border-pink-200'
    }
];

const businessTypesban = [
    {
        id: 1,
        image: phermecy,
        title: 'ফার্মেসি',
        description: 'ওষুধ, ইনজেকশন, সিরাপ, ফার্স্ট এইড এবং স্বাস্থ্য সেবার পণ্যের দোকান',
        link: '/pharmacy',
        gradient: 'from-emerald-500 to-teal-500',
        bgHover: 'hover:border-emerald-200'
    },
    {
        id: 2,
        image: grocery,
        title: 'মুদি দোকান',
        description: 'আপনার মুদি দোকানের স্টক, বিক্রয় এবং দৈনিক লেনদেন দক্ষতার সাথে পরিচালনা করুন',
        link: '/grocery',
        gradient: 'from-green-500 to-emerald-500',
        bgHover: 'hover:border-green-200'
    },
    {
        id: 3,
        image: eletronic,
        title: 'ইলেকট্রনিক্স',
        description: 'ইলেকট্রনিক্স স্টক, ওয়ারেন্টি এবং গ্রাহকের কেনাকাটা ঝামেলাহীন ট্র্যাক করুন',
        link: '/electronics',
        gradient: 'from-blue-500 to-cyan-500',
        bgHover: 'hover:border-blue-200'
    },
    {
        id: 4,
        image: deler,
        title: 'ডিলার',
        description: 'পাইকারি বিতরণ, ডিলার নেটওয়ার্ক এবং পাইকারি লেনদেন পরিচালনা করুন',
        link: '/dealer',
        gradient: 'from-amber-500 to-orange-500',
        bgHover: 'hover:border-amber-200'
    },
    {
        id: 5,
        image: hardware,
        title: 'হার্ডওয়্যার',
        description: 'হার্ডওয়্যার সরবরাহ, টুলস এবং নির্মাণ সামগ্রীর স্টক ট্র্যাক করুন',
        link: '/hardware',
        gradient: 'from-slate-500 to-gray-600',
        bgHover: 'hover:border-slate-200'
    },
    {
        id: 6,
        image: fasion,
        title: 'ফ্যাশন',
        description: 'পোশাক, আনুষাঙ্গিক এবং ফ্যাশন খুচরা বিক্রয় স্টাইলের সাথে পরিচালনা করুন',
        link: '/fashion',
        gradient: 'from-pink-500 to-rose-500',
        bgHover: 'hover:border-pink-200'
    }
];

function Busniess() {
    const { language } = useLanguage();

    const businessData = language === 'bangla' ? businessTypesban : businessTypes;

    const texts = {
        brandName: language === 'bangla' ? 'হালখাতা' : 'Halkhata',
        businessCategories: language === 'bangla' ? 'ব্যবসার ধরন' : 'Business Categories',
        chooseYour: language === 'bangla' ? 'নির্বাচন করুন' : 'Choose your',
        businessType: language === 'bangla' ? 'ব্যবসার ধরন' : 'business type',
        thousandsOfBusinessmen: language === 'bangla' ? 'হাজার হাজার ব্যবসায়ী হালখাতা দিয়ে তাদের ব্যবসা এগিয়ে নিচ্ছেন' : 'Thousands of businessmen are advancing their businesses with Halkhata',
        learnMore: language === 'bangla' ? 'আরও জানুন' : 'Learn more',
        contactUs: language === 'bangla' ? 'কাস্টম সমাধানের জন্য যোগাযোগ করুন' : 'Contact Us for Custom Solution'
    };

    return (
        <section className='relative bg-gradient-to-b from-green-50 via-emerald-50/30 to-white overflow-hidden'>
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-green-100/50 to-emerald-100/30 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-teal-100/40 to-green-100/20 rounded-full blur-3xl translate-x-1/3"></div>
            <div className="absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-emerald-100/30 rounded-full blur-3xl translate-y-1/2"></div>

            {/* Floating shapes with subtle animations */}
            <div className="absolute top-20 right-20 w-16 h-16 bg-green-200/30 rounded-2xl rotate-12 animate-float"></div>
            <div className="absolute top-1/3 left-16 w-12 h-12 bg-emerald-200/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-40 right-1/4 w-10 h-10 bg-teal-200/30 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-green-200/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>

            <div className='relative max-w-[1380px] mx-auto px-5 md:px-10 lg:px-15 py-20 lg:py-28'>
                {/* Header */}
                <FadeIn>
                    <div className='text-center mb-16'>
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm border border-green-100 transition-smooth hover:bg-emerald-50">
                            <FiGrid className="text-emerald-500" />
                            {texts.businessCategories}
                        </div>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5'>
                            {texts.chooseYour}
                            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                {texts.businessType}
                            </span>
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                            {texts.thousandsOfBusinessmen.replace('Halkhata', texts.brandName)}
                        </p>
                    </div>
                </FadeIn>

                {/* Business Cards Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                    {businessData.map((business, index) => (
                        <div
                            key={business.id}
                            style={{
                                opacity: 0,
                                transform: 'translateY(30px)',
                                animation: `fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + index * 0.1}s forwards`
                            }}
                        >
                            <Link to={business.link} className="block h-full">
                                <div className={`group relative flex flex-col items-center rounded-3xl text-center bg-white/80 backdrop-blur-sm shadow-lg shadow-green-900/5 hover:shadow-2xl hover:shadow-green-900/10 transition-smooth px-6 py-8 h-full border border-green-100/50 ${business.bgHover} hover:-translate-y-1`}>
                                    {/* Decorative corner */}
                                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${business.gradient} opacity-5 rounded-bl-[100px] rounded-tr-3xl`}></div>

                                    {/* Image container */}
                                    <div className='relative w-28 h-28 flex items-center justify-center mb-6'>
                                        {/* Glow effect */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${business.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-smooth`}></div>

                                        {/* Image wrapper */}
                                        <div className='relative w-full h-full bg-white rounded-2xl p-3 shadow-md transition-smooth group-hover:scale-105'>
                                            <Image
                                                className='w-full h-full object-contain'
                                                src={business.image}
                                                alt={business.title}
                                                width={112}
                                                height={112}
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className='text-xl font-bold text-gray-900 mb-3 transition-smooth group-hover:text-emerald-700'>
                                        {business.title}
                                    </h3>
                                    <p className='text-sm text-gray-600 leading-relaxed mb-5'>
                                        {business.description}
                                    </p>

                                    {/* Learn more link */}
                                    <div className="mt-auto">
                                        <span className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${business.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-smooth`}>
                                            {texts.learnMore}
                                            <HiArrowRight className="text-emerald-600 transition-smooth group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16" style={{
                    opacity: 0,
                    animation: 'fadeUp 0.6s ease-out 1s forwards'
                }}>
                    <Link to='/contact'>
                        <button className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-4 px-10 rounded-2xl font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-smooth group">
                            {texts.contactUs}
                            <HiArrowRight className="transition-smooth group-hover:translate-x-1" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Busniess
