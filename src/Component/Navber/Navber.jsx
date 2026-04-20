import React, { useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { FiDownload, FiLogIn, FiLogOut, FiShield } from 'react-icons/fi'
import { NavLink, useNavigate } from '@/compat/react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { useSettings } from '../../context/SettingsContext'
import { supabase } from '../../config/supabaseClient'

function Navber() {
    const { language } = useLanguage();
    const { downloadUrl } = useSettings();
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [user, setUser] = useState(null)
    const [isAdmin, setIsAdmin] = useState(false)

    const texts = {
        brandName: language === 'bangla' ? 'হালখাতা' : 'Halkhata',
        home: language === 'bangla' ? 'হোম' : 'Home',
        features: language === 'bangla' ? 'ফিচারস' : 'Features',
        extraIncome: language === 'bangla' ? 'অতিরিক্ত আয়' : 'Extra Income',
        contact: language === 'bangla' ? 'যোগাযোগ' : 'Contact',
        download: language === 'bangla' ? 'ডাউনলোড' : 'Download',
        downloadApp: language === 'bangla' ? 'অ্যাপ ডাউনলোড করুন' : 'Download App',
        login: language === 'bangla' ? 'লগইন' : 'Login',
        logout: language === 'bangla' ? 'লগআউট' : 'Logout',
        adminPanel: language === 'bangla' ? 'অ্যাডমিন প্যানেল' : 'Admin Panel'
    };

    // Check authentication state
    useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            const currentUser = session?.user ?? null
            setUser(currentUser)
            // Check if user is admin
            const adminStatus = currentUser?.user_metadata?.role === 'admin' ||
                                currentUser?.user_metadata?.isAdmin === true ||
                                currentUser?.app_metadata?.role === 'admin' ||
                                currentUser?.app_metadata?.isAdmin === true
            setIsAdmin(adminStatus)
        })

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            const currentUser = session?.user ?? null
            setUser(currentUser)
            // Check if user is admin
            const adminStatus = currentUser?.user_metadata?.role === 'admin' ||
                                currentUser?.user_metadata?.isAdmin === true ||
                                currentUser?.app_metadata?.role === 'admin' ||
                                currentUser?.app_metadata?.isAdmin === true
            setIsAdmin(adminStatus)
        })

        return () => subscription.unsubscribe()
    }, [])

    // Detect scroll for navbar background change
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (menu) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [menu])

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') setMenu(false)
        }
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [])

    const handleLinkClick = () => {
        setMenu(false)
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
        setMenu(false)
        navigate('/login')
    }

    return (
        <>
            {/* Spacer for fixed navbar */}
            <div className="h-[72px]"></div>

            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-green-900/5' : 'bg-transparent'}`}>
                <nav className='flex justify-between items-center max-w-[1500px] mx-auto px-5 md:px-10 lg:px-15 py-4'>
                    {/* Logo */}
                    <NavLink to='/' className='flex items-center gap-2'>
                        {/* <div className='w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-md'>
                            <span className='text-white font-bold text-lg'>{language === 'bangla' ? 'হ' : 'H'}</span>
                        </div> */}
                        <h2 className='text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
                            {texts.brandName}
                        </h2>
                    </NavLink>

                    {/* Desktop Menu */}
                    <ul className='hidden md:flex justify-center items-center gap-1'>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-full font-medium transition-all duration-300 ${isActive
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                                    }`
                                }
                            >
                                {texts.home}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/features'
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-full font-medium transition-all duration-300 ${isActive
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                                    }`
                                }
                            >
                                {texts.features}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/extraincome'
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-full font-medium transition-all duration-300 ${isActive
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                                    }`
                                }
                            >
                                {texts.extraIncome}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/contact'
                                className={({ isActive }) =>
                                    `px-4 py-2 rounded-full font-medium transition-all duration-300 ${isActive
                                        ? 'bg-emerald-100 text-emerald-700'
                                        : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
                                    }`
                                }
                            >
                                {texts.contact}
                            </NavLink>
                        </li>
                        {isAdmin && (
                            <li>
                                <NavLink
                                    to='/admin'
                                    className={({ isActive }) =>
                                        `px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${isActive
                                            ? 'bg-purple-100 text-purple-700'
                                            : 'text-purple-600 hover:text-purple-700 hover:bg-purple-50'
                                        }`
                                    }
                                >
                                    <FiShield />
                                    {texts.adminPanel}
                                </NavLink>
                            </li>
                        )}
                    </ul>

                    {/* Download & Login/Logout Buttons */}
                    <div className='hidden md:flex items-center gap-2'>
                        <a href={downloadUrl} download className='flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:-translate-y-0.5'>
                            <FiDownload className='text-lg' />
                            {texts.download}
                        </a>
                        {user ? (
                            <button onClick={handleLogout} className='flex items-center gap-2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:-translate-y-0.5'>
                                <FiLogOut className='text-lg' />
                                {texts.logout}
                            </button>
                        ) : (
                            <NavLink to='/login' className='flex items-center gap-2 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold px-5 py-2 rounded-full transition-all duration-300 hover:-translate-y-0.5'>
                                <FiLogIn className='text-lg' />
                                {texts.login}
                            </NavLink>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenu(true)}
                        className='md:hidden cursor-pointer text-2xl p-2 text-gray-700 hover:text-emerald-600 transition-all duration-300 hover:bg-emerald-50 rounded-xl'
                        aria-label='Open menu'
                    >
                        <GiHamburgerMenu />
                    </button>
                </nav>
            </div>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${menu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setMenu(false)}
            />

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 md:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${menu ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Mobile Menu Header */}
                <div className='p-5 flex justify-between items-center border-b border-gray-100'>
                    <div className='flex items-center gap-2'>
                        <div className='w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center'>
                            <span className='text-white font-bold text-sm'>{language === 'bangla' ? 'হ' : 'H'}</span>
                        </div>
                        <span className='font-bold text-lg bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
                            {texts.brandName}
                        </span>
                    </div>
                    <button
                        onClick={() => setMenu(false)}
                        className='text-2xl text-gray-500 hover:text-emerald-600 cursor-pointer p-2 transition-all duration-300 hover:bg-emerald-50 rounded-xl hover:rotate-90'
                        aria-label='Close menu'
                    >
                        <RxCross2 />
                    </button>
                </div>

                {/* Mobile Menu Links */}
                <ul className='px-5 py-6 flex flex-col gap-2'>
                    <li>
                        <NavLink
                            onClick={handleLinkClick}
                            to='/'
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive
                                    ? 'bg-emerald-100 text-emerald-700'
                                    : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                                }`
                            }
                        >
                            {texts.home}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={handleLinkClick}
                            to='/features'
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive
                                    ? 'bg-emerald-100 text-emerald-700'
                                    : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                                }`
                            }
                        >
                            {texts.features}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={handleLinkClick}
                            to='/extraincome'
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive
                                    ? 'bg-emerald-100 text-emerald-700'
                                    : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                                }`
                            }
                        >
                            {texts.extraIncome}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            onClick={handleLinkClick}
                            to='/contact'
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive
                                    ? 'bg-emerald-100 text-emerald-700'
                                    : 'text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
                                }`
                            }
                        >
                            {texts.contact}
                        </NavLink>
                    </li>
                    {isAdmin && (
                        <li>
                            <NavLink
                                onClick={handleLinkClick}
                                to='/admin'
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive
                                        ? 'bg-purple-100 text-purple-700'
                                        : 'text-purple-600 hover:bg-purple-50 hover:text-purple-700'
                                    }`
                                }
                            >
                                <FiShield />
                                {texts.adminPanel}
                            </NavLink>
                        </li>
                    )}
                    <li className='mt-4 pt-4 border-t border-gray-100'>
                        <a
                            href={downloadUrl}
                            download
                            onClick={handleLinkClick}
                            className='w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-5 py-3 rounded-xl transition-all duration-300'
                        >
                            <FiDownload className='text-lg' />
                            {texts.downloadApp}
                        </a>
                    </li>
                    <li>
                        {user ? (
                            <button
                                onClick={handleLogout}
                                className='w-full flex items-center justify-center gap-2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold px-5 py-3 rounded-xl transition-all duration-300'
                            >
                                <FiLogOut className='text-lg' />
                                {texts.logout}
                            </button>
                        ) : (
                            <NavLink
                                onClick={handleLinkClick}
                                to='/login'
                                className='w-full flex items-center justify-center gap-2 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white font-semibold px-5 py-3 rounded-xl transition-all duration-300'
                            >
                                <FiLogIn className='text-lg' />
                                {texts.login}
                            </NavLink>
                        )}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navber
