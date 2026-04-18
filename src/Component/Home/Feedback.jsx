import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { HiArrowRight, HiEmojiHappy } from 'react-icons/hi';
import { FadeIn } from '../Animated/AnimatedWrapper';

const testimonials = [
    {
        id: 1,
        name: 'Rahim Uddin',
        business: 'Pharmacy Owner',
        location: 'Dhaka',
        rating: 5,
        text: 'Halkhata has completely transformed how I manage my pharmacy. I can now track all my medicines, customer dues, and daily sales in one place. Highly recommended!',
        avatar: 'R'
    },
    {
        id: 2,
        name: 'Fatima Begum',
        business: 'Grocery Store',
        location: 'Chittagong',
        rating: 5,
        text: 'The best accounting app I have ever used. It is so simple and easy to understand. Even my staff can use it without any training. Thank you Halkhata!',
        avatar: 'F'
    },
    {
        id: 3,
        name: 'Karim Hossain',
        business: 'Electronics Shop',
        location: 'Sylhet',
        rating: 5,
        text: 'I was struggling with my accounts for years. Halkhata solved all my problems. The reports are amazing and help me make better business decisions.',
        avatar: 'K'
    }
];

const StarRating = ({ rating }) => {
    return (
        <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
                <FaStar key={i} className="text-amber-400" />
            ))}
        </div>
    );
};

const Feedback = () => {
    return (
        <section className='relative bg-gradient-to-b from-emerald-50 via-white to-slate-50 overflow-hidden'>
            {/* Background decorations */}
            <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gradient-to-br from-emerald-100/40 to-teal-100/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-green-100/50 to-emerald-100/30 rounded-full blur-3xl"></div>

            {/* Floating shapes */}
            <div className="absolute top-40 left-20 w-14 h-14 bg-emerald-200/30 rounded-2xl rotate-12 animate-float"></div>
            <div className="absolute bottom-60 right-16 w-10 h-10 bg-teal-200/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

            <div className='relative max-w-[1380px] mx-auto px-5 md:px-10 lg:px-15 py-20 lg:py-28'>
                {/* Header */}
                <FadeIn>
                    <div className='text-center mb-16'>
                        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-emerald-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm border border-green-100 transition-smooth hover:bg-emerald-50">
                            <HiEmojiHappy className="text-emerald-500" />
                            Customer Love
                        </div>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5'>
                            What our users
                            <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                say about us
                            </span>
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
                            Join thousands of happy business owners who trust Halkhata for their daily business management
                        </p>
                    </div>
                </FadeIn>

                {/* Testimonials Grid */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                    {testimonials.map((item, index) => (
                        <div
                            key={item.id}
                            className='bg-white rounded-3xl p-7 shadow-lg shadow-green-900/5 border border-green-100/50 transition-smooth hover:shadow-xl hover:shadow-green-900/10 hover:-translate-y-1'
                            style={{
                                opacity: 0,
                                transform: 'translateY(30px)',
                                animation: `fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + index * 0.15}s forwards`
                            }}
                        >
                            {/* Quote icon */}
                            <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-5">
                                <FaQuoteLeft className="text-emerald-600 text-xl" />
                            </div>

                            {/* Rating */}
                            <div className="mb-4">
                                <StarRating rating={item.rating} />
                            </div>

                            {/* Text */}
                            <p className='text-gray-700 leading-relaxed mb-6'>
                                "{item.text}"
                            </p>

                            {/* Author */}
                            <div className='flex items-center gap-4 pt-5 border-t border-gray-100'>
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                                    {item.avatar}
                                </div>
                                <div>
                                    <h4 className='font-bold text-gray-900'>{item.name}</h4>
                                    <p className='text-sm text-gray-500'>{item.business}, {item.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feedback;
