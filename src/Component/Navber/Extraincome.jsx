import React from 'react'
import Image from 'next/image'
import { MdOutlineFileDownload, MdTrendingUp, MdAccountBalance, MdAttachMoney, MdAccountBalanceWallet, MdReceiptLong, MdList, MdShoppingCart, MdAssessment, MdPayments, MdCheckCircle, MdArrowForward, MdPhoneIphone } from 'react-icons/md'
import photo from '../../assets/extra.jpeg'
import profit from '../../assets/Dep/dep1.jpg'
import profit2 from '../../assets/Dep/dep2.jpeg'
import profit3 from '../../assets/Dep/dep3.jpeg'
import photo2 from '../../assets/extra2.jpeg'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { useSettings } from '../../context/SettingsContext'

function Extraincome() {
  const { downloadUrl } = useSettings()
  return (
    <div className="bg-green-50">
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-50px); }
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
          50% { transform: translateY(-15px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .anim-fade-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .anim-fade-down {
          animation: fadeInDown 1s ease-out forwards;
        }
        .anim-fade-left {
          animation: fadeInLeft 1s ease-out forwards;
        }
        .anim-fade-right {
          animation: fadeInRight 1s ease-out forwards;
        }
        .anim-scale {
          animation: scaleIn 0.8s ease-out forwards;
        }
        .anim-float {
          animation: float 3s ease-in-out infinite;
        }
        .anim-float-slow {
          animation: floatSlow 4s ease-in-out infinite;
        }
        .anim-pulse {
          animation: pulse 2.5s ease-in-out infinite;
        }
        .delay-100 { animation-delay: 0.1s; opacity: 0; }
        .delay-200 { animation-delay: 0.2s; opacity: 0; }
        .delay-300 { animation-delay: 0.3s; opacity: 0; }
        .delay-400 { animation-delay: 0.4s; opacity: 0; }
        .delay-500 { animation-delay: 0.5s; opacity: 0; }
        .delay-600 { animation-delay: 0.6s; opacity: 0; }
        .delay-700 { animation-delay: 0.7s; opacity: 0; }
        .delay-800 { animation-delay: 0.8s; opacity: 0; }
      `}</style>
      <div className='max-w-[1480px] mx-auto px-5 md:px-10 lg:px-15'>
        {/* cover pic------ */}
        <div className="relative overflow-hidden rounded-2xl pt-10">
          <div className="anim-fade-up">
            <Image className='w-full h-auto rounded-2xl' src={photo} alt="Cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* increase income---- */}
        <div className='md:flex items-center gap-12 py-16'>
          <div className="md:w-1/2">
            <div className="relative anim-fade-left delay-200">
              <Image src={photo2} alt="Income" className="rounded-2xl shadow-xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg anim-float">
                <span className="text-4xl">💰</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <div className="anim-fade-right delay-400">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                আপনার দোকান থেকেই
                আয় বাড়ান,
                <span className="text-green-600"> কোনো ইনভেস্টমেন্ট ছাড়াই!</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                হালখাতার 'বাড়তি আয়' ফিচার ব্যবহার করে আপনার বর্তমান ব্যবসার পাশাপাশিই মোবাইল রিচার্জ, বিল পেমেন্ট, পণ্য রেফার এবং ডাক্তারের অ্যাপয়েন্টমেন্ট বুক করে প্রতি মাসে আয় করুন অতিরিক্ত ২০,০০ টাকা পর্যন্ত।
              </p>
              <Link to="/support" className="inline-block">
                <button className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2">
                  আরো জানতে যোগাযোগ করুন
                  <MdArrowForward />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* busniess continuse no profit------- */}
        <div className="py-16 bg-green-50">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="anim-fade-up delay-300">
              <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-4">সাধারণ সমস্যা</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">ব্যবসা চলছে, কিন্তু লাভের মুখ দেখছেন না?</h2>
              <p className="text-gray-600 text-lg">অনেক ব্যবসায়ীই প্রতিদিনের বিক্রি নিয়ে ব্যস্ত থাকলেও মাস শেষে লাভের মুখ দেখতে পান না। আপনারও কি এমন মনে হয়?</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow anim-fade-up delay-400">
              <Image src={profit} alt="" className="w-full h-60 object-cover rounded-t-xl mb-4" />
              <h2 className='flex items-center text-xl font-semibold text-gray-800 py-5 px-3'>
                <RxCross1 className="text-red-500 mr-3" /> ব্যবসার খরচ দিন দিন বাড়ছে?
              </h2>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow anim-fade-up delay-500">
              <Image src={profit2} alt="" className="w-full h-60 object-cover rounded-t-xl mb-4" />
              <h2 className='flex items-center text-xl font-semibold text-gray-800 py-5 px-3'>
                <RxCross1 className="text-red-500 mr-3" /> নতুন পণ্য দোকানে তোলার জন্য যথেষ্ট পুঁজি নেই?
              </h2>
            </div>
            <div className="bg-white rounded-2xl  shadow-lg border border-gray-100 hover:shadow-xl transition-shadow anim-fade-up delay-600">
              <Image src={profit3} alt="" className="w-full h-60 object-cover rounded-t-xl mb-4" />
              <h2 className='flex items-center text-xl font-semibold text-gray-800 py-5 px-3'>
                <RxCross1 className="text-red-500 mr-3" /> কাস্টমার ধরে রাখতে নতুন কিছু অফার করতে পারছেন না?
              </h2>
            </div>
          </div>
        </div>


        {/* extra income with halkhata app------ */}
        <div className="py-16 px-4 bg-green-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="anim-fade-up delay-300">
                <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">সহজ সমাধান</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">হালখাতা অ্যাপ দিয়ে অতিরিক্ত আয়</h2>
                <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-lg">
                  'বাড়তি আয়' হলো এমন একটি ডিজিটাল প্ল্যাটফর্ম, যা আপনার দোকানকে একটি সার্ভিস সেন্টারে পরিণত করে। কোনো রকম পণ্য মজুদ বা বাড়তি বিনিয়োগের ঝামেলা ছাড়াই আপনি আয় করতে পারবেন একাধিক উপায়ে।
                </p>
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <a href={downloadUrl} download className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100 group anim-scale delay-400 block cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdOutlineFileDownload className="text-4xl text-white" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm">১</span>
                  <h3 className="text-xl font-bold text-gray-800">অ্যাপ ডাউনলোড করুন</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">প্লে-স্টোর থেকে হালখাতা অ্যাপ ডাউনলোড করে বিনামূল্যে আপনার অ্যাকাউন্ট খুলুন।</p>
              </a>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100 group anim-scale delay-500">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdAccountBalanceWallet className="text-4xl text-white" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm">২</span>
                  <h3 className="text-xl font-bold text-gray-800">সার্ভিস বেছে নিন</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">মোবাইল রিচার্জ, পণ্য রেফার বা ডাক্তারের অ্যাপয়েন্টমেন্ট-এর মতো যেকোনো সার্ভিস বেছে নিন।</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100 group anim-scale delay-600">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <MdTrendingUp className="text-4xl text-white" />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-sm">৩</span>
                  <h3 className="text-xl font-bold text-gray-800">ইনকাম শুরু করুন</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">প্রতিটি সফল সার্ভিস প্রদানের জন্য সাথে সাথে কমিশন আয় করুন।</p>
              </div>
            </div>
          </div>
        </div>

        {/* why use halkhata------ */}
        <div className="px-4 py-20 bg-green-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="anim-fade-up delay-300">
                <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">কেন আমাদের বেছে নেবেন</span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">কেন হালখাতা ব্যবহার করবেন?</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">আপনার ব্যবসাকে সহজ ও সুশৃঙ্খল করতে আমাদের সব সুবিধা এক ছাদের নিচে</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group anim-fade-up delay-400">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <MdAccountBalanceWallet className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">আয় ও ব্যয়ের হিসাব</h3>
                <p className="text-gray-600">আপনার সব আয় ও ব্যয়ের হিসাব সহজেই রাখতে পারবেন</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group anim-fade-up delay-500">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <MdReceiptLong className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">বাকি বিলের হিসাব</h3>
                <p className="text-gray-600">সব বাকি বিলের তালিকা ও হিসাব রাখুন সহজে</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group anim-fade-up delay-600">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <MdList className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">বাজার লিস্ট</h3>
                <p className="text-gray-600">বাজারের লিস্ট তৈরি করে সহজে কেনাকাটা করুন</p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group anim-fade-up delay-700">
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <MdShoppingCart className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">বিক্রি ও ক্রয় হিসাব</h3>
                <p className="text-gray-600">বিক্রি ও ক্রয়ের সব হিসাব ট্র্যাক করুন</p>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group anim-fade-up delay-800">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <MdAssessment className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">ব্যবসার সব রিপোর্ট</h3>
                <p className="text-gray-600">বিস্তারিত রিপোর্ট দেখে সিদ্ধান্ত নিন</p>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group anim-fade-up">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-teal-700 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <MdPayments className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">বকেয়া আদায়</h3>
                <p className="text-gray-600">বকেয়া টাকা আদায়ের রিমাইন্ডার পান</p>
              </div>
            </div>
          </div>
        </div>

      {/* CTA Section with Phone Mockup */}
      <div className="py-20 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <div className="anim-fade-left delay-400">
                <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">বিনামূল্যে শুরু করুন</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">আজই শুরু করুন</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  হালখাতা অ্যাপ ডাউনলোড করে আপনার ব্যবসার আয়-ব্যয়ের হিসাব সহজে রাখুন।
                  বিনামূল্যে অ্যাপ ব্যবহার করুন এবং আপনার ব্যবসা গুছিয়ে নিন।
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center anim-pulse">
                      <MdCheckCircle className="text-white" />
                    </div>
                    <span className="text-gray-700">সম্পূর্ণ বিনামূল্যে ব্যবহার</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center anim-pulse" style={{ animationDelay: '0.5s' }}>
                      <MdCheckCircle className="text-white" />
                    </div>
                    <span className="text-gray-700">অতিরিক্ত ২০,০০ টাকা পর্যন্ত আয়ের সুযোগ</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center anim-pulse" style={{ animationDelay: '1s' }}>
                      <MdCheckCircle className="text-white" />
                    </div>
                    <span className="text-gray-700">ব্যবসার সব হিসাব এক জায়গায়</span>
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Play Store Button */}
                  <a href={downloadUrl} download className="flex items-center gap-3 bg-white hover:bg-green-50 text-gray-900 px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border border-gray-200">
                    <svg className="w-10 h-10" viewBox="0 0 24 24">
                      <path fill="#34A853" d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74s2.3-1.09 3.87-.92c1.57.18 2.76.96 3.39 2.16-2.97 1.6-2.48 5.96.57 7.23-.57 1.5-1.31 2.99-1.91 3.76zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    <div className="text-left">
                      <p className="text-xs text-gray-600 font-medium">GET IT ON</p>
                      <p className="text-xl font-bold leading-tight">Google Play</p>
                    </div>
                  </a>

                  {/* App Store Button */}
                  <a href={downloadUrl} download className="flex items-center gap-3 bg-white hover:bg-green-50 text-gray-900 px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 border border-gray-200">
                    <svg className="w-10 h-10" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div className="text-left">
                      <p className="text-xs text-gray-600 font-medium">Download on the</p>
                      <p className="text-xl font-bold leading-tight">App Store</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative anim-fade-right delay-600">
                {/* Phone Stand/Decoration */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-5 bg-gray-700/50 rounded-full"></div>

                {/* Phone Frame */}
                <div className="w-64 h-[520px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl relative z-10 border-4 border-gray-800 anim-float-slow">
                  <div className="w-full h-full bg-gradient-to-b from-green-600 via-emerald-700 to-teal-800 rounded-[2.5rem] overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-full"></div>

                    {/* Phone Screen Content */}
                    <div className="p-6 text-white h-full flex flex-col pt-10">
                      {/* App Logo */}
                      <div className="flex items-center justify-center mt-4 mb-6">
                        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
                          <span className="text-4xl">📒</span>
                        </div>
                      </div>

                      {/* App Name */}
                      <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold">হালখাতা</h3>
                        <p className="text-green-200 text-base">সহজ হিসাব রাখুন</p>
                      </div>

                      {/* Stats Cards */}
                      <div className="space-y-3 flex-1">
                        <div className="bg-white/25 backdrop-blur rounded-2xl p-4">
                          <p className="text-xs text-green-100 font-medium">আজকের আয়</p>
                          <p className="text-2xl font-bold">৳ ১২,ফ০০</p>
                        </div>
                        <div className="bg-white/25 backdrop-blur rounded-2xl p-4">
                          <p className="text-xs text-green-100 font-medium">আজকের ব্যয়</p>
                          <p className="text-2xl font-bold">৳ ৪,২০০</p>
                        </div>
                        <div className="bg-white/25 backdrop-blur rounded-2xl p-4">
                          <p className="text-xs text-green-100 font-medium">মোট লাভ</p>
                          <p className="text-2xl font-bold text-white">৳ ৮,৩০০</p>
                        </div>
                      </div>

                      {/* Bottom CTA */}
                      <div className="text-center mt-6">
                        <div className="bg-white text-green-700 px-6 py-3 rounded-xl font-bold text-base shadow-lg">
                          শুরু করুন
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/30 rounded-full blur-3xl -z-10 anim-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
  )
}

export default Extraincome
