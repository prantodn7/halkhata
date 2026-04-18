import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { FaCheckCircle } from 'react-icons/fa'
import { HiArrowRight, HiLightningBolt } from 'react-icons/hi'
import { FadeIn, SlideLeft, SlideRight } from '../Animated/AnimatedWrapper'
import { useLanguage } from '../../context/LanguageContext'

const concerns = [
    {
        id: 1,
        title: 'Paper ledgers get lost or damaged',
        description: 'If the paper ledger is damaged or lost, all your accounts are gone forever.'
    },
    {
        id: 2,
        title: 'Hard to track customer dues',
        description: 'Manually remembering who owes what leads to missed payments and disputes.'
    },
    {
        id: 3,
        title: 'No clear picture of profit/loss',
        description: 'Without proper reports, you never know if your business is actually profitable.'
    }
];

const concernsban = [
    {
        id: 1,
        title: 'কাগজের হিসাব হারিয়ে যায় বা নষ্ট হয়',
        description: 'কাগজের খাতা নষ্ট বা হারিয়ে গেলে আপনার সব হিসাব চিরতরে চলে যায়।'
    },
    {
        id: 2,
        title: 'গ্রাহকের বকেয়া ট্র্যাক করা কঠিন',
        description: 'কে কত টাকা পায় তা মনে রাখা কঠিন, যার ফলে পেমেন্ট মিস হয় ও বিবাদ হয়।'
    },
    {
        id: 3,
        title: 'লাভ-ক্ষতির সঠিক ধারণা নেই',
        description: 'সঠিক রিপোর্ট না থাকলে বোঝা যায় না আপনার ব্যবসা আসলে লাভজনক কি না।'
    }
];

const solutions = [
    {
        id: 1,
        title: 'Cloud backup, never lose data',
        description: 'Your accounts are safely stored online — accessible anytime, anywhere.'
    },
    {
        id: 2,
        title: 'Auto reminders for easy collection',
        description: 'Automatic SMS/WhatsApp reminders help you collect dues on time.'
    },
    {
        id: 3,
        title: 'Smart reports at a glance',
        description: 'Daily and monthly reports show your exact profit, loss, and business health.'
    }
];

const solutionsban = [
    {
        id: 1,
        title: 'ক্লাউড ব্যাকআপ, কখনো ডাটা হারাবে না',
        description: 'আপনার হিসাব নিরাপদে অনলাইনে সংরক্ষিত — যেকোনো সময়, যেকোনো জায়গা থেকে অ্যাক্সেস করুন।'
    },
    {
        id: 2,
        title: 'সহজ আদায়ের জন্য অটো রিমাইন্ডার',
        description: 'স্বয়ংক্রিয় এসএমএস/হোয়াটসঅ্যাপ রিমাইন্ডার সময়মতো বকেয়া আদায়ে সাহায্য করে।'
    },
    {
        id: 3,
        title: 'এক নজরে স্মার্ট রিপোর্ট',
        description: 'দৈনিক ও মাসিক রিপোর্টে আপনার প্রকৃত লাভ, ক্ষতি ও ব্যবসার অবস্থা দেখুন।'
    }
];

const comparisonData = [
    {
        feature: 'Language Support',
        halkhata: { status: true, text: 'Bangla & English' },
        paper: { status: false, text: 'Manual only' },
        others: { status: false, text: 'Limited or none' }
    },
    {
        feature: 'Extra Income',
        halkhata: { status: true, text: 'Earn without capital' },
        paper: { status: false, text: 'Just a shop' },
        others: { status: false, text: 'Limited options' }
    },
    {
        feature: '24/7 Support',
        halkhata: { status: true, text: 'Always available' },
        paper: { status: false, text: 'No support' },
        others: { status: 'partial', text: 'Limited hours' }
    },
    {
        feature: 'Works Offline',
        halkhata: { status: true, text: 'Full offline mode' },
        paper: { status: true, text: 'Paper is offline' },
        others: { status: false, text: 'Internet required' }
    },
    {
        feature: 'Data Security',
        halkhata: { status: true, text: 'Encrypted & backed up' },
        paper: { status: false, text: 'Can be lost/stolen' },
        others: { status: 'partial', text: 'Varies by app' }
    }
];

const comparisonDataban = [
    {
        feature: 'ভাষা সমর্থন',
        halkhata: { status: true, text: 'বাংলা ও ইংরেজি' },
        paper: { status: false, text: 'শুধু ম্যানুয়াল' },
        others: { status: false, text: 'সীমিত বা নেই' }
    },
    {
        feature: 'অতিরিক্ত আয়',
        halkhata: { status: true, text: 'পুঁজি ছাড়াই আয়' },
        paper: { status: false, text: 'শুধু দোকান' },
        others: { status: false, text: 'সীমিত অপশন' }
    },
    {
        feature: '২৪/৭ সাপোর্ট',
        halkhata: { status: true, text: 'সবসময় উপলব্ধ' },
        paper: { status: false, text: 'কোনো সাপোর্ট নেই' },
        others: { status: 'partial', text: 'সীমিত সময়' }
    },
    {
        feature: 'অফলাইনে কাজ করে',
        halkhata: { status: true, text: 'পূর্ণ অফলাইন মোড' },
        paper: { status: true, text: 'কাগজ অফলাইন' },
        others: { status: false, text: 'ইন্টারনেট লাগবে' }
    },
    {
        feature: 'ডাটা নিরাপত্তা',
        halkhata: { status: true, text: 'এনক্রিপ্ট ও ব্যাকআপ' },
        paper: { status: false, text: 'হারাতে পারে' },
        others: { status: 'partial', text: 'অ্যাপ ভেদে ভিন্ন' }
    }
];

