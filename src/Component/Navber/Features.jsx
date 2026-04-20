import React, { useEffect, useState } from 'react'

import { MdOutlineFileDownload } from 'react-icons/md'
import { HiSparkles } from 'react-icons/hi'
import { useLanguage } from '../../context/LanguageContext'
import { useSettings } from '../../context/SettingsContext'
import featureEn from '../../../public/Feature.json'
import featureBan from '../../../public/Featureban.json'

const _USE_STATE_COMPAT = useState;

function Features() {
  const { language } = useLanguage()
  const { downloadUrl } = useSettings()
  const Feature = language === 'bangla' ? featureBan : featureEn

  const texts = {
    brandName: language === 'bangla' ? 'হালখাতা' : 'Halkhata',
    powerfulFeatures: language === 'bangla' ? 'শক্তিশালী ফিচারসমূহ' : 'Powerful Features',
    theBestFeatures: language === 'bangla' ? 'এর সেরা ফিচারসমূহ' : 'The best features of',
    description: language === 'bangla' ? 'হিসাব-নিকাশ, বিক্রয়, স্টক, গ্রাহক – সবই এক অ্যাপে। লাভ বাড়ুন, সময় বাঁচান, আপনার ব্যবসাকে আরও প্রফেশনাল করুন।' : 'Accounting, sales, stock, customers – all in one app. Increase profits, save time, make your business more professional.',
    downloadNow: language === 'bangla' ? 'এখনই ডাউনলোড করুন' : 'Download Now',
    whyChooseUs: language === 'bangla' ? 'কেন বেছে নেবেন' : 'Why Choose Us',
    specialFeatures: language === 'bangla' ? 'এর বিশেষ ফিচারসমূহ' : 'Special features of'
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
    <section className='relative bg-green-50 overflow-hidden'>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-100/50 to-teal-100/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-green-100/40 to-emerald-100/20 rounded-full blur-3xl -translate-x-1/3"></div>
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-teal-100/30 rounded-full blur-3xl translate-y-1/2"></div>

      {/* Floating shapes */}
      <div className="absolute top-40 left-20 w-16 h-16 bg-emerald-200/30 rounded-2xl rotate-12 anim-float"></div>
      <div className="absolute top-60 right-16 w-12 h-12 bg-green-200/40 rounded-full anim-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-10 w-10 h-10 bg-teal-200/30 rounded-lg rotate-45 anim-float" style={{ animationDelay: '2s' }}></div>

      <div className='relative max-w-[1380px] mx-auto px-5 md:px-10 lg:px-15'>
        {/* Hero Section */}
        <div className='min-h-[50vh] pt-28 pb-16 flex flex-col items-center justify-center text-center'>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-sm border border-green-100 anim-fade-up">
            <HiSparkles className="text-emerald-500" />
            {texts.powerfulFeatures}
          </div>

          {/* Heading */}
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight anim-fade-up delay-100'>
            {texts.theBestFeatures}{' '}
            <span className='bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
              {texts.brandName}
            </span>
          </h1>

          {/* Description */}
          <p className='max-w-[650px] mx-auto text-lg text-gray-600 leading-relaxed mb-10 anim-fade-up delay-200'>
            {texts.description}
          </p>

          {/* Download Button */}
          <a href={downloadUrl} download className='group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-full transition-smooth hover:-translate-y-1 anim-fade-up delay-300'>
            {texts.downloadNow}
            <MdOutlineFileDownload className='text-xl group-hover:animate-bounce' />
          </a>
        </div>

        {/* Features Section */}
        <div className='pb-20 lg:pb-28'>
          {/* Section Header */}
          <div className='text-center mb-14'>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm border border-green-100 anim-fade-up">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              {texts.whyChooseUs}
            </div>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 anim-fade-up delay-100'>
              {texts.specialFeatures}{' '}
              <span className='bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
                {texts.brandName}
              </span>
            </h2>
          </div>

          {/* Feature Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
            {Feature.map((feature, index) =>
              <div
                key={feature.id}
                className={`group bg-white/80 backdrop-blur-sm rounded-xl p-7 border border-green-100/50 shadow-lg shadow-green-900/5 hover:shadow-2xl hover:shadow-green-900/10 transition-smooth hover:-translate-y-2 anim-fade-up ${index === 0 ? 'delay-200' : index === 1 ? 'delay-300' : 'delay-400'} ${index === 2 ? 'delay-100' : index === 3 ? 'delay-200' : index === 4 ? 'delay-300' : 'delay-400'}`}
              >
                {/* Icon */}
                <div className='w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300'>
                  <img
                    className='w-10 h-10 object-contain'
                    src={feature.img}
                    alt={feature.name}
                    width={40}
                    height={40}
                  />
                </div>

                {/* Content */}
                <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors'>
                  {feature.name}
                </h3>
                <p className='text-gray-600 leading-relaxed'>
                  {feature.feature}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Features
