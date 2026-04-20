import React, { useEffect, useState } from 'react';
import { FiDownload, FiLink, FiSave, FiLoader, FiCheck, FiEdit2, FiEye, FiEyeOff, FiRefreshCw } from 'react-icons/fi';
import { useDownloads, BUTTON_KEYS } from '../../../context/DownloadsContext';
import { useLanguage } from '../../../context/LanguageContext';
import { FadeIn } from '../../Animated/AnimatedWrapper';

const DownloadsManager = () => {
    const { language } = useLanguage();
    const { refreshDownloads } = useDownloads();
    const [buttons, setButtons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingKey, setEditingKey] = useState(null);
    const [editForm, setEditForm] = useState({ file_url: '', status: 'active' });
    const [saving, setSaving] = useState(false);
    const [saveMessage, setSaveMessage] = useState('');

    const texts = {
        title: language === 'bangla' ? 'ডাউনলোড বাটন ব্যবস্থাপনা' : 'Download Button Management',
        subtitle: language === 'bangla' ? 'সকল ডাউনলোড বাটনের লিংক এবং স্ট্যাটাস পরিবর্তন করুন' : 'Manage all download button links and status',
        refresh: language === 'bangla' ? 'রিফ্রেশ' : 'Refresh',
        buttonKey: language === 'bangla' ? 'বাটন কী' : 'Button Key',
        fileUrl: language === 'bangla' ? 'ফাইল লিংক' : 'File URL',
        status: language === 'bangla' ? 'স্ট্যাটাস' : 'Status',
        active: language === 'bangla' ? 'সক্রিয়' : 'Active',
        inactive: language === 'bangla' ? 'নিষ্ক্রিয়' : 'Inactive',
        actions: language === 'bangla' ? 'পদক্ষেপ' : 'Actions',
        edit: language === 'bangla' ? 'সম্পাদনা' : 'Edit',
        save: language === 'bangla' ? 'সংরক্ষণ করুন' : 'Save',
        cancel: language === 'bangla' ? 'বাতিল' : 'Cancel',
        saved: language === 'bangla' ? 'সংরক্ষিত!' : 'Saved!',
        error: language === 'bangla' ? 'সমস্যা হয়েছে' : 'Error',
        saving: language === 'bangla' ? 'সংরক্ষণ হচ্ছে...' : 'Saving...',
        enterUrl: language === 'bangla' ? 'ডাউনলোড লিংক দিন' : 'Enter download URL',
        noButtons: language === 'bangla' ? 'কোন বাটন পাওয়া যায়নি' : 'No buttons found',
        buttonNames: {
            home_banner_download: language === 'bangla' ? 'হোম ব্যানার ডাউনলোড' : 'Home Banner Download',
            home_hero_download: language === 'bangla' ? 'হোম হিরো ডাউনলোড' : 'Home Hero Download',
            header_download: language === 'bangla' ? 'হেডার ডাউনলোড' : 'Header Download',
            footer_download: language === 'bangla' ? 'ফুটার ডাউনলোড' : 'Footer Download',
        }
    };

    const fetchButtons = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/downloads');
            const result = await response.json();

            if (result.data) {
                // Ensure all BUTTON_KEYS exist in the list
                const allButtons = result.data;
                const existingKeys = new Set(allButtons.map(b => b.button_key));

                // Add any missing keys with default values
                Object.values(BUTTON_KEYS).forEach(key => {
                    if (!existingKeys.has(key)) {
                        allButtons.push({
                            id: `new-${key}`,
                            button_key: key,
                            file_url: '',
                            status: 'active'
                        });
                    }
                });

                setButtons(allButtons);
            }
        } catch (err) {
            console.error('Error fetching buttons:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchButtons();
    }, []);

    const handleEdit = (button) => {
        setEditingKey(button.button_key);
        setEditForm({
            file_url: button.file_url || '',
            status: button.status || 'active'
        });
    };

    const handleCancel = () => {
        setEditingKey(null);
        setEditForm({ file_url: '', status: 'active' });
        setSaveMessage('');
    };

    const handleSave = async (buttonKey) => {
        setSaving(true);
        setSaveMessage('');

        try {
            const response = await fetch(`/api/downloads/${buttonKey}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editForm)
            });

            const result = await response.json();

            if (result.data) {
                // Update local state
                setButtons(prev => prev.map(btn =>
                    btn.button_key === buttonKey
                        ? { ...btn, ...result.data }
                        : btn
                ));
                setSaveMessage('success');
                await refreshDownloads();
                setTimeout(() => {
                    setSaveMessage('');
                    setEditingKey(null);
                }, 1500);
            } else {
                setSaveMessage('error');
            }
        } catch (err) {
            console.error('Error saving button:', err);
            setSaveMessage('error');
        } finally {
            setSaving(false);
        }
    };

    const toggleStatus = async (button) => {
        const newStatus = button.status === 'active' ? 'inactive' : 'active';

        try {
            const response = await fetch(`/api/downloads/${button.button_key}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    file_url: button.file_url || '',
                    status: newStatus
                })
            });

            const result = await response.json();

            if (result.data) {
                setButtons(prev => prev.map(btn =>
                    btn.button_key === button.button_key
                        ? { ...btn, ...result.data }
                        : btn
                ));
                await refreshDownloads();
            }
        } catch (err) {
            console.error('Error toggling status:', err);
        }
    };

    const getButtonDisplayName = (key) => {
        return texts.buttonNames[key] || key;
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <FadeIn>
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center">
                            <FiDownload className="text-emerald-600 text-2xl" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">{texts.title}</h2>
                            <p className="text-sm text-gray-500">{texts.subtitle}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => { fetchButtons(); refreshDownloads(); }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                        disabled={loading}
                    >
                        <FiRefreshCw className={loading ? 'animate-spin' : ''} />
                        {texts.refresh}
                    </button>
                </div>
            </FadeIn>

            {/* Buttons List */}
            <FadeIn delay={100}>
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl shadow-gray-200/50 border border-white/50 overflow-hidden">
                    {loading ? (
                        <div className="p-12 text-center">
                            <div className="animate-spin rounded-full h-10 w-10 border-4 border-emerald-500 border-t-transparent mx-auto"></div>
                        </div>
                    ) : buttons.length === 0 ? (
                        <div className="p-12 text-center text-gray-500">
                            {texts.noButtons}
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-100">
                            {buttons.map((button, index) => (
                                <FadeIn key={button.button_key} delay={index * 50}>
                                    <div className={`p-5 ${editingKey === button.button_key ? 'bg-emerald-50/50' : ''}`}>
                                        {editingKey === button.button_key ? (
                                            // Edit Mode
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <span className="font-medium text-gray-700">
                                                        {getButtonDisplayName(button.button_key)}
                                                    </span>
                                                    <span className="text-xs text-gray-400 font-mono">{button.button_key}</span>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-600 mb-2">
                                                        <FiLink className="inline mr-2" />
                                                        {texts.fileUrl}
                                                    </label>
                                                    <input
                                                        type="url"
                                                        value={editForm.file_url}
                                                        onChange={(e) => setEditForm({ ...editForm, file_url: e.target.value })}
                                                        placeholder={texts.enterUrl}
                                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium text-gray-600 mb-2">
                                                        {texts.status}
                                                    </label>
                                                    <div className="flex gap-3">
                                                        <button
                                                            onClick={() => setEditForm({ ...editForm, status: 'active' })}
                                                            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                                                                editForm.status === 'active'
                                                                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                                                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                            }`}
                                                        >
                                                            <FiEye className="inline mr-2" />
                                                            {texts.active}
                                                        </button>
                                                        <button
                                                            onClick={() => setEditForm({ ...editForm, status: 'inactive' })}
                                                            className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                                                                editForm.status === 'inactive'
                                                                    ? 'bg-gray-500 text-white shadow-lg shadow-gray-500/30'
                                                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                            }`}
                                                        >
                                                            <FiEyeOff className="inline mr-2" />
                                                            {texts.inactive}
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex gap-3">
                                                    <button
                                                        onClick={() => handleSave(button.button_key)}
                                                        disabled={saving}
                                                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-emerald-500/30"
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
                                                        ) : (
                                                            <>
                                                                <FiSave />
                                                                {texts.save}
                                                            </>
                                                        )}
                                                    </button>
                                                    <button
                                                        onClick={handleCancel}
                                                        disabled={saving}
                                                        className="py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors"
                                                    >
                                                        {texts.cancel}
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            // View Mode
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="font-semibold text-gray-800">
                                                            {getButtonDisplayName(button.button_key)}
                                                        </span>
                                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                            button.status === 'active'
                                                                ? 'bg-emerald-100 text-emerald-700'
                                                                : 'bg-gray-100 text-gray-500'
                                                        }`}>
                                                            {button.status === 'active' ? texts.active : texts.inactive}
                                                        </span>
                                                    </div>
                                                    <p className={`text-sm truncate ${button.file_url ? 'text-emerald-600' : 'text-gray-400'}`}>
                                                        {button.file_url || texts.enterUrl}
                                                    </p>
                                                    <p className="text-xs text-gray-400 mt-1 font-mono">{button.button_key}</p>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => toggleStatus(button)}
                                                        className={`p-3 rounded-xl transition-all ${
                                                            button.status === 'active'
                                                                ? 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
                                                                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                                        }`}
                                                        title={button.status === 'active' ? texts.inactive : texts.active}
                                                    >
                                                        {button.status === 'active' ? <FiEye /> : <FiEyeOff />}
                                                    </button>
                                                    <button
                                                        onClick={() => handleEdit(button)}
                                                        className="p-3 bg-blue-100 text-blue-600 hover:bg-blue-200 rounded-xl transition-all"
                                                        title={texts.edit}
                                                    >
                                                        <FiEdit2 />
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    )}
                </div>
            </FadeIn>

            {/* Info Box */}
            <FadeIn delay={300}>
                <div className="bg-blue-50/80 backdrop-blur-xl rounded-2xl p-5 border border-blue-100/50">
                    <h3 className="font-semibold text-blue-800 mb-2">
                        {language === 'bangla' ? 'কিভাবে কাজ করে:' : 'How it works:'}
                    </h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                        <li>• {language === 'bangla' ? 'স্ট্যাটাস "Active" হলে বাটন কাজ করবে' : 'When status is Active, button will work'}</li>
                        <li>• {language === 'bangla' ? 'স্ট্যাটাস "Inactive" হলে বাটন বন্ধ থাকবে' : 'When status is Inactive, button will be disabled'}</li>
                        <li>• {language === 'bangla' ? 'ফাইল লিংক পরিবর্তন করলে সব বাটনে আপডেট হবে' : 'Changing file URL updates all buttons immediately'}</li>
                    </ul>
                </div>
            </FadeIn>
        </div>
    );
};

export default DownloadsManager;
