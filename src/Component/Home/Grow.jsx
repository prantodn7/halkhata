import React from 'react';
import { FaChartLine, FaBoxOpen, FaUsers, FaBell, FaCalculator, FaMobileAlt } from 'react-icons/fa';
import { HiCheckCircle } from 'react-icons/hi';
import { FiArrowRight } from 'react-icons/fi';
import { FadeIn, RevealUp } from '../Animated/AnimatedWrapper';
import { useLanguage } from '../../context/LanguageContext';

const mainFeatures = [
    {
        id: 1,
        icon: FaChartLine,
        iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
        title: 'Know your real profit & loss daily',
        description: 'Get detailed business reports — daily, weekly, or monthly. Understand which products bring the most profit.',
        highlights: [
            'Daily, weekly and monthly P&L analysis',
            'Product-wise revenue breakdown',
            'Track sales progress vs targets'
        ]
    },
    {
        id: 2,
        icon: FaBoxOpen,
        iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
        title: 'Smart inventory management',
        description: 'Never run out of stock or overstock again. Get alerts when products are running low.',
        highlights: [
            'Real-time stock tracking',
            'Low stock alerts & notifications',
            'Purchase history & supplier management'
        ]
    },
    {
        id: 3,
        icon: FaUsers,
        iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
        title: 'Customer & supplier management',
        description: 'Keep all your customer and supplier information organized. Track dues and payments effortlessly.',
        highlights: [
            'Complete customer profiles',
            'Due balance tracking',
            'Transaction history at a glance'
        ]
    }
];
const mainFeaturesban = [
  {
    id: 1,
    icon: FaChartLine,
    iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    title: 'প্রতিদিন আপনার প্রকৃত লাভ ও ক্ষতি জানুন',
    description: 'দৈনিক, সাপ্তাহিক বা মাসিক বিস্তারিত ব্যবসায়িক রিপোর্ট পান। কোন পণ্য থেকে সবচেয়ে বেশি লাভ হচ্ছে তা বুঝুন।',
    highlights: [
      'দৈনিক, সাপ্তাহিক ও মাসিক লাভ-ক্ষতি বিশ্লেষণ',
      'পণ্যভিত্তিক আয়ের বিস্তারিত হিসাব',
      'টার্গেট অনুযায়ী বিক্রয় অগ্রগতি ট্র্যাক করুন'
    ]
  },
  {
    id: 2,
    icon: FaBoxOpen,
    iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600',
    title: 'স্মার্ট ইনভেন্টরি ব্যবস্থাপনা',
    description: 'আর কখনো স্টক শেষ বা অতিরিক্ত স্টক হবে না। পণ্য কমে এলে সঙ্গে সঙ্গে সতর্কতা পান।',
    highlights: [
      'রিয়েল-টাইম স্টক ট্র্যাকিং',
      'লো স্টক সতর্কতা ও নোটিফিকেশন',
      'ক্রয় ইতিহাস ও সরবরাহকারী ব্যবস্থাপনা'
    ]
  },
  {
    id: 3,
    icon: FaUsers,
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    title: 'গ্রাহক ও সরবরাহকারী ব্যবস্থাপনা',
    description: 'গ্রাহক ও সরবরাহকারীর সকল তথ্য গুছিয়ে রাখুন। সহজেই বকেয়া ও পরিশোধের হিসাব ট্র্যাক করুন।',
    highlights: [
      'সম্পূর্ণ গ্রাহক প্রোফাইল',
      'বকেয়া ব্যালেন্স ট্র্যাকিং',
      'এক নজরে লেনদেনের ইতিহাস'
    ]
  }
];


const quickFeatures = [
    {
        id: 1,
        icon: FaBell,
        iconBg: 'bg-gradient-to-br from-purple-500 to-violet-600',
        title: 'Payment reminders that work',
        description: 'Send automatic SMS/WhatsApp reminders to customers. Collect dues on time without awkward conversations.'
    },
    {
        id: 2,
        icon: FaCalculator,
        iconBg: 'bg-gradient-to-br from-rose-500 to-pink-600',
        title: 'Track every penny you spend',
        description: 'Record all expenses easily. Categorize spending and see where your money goes each month.'
    },
    {
        id: 3,
        icon: FaMobileAlt,
        iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-600',
        title: 'Your business in your pocket',
        description: 'Access your accounts anytime, anywhere. Works offline too — sync when you are back online.'
    }
];

const quickFeaturesban = [
  {
    id: 1,
    icon: FaBell,
    iconBg: 'bg-gradient-to-br from-purple-500 to-violet-600',
    title: 'কার্যকর পেমেন্ট রিমাইন্ডার',
    description: 'গ্রাহকদের কাছে স্বয়ংক্রিয় এসএমএস বা হোয়াটসঅ্যাপ রিমাইন্ডার পাঠান। অস্বস্তিকর কথা ছাড়াই সময়মতো বকেয়া আদায় করুন।'
  },
  {
    id: 2,
    icon: FaCalculator,
    iconBg: 'bg-gradient-to-br from-rose-500 to-pink-600',
    title: 'খরচের প্রতিটি টাকার হিসাব রাখুন',
    description: 'সহজেই সকল খরচ রেকর্ড করুন। খরচের ক্যাটাগরি অনুযায়ী ভাগ করুন এবং প্রতি মাসে কোথায় টাকা যাচ্ছে তা দেখুন।'
  },
  {
    id: 3,
    icon: FaMobileAlt,
    iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-600',
    title: 'আপনার ব্যবসা এখন আপনার পকেটে',
    description: 'যেকোনো সময়, যেকোনো জায়গা থেকে আপনার হিসাব দেখুন। অফলাইনে কাজ করবে, অনলাইনে ফিরলে নিজে থেকেই সিঙ্ক হবে।'
  }
];


