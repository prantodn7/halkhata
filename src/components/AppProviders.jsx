'use client';

import { LanguageProvider } from '@/src/context/LanguageContext';
import { SettingsProvider } from '@/src/context/SettingsContext';
import { DownloadsProvider } from '@/src/context/DownloadsContext';

export default function AppProviders({ children }) {
  return (
    <LanguageProvider>
      <SettingsProvider>
        <DownloadsProvider>{children}</DownloadsProvider>
      </SettingsProvider>
    </LanguageProvider>
  );
}
