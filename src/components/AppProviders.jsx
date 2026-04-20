'use client';

import { LanguageProvider } from '@/src/context/LanguageContext';

export default function AppProviders({ children }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
