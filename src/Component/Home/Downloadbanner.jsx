import React from 'react';
import { FiDownload, FiCheck, FiMonitor } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import { FadeIn } from '../Animated/AnimatedWrapper';
import { useLanguage } from '../../context/LanguageContext';
import { BUTTON_KEYS } from '../../context/DownloadsContext';
import DownloadButton from '../Shared/DownloadButton';

const Downloadbanner = () => {
    const { language } = useLanguage();

    const features = [
        "15 Day trial",
        "Free training and tech support",
        "Extra income opportunity"
    ];

    const featuresBan = [
        "১৫ দিনের ট্রায়াল",
        "বিনামূল্যে প্রশিক্ষণ এবং টেকনিক্যাল সাপোর্ট",
        "অতিরিক্ত আয়ের সুযোগ"
    ];

    const texts = {
        startYourJourney: language === 'bangla' ? 'আজই শুরু করুন আপনার যাত্রা' : 'Start Your Journey Today',
        startYour: language === 'bangla' ? 'শুরু করুন আপনার' : 'Start your',
        journeyToSuccess: language === 'bangla' ? 'সফলতার পথে' : 'Journey To Success',
        subtitle: language === 'bangla' ? 'আপনার জীবন পরিবর্তনের দায়িত্ব আপনার হাতে। আজই ইনস্টল করুন এবং আপনার জীবন পরিবর্তন করুন।' : 'The responsibility to change your life is in your hands. Install today and change your life.',
        download: language === 'bangla' ? 'ডাউনলোড' : 'Download',
        useWebVersion: language === 'bangla' ? 'ওয়েব ভার্সন ব্যবহার করুন' : 'Use the web version'
    };

    const featureList = language === 'bangla' ? featuresBan : features;

    return (
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a2332 0%, #2d3a4f 50%, #1a2332 100%)' }}>
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-400/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            {/* Floating shapes with subtle animations */}
            <div className="absolute top-10 right-20 w-20 h-20 border-2 border-emerald-500/10 rounded-2xl rotate-12 animate-float"></div>
            <div className="absolute bottom-20 left-16 w-16 h-16 border-2 border-teal-500/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 left-10 w-12 h-12 bg-emerald-500/5 rounded-lg rotate-45 animate-float" style={{ animationDelay: '4s' }}></div>
            <div className="absolute bottom-1/3 right-10 w-8 h-8 bg-green-500/5 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>

            {/* Dotted pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}></div>

            <div className="relative max-w-[1000px] mx-auto px-5 md:px-10 py-20 lg:py-28 text-center">
                {/* Badge */}
                <FadeIn delay={0}>
                    <div className="capitalize inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm text-emerald-400 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-emerald-500/20 transition-smooth hover:bg-emerald-500/15">
                        <HiSparkles className="text-emerald-400" />
                        {texts.startYourJourney}
                    </div>
                </FadeIn>

                {/* Heading */}
                <FadeIn delay={100}>
                    <h2 className="capitalize text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        {texts.startYour}{' '}
                        <span className="relative">
                            <span className="capitalize bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                {texts.journeyToSuccess}
                            </span>
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                                <path d="M2 6C50 2 150 2 198 6" stroke="url(#greenGradient)" strokeWidth="3" strokeLinecap="round"/>
                                <defs>
                                    <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#34d399"/>
                                        <stop offset="100%" stopColor="#2dd4bf"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </h2>
                </FadeIn>

                {/* Subtitle */}
                <FadeIn delay={200}>
                    <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
                        {texts.subtitle}
                    </p>
                </FadeIn>

                {/* Buttons */}
                <FadeIn delay={300}>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        {/* Download button - now always works */}
                        <DownloadButton buttonKey={BUTTON_KEYS.HOME_BANNER_DOWNLOAD}>
                            <a className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white py-4 px-8 rounded-xl font-bold transition-smooth hover:-translate-y-1">
                                <FiDownload className="text-xl transition-smooth group-hover:animate-bounce" />
                                {texts.download}
                            </a>
                        </DownloadButton>

                        <button className="group inline-flex items-center justify-center gap-3 bg-slate-700/50 hover:bg-slate-700 backdrop-blur-sm text-white py-4 px-8 rounded-xl font-semibold border-2 border-slate-600 hover:border-emerald-500/50 transition-smooth hover:-translate-y-1">
                            <FiMonitor className="text-xl" />
                            {texts.useWebVersion}
                        </button>
                    </div>
                </FadeIn>

                {/* Features */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    {featureList.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 capitalize"
                            style={{
                                opacity: 0,
                                transform: 'translateY(15px)',
                                animation: `fadeUp 0.5s ease-out ${0.4 + index * 0.15}s forwards`
                            }}
                        >
                            <div className="capitalize w-5 h-5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <FiCheck className="text-white text-xs" strokeWidth={3} />
                            </div>
                            <span className="text-slate-300 font-medium capitalize">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Downloadbanner;
