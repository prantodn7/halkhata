'use client';

import Navber from '@/src/Component/Navber/Navber';
import Footer from '@/src/Component/Home/Footer';

export default function MarketingShell({ children }) {
  return (
    <div>
      <Navber />
      {children}
      <Footer />
    </div>
  );
}
