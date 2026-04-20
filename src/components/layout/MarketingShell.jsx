'use client';

import Navber from '@/src/Component/Navber/Navber';
import Footer from '@/src/Component/Home/Footer';
import { SettingsProvider } from '@/src/context/SettingsContext';

export default function MarketingShell({ children }) {
  return (
    <SettingsProvider>
      <div>
        <Navber />
        {children}
        <Footer />
      </div>
    </SettingsProvider>
  );
}
