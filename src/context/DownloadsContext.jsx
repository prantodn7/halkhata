import React, { createContext, useContext } from 'react';
import { DEFAULT_DOWNLOAD_URL } from '../lib/downloads';

export { BUTTON_KEYS, DEFAULT_DOWNLOAD_URL } from '../lib/downloads';

const DownloadsContext = createContext();

export const useDownloads = () => {
    const context = useContext(DownloadsContext);
    // Always return a valid context, even if provider is missing
    if (!context) {
        return {
            downloadUrl: DEFAULT_DOWNLOAD_URL,
            getDownloadUrl: () => DEFAULT_DOWNLOAD_URL,
            isButtonActive: () => true,
            loading: false,
        };
    }
    return context;
};

export const DownloadsProvider = ({ children }) => {
    // Simple context with hardcoded URL - no API calls needed
    const value = {
        downloadUrl: DEFAULT_DOWNLOAD_URL,
        getDownloadUrl: () => DEFAULT_DOWNLOAD_URL,
        isButtonActive: () => true,
        loading: false,
    };

    return (
        <DownloadsContext.Provider value={value}>
            {children}
        </DownloadsContext.Provider>
    );
};

export default DownloadsContext;
