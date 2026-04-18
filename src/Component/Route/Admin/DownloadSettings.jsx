import React, { useState, useEffect } from 'react';
import { FiDownload, FiLink, FiSave, FiLoader, FiCheck, FiRefreshCw, FiExternalLink } from 'react-icons/fi';
import { useLanguage } from '../../../context/LanguageContext';
import { FadeIn } from '../../Animated/AnimatedWrapper';
import { DEFAULT_DOWNLOAD_URL } from '../../../lib/downloads';

const DownloadSettings = () => {
    const { language } = useLanguage();
    const [downloadUrl, setDownloadUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [saveMessage, setSaveMessage] = useState('');

    const texts = {
        title: language === 'bangla' ? 'ডাউনলোড লিংক সেটিংস' : 'Download Link Settings',
        subtitle: language === 'bangla' ? 'একটি লিংক দিন যা সব ডাউনলোড বাটন কন্ট্রোল করবে' : 'One link controls all download buttons',
        refresh: language === 'bangla' ? 'রিফ্রেশ' : 'Refresh',
        currentUrl: language === 'bangla' ? 'বর্তমান ডাউনলোড লিংক' : 'Current Download Link',
        enterUrl: language === 'bangla' ? 'আপনার APK ডাউনলোড লিংক পেস্ট করুন' : 'Paste your APK download link',
        save: language === 'bangla' ? 'সংরক্ষণ করুন' : 'Save',
        saved: language === 'bangla' ? 'সংরক্ষিত!' : 'Saved!',
        saving: language === 'bangla' ? 'সংরক্ষণ হচ্ছে...' : 'Saving...',
        testDownload: language === 'bangla' ? 'ডাউনলোড টেস্ট করুন' : 'Test Download',
        copyLink: language === 'bangla' ? 'লিংক কপি করুন' : 'Copy Link',
        copied: language === 'bangla' ? 'কপি হয়েছে!' : 'Copied!',
        error: language === 'bangla' ? 'সমস্যা হয়েছে' : 'Error',
        noLinkSet: language === 'bangla' ? 'লিংক সেট করা নেই' : 'No link set',
        infoTitle: language === 'bangla' ? 'কিভাবে কাজ করে:' : 'How it works:',
        info1: language === 'bangla' ? 'এই লিংকটি সব ডাউনলোড বাটনে ব্যবহৃত হবে' : 'This link will be used for all download buttons',
        info2: language === 'bangla' ? 'লিংক পরিবর্তন করলে সব বাটনে আপডেট হবে' : 'Changing link updates all buttons instantly',
        info3: language === 'bangla' ? 'হোম ব্যানার, হেডার, ফুটার - সবখানে একই লিংক' : 'Same link for Home Banner, Header, Footer - everywhere'
    };

    // Fetch current download URL
    const fetchDownloadUrl = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/download-url');
            const result = await response.json();
            if (result.data?.file_url) {
                setDownloadUrl(result.data.file_url);
            } else {
                setDownloadUrl(DEFAULT_DOWNLOAD_URL);
            }
        } catch (err) {
            console.error('Error fetching download URL:', err);
            setDownloadUrl(DEFAULT_DOWNLOAD_URL);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDownloadUrl();
    }, []);

    // Save download URL
    const handleSave = async () => {
        setSaving(true);
        setSaveMessage('');

        try {
            const response = await fetch('/api/download-url', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ file_url: downloadUrl })
            });

            const result = await response.json();

            if (result.data) {
                setSaveMessage('success');
                // Refresh after 1.5 seconds
                setTimeout(() => setSaveMessage(''), 1500);
            } else {
                setSaveMessage('error');
            }
        } catch (err) {
            console.error('Error saving download URL:', err);
            setSaveMessage('error');
        } finally {
            setSaving(false);
        }
    };

    // Test download
    const handleTestDownload = () => {
        if (downloadUrl && downloadUrl !== '#') {
            window.open(downloadUrl, '_blank');
        }
    };

    // Copy link to clipboard
    const handleCopyLink = async () => {
        if (downloadUrl) {
            await navigator.clipboard.writeText(downloadUrl);
            setSaveMessage('copied');
            setTimeout(() => setSaveMessage(''), 2000);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <FadeIn>
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                            <FiDownload className="text-white text-2xl" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">{texts.title}</h2>
                            <p className="text-sm text-gray-500">{texts.subtitle}</p>
                        </div>
                    </div>
                    <button
                        onClick={fetchDownloadUrl}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                        disabled={loading}
                    >
                        <FiRefreshCw className={loading ? 'animate-spin' : ''} />
                        {texts.refresh}
                    </button>
                </div>
            </FadeIn>

            {/* Main Card */}
            <FadeIn delay={100}>
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl shadow-gray-200/50 border border-white/50">
                    {/* Current URL Display */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                            {texts.currentUrl}
                        </label>
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 break-all">
                            {downloadUrl ? (
                                <div className="flex items-center justify-between gap-4">
                                    <span className="text-emerald-600 text-sm">{downloadUrl}</span>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={handleTestDownload}
                                            className="p-2 bg-emerald-100 text-emerald-600 hover:bg-emerald-200 rounded-lg transition-colors"
                                            title={texts.testDownload}
                                        >
                                            <FiExternalLink />
                                        </button>
                                        <button
                                            onClick={handleCopyLink}
                                            className="p-2 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-lg transition-colors"
                                            title={texts.copyLink}
                                        >
                                            <FiLink />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <span className="text-gray-400">{texts.noLinkSet}</span>
                            )}
                        </div>
                    </div>

                    {/* Input Field */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            <FiLink className="inline mr-2" />
                            {texts.enterUrl}
                        </label>
                        <input
                            type="url"
                            value={downloadUrl}
                            onChange={(e) => setDownloadUrl(e.target.value)}
                            placeholder="https://drive.google.com/file/... or https://dl.dropboxusercontent.com/..."
                            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-gray-800"
                        />
                    </div>

                    {/* Save Button */}
                    <div className="flex gap-3">
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-emerald-500/30"
                        >
                            {saving ? (
                                <>
                                    <FiLoader className="animate-spin" />
                                    {texts.saving}
                                </>
                            ) : saveMessage === 'success' ? (
                                <>
                                    <FiCheck />
                                    {texts.saved}
                                </>
                            ) : saveMessage === 'copied' ? (
                                <>
                                    <FiCheck />
                                    {texts.copied}
                                </>
                            ) : saveMessage === 'error' ? (
                                <>
                                    {texts.error}
                                </>
                            ) : (
                                <>
                                    <FiSave />
                                    {texts.save}
                                </>
                            )}
                        </button>
                        <button
                            onClick={handleTestDownload}
                            className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold rounded-xl transition-colors"
                            disabled={!downloadUrl || downloadUrl === '#'}
                        >
                            <FiExternalLink />
                            {texts.testDownload}
                        </button>
                    </div>
                </div>
            </FadeIn>

            {/* Info Box */}
            <FadeIn delay={200}>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100/50">
                    <h3 className="font-semibold text-emerald-800 mb-3 flex items-center gap-2">
                        <FiDownload />
                        {texts.infoTitle}
                    </h3>
                    <ul className="text-sm text-emerald-700 space-y-2">
                        <li>✓ {texts.info1}</li>
                        <li>✓ {texts.info2}</li>
                        <li>✓ {texts.info3}</li>
                    </ul>
                </div>
            </FadeIn>

            {/* Preview Section */}
            <FadeIn delay={300}>
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50">
                    <h3 className="font-semibold text-gray-800 mb-4">
                        {language === 'bangla' ? 'প্রিভিউ' : 'Preview'}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {['Home Banner', 'Header', 'Footer', 'Hero Section'].map((location) => (
                            <div key={location} className="flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-lg border border-emerald-100">
                                <FiDownload className="text-emerald-600" />
                                <span className="text-sm text-gray-700">{location}</span>
                                <span className="text-xs text-emerald-600 font-medium">← {texts.currentUrl}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </div>
    );
};

export default DownloadSettings;
