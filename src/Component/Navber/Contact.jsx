import React, { useEffect, useState } from 'react'
import { FaPhoneAlt, FaFacebookF, FaEnvelope, FaMapMarkerAlt, FaHeadphones, FaCheck, FaSpinner } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import { useLanguage } from '../../context/LanguageContext'

function Contact() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business_type: '',
    reason: '',
    message: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const texts = {
    brandName: language === 'bangla' ? 'হালখাতা' : 'Halkhata',
    contactSupport: language === 'bangla' ? 'যোগাযোগ ও সাপোর্ট' : 'Contact & Support',
    isHereToSupport: language === 'bangla' ? 'আপনাকে সহায়তা করতে' : 'is Here to',
    supportYou: language === 'bangla' ? 'প্রস্তুত ' : 'Support You',
    description: language === 'bangla' ? 'আমাদের সাপোর্ট টিম যেকোনো প্রশ্ন বা সমস্যা সমাধানে আপনাকে সাহায্য করতে প্রস্তুত - দ্রুত এবং নির্ভরযোগ্যভাবে। ফোন, ফেসবুক বা ইমেলের মাধ্যমে যেকোনো সময় যোগাযোগ করুন। আমরা ২৪/৭ আপনার ব্যবসার সাপোর্ট করতে প্রস্তুত।' : 'Our support team is ready to help you with any questions or issues - quickly and reliably. Reach us anytime via phone, Facebook, or email. We\'re available 24/7 to support your business.',
    getInTouch: language === 'bangla' ? 'যোগাযোগ করুন' : 'Get in Touch',
    callNow: language === 'bangla' ? 'এখনই কল করুন' : 'Call Now',
    callUs: language === 'bangla' ? 'কল করুন' : 'Call Us',
    callDescription: language === 'bangla' ? 'সরাসরি কথা বলতে পছন্দ? তাৎক্ষণিক সহায়তার জন্য আমাদের সাপোর্ট হটলাইনে কল করুন।' : 'Prefer speaking to a real person? Call our support hotline for instant assistance.',
    availableTime: language === 'bangla' ? 'সকাল ৯:০০ টা থেকে রাত ১২:০০ টা (স্থানীয় সময়)' : 'Available from 9:00 AM to 12:00 AM (Local Time)',
    facebook: language === 'bangla' ? 'ফেসবুক' : 'Facebook',
    fbDescription: language === 'bangla' ? 'আপডেট, টিপস এবং নতুন ফিচার ঘোষণার জন্য আমাদের অফিসিয়াল ফেসবুক পেজ ফলো করুন।' : 'Follow our official Facebook page for updates, tips, and new feature announcements.',
    fbPageName: language === 'bangla' ? 'হালখাতা - আজই আপনার ব্যবসা বড় করুন' : 'Halkhata - Grow Your Business Today',
    followUs: language === 'bangla' ? 'যুক্ত থাকতে আমাদের ফলো করুন।' : 'Follow us to stay connected.',
    emailSupport: language === 'bangla' ? 'ইমেল সাপোর্ট' : 'Email Support',
    emailDescription: language === 'bangla' ? 'আপনার সমস্যা বা প্রশ্নের বিস্তারিত বিবরণ আমাদের পাঠান। আমাদের টিম ২৪ ঘন্টার মধ্যে উত্তর দেবে।' : 'Send us a detailed description of your issue or question. Our team will respond within 24 hours.',
    responseTime: language === 'bangla' ? '২৪ ঘন্টার মধ্যে উত্তর' : 'Response within 24 hours',
    ourOffice: language === 'bangla' ? 'আমাদের অফিস' : 'Our Office',
    mainOffice: language === 'bangla' ? 'প্রধান কার্যালয়' : 'Main Office',
    support247: language === 'bangla' ? '২৪/৭ সাপোর্ট' : '24/7 Support',
    supportDescription: language === 'bangla' ? 'আমাদের টেকনিক্যাল সাপোর্ট টিম দিনরাত ২৪ ঘন্টা আপনার যেকোনো টেকনিক্যাল বা অ্যাকাউন্ট সম্পর্কিত সমস্যা সমাধানে সহায়তা করতে প্রস্তুত।' : 'Our technical support team is available 24 hours a day to assist you with any technical or account-related issues.',
    alwaysHere: language === 'bangla' ? 'আমরা সবসময় আপনার ব্যবসা বড় করতে সাহায্য করতে প্রস্তুত!' : 'We\'re always here to help your business grow!',
    contactUs: language === 'bangla' ? 'যোগাযোগ করুন' : 'Contact Us',
    formDescription: language === 'bangla' ? 'আমাদের সাথে আপনার প্রয়োজন শেয়ার করুন, আমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।' : 'Share your requirements with us, and our team will get in touch with you shortly.',
    name: language === 'bangla' ? 'নাম *' : 'Name *',
    enterName: language === 'bangla' ? 'আপনার নাম লিখুন' : 'Enter your name',
    phone: language === 'bangla' ? 'ফোন *' : 'Phone *',
    phonePlaceholder: language === 'bangla' ? 'XXX XXX XX XX' : 'XXX XXX XX XX',
    email: language === 'bangla' ? 'ইমেল' : 'Email',
    emailPlaceholder: language === 'bangla' ? 'your@email.com' : 'your@email.com',
    businessType: language === 'bangla' ? 'ব্যবসার ধরন' : 'Business Type',
    selectBusiness: language === 'bangla' ? 'আপনার ব্যবসার ধরন নির্বাচন করুন' : 'Select your business type',
    retail: language === 'bangla' ? 'খুচরা' : 'Retail',
    wholesale: language === 'bangla' ? 'পাইকারি' : 'Wholesale',
    manufacturing: language === 'bangla' ? 'উৎপাদন' : 'Manufacturing',
    service: language === 'bangla' ? 'সেবা' : 'Service',
    other: language === 'bangla' ? 'অন্যান্য' : 'Other',
    reason: language === 'bangla' ? 'অ্যাপ ব্যবহারের কারণ' : 'Reason for Using the App',
    select: language === 'bangla' ? 'নির্বাচন করুন' : 'Select',
    accounting: language === 'bangla' ? 'হিসাব-নিকাশ' : 'Accounting & Bookkeeping',
    inventory: language === 'bangla' ? 'ইনভেন্টরি ম্যানেজমেন্ট' : 'Inventory Management',
    salesTracking: language === 'bangla' ? 'বিক্রয় ট্র্যাকিং' : 'Sales Tracking',
    customerManagement: language === 'bangla' ? 'গ্রাহক ম্যানেজমেন্ট' : 'Customer Management',
    message: language === 'bangla' ? 'বার্তা *' : 'Message *',
    enterMessage: language === 'bangla' ? 'আপনার বার্তা লিখুন' : 'Enter your message',
    submit: language === 'bangla' ? 'বার্তা পাঠান' : 'Submit Message',
    submitting: language === 'bangla' ? 'পাঠানো হচ্ছে...' : 'Submitting...',
    submitted: language === 'bangla' ? 'সফলভাবে পাঠানো হয়েছে!' : 'Message Sent Successfully!',
    sendAnother: language === 'bangla' ? 'আরেকটি বার্তা পাঠান' : 'Send Another Message',
    requiredFields: language === 'bangla' ? 'অনুগ্রহ করে সব প্রয়োজনীয় ক্ষেত্রগুলো পূরণ করুন' : 'Please fill in all required fields',
    submitError: language === 'bangla' ? 'বার্তা পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।' : 'Failed to send message. Please try again.'
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError(texts.requiredFields)
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || texts.submitError)
      }

      setSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
        setFormData({ name: '', phone: '', business_type: '', reason: '', message: '' })
      }, 3000)
    } catch (err) {
      setError(err.message || texts.submitError)
    } finally {
      setSubmitting(false)
    }
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
    <section className='relative bg-green-50 min-h-screen overflow-hidden'>
      {/* Background decorations */}
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-emerald-100/50 to-teal-100/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3'></div>
      <div className='absolute top-1/3 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-green-100/40 to-emerald-100/20 rounded-full blur-3xl -translate-x-1/3'></div>
      <div className='absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-teal-100/30 rounded-full blur-3xl translate-x-1/4'></div>
      <div className='absolute bottom-0 left-1/3 w-[350px] h-[350px] bg-emerald-100/40 rounded-full blur-3xl translate-y-1/2'></div>

      {/* Floating shapes */}
      <div className='absolute top-40 left-20 w-16 h-16 bg-emerald-200/30 rounded-2xl rotate-12 anim-float'></div>
      <div className='absolute top-60 right-16 w-12 h-12 bg-green-200/40 rounded-full anim-float' style={{ animationDelay: '1s' }}></div>
      <div className='absolute bottom-1/3 left-10 w-10 h-10 bg-teal-200/30 rounded-lg rotate-45 anim-float' style={{ animationDelay: '2s' }}></div>
      <div className='absolute top-1/2 right-20 w-8 h-8 bg-emerald-200/40 rounded-full anim-float' style={{ animationDelay: '1.5s' }}></div>

      {/* Hero Section */}
      <div className='relative max-w-[1380px] mx-auto px-5 md:px-10 lg:px-15'>
        <div className='min-h-[50vh] pt-28 pb-16 flex flex-col items-center justify-center text-center'>
          {/* Badge */}
          <div className='inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-8 shadow-sm border border-green-100 anim-fade-up'>
            <HiSparkles className='text-emerald-500' />
            {texts.contactSupport}
          </div>

          {/* Heading */}
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight anim-fade-up delay-100'>
            <span className='bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>{texts.brandName}</span> {texts.isHereToSupport} {texts.supportYou}
          </h1>

          {/* Description */}
          <p className='max-w-[650px] mx-auto text-lg text-gray-600 leading-relaxed mb-10 anim-fade-up delay-200'>
            {texts.description}
          </p>

          {/* Buttons */}
          <div className='flex flex-wrap justify-center gap-4 anim-fade-up delay-300'>
            <a href='#contact-form' className='inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1'>
              {texts.getInTouch}
            </a>
            <a href='tel:+8809649132132' className='inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-emerald-300 text-emerald-700 font-semibold px-8 py-4 rounded-full hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-300 hover:-translate-y-1'>
              <FaPhoneAlt className='text-sm' />
              {texts.callNow}
            </a>
          </div>
        </div>
      </div>

      <div className='relative max-w-[1380px] mx-auto px-5 md:px-10 lg:px-15'>

        {/* Support Cards Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-20'>

          {/* Call Us Card */}
          <div className='group bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg shadow-green-900/5 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 border border-green-100/50 hover:-translate-y-2 anim-scale delay-100'>
            <div className='w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg'>
              <FaPhoneAlt className='text-2xl text-white' />
            </div>
            <h3 className='text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-700 transition-colors'>{texts.callUs}</h3>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              {texts.callDescription}
            </p>
            <p className='text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4'>+8809649 132 132</p>
            <p className='text-gray-500 text-sm'>
              {texts.availableTime}
            </p>
          </div>

          {/* Facebook Card */}
          <a href='https://www.facebook.com/profile.php?id=61587249475784' target='_blank' rel='noopener noreferrer' className='group block bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg shadow-green-900/5 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 border border-green-100/50 hover:-translate-y-2 anim-scale delay-200'>
            <div className='w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg'>
              <FaFacebookF className='text-2xl text-white' />
            </div>
            <h3 className='text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-700 transition-colors'>{texts.facebook}</h3>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              {texts.fbDescription}
            </p>
            <p className='text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4'>{texts.fbPageName}</p>
            <p className='text-gray-500 text-sm'>
              {texts.followUs}
            </p>
          </a>

          {/* Email Support Card */}
          <div className='group bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center shadow-lg shadow-green-900/5 hover:shadow-2xl hover:shadow-green-900/10 transition-all duration-500 border border-green-100/50 hover:-translate-y-2 anim-scale delay-300'>
            <div className='w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg'>
              <FaEnvelope className='text-2xl text-white' />
            </div>
            <h3 className='text-2xl font-bold mb-4 text-gray-900 group-hover:text-emerald-700 transition-colors'>{texts.emailSupport}</h3>
            <p className='text-gray-600 mb-6 leading-relaxed'>
              {texts.emailDescription}
            </p>
            <p className='text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4'>Halkhata.grow@gmail.com</p>
            <p className='text-gray-500 text-sm'>
              {texts.responseTime}
            </p>
          </div>

        </div>

        {/* Our Office and Contact Us Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pb-20'>

          {/* Our Office - Left Side */}
          <div className='bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 lg:p-10 shadow-lg shadow-green-900/5 border border-green-100/50 relative overflow-hidden anim-fade-left delay-200'>
            {/* Decorative gradient blob */}
            <div className='absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-emerald-200/50 to-teal-200/50 rounded-full blur-2xl'></div>

            <h2 className='text-3xl lg:text-4xl font-bold mb-10 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent relative z-10'>{texts.ourOffice}</h2>

            {/* Main Office */}
            <div className='flex items-start gap-5 mb-10 relative z-10'>
              <div className='w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg'>
                <FaMapMarkerAlt className='text-xl text-white' />
              </div>
              <div>
                <h3 className='text-xl font-bold mb-2 text-gray-900'>{texts.mainOffice}</h3>
                <p className='text-gray-600'>Jugidor, Moulvibazar, Sylhet</p>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className='flex items-start gap-5 relative z-10'>
              <div className='w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg'>
                <FaHeadphones className='text-xl text-white' />
              </div>
              <div>
                <h3 className='text-xl font-bold mb-2 text-gray-900'>{texts.support247}</h3>
                <p className='text-gray-600 leading-relaxed'>
                  {texts.supportDescription}
                </p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className='mt-10 p-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-green-100 relative z-10'>
              <p className='bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent font-semibold text-center'>{texts.alwaysHere}</p>
            </div>
          </div>

          {/* Contact Us Form - Right Side */}
          <div id='contact-form' className='bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-lg shadow-green-900/5 border border-green-100/50 relative overflow-hidden anim-fade-right delay-300'>
            {/* Decorative gradient blob */}
            <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-emerald-200/50 to-teal-200/50 rounded-full blur-2xl'></div>

            <h2 className='text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent relative z-10'>{texts.contactUs}</h2>
            <p className='text-gray-600 mb-8 relative z-10'>
              {texts.formDescription}
            </p>

            <form onSubmit={handleSubmit} className='space-y-5 relative z-10'>
              {/* Name and Phone */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>{texts.name}</label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={texts.enterName}
                    className='w-full px-4 py-3 bg-green-50/50 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all'
                  />
                </div>
                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2'>{texts.phone}</label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={texts.phonePlaceholder}
                    className='w-full px-4 py-3 bg-green-50/50 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all'
                  />
                </div>
              </div>

              {/* Business Type */}
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>{texts.businessType}</label>
                <select
                  name='business_type'
                  value={formData.business_type}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 bg-green-50/50 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all text-gray-700'
                >
                  <option value=''>{texts.selectBusiness}</option>
                  <option value='retail'>{texts.retail}</option>
                  <option value='wholesale'>{texts.wholesale}</option>
                  <option value='manufacturing'>{texts.manufacturing}</option>
                  <option value='service'>{texts.service}</option>
                  <option value='other'>{texts.other}</option>
                </select>
              </div>

              {/* Reason for Using the App */}
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>{texts.reason}</label>
                <select
                  name='reason'
                  value={formData.reason}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 bg-green-50/50 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all text-gray-700'
                >
                  <option value=''>{texts.select}</option>
                  <option value='accounting'>{texts.accounting}</option>
                  <option value='inventory'>{texts.inventory}</option>
                  <option value='salesTracking'>{texts.salesTracking}</option>
                  <option value='customerManagement'>{texts.customerManagement}</option>
                  <option value='other'>{texts.other}</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>{texts.message}</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={texts.enterMessage}
                  rows='4'
                  className='w-full px-4 py-3 bg-green-50/50 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all resize-none'
                ></textarea>
              </div>

              {/* Error Message */}
              {error && (
                <div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm'>
                  {error}
                </div>
              )}

              {/* Success Message */}
              {submitted && (
                <div className='bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm flex items-center gap-2'>
                  <FaCheck className='text-green-600' />
                  {texts.submitted}
                </div>
              )}

              {/* Submit Button */}
              <button
                type='submit'
                disabled={submitting || submitted}
                className='w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2'
              >
                {submitting ? (
                  <>
                    <FaSpinner className='animate-spin' />
                    {texts.submitting}
                  </>
                ) : submitted ? (
                  <>
                    <FaCheck />
                    {texts.sendAnother}
                  </>
                ) : (
                  texts.submit
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
