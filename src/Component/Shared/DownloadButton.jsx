import React from 'react';
import { useDownloads } from '../../context/DownloadsContext';

/**
 * DownloadButton Wrapper Component
 *
 * This component wraps existing download buttons with the download URL.
 * Always enables download - no API calls needed.
 *
 * @param {string} buttonKey - Unique identifier for this button (defined in BUTTON_KEYS)
 * @param {ReactNode} children - The original button/link element
 */
const DownloadButton = ({ buttonKey, children }) => {
    const { getDownloadUrl } = useDownloads();
    const child = React.Children.only(children);

    const downloadUrl = getDownloadUrl(buttonKey);

    // Always enable download with the URL
    return React.cloneElement(child, {
        href: downloadUrl,
        download: 'app-release.apk', // Suggested filename for automatic download
        target: '_blank', // Open in new tab as fallback
        rel: 'noopener noreferrer', // Security for external links
    });
};

export default DownloadButton;
