import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { BUTTON_KEYS, DEFAULT_DOWNLOAD_URL } from '../lib/downloads';

const SettingsContext = createContext();

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within SettingsProvider');
    }
    return context;
};

export const SettingsProvider = ({ children }) => {
    const [downloadUrl, setDownloadUrl] = useState(DEFAULT_DOWNLOAD_URL);
    const [loading, setLoading] = useState(false);
    const hasFetched = useRef(false);

    const fetchDownloadUrl = async () => {
        // Prevent multiple fetches
        if (hasFetched.current) return;
        hasFetched.current = true;
        setLoading(true);

        try {
            const response = await fetch(`/api/downloads/${BUTTON_KEYS.HEADER_DOWNLOAD}`, {
                cache: 'no-store',
            });
            const result = await response.json();

            if (result?.data?.status === 'active' && result.data.file_url) {
                setDownloadUrl(result.data.file_url);
            }
        } catch (err) {
            console.error('Error fetching download URL:', err);
            // Keep default URL on error
        } finally {
            setLoading(false);
        }
    };

    // Only fetch once on mount
    useEffect(() => {
        fetchDownloadUrl();
    }, []);

    return (
        <SettingsContext.Provider value={{ downloadUrl, loading, refetch: fetchDownloadUrl }}>
            {children}
        </SettingsContext.Provider>
    );
};
