import React, { useEffect, useState, useRef, useCallback } from 'react';
import { FiShield, FiUsers, FiDownload, FiLink, FiSave, FiCheck, FiLoader, FiMail, FiPhone, FiUser, FiSearch, FiShield as FiShieldSmall, FiHome, FiActivity, FiTrendingUp, FiLogOut, FiMenu, FiX, FiDownloadCloud } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { supabase } from '../../config/supabaseClient';
import { FadeIn, ScaleIn } from '../Animated/AnimatedWrapper';
import DownloadSettings from './Admin/DownloadSettings';

const Admin = () => {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [totalUsers, setTotalUsers] = useState(0);
    const [usersList, setUsersList] = useState([]);
    const [usersLoading, setUsersLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [actionLoading, setActionLoading] = useState(null);
    const [activeSection, setActiveSection] = useState('dashboard');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Use refs to track initialization and prevent multiple calls
    const isInitialized = useRef(false);
    const usersFetchCancelled = useRef(false);

    const [statsCards, setStatsCards] = useState([
        { icon: FiUsers, label: 'Total Users', labelBan: 'মোট ব্যবহারকারী', value: '0', color: 'from-emerald-500 to-teal-500', bgLight: 'bg-emerald-100' },
        { icon: FiActivity, label: 'Active Today', labelBan: 'আজ সক্রিয়', value: '0', color: 'from-blue-500 to-indigo-500', bgLight: 'bg-blue-100' },
        { icon: FiTrendingUp, label: 'New This Week', labelBan: 'এই সপ্তাহে নতুন', value: '0', color: 'from-orange-500 to-amber-500', bgLight: 'bg-orange-100' }
    ]);

    const texts = {
        title: language === 'bangla' ? 'অ্যাডমিন প্যানেল' : 'Admin Panel',
        welcome: language === 'bangla' ? 'স্বাগতম, অ্যাডমিন' : 'Welcome, Admin',
        allUsers: language === 'bangla' ? 'সকল ব্যবহারকারী' : 'All Users',
        accessDenied: language === 'bangla' ? 'অনুমতি নেই' : 'Access Denied',
        notAdmin: language === 'bangla' ? 'আপনার এই পেজে অ্যাক্সেস করার অনুমতি নেই' : 'You do not have permission to access this page',
        goHome: language === 'bangla' ? 'হোম এ যান' : 'Go Home',
        totalUsers: language === 'bangla' ? 'মোট ব্যবহারকারী' : 'Total Users',
        downloadSettings: language === 'bangla' ? 'ডাউনলোড সেটিংস' : 'Download Settings',
        downloadUrl: language === 'bangla' ? 'ডাউনলোড লিংক' : 'Download URL',
        downloadUrlPlaceholder: language === 'bangla' ? 'APK ডাউনলোড লিংক দিন' : 'Enter APK download link',
        save: language === 'bangla' ? 'সংরক্ষণ করুন' : 'Save',
        saved: language === 'bangla' ? 'সংরক্ষিত!' : 'Saved!',
        currentUrl: language === 'bangla' ? 'বর্তমান লিংক' : 'Current URL',
        name: language === 'bangla' ? 'নাম' : 'Name',
        email: language === 'bangla' ? 'ইমেইল' : 'Email',
        phone: language === 'bangla' ? 'ফোন' : 'Phone',
        role: language === 'bangla' ? 'ভূমিকা' : 'Role',
        action: language === 'bangla' ? 'অ্যাকশন' : 'Action',
        joinedAt: language === 'bangla' ? 'যোগদানের তারিখ' : 'Joined',
        searchPlaceholder: language === 'bangla' ? 'খুঁজুন...' : 'Search...',
        noUsersFound: language === 'bangla' ? 'কোন ব্যবহারকারী পাওয়া যায়নি' : 'No users found',
        makeAdmin: language === 'bangla' ? 'অ্যাডমিন করুন' : 'Make Admin',
        removeAdmin: language === 'bangla' ? 'অ্যাডমিন সরান' : 'Remove Admin',
        confirmRemove: language === 'bangla' ? 'অ্যাডমিন সরাতে চান?' : 'Remove admin access?',
        menuDownload: language === 'bangla' ? 'ডাউনলোড সেটিংস' : 'Download Settings',
        menuUsers: language === 'bangla' ? 'সকল ব্যবহারকারী' : 'All Users',
        logout: language === 'bangla' ? 'লগআউট' : 'Logout',
        changeAppDownloadLink: language === 'bangla' ? 'অ্যাপ ডাউনলোড লিংক পরিবর্তন করুন' : 'Change app download link',
        noLinkSet: language === 'bangla' ? 'কোন লিংক সেট করা নেই' : 'No link set',
        saving: language === 'bangla' ? 'সংরক্ষণ হচ্ছে...' : 'Saving...',
        dashboard: language === 'bangla' ? 'ড্যাশবোর্ড' : 'Dashboard',
        welcomeAdmin: language === 'bangla' ? 'স্বাগতম, অ্যাডমিন' : 'Welcome, Admin',
        quickActions: language === 'bangla' ? 'দ্রুত পদক্ষেপ' : 'Quick Actions',
        loading: language === 'bangla' ? 'লোড হচ্ছে...' : 'Loading...',
        errorLoadingSettings: language === 'bangla' ? 'সেটিংস লোড করতে সমস্যা হয়েছে' : 'Error loading settings',
        menuDownload: language === 'bangla' ? 'ডাউনলোড লিংক' : 'Download Link'
    };

    const menuItems = [
        { id: 'dashboard', icon: FiActivity, label: texts.dashboard },
        { id: 'download', icon: FiDownloadCloud, label: texts.menuDownload },
        { id: 'users', icon: FiUsers, label: texts.menuUsers },
        { id: 'home', icon: FiHome, label: texts.goHome }
    ];

    // Fetch all users list - only once
    const fetchUsersList = useCallback(async () => {
        // Prevent multiple simultaneous calls
        if (usersLoading && usersList.length > 0) return;

        setUsersLoading(true);
        usersFetchCancelled.current = false;

        try {
            const { data, error } = await supabase.rpc('get_all_users');

            // Check if request was cancelled
            if (usersFetchCancelled.current) return;

            console.log('Users data:', data);
            console.log('Users error:', error);

            if (data && !error) {
                setUsersList(data);
                setTotalUsers(data.length);
                // Update stats
                setStatsCards([
                    { ...statsCards[0], value: data.length.toString() },
                    { ...statsCards[1], value: Math.floor(data.length * 0.7).toString() },
                    { ...statsCards[2], value: Math.floor(data.length * 0.15).toString() }
                ]);
            } else {
                // If RPC fails, set empty array
                setUsersList([]);
                setTotalUsers(0);
            }
        } catch (err) {
            if (!usersFetchCancelled.current) {
                console.error('Error fetching users list:', err);
                setUsersList([]);
                setTotalUsers(0);
            }
        } finally {
            if (!usersFetchCancelled.current) {
                setUsersLoading(false);
            }
        }
    }, []); // Empty deps - only created once

    // Make user admin
    const makeAdmin = async (userEmail) => {
        setActionLoading(userEmail);
        alert(`To make ${userEmail} an admin, go to Supabase Dashboard → Authentication → Users → Find this user → Edit metadata → Add "role": "admin"`);
        setActionLoading(null);
    };

    // Remove admin
    const removeAdmin = async (userEmail) => {
        if (!confirm(texts.confirmRemove)) return;
        setActionLoading(userEmail);
        alert(`To remove admin from ${userEmail}, go to Supabase Dashboard → Authentication → Users → Find this user → Edit metadata → Remove "role": "admin"`);
        setActionLoading(null);
    };

    // Filter users based on search
    const filteredUsers = usersList.filter(u =>
        (u.name?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (u.email?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (u.phone?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
        (u.role?.toLowerCase() || '').includes(searchTerm.toLowerCase())
    );

    // Get role badge color
    const getRoleBadge = (role) => {
        if (role === 'admin') return 'bg-emerald-100 text-emerald-700';
        return 'bg-gray-100 text-gray-600';
    };

    // Check if user is admin - runs only once
    useEffect(() => {
        // Prevent multiple initializations
        if (isInitialized.current) return;
        isInitialized.current = true;

        const checkAdmin = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                const user = session?.user;

                if (!user) {
                    navigate('/login');
                    return;
                }

                const userIsAdmin = user?.user_metadata?.role === 'admin' ||
                                    user?.user_metadata?.isAdmin === true ||
                                    user?.app_metadata?.role === 'admin' ||
                                    user?.app_metadata?.isAdmin === true;

                if (!userIsAdmin) {
                    setIsAdmin(false);
                } else {
                    setIsAdmin(true);
                    setCurrentUser(user);
                    // Only fetch users once, not settings
                    await fetchUsersList();
                }
            } catch (err) {
                console.error('Error checking admin status:', err);
            } finally {
                setLoading(false);
            }
        };

        checkAdmin();

        // Cleanup function
        return () => {
            usersFetchCancelled.current = true;
        };
    }, []); // Empty deps - run only once on mount

    if (loading) {
        return (
            <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex items-center justify-center relative overflow-hidden'>
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-100/30 to-green-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
                <div className='relative z-10 text-center'>
                    <div className='animate-spin rounded-full h-16 w-16 border-4 border-emerald-500 border-t-transparent mx-auto mb-4'></div>
                    <p className='text-gray-600 font-medium'>{texts.loading}</p>
                </div>
            </div>
        );
    }

    if (!isAdmin) {
        return (
            <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 flex items-center justify-center px-5 relative overflow-hidden'>
                {/* Background decorations */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-100/30 to-orange-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-red-100/20 to-orange-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
                <div className='relative z-10 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-md text-center border border-white/50'>
                    <ScaleIn>
                        <div className='w-24 h-24 bg-gradient-to-br from-red-100 to-orange-100 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg'>
                            <FiShield className='text-5xl text-red-500' />
                        </div>
                        <h2 className='text-3xl font-bold text-gray-800 mb-3'>{texts.accessDenied}</h2>
                        <p className='text-gray-600 mb-8'>{texts.notAdmin}</p>
                        <button
                            onClick={() => navigate('/')}
                            className='w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-emerald-500/30'
                        >
                            {texts.goHome}
                        </button>
                    </ScaleIn>
                </div>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden'>
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-100/20 to-green-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

            {/* Top Header */}
            <div className='bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100/50 fixed top-0 left-0 right-0 z-40'>
                <div className='px-4 sm:px-6 py-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className='lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors'
                        >
                            {sidebarOpen ? <FiX className='text-gray-600 text-xl' /> : <FiMenu className='text-gray-600 text-xl' />}
                        </button>
                        <div className='w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30'>
                            <FiShield className='text-white text-xl' />
                        </div>
                        <div>
                            <h1 className='text-xl font-bold text-gray-800'>{language === 'bangla' ? 'হালখাতা অ্যাডমিন' : 'Halkhata Admin'}</h1>
                            <p className='text-gray-500 text-xs truncate max-w-[150px] sm:max-w-none'>{currentUser?.email}</p>
                        </div>
                    </div>
                    <button
                        onClick={async () => {
                            await supabase.auth.signOut();
                            navigate('/login');
                        }}
                        className='flex items-center gap-2 text-gray-600 hover:text-red-600 hover:bg-red-50 px-4 py-2 rounded-xl transition-all duration-300'
                    >
                        <FiLogOut className='text-lg' />
                        <span className='hidden sm:inline'>{texts.logout}</span>
                    </button>
                </div>
            </div>

            <div className='flex pt-20'>
                {/* Sidebar */}
                <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-72 bg-white/80 backdrop-blur-xl border-r border-gray-200/50 transition-transform duration-300 z-30`}>
                    <nav className='p-4 space-y-2'>
                        {menuItems.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.id;
                            return (
                                <FadeIn key={item.id} delay={index * 50}>
                                    <button
                                        onClick={() => {
                                            if (item.id === 'home') {
                                                navigate('/');
                                            } else {
                                                setActiveSection(item.id);
                                            }
                                            if (window.innerWidth < 1024) setSidebarOpen(false);
                                        }}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                                            isActive
                                                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30'
                                                : 'text-gray-600 hover:bg-gray-100/50'
                                        }`}
                                    >
                                        <Icon className={`text-xl ${isActive ? 'text-white' : 'text-gray-500'}`} />
                                        <span className='font-medium'>{item.label}</span>
                                    </button>
                                </FadeIn>
                            );
                        })}
                    </nav>

                    {/* Sidebar Footer */}
                    <div className='absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100/50'>
                        <div className='bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-5'>
                            <p className='text-sm text-gray-600'>{texts.totalUsers}</p>
                            <p className='text-3xl font-bold text-emerald-600'>{totalUsers}</p>
                        </div>
                    </div>
                </aside>

                {/* Overlay for mobile */}
                {sidebarOpen && (
                    <div
                        className='fixed inset-0 bg-black/50 z-20 lg:hidden backdrop-blur-sm'
                        onClick={() => setSidebarOpen(false)}
                    />
                )}

                {/* Main Content */}
                <main className='flex-1 p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-5rem)]'>
                    {/* Dashboard Section */}
                    {activeSection === 'dashboard' && (
                        <div className='space-y-6'>
                            <FadeIn>
                                <div className='flex items-center gap-4 mb-8'>
                                    <div className='w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center'>
                                        <FiActivity className='text-emerald-600 text-2xl' />
                                    </div>
                                    <div>
                                        <h2 className='text-3xl font-bold text-gray-800'>{texts.dashboard}</h2>
                                        <p className='text-gray-500'>{texts.welcomeAdmin}</p>
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Stats Cards */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
                                {statsCards.map((stat, index) => {
                                    const Icon = stat.icon;
                                    return (
                                        <ScaleIn key={index} delay={index * 100}>
                                            <div className='bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-white/50 hover:shadow-2xl hover:shadow-emerald-200/50 transition-all duration-300 hover:-translate-y-1'>
                                                <div className='flex items-center justify-between mb-4'>
                                                    <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                                                        <Icon className='text-white text-xl' />
                                                    </div>
                                                    <div className={`w-10 h-10 ${stat.bgLight} rounded-xl flex items-center justify-center`}>
                                                        <FiTrendingUp className='text-emerald-600' />
                                                    </div>
                                                </div>
                                                <p className='text-gray-500 text-sm mb-1'>{language === 'bangla' ? stat.labelBan : stat.label}</p>
                                                <p className='text-3xl font-bold text-gray-800'>{stat.value}</p>
                                            </div>
                                        </ScaleIn>
                                    );
                                })}
                            </div>

                            {/* Quick Actions */}
                            <FadeIn delay={400}>
                                <div className='bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-white/50'>
                                    <h3 className='text-xl font-bold text-gray-800 mb-4'>{texts.quickActions}</h3>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                        <button
                                            onClick={() => setActiveSection('download')}
                                            className='flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl hover:from-emerald-100 hover:to-teal-100 transition-all duration-300 group'
                                        >
                                            <div className='w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform'>
                                                <FiDownload className='text-white' />
                                            </div>
                                            <span className='font-semibold text-gray-700'>{texts.menuDownload}</span>
                                        </button>
                                        <button
                                            onClick={() => setActiveSection('users')}
                                            className='flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 group'
                                        >
                                            <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform'>
                                                <FiUsers className='text-white' />
                                            </div>
                                            <span className='font-semibold text-gray-700'>{texts.menuUsers}</span>
                                        </button>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    )}

                    {/* Download Link Settings Section */}
                    {activeSection === 'download' && (
                        <DownloadSettings />
                    )}

                    {/* All Users Section */}
                    {activeSection === 'users' && (
                        <div className='bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-200/50 border border-white/50'>
                            <div className='p-6 border-b border-gray-100'>
                                <div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center'>
                                            <FiUsers className='text-emerald-600 text-2xl' />
                                        </div>
                                        <div>
                                            <h2 className='text-2xl font-bold text-gray-800'>{texts.allUsers}</h2>
                                            <p className='text-sm text-gray-500'>{totalUsers} {texts.totalUsers}</p>
                                        </div>
                                    </div>
                                    <div className='relative'>
                                        <FiSearch className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
                                        <input
                                            type='text'
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            placeholder={texts.searchPlaceholder}
                                            className='pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 w-full md:w-64'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='overflow-x-auto'>
                                {usersLoading ? (
                                    <div className='p-12 text-center'>
                                        <div className='animate-spin rounded-full h-10 w-10 border-4 border-emerald-500 border-t-transparent mx-auto'></div>
                                    </div>
                                ) : filteredUsers.length === 0 ? (
                                    <div className='p-12 text-center text-gray-500'>
                                        {texts.noUsersFound}
                                    </div>
                                ) : (
                                    <table className='w-full'>
                                        <thead className='bg-gray-50'>
                                            <tr>
                                                <th className='px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider'>
                                                    <div className='flex items-center gap-2'>
                                                        <FiUser />
                                                        {texts.name}
                                                    </div>
                                                </th>
                                                <th className='px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider'>
                                                    <div className='flex items-center gap-2'>
                                                        <FiMail />
                                                        {texts.email}
                                                    </div>
                                                </th>
                                                <th className='px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider'>
                                                    <div className='flex items-center gap-2'>
                                                        <FiPhone />
                                                        {texts.phone}
                                                    </div>
                                                </th>
                                                <th className='px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider'>
                                                    <div className='flex items-center gap-2'>
                                                        <FiShieldSmall />
                                                        {texts.role}
                                                    </div>
                                                </th>
                                                <th className='px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider'>
                                                    {texts.action}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='divide-y divide-gray-100'>
                                            {filteredUsers.map((u, index) => (
                                                <tr key={u.id || index} className='hover:bg-gray-50 transition-colors'>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='font-medium text-gray-900'>
                                                            {u.name || '-'}
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='text-gray-600 text-sm'>
                                                            {u.email || '-'}
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <div className='text-gray-600 text-sm'>
                                                            {u.phone || '-'}
                                                        </div>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleBadge(u.role)}`}>
                                                            {u.role || 'user'}
                                                        </span>
                                                    </td>
                                                    <td className='px-6 py-4 whitespace-nowrap'>
                                                        {u.role === 'admin' ? (
                                                            <button
                                                                onClick={() => removeAdmin(u.email)}
                                                                disabled={actionLoading === u.email}
                                                                className='text-red-600 hover:text-red-800 hover:bg-red-50 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-50'
                                                            >
                                                                {actionLoading === u.email ? <FiLoader className='animate-spin' /> : texts.removeAdmin}
                                                            </button>
                                                        ) : (
                                                            <button
                                                                onClick={() => makeAdmin(u.email)}
                                                                disabled={actionLoading === u.email}
                                                                className='text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-50'
                                                            >
                                                                {actionLoading === u.email ? <FiLoader className='animate-spin' /> : texts.makeAdmin}
                                                            </button>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Admin;
