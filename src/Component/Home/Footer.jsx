import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import { CiMobile1 } from 'react-icons/ci'
import { IoMdTime } from 'react-icons/io'
import { IoLocationOutline, IoPeopleOutline } from 'react-icons/io5'
import { MdOutlineAccessTime, MdLanguage } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import { Link } from '@/compat/react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

function Footer() {
  const { language, setLanguage } = useLanguage()
  return (
    <div className='bg-gradient-to-b from-gray-900 to-[#0a0f1a]'>
      <div className='max-w-[1480px] mx-auto px-5 md:px-15'>
        <div className='md:flex justify-between border-b py-20 border-gray-700/50 space-y-10 md:space-y-0'>
          <div className='space-y-4'>
            <h2 className='text-white text-2xl md:text-3xl font-bold tracking-wide bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent animate-pulse'>Halkhata</h2>
            <p className='text-gray-400 font-medium w-[350px] md:w-[280px] leading-relaxed'>ব্যবসা বাড়ানোর ১ নম্বর অ্যাপ - বিক্রয়, স্টক, হিসাব সব এক জায়গায়, সাথে আয় বৃদ্ধির সুযোগ।</p>
             {/* Language Switcher */}
          <div className='flex items-center gap-3 pt-5 '>
            <MdLanguage className='text-emerald-400 text-xl' />
            <div className='flex bg-gray-800/50 rounded-full p-1 border border-gray-700/50'>
              <button
                onClick={() => setLanguage('bangla')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${language === 'bangla'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'text-gray-400 hover:text-white'
                }`}
              >
                বাংলা
              </button>
              <button
                onClick={() => setLanguage('english')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${language === 'english'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                  : 'text-gray-400 hover:text-white'
                }`}
              >
                English
              </button>
            </div>
          </div>
          </div>
          <div className='space-y-4'>
            <h2 className='text-xl font-bold text-white mb-6'>Quick Links</h2>
            <p className='text-lg font-medium text-gray-400 hover:text-emerald-400 transition-all duration-300 cursor-pointer hover:translate-x-1 hover:underline decoration-emerald-400 underline-offset-4'><Link to='/'>Home</Link></p>
            <p className='text-lg font-medium text-gray-400 hover:text-emerald-400 transition-all duration-300 cursor-pointer hover:translate-x-1 hover:underline decoration-emerald-400 underline-offset-4'><Link to='/features'>Features</Link></p>
            <p className='text-lg font-medium text-gray-400 hover:text-emerald-400 transition-all duration-300 cursor-pointer hover:translate-x-1 hover:underline decoration-emerald-400 underline-offset-4'><Link to='/extraincome'>Extra Income</Link></p>
            <p className='text-lg font-medium text-gray-400 hover:text-emerald-400 transition-all duration-300 cursor-pointer hover:translate-x-1 hover:underline decoration-emerald-400 underline-offset-4'><Link to='/contact'>Contact</Link></p>
          </div>
          <div className='space-y-4'>
            <h2 className='text-xl font-bold text-white mb-6'>Busniess Solution</h2>
            <div className='space-y-4'>
              <Link to='/growthpartner'>
                <div className='flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-all duration-300 cursor-pointer hover:translate-x-1 group'>
                  <span className='text-lg group-hover:rotate-12 transition-transform duration-300'><IoPeopleOutline /></span>
                  <p className='text-lg font-medium group-hover:underline decoration-emerald-400 underline-offset-4'>Growth Partner</p>
                </div>
              </Link>
              <div className='flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-all duration-300 cursor-pointer hover:translate-x-1 group'>
                <span className='text-lg font-medium group-hover:scale-110 transition-transform duration-300'><CiMobile1 /></span>
                <p className='text-lg font-medium group-hover:underline decoration-emerald-400 underline-offset-4'>Halkhata App Store</p>
              </div>
            </div>
          </div>
          <div className='space-y-4'>
            <h2 className='text-xl font-bold text-white mb-6'>Contact</h2>
            <div className='flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-all duration-300 cursor-pointer hover:translate-x-1 group'>
              <span className='text-lg font-medium group-hover:rotate-12 transition-transform duration-300'><BsFillTelephoneFill /></span>
              <p className='text-lg group-hover:underline decoration-emerald-400 underline-offset-4'>+8809649 132 132</p>
            </div>
            <div className='flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-all duration-300 cursor-pointer hover:translate-x-1 group'>
              <span className='text-lg font-medium group-hover:scale-110 transition-transform duration-300'><CgMail /></span>
              <p className='text-lg group-hover:underline decoration-emerald-400 underline-offset-4'>Halkhata.grow@gmail.com</p>
            </div>
            <div className='flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-all duration-300 cursor-pointer hover:translate-x-1 group'>
              <span className='text-lg font-medium group-hover:-translate-y-1 transition-transform duration-300'><IoLocationOutline /></span>
              <p className='text-lg group-hover:underline decoration-emerald-400 underline-offset-4'>Jugidor, Moulvibazar, Sylhet, Bangladesh</p>
            </div>
            <div className='flex items-center gap-3 text-emerald-400 transition-all duration-300 cursor-pointer hover:translate-x-1 group'>
              <span className='text-lg font-medium group-hover:animate-spin'><IoMdTime /></span>
              <p className='text-lg font-medium'>24/7 Support</p>
              <span className='w-2 h-2 bg-emerald-400 rounded-full animate-pulse'></span>
            </div>
            <a href='https://www.facebook.com/profile.php?id=61587249475784' target='_blank' rel='noopener noreferrer' className='flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-all duration-300 cursor-pointer hover:translate-x-1 group'>
              <span className='text-2xl font-medium group-hover:scale-110 transition-transform duration-300'><FaFacebook /></span>
              <p className='text-lg font-medium group-hover:underline decoration-emerald-400 underline-offset-4'>Follow us on Facebook</p>
            </a>
          </div>
        </div>
        <div className='md:flex text-center md:justify-between items-center py-7 border-t border-gray-700/50'>
          <p className='text-gray-400 hover:text-white transition-all duration-300 cursor-pointer'>© 2026 Halkhata. All rights reserved.</p>

         

          <h2 className='text-gray-400'>Developed by <a className='font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent hover:opacity-80 hover:scale-105 transition-all duration-300 inline-block' href="http://www.wavezly.com/">Wavezly</a></h2>
        </div>
      </div>
    </div>
  )
}

export default Footer