const StatusIcon = ({ status }) => {
    if (status === true) {
        return (
            <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                <FaCheckCircle className='text-emerald-500 text-sm' />
            </div>
        );
    } else if (status === false) {
        return (
            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                <RxCross1 className='text-red-500 text-xs font-bold' />
            </div>
        );
    }
    return (
        <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
            <span className='text-amber-600 text-xs font-bold'>~</span>
        </div>
    );
};

function Compare() {
    const { language } = useLanguage();

    const concernsData = language === 'bangla' ? concernsban : concerns;
    const solutionsData = language === 'bangla' ? solutionsban : solutions;
    const comparisonDataCurrent = language === 'bangla' ? comparisonDataban : comparisonData;

    // Static text translations
    const texts = {
        brandName: language === 'bangla' ? 'হালখাতা' : 'Halkhata',
        smartSolutions: language === 'bangla' ? 'স্মার্ট সমাধান' : 'Smart Solutions',
        howWillGrow: language === 'bangla' ? 'হালখাতা কীভাবে আপনার ব্যবসাকে বড় করবে?' : 'How will',
        yourBusiness: language === 'bangla' ? '' : 'your business?',
        manageBusiness: language === 'bangla' ? 'আপনার ব্যবসার প্রতিটি দিক স্মার্টভাবে পরিচালনা করুন। রিয়েল-টাইম রিপোর্ট দিয়ে সঠিক সিদ্ধান্ত নিন।' : 'Manage every aspect of your business smartly. Make informed decisions with real-time reports.',
        areTheseConcerns: language === 'bangla' ? 'এগুলো কি আপনার সমস্যা?' : 'Are these your concerns?',
        halkhataHasSolution: language === 'bangla' ? 'এর সমাধান আছে!' : 'has the solution!',
        whyChooseUs: language === 'bangla' ? 'কেন বেছে নেবেন' : 'Why Choose Us',
        vsOthers: language === 'bangla' ? 'বনাম অন্যান্য' : 'vs Others',
        seeWhyChoose: language === 'bangla' ? 'দেখুন কেন হাজার হাজার ব্যবসা বেছে নেয়' : 'See why thousands of businesses choose',
        features: language === 'bangla' ? 'ফিচারসমূহ' : 'Features',
        penAndPaper: language === 'bangla' ? 'কলম ও কাগজ' : 'Pen & Paper',
        otherApps: language === 'bangla' ? 'অন্যান্য অ্যাপ' : 'Other Apps'
    };

    return (
        <section className='relative bg-gradient-to-b from-white via-green-50/50 to-green-50 overflow-hidden'>
            {/* Background decorations */}
            <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-br from-emerald-100/40 to-teal-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-green-100/50 to-emerald-100/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-teal-50/30 rounded-full blur-3xl -translate-x-1/2"></div>

            {/* Floating shapes with subtle animations */}
            <div className="absolute top-40 left-20 w-14 h-14 bg-emerald-200/30 rounded-2xl rotate-12 animate-float"></div>
            <div className="absolute top-60 right-16 w-10 h-10 bg-green-200/40 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-80 right-1/4 w-8 h-8 bg-teal-200/30 rounded-lg rotate-45 animate-float" style={{ animationDelay: '3s' }}></div>

            <div className='relative max-w-[1380px] mx-auto px-5 md:px-10 lg:px-15 py-20 lg:py-28'>
                {/* Header */}
                <FadeIn>
                    <div className='text-center mb-16'>
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm border border-green-100 transition-smooth hover:bg-emerald-50">
                            <HiLightningBolt className="text-amber-500" />
                            {texts.smartSolutions}
                        </div>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5'>
                            {texts.howWillGrow} <span className='bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>{texts.brandName}</span>{language === 'english' && ' grow'}
                            <span className="block">{texts.yourBusiness}</span>
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                            {texts.manageBusiness}
                        </p>
                    </div>
                </FadeIn>

                {/* Concerns vs Solutions */}
                <div className='grid md:grid-cols-2 gap-8 lg:gap-10 mb-24'>
                    {/* Concerns - Left Side */}
                    <SlideLeft delay={200}>
                        <div className='relative bg-gradient-to-br from-red-50 to-rose-50/50 rounded-3xl p-7 md:p-8 border border-red-100/50 shadow-lg shadow-red-900/5 h-full'>
                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-100/50 rounded-2xl rotate-12 blur-sm"></div>
                            <h3 className='relative text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3'>
                                <span className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                                    <RxCross1 className="text-red-500" />
                                </span>
                                {texts.areTheseConcerns}
                            </h3>
                            <div className='space-y-5'>
                                {concernsData.map((item) => (
                                    <div key={item.id} className='group flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-red-100/30 transition-smooth hover:shadow-lg hover:shadow-red-900/5 hover:-translate-y-1'>
                                        <div className='bg-gradient-to-br from-red-500 to-rose-500 text-white p-3 rounded-xl flex-shrink-0 shadow-md transition-smooth group-hover:scale-110'>
                                            <RxCross1 className='text-lg' />
                                        </div>
                                        <div>
                                            <h4 className='text-lg font-bold text-gray-900 mb-1'>{item.title}</h4>
                                            <p className='text-gray-600 leading-relaxed'>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SlideLeft>

                    {/* Solutions - Right Side */}
                    <SlideRight delay={300}>
                        <div className='relative bg-gradient-to-br from-green-50 to-emerald-50/50 rounded-3xl p-7 md:p-8 border border-green-100/50 shadow-lg shadow-green-900/5 h-full'>
                            <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-100/50 rounded-2xl -rotate-12 blur-sm"></div>
                            <h3 className='relative text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3'>
                                <span className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                                    <FaCheckCircle className="text-emerald-500" />
                                </span>
                                <span className='bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>{texts.brandName}</span>
                                <span className='text-gray-900'>{texts.halkhataHasSolution}</span>
                            </h3>
                            <div className='space-y-5'>
                                {solutionsData.map((item) => (
                                    <div key={item.id} className='group flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-green-100/30 transition-smooth hover:shadow-lg hover:shadow-green-900/5 hover:-translate-y-1'>
                                        <div className='bg-gradient-to-br from-emerald-500 to-teal-500 text-white p-3 rounded-xl flex-shrink-0 shadow-md transition-smooth group-hover:scale-110'>
                                            <FaCheckCircle className='text-lg' />
                                        </div>
                                        <div>
                                            <h4 className='text-lg font-bold text-gray-900 mb-1'>{item.title}</h4>
                                            <p className='text-gray-600 leading-relaxed'>{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SlideRight>
                </div>

                {/* Comparison Table Section */}
                <FadeIn delay={400}>
                    <div>
                        <div className='text-center mb-12'>
                            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm border border-green-100 transition-smooth hover:bg-emerald-50">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-soft"></span>
                                {texts.whyChooseUs}
                            </div>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
                                <span className='bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>{texts.brandName}</span>
                                <span className='text-gray-900'> {texts.vsOthers}</span>
                            </h2>
                            <p className='text-lg text-gray-600'>
                                {texts.seeWhyChoose} <span className='font-semibold text-emerald-600'>{texts.brandName}</span>
                            </p>
                        </div>

                        {/* Comparison Table */}
                        <div className='overflow-x-auto rounded-3xl border border-green-100/50 shadow-xl shadow-green-900/5 bg-white/80 backdrop-blur-sm'>
                            <table className='w-full'>
                                <thead>
                                    <tr className='bg-gradient-to-r from-green-50 to-emerald-50'>
                                        <th className='text-left py-6 px-6 text-base font-bold text-gray-700 min-w-[160px]'>
                                            {texts.features}
                                        </th>
                                        <th className='text-start py-6 px-4 min-w-[160px]'>
                                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                                                <HiLightningBolt />
                                                {texts.brandName}
                                            </div>
                                        </th>
                                        <th className='text-start py-6 px-4 text-base font-bold text-gray-500 min-w-[140px]'>
                                            {texts.penAndPaper}
                                        </th>
                                        <th className='text-start py-6 px-4 text-base font-bold text-gray-500 min-w-[140px]'>
                                            {texts.otherApps}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonDataCurrent.map((row, index) => (
                                        <tr
                                            key={index}
                                            className={`border-t border-green-100/50 ${index % 2 === 0 ? 'bg-white/50' : 'bg-green-50/30'} hover:bg-emerald-50/50 transition-colors duration-300`}
                                            style={{
                                                opacity: 0,
                                                animation: `fadeIn 0.5s ease-out ${0.5 + index * 0.1}s forwards`
                                            }}
                                        >
                                            <td className='py-5 px-6 text-base font-semibold text-gray-800'>
                                                {row.feature}
                                            </td>
                                            <td className='py-5 px-4'>
                                                <div className='flex items-center justify-start gap-2.5'>
                                                    <StatusIcon status={row.halkhata.status} />
                                                    <span className='text-sm font-medium text-gray-700'>{row.halkhata.text}</span>
                                                </div>
                                            </td>
                                            <td className='py-5 px-4'>
                                                <div className='flex items-center justify-start gap-2.5'>
                                                    <StatusIcon status={row.paper.status} />
                                                    <span className='text-sm text-gray-500'>{row.paper.text}</span>
                                                </div>
                                            </td>
                                            <td className='py-5 px-4'>
                                                <div className='flex items-center justify-start gap-2.5'>
                                                    <StatusIcon status={row.others.status} />
                                                    <span className='text-sm text-gray-500'>{row.others.text}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}

export default Compare