const Grow = () => {
    const { language } = useLanguage();

    const mainFeaturesData = language === 'bangla' ? mainFeaturesban : mainFeatures;
    const quickFeaturesData = language === 'bangla' ? quickFeaturesban : quickFeatures;

    const texts = {
        powerfulFeatures: language === 'bangla' ? 'শক্তিশালী ফিচারসমূহ' : 'Powerful Features',
        growYourBusiness: language === 'bangla' ? 'আপনার ব্যবসা বড় করুন' : 'Grow your business with',
        powerfulFeatures2: language === 'bangla' ? 'শক্তিশালী ফিচারসমূহ' : 'powerful features',
        everythingYouNeed: language === 'bangla' ? 'আপনার ব্যবসা পরিচালনা, ট্র্যাক এবং সম্প্রসারণের জন্য যা দরকার — সবই এক সহজ অ্যাপে' : 'Everything you need to manage, track, and scale your business — all in one simple app'
    };

    return (
        <section className='relative bg-green-50 overflow-hidden'>
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-green-100/60 to-emerald-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-teal-100/50 to-green-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-emerald-100/30 rounded-full blur-2xl"></div>

            {/* Floating shapes with subtle animations */}
            <div className="absolute top-32 right-20 w-16 h-16 bg-green-200/40 rounded-2xl rotate-12 animate-float"></div>
            <div className="absolute bottom-40 left-16 w-12 h-12 bg-emerald-200/50 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/2 left-10 w-8 h-8 bg-teal-200/40 rounded-lg rotate-45 animate-float" style={{ animationDelay: '3s' }}></div>

            <div className='relative max-w-[1380px] mx-auto px-5 md:px-10 lg:px-15 py-20 lg:py-28'>
                {/* Header */}
                <FadeIn>
                    <div className='text-center mb-16'>
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm border border-green-100 transition-smooth hover:bg-emerald-50">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-soft"></span>
                            {texts.powerfulFeatures}
                        </div>
                        <h2 className='text-3xl pt-2 md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5'>
                            {texts.growYourBusiness}
                            <span className="block bg-gradient-to-r pt-2 pb-2 from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                {texts.powerfulFeatures2}
                            </span>
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                            {texts.everythingYouNeed}
                        </p>
                    </div>
                </FadeIn>

                {/* Main Feature Cards */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14'>
                    {mainFeaturesData.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={feature.id}
                                className='group bg-white/80 backdrop-blur-sm rounded-3xl p-7 border border-green-100/50 shadow-lg shadow-green-900/5 hover:shadow-2xl hover:shadow-green-900/10 transition-smooth hover:-translate-y-1'
                                style={{
                                    opacity: 0,
                                    transform: 'translateY(30px)',
                                    animation: `fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + index * 0.15}s forwards`
                                }}
                            >
                                {/* Icon */}
                                <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-smooth group-hover:scale-110`}>
                                    <IconComponent className='text-2xl text-white' />
                                </div>

                                {/* Content */}
                                <h3 className='text-xl font-bold text-gray-900 mb-3 transition-smooth group-hover:text-emerald-700 capitalize'>
                                    {feature.title}
                                </h3>
                                <p className='text-gray-600 mb-6 leading-relaxed'>
                                    {feature.description}
                                </p>

                                {/* Highlights */}
                                <div className='space-y-3 pt-5 border-t border-gray-100'>
                                    {feature.highlights.map((item, index) => (
                                        <div key={index} className='flex items-start gap-3'>
                                            <div className="mt-0.5">
                                                <HiCheckCircle className='text-emerald-500 text-lg flex-shrink-0' />
                                            </div>
                                            <span className='text-sm text-gray-700 leading-relaxed'>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Quick Feature Cards */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {quickFeaturesData.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={feature.id}
                                className='group bg-white backdrop-blur-sm rounded-2xl p-7 border border-green-100/50 hover:bg-white hover:shadow-xl hover:shadow-green-900/10 transition-smooth hover:-translate-y-0.5'
                                style={{
                                    opacity: 0,
                                    transform: 'translateY(20px)',
                                    animation: `fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.6 + index * 0.1}s forwards`
                                }}
                            >
                                <div className="flex items-start gap-5">
                                    {/* Icon */}
                                    <div className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md transition-smooth group-hover:scale-110`}>
                                        <IconComponent className='text-xl text-white' />
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h3 className='text-lg font-bold text-gray-900 mb-2 transition-smooth group-hover:text-emerald-700 capitalize'>
                                            {feature.title}
                                        </h3>
                                        <p className='text-gray-600 text-sm leading-relaxed'>
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Grow;
