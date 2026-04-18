import './globals.css';
import AppProviders from '@/src/components/AppProviders';

export const metadata = {
  title: {
    default: 'Halkhata',
    template: '%s | Halkhata',
  },
  description: 'Halkhata business management platform for Bangla-speaking businesses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
