import React from 'react'

import photo from '../../assets/photo.png'
import { FiArrowRight, FiPlay, FiUsers, FiTrendingUp, FiShield } from 'react-icons/fi'
import { FadeIn, ScaleIn } from '../Animated/AnimatedWrapper'
import { useLanguage } from '../../context/LanguageContext'
import { useSettings } from '../../context/SettingsContext'

function Cover() {
  const { language } = useLanguage();
  const { downloadUrl } = useSettings();

  const _stats = [
    { icon: <FiUsers />, value: "50K+", label: "Active Users", labelBan: "সক্রিয় ব্যবহারকারী" },
    { icon: <FiTrendingUp />, value: "98%", label: "Growth Rate", labelBan: "বৃদ্ধির হার" },
    { icon: <FiShield />, value: "100%", label: "Secure", labelBan: "নিরাপদ" }
  ];

  const texts = {
    brandName: language === 'bangla' ? 'হালখাতা' : 'Halkhata',
    businessPlatform: language === 'bangla' ? '#1 ব্যবসায়িক ম্যানেজমেন্ট প্ল্যাটফর্ম' : '#1 Business Management Platform',
    runSmarterBusiness: language === 'bangla' ? 'আরও স্মার্ট ভাবে' : 'Run a Smarter',
    businessGrow: language === 'bangla' ? 'ব্যবসা পরিচালনা করুন' : 'Business & Grow',
    withHalkhata: language === 'bangla' ? 'হালখাতার সাথে' : 'With Halkhata',
    description: language === 'bangla' ? 'আপনার ব্যবসা আরও সহজ হবে, সময় বাঁচবে, লাভ বাড়বে এমনকি নতুন আয়ের সুযোগও তৈরি হবে। আজই হাজার হাজার সফল ব্যবসায়ের সাথে যোগ দিন।' : 'Your business will be simpler, save time, increase profit and even create new income opportunities. Join thousands of successful businesses today.',
    talkToExpert: language === 'bangla' ? 'অ্যাপ ডাউনলোড করুন' : 'Download App',
    
    revenue: language === 'bangla' ? 'আয়' : 'Revenue',
    newCustomers: language === 'bangla' ? 'নতুন গ্রাহক' : 'New Customers'
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-100/30 to-green-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 rounded-2xl rotate-12 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-teal-200/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-green-200/40 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">

          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                {texts.businessPlatform}
              </div>
            </FadeIn>

            {/* Heading */}
            <FadeIn delay={100}>
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                {texts.runSmarterBusiness}
                <span className="block">{texts.businessGrow}</span>
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  {texts.withHalkhata}
                </span>
              </h1>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={200}>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {texts.description}
              </p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href={downloadUrl} download className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-3 px-6 md:py-4 md:px-8 rounded-xl font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2">
                  {texts.talkToExpert}
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>

              </div>
            </FadeIn>

            {/* Stats */}
            {/* <FadeIn delay={400}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 pt-6 border-t border-gray-100">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3"
                    style={{
                      opacity: 0,
                      transform: 'translateY(20px)',
                      animation: `fadeUp 0.6s ease-out ${0.5 + index * 0.1}s forwards`
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-xl">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs md:text-sm text-gray-500">{language === 'bangla' ? stat.labelBan : stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn> */}
          </div>

          {/* Right Image */}
          <ScaleIn delay={200}>
            <div className="relative mt-8 lg:mt-0">
              {/* Image container */}
              <div className="relative">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-3xl blur-2xl opacity-30 animate-pulse-glow"></div>

                {/* Rotating ring */}
                <div className="absolute inset-0 rounded-3xl animate-rotate-ring opacity-20">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-3 h-3 bg-teal-400 rounded-full"></div>
                  <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="absolute right-0 top-1/2 translate-x-1 -translate-y-1/2 w-3 h-3 bg-cyan-400 rounded-full"></div>
                </div>

                {/* Main image with floating animation */}
                <div className="relative bg-white p-2 md:p-3 rounded-2xl md:rounded-3xl shadow-2xl shadow-gray-200/50 hover:shadow-emerald-200/50 transition-all duration-500 max-w-[320px] md:max-w-[400px] mx-auto animate-float-image hover:scale-105">
                  <img className="w-full h-auto rounded-xl md:rounded-2xl object-cover" src={photo} alt="Halkhata Business Management" />

                  {/* Shine effect overlay */}
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shine"></div>
                  </div>
                </div>

                {/* Orbiting dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full animate-orbit-1"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-teal-400 rounded-full animate-orbit-2"></div>
              </div>
            </div>
          </ScaleIn>

        </div>
      </div>
    </div>
  )
}

export default Cover
